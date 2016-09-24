import React, { PropTypes } from 'react';
import ActionFavoriteBorder from 'material-ui/svg-icons/Action/favorite-border';

import { Audio } from './vk';
import style from './styles.scss';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
      attachmentsPhotos: !!this.props.item.attachments && this.props.item.attachments.map((item, index) => {
        const newItem = item;
        newItem.index = index;
        return newItem;
      }).filter((item) => item.type === 'photo' || (item.type === 'doc' && item.doc.ext === 'gif')),
      attachmentsAudios: !!this.props.item.attachments &&
        this.props.item.attachments.filter((item) => item.type === 'audio').map((item) => item.audio),
    };
  }

  onClickLeft = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
    });
  };

  onClickRight = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
    });
  };

  getUrl = (item) => {
    switch (item.type) {
      case 'photo':
        return item.photo.src_big;

      case 'doc':
        return item.doc.ext === 'gif' ? item.doc.url : null;

      default:
        return null;
    }
  };

  render() {
    const { item } = this.props;
    return (
      <div className={style.post}>
        <div
          style={{
            padding: '4px',
          }}
          dangerouslySetInnerHTML={{ __html: item.text }}
        />
        <div
          className={style.attachment}
        >
          { this.state.attachmentsPhotos &&
            <div>
            { this.state.attachmentsPhotos[this.state.activeIndex - 1] &&
              <img
                style={{
                  width: '100%',
                }}
                role="presentation"
                src={this.getUrl(this.state.attachmentsPhotos[this.state.activeIndex - 1])}
              />
            }
            { this.state.attachmentsPhotos.length > 1 &&
              <span
                className={style.attachmentsCount}
                style={{
                  background: 'rgba(182, 182, 182, 1)',
                  opacity: 0.9,
                  margin: '0 20px',
                }}
              >
                {`${this.state.activeIndex}/${this.state.attachmentsPhotos.length}`}
              </span>
            }
            { this.state.attachmentsPhotos.length > 1 && this.state.activeIndex - 1 > 0 &&
              <div
                onClick={this.onClickLeft}
                className={style.leftScroll}
              >
                {"<"}
              </div>
            }
            { this.state.attachmentsPhotos.length > 1 &&
              this.state.activeIndex + 1 <= this.state.attachmentsPhotos.length &&
              <div
                onClick={this.onClickRight}
                className={style.rightScroll}
              >
                {">"}
              </div>
            }
            </div>
          }
        </div>
        <div>
          {this.state.attachmentsAudios.map((itm, index) =>
            <Audio
              key={index}
              audioIndex={index}
              audioList={this.state.attachmentsAudios}
              audioReducer={this.props.audioReducer}
              playAudio={this.props.playAudio}
              pauseAudio={this.props.pauseAudio}
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: '0.5px solid gray',
            opacity: 0.6,
            padding: '4px',
          }}
        >
          <ActionFavoriteBorder />
          <span
            style={{
              paddingLeft: '8px',
            }}
          >
            {!!item.likes && item.likes.count}
          </span>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  item: PropTypes.object.isRequired,
  audioReducer: PropTypes.object.isRequired,
  playAudio: PropTypes.func.isRequired,
  pauseAudio: PropTypes.func.isRequired,
};

export default Post;
