import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, AcceptButton, TextArea, ProductsText, PriceText, TotalText,
} from 'components/controls';
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
  onRemoveHandler: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

const VerticalGapStyle = {
  marginLeft: '2em',
};

const HorizontalGapStyle = {
  marginTop: '2px',
  marginBottom: '2px',
};

function Cart({
  products, onChangeHandler, total, onRemoveHandler,
}) {
  return (
    <OrderLayout name="Cart">
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
                  <span style={VerticalGapStyle}>
                    <Button text="Remove" onClick={() => onRemoveHandler(product.id)} />
                  </span>
                </li>
              ))}
            </ol>
            <hr />
            <div>
              <div style={{ display: 'inline-block', width: '90%' }}>
                <TotalText>Total</TotalText>
              </div>
              <PriceText>{total}</PriceText>
            </div>
            <TextArea />
            <AcceptButton text="Commit" to="/order" />
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
