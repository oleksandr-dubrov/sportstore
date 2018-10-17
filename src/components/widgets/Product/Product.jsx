import React from 'react';
import PropTypes from 'prop-types';
import {
  Picture, ToggleButton, ProductsText, PriceText,
} from 'components/controls';

const displayName = 'Product';

const propTypes = {
  selectProductsHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const divStyle = {
  display: 'inline-block',
  border: '2px solid',
  borderColor: 'red',
  borderRadius: '80px',
};

const elementStyle = { display: 'inline' };

function Product({ name, price, selectProductsHandler }) {
  return (
    <div style={divStyle}>
      <Picture style={elementStyle} />
      <ProductsText style={elementStyle}>{name}</ProductsText>
      {' '}
      <PriceText style={elementStyle}>{price}</PriceText>
      {' '}
      <ToggleButton text="buy" otherText="bought" value="buy" onClick={() => selectProductsHandler(name, price)} />
    </div>
  );
}

Product.displayName = displayName;

Product.propTypes = propTypes;

export default Product;