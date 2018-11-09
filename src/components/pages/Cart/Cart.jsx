import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputText } from 'components/controls';
import { Counter } from 'components/widgets';
import { OrderLayout } from 'components/layouts';

const displayName = 'Cart';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

function Cart({ products, onChangeHandler }) {
  return (
    <OrderLayout name="Order">
      <div>
        {products.length > 0 ? (
          <div>
            <ol>
              {products.map(product => (
                <li key={product.id}>
                  {product.name}
                  {' - '}
                  {product.price}
                  {' - '}
                  <Counter product={product} onChangeHandler={onChangeHandler} />
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
    </OrderLayout>
  );
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;

export default Cart;
