import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputText, ProductsText, PriceText } from 'components/controls';
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
  total: PropTypes.number.isRequired,
};

const VerticalGapStyle = {
  marginLeft: '2em',
};

const HorizontalGapStyle = {
  marginTop: '2px',
  marginBottom: '2px',
};

function Cart({ products, onChangeHandler, total }) {
  return (
    <OrderLayout name="Order">
      <div>
        {products.length > 0 ? (
          <div>
            <ol>
              {products.map(product => (
                <li key={product.id} style={HorizontalGapStyle}>
                  <ProductsText>{product.name}</ProductsText>
                  <span style={VerticalGapStyle}>
                    <Counter product={product} onChangeHandler={onChangeHandler} />
                  </span>
                  <span style={VerticalGapStyle}>
                    <PriceText>{product.price * product.quantity}</PriceText>
                  </span>
                </li>
              ))}
            </ol>
            <hr />
            <PriceText>{total}</PriceText>
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
