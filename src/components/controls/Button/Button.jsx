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

function BlockedButton(...rest) {
  return Button(...{ display: 'block' }, ...rest);
}

BlockedButton.defaultName = 'BlockedButton';

export default BlockedButton;
