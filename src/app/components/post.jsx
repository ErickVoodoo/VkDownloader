import React, { PropTypes } from 'react';
import style from './styles.scss';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
      attachmentsPhotos: this.props.item.attachments ? this.props.item.attachments.map((item, index) => {
        const newItem = item;
        newItem.index = index;
        return newItem;
      }).filter((item) => item.type === 'photo' || (item.type === 'doc' && item.doc.ext === 'gif')) : null,
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
        <div dangerouslySetInnerHTML={{ __html: item.text }} />
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
      </div>
    );
  }
}

Post.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Post;

// {item.attachments && item.attachments.map((itm, index) =>
//
// )}
