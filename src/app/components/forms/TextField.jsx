import React, { PropTypes } from 'react';
import { TextField as MUITextField } from 'material-ui';

class TextField extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    return (
      <MUITextField
        id={this.props.id}
        inputStyle={{
          ...this.props.inputStyle,
        }}
        underlineFocusStyle={{
          ...this.props.underlineFocusStyle,
        }}
        style={{
          width: this.props.wide ? '100%' : 220,
          marginRight: 16,
        }}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  wide: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  inputStyle: PropTypes.object,
  underlineFocusStyle: PropTypes.object,
  value: PropTypes.string,
};

export default TextField;
