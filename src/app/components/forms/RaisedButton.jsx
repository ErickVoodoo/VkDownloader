import React, { PropTypes } from 'react';
import { RaisedButton as MUIRaisedButton } from 'material-ui';

class RaisedButton extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.label !== this.props.label;
  }

  render() {
    return (
      <MUIRaisedButton
        label={this.props.label}
        primary={this.props.primary || false}
        secondary={this.props.secondary || false}
        labelStyle={{
          fontSize: 14,
        }}
      />
    );
  }
}

RaisedButton.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default RaisedButton;
