import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, isActive, ...rest }) {
  return (
    <button type="button" {...rest}>
      {text}
    </button>
  );
}

Button.displayName = 'Button';

Button.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  text: '',
  isActive: false,
};

export default Button;
