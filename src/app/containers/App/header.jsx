import React from 'react';
import { Tabs, Tab } from 'material-ui';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { browserHistory } from 'react-router';

import styles from './styles.scss';
import { Main } from '../../constants';

const TABS = [
  'dashboard',
  'search',
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: TABS[0],
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
            label="Search"
            value={TABS[1]}
            icon={<ActionSearch />}
          />
        </Tabs>
      </div>
    );
  }
}

export default Header;
