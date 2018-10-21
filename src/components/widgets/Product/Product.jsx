import React from 'react';
import PropTypes from 'prop-types';
import {
  Picture, ToggleButton, ProductsText, PriceText,
} from 'components/controls';
import ProductStyled from './ProductStyled';

const displayName = 'Product';

const propTypes = {
  selectProductsHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const elementStyle = { display: 'inline' };

function Product({ name, price, selectProductsHandler }) {
  return (
    <ProductStyled>
      <Picture style={elementStyle} />
      <ProductsText style={elementStyle}>{name}</ProductsText>
      {' '}
      <PriceText style={elementStyle}>{price}</PriceText>
      {' '}
      <ToggleButton text="buy" otherText="bought" value="buy" onClick={() => selectProductsHandler(name, price)} />
    </ProductStyled>
  );
}

Product.displayName = displayName;

Product.propTypes = propTypes;

export default Product;
