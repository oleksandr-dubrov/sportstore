import React from 'react';
import PropTypes from 'prop-types';
import InputStyled from './InputStyled';

const displayName = 'Input';
const propTypes = {
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
};

function Input({ value, onChangeHandler }) {
  return (
    <InputStyled
      type="text"
      name="counter"
      value={value}
      onChange={onChangeHandler}
    />
  );
}

Input.displayName = displayName;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
