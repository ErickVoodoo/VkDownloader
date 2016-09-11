import React, { PropTypes } from 'react';
import { GroupsPreview, Loading } from '../../components';
import { RaisedButton, TextField } from '../../components/forms';
import style from './style.scss';
import { Main } from '../../constants';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onChangeSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onClickSearch = () => {
    this.props.searchPending({ search: this.state.search });
  };

  render() {
    return (
      <div className={style.search}>
        <div className={style.form}>
          <TextField
            id="search"
            wide
            underlineFocusStyle={{
              borderColor: Main.COLOR.ACCENT,
            }}
            value={this.state.search}
            onChange={this.onChangeSearch}
          />
          <RaisedButton
            primary
            label="Search"
            onClick={this.onClickSearch}
          />
        </div>
        <div className={style.previews}>
          {this.props.searchGroupsReducer.groups &&
            this.props.searchGroupsReducer.groups.slice(1).map((item, index) =>
              <GroupsPreview
                key={index}
                index={index}
                item={item}
              />
          )}
        </div>
        {this.props.searchGroupsReducer.loading && <Loading opacity={0.4} />}
      </div>
    );
  }
}

Search.propTypes = {
  searchGroupsReducer: PropTypes.object,
  searchPending: PropTypes.func.isRequired,
};

export default Search;
