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
      top: 0,
      left: 0,
    }}
  >
    {(!!loading || !error) && <CircularProgress
      size={size}
      color={Main.COLOR.ACCENT_DANGER}
    />}
    <span
      style={{
        marginLeft: '16px',
      }}
    >
      {title}
    </span>
    { error &&
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontSize: '16px',
            marginBottom: '16px',
          }}
        >
          {`Status: ${error.status}`} <br />
          {`Message: ${error.message}`}
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
  error: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string,
  }),
};

export default Loading;
