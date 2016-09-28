import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { FlatButton as MUIFlatButton } from 'material-ui';
import { Main } from '../../constants';

const FlatButton =
  (
    {
      children, style, label, title, containerElement, secondary,
      primary, href, onClick, onTouchTap, icon, accent, disabled,
    }
  ) => (
    <MUIFlatButton
      style={{
        ...style,
        padding: `0 ${icon || children ? 0 : 8}px`,
        minWidth: icon && children ? '95px' : '36px',
      }}
      label={label}
      title={title}
      disabled={disabled}
      labelStyle={{
        fontSize: 14,
        padding: icon || children ? '0 16px 0 8px' : '0 8px 0 8px',
        color: accent ? Main.COLOR.ACCENT : null,
      }}
      containerElement={containerElement}
      secondary={!!secondary || false}
      primary={!!primary || false}
      onClick={href ? () => browserHistory.push(href) : onClick}
      onTouchTap={onTouchTap}
      icon={icon}
    >
      {children}
    </MUIFlatButton>
);

FlatButton.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
  label: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
  containerElement: PropTypes.element,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  onClick: PropTypes.func,
  onTouchTap: PropTypes.func,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
};

export default FlatButton;
