import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from 'components/controls';
import ButtonPlusMinus from './ButtonPlusMinus';

const displayName = 'Counter';

const propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  increaseQuantityHandler: PropTypes.func.isRequired,
};

function Counter({ product, increaseQuantityHandler }) {
  return (
    <div>
      <ButtonPlusMinus text="+" value="+" onClick={() => increaseQuantityHandler(product)} />
      <InputNumber />
      <ButtonPlusMinus text="-" value="-" />
    </div>
  );
}

Counter.displayName = displayName;
Counter.propTypes = propTypes;

export default Counter;
