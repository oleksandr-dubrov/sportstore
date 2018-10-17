import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputText } from 'components/controls';
import { Counter } from 'components/widgets';

const displayName = 'Cart';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  increaseQuantityHandler: PropTypes.func.isRequired,
};

function Cart({ products, increaseQuantityHandler }) {
  return (
    <div style={{ display: 'inline-block' }}>
      <h3>Cart</h3>
      {products.length > 0 ? (
        <div>
          <ol>
            {products.map(product => (
              <li key={product.id}>
                {product.name}
                {' - '}
                {product.price}
                {' - '}
                <Counter product={product} increaseQuantityHandler={increaseQuantityHandler} />
              </li>
            ))}
          </ol>
          <span>Enter all contact information:</span>
          <InputText />
          <Button text="Commit" />
        </div>
      ) : (
        <div> Nothing bought. Go back </div>
      )}
    </div>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;

export default Cart;
