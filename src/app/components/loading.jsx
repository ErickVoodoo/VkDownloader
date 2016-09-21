import React, { PropTypes } from 'react';
import { CircularProgress } from 'material-ui';
import { RaisedButton } from './forms';
import { Main } from '../constants';

const Loading = ({ title, size = 0.8, opacity = 0, loading, error, onReload }) => (
  loading || error ? <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: `rgba(238, 238, 238, ${opacity})`,
      position: 'absolute',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
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
    { error &&
      <div>
        <span>
          {JSON.stringify(error)}
        </span>
        <RaisedButton onClick={onReload} label="Reload" />
      </div>
    }
  </div> :
  null
);

Loading.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  opacity: PropTypes.number,
  loading: PropTypes.bool,
  onReload: PropTypes.func,
  error: PropTypes.string,
};

export default Loading;
