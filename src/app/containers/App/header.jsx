import React from 'react';
import styles from './styles.scss';

import { RaisedButton, TextField } from '../../components/forms';

class Header extends React.Component {
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
    alert(`You searched: ${this.state.search}`);
  };

  render() {
    return (
      <div className={styles.header}>
        Headers
        <div>
          <TextField
            id="search"
            value={this.state.search}
            onChange={this.onChangeSearch}
          />
        </div>
        <RaisedButton
          primary
          label="Search"
          onClick={this.onClickSearch}
        />
      </div>
    );
  }
}

export default Header;
