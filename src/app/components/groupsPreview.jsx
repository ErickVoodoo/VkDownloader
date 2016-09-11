import React, { PropTypes } from 'react';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import _ from 'lodash';

import { FlatButton } from './forms';
import style from './styles.scss';
import { Main } from '../constants';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';

class GroupsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: getFromLocalStorage('groups') && getFromLocalStorage('groups').includes(this.props.item.gid),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState);
  }

  onChangeAddFavorite = () => {
    setToLocalStorage('groups',
      getFromLocalStorage('groups') ? getFromLocalStorage('groups').concat(this.props.item.gid) : [this.props.item.gid]
    );
    this.setState({
      favorite: true,
    });
  };

  onChangeRemoveFavorite = () => {
    const groups = getFromLocalStorage('groups');
    const index = groups.indexOf(this.props.item.gid);
    if (index !== -1) {
      groups.splice(index, 1);
    }
    setToLocalStorage('groups', groups);
    this.setState({
      favorite: false,
    });
  };

  render() {
    const { item } = this.props;
    return (
      <div
        className={style.groupsPreview}
      >
        <img
          role="presentation"
          src={item.photo_big}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <div className={style.favorite}>
          {!this.state.favorite ?
            <FlatButton
              onClick={this.onChangeAddFavorite}
              icon={<ToggleStarBorder color={Main.COLOR.ACCENT} />}
            /> :
            <FlatButton
              onClick={this.onChangeRemoveFavorite}
              icon={<ToggleStar color={Main.COLOR.ACCENT} />}
            />}
        </div>
        <div className={style.content}>
          <span className={style.name}>{item.name}</span>
          <a
            className={style.link}
            href={`http://vk.com/${item.screen_name}`}
            style={{
              color: Main.COLOR.SECONDARY_TEXT,
            }}
          >
            {`http://vk.com/${item.screen_name}`}
          </a>
        </div>
      </div>
    );
  }
}

GroupsPreview.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GroupsPreview;
