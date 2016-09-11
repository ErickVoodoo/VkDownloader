import React, { PropTypes } from 'react';
import { CircularProgress } from 'material-ui';

import { Main } from '../constants';

const Loading = ({ title, size = 0.8, opacity = 0 }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: `rgba(238, 238, 238, ${opacity})`,
      position: 'absolute',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
    }}
  >
    <CircularProgress
      size={size}
      color={Main.COLOR.ACCENT_DANGER}
    />
    <span
      style={{
        marginLeft: '16px',
      }}
    >
      {title}
    </span>
  </div>
);

Loading.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  opacity: PropTypes.number,
};

export default Loading;
