import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import { browserHistory } from 'react-router';

import styles from './styles.scss';
import { Main } from '../../constants';

const TABS = [
  'dashboard',
  'favorite',
  'search',
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: TABS[TABS.indexOf(this.props.location.pathname.substr(1))],
    };
  }

  onChangeTabs = (value) => {
    browserHistory.push(value);
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div
        style={{
          background: Main.COLOR.PRIMARY,
        }}
        className={styles.header}
      >
        <Tabs
          value={this.state.value}
          onChange={this.onChangeTabs}
          style={{
            width: '100%',
          }}
        >
          <Tab
            label="Dashboard"
            value={TABS[0]}
            icon={<ActionDashboard />}
          />
          <Tab
            label="Favorite"
            value={TABS[1]}
            icon={<ActionFavorite />}
          />
          <Tab
            label="Search"
            value={TABS[2]}
            icon={<ActionSearch />}
          />
        </Tabs>
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
