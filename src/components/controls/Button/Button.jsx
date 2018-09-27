import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Button';
const propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};
const defaultProps = {
  text: '',
  isActive: false,
};

function Button({
  text, isActive, style, ...rest
}) {
  return (
    <button
      type="button"
      {...rest}
      style={{
        ...style,
        borderStyle: isActive ? 'inset' : 'outset',
      }}
      disabled={isActive ? 'true' : undefined}
    >
      {text}
    </button>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
