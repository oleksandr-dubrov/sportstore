import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const displayName = 'Button';
const propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};
const defaultProps = {
  text: '',
  isActive: true,
};

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${({ isActive }) => (isActive ? 'blueviolet' : 'gray')};
  color: ${({ isActive }) => (isActive ? 'blueviolet' : 'gray')};
  margin: 0 1em;
  padding: 0.25em 1em;
  :hover {
    color: red;
    border: 2px solid royalblue;
  }
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

function Button({ text, isActive, ...rest }) {
  return (
    <ButtonStyled type="button" isActive={isActive} disabled={isActive ? undefined : true} {...rest}>
      {text}
    </ButtonStyled>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
