import React, { PropTypes } from 'react';
import { getFromLocalStorage } from '../../utils/localStorage';
import { GroupsPreview, Loading } from '../../components/';
import style from './style.scss';

class Favorite extends React.Component {
  componentDidMount() {
    this.props.favoritePending({ groups: getFromLocalStorage('groups') });
  }

  render() {
    return (
      <div className={style.favorite}>
        <div className={style.previews}>
          {this.props.favoriteGroupsReducer.groups &&
            this.props.favoriteGroupsReducer.groups.map((item, index) =>
              <GroupsPreview
                key={index}
                index={index}
                item={item}
              />
          )}
        </div>
        {this.props.favoriteGroupsReducer.loading && <Loading opacity={0.4} />}
      </div>
    );
  }
}

Favorite.propTypes = {
  favoriteGroupsReducer: PropTypes.object,
  favoritePending: PropTypes.func.isRequired,
};

export default Favorite;
