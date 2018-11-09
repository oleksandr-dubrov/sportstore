import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from 'components/controls';
import ButtonPlusMinus from './ButtonPlusMinus';

const displayName = 'Counter';

const propTypes = {
  quantity: PropTypes.number.isRequired,
  increaseHandler: PropTypes.func.isRequired,
  decreaseHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

function Counter({
  quantity, increaseHandler, decreaseHandler, onChangeHandler,
}) {
  return (
    <div>
      <ButtonPlusMinus text="+" value="+" onClick={increaseHandler} />
      <InputNumber value={quantity} onChange={onChangeHandler} />
      <ButtonPlusMinus text="-" value="-" onClick={decreaseHandler} />
    </div>
  );
}

Counter.displayName = displayName;
Counter.propTypes = propTypes;

export default Counter;
