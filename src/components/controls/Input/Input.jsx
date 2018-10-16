import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const displayName = 'Input';
const propTypes = {
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
};

const Color = '#3cbc8d';

const InputStyled = styled.input`
  width: 2em;
  padding: 0;
  border: 0;
  background-color: ${Color};
  color: white;
  border: 2px solid ${Color};
  margin: 0;
  padding: 0.25em 1em;
`;

function Input({ value, onChangeHandler }) {
  return <InputStyled type="text" name="counter" value={value} onChange={onChangeHandler} />;
}

Input.displayName = displayName;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
