import React, { PropTypes } from 'react';
import style from './style.scss';
import { getFromLocalStorage } from '../../utils/localStorage';
import { Post, Loading } from '../../components';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.getColumns(window.innerWidth),
    };

    window.onresize = () => {
      this.setState({
        columns: this.getColumns(window.innerWidth),
      });
    };
  }

  componentDidMount = () => {
    this.onReload();
  };

  componentWillUnmount = () => {
    this.props.dashboardClear();
  };

  onReload = () => {
    this.props.dashboardPending({ groups: getFromLocalStorage('groups') });
  };

  getColumns = (width) => {
    if (width > 1400) {
      return [0, 1, 2, 3];
    } else if (width > 1280 && width < 1400) {
      return [0, 1, 2];
    } else if (width > 800 && width < 1280) {
      return [0, 1];
    } else if (width <= 674) {
      return [0];
    }
    return [0, 1];
  };

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <div
        className={style.dashboard}
      >
        {this.state.columns.map((position) => (
          <div
            className={style.column}
          >
            {this.props.dashboardGroupsReducer.posts &&
              this.props.dashboardGroupsReducer.posts.map((item, index) =>
              index % this.state.columns.length === position &&
                <Post
                  key={index}
                  item={item}
                />
            )}
          </div>
        ))}
        <Loading
          opacity={0.4}
          loading={this.props.dashboardGroupsReducer.loading}
          error={this.props.dashboardGroupsReducer.error}
          onReload={this.onReload}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboardGroupsReducer: PropTypes.object,
  dashboardPending: PropTypes.func.isRequired,
  dashboardClear: PropTypes.func.isRequired,
};

export default Dashboard;
