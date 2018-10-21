import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

const displayName = 'Button';
const propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};
const defaultProps = {
  text: '',
  isActive: true,
};

function Button({ text, isActive, ...rest }) {
  return (
    <ButtonStyled
      type="button"
      isActive={isActive}
      disabled={isActive ? undefined : true}
      {...rest}
    >
      {text}
    </ButtonStyled>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
