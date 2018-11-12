import React from 'react';
import PropTypes from 'prop-types';
// import InputStyled from './InputStyled';

const displayName = 'Input';
const propTypes = {
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  styles: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
};

function Input({ value, onChangeHandler, styles }) {
  /* The code below does this:
    return < {styles} type="text" name="counter" value={value} onChange={onChangeHandler} />;
  */
  return React.createElement(
    styles,
    {
      type: 'text',
      name: 'counter',
      value,
      onChange: onChangeHandler,
    },
    null,
  );
}

Input.displayName = displayName;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
