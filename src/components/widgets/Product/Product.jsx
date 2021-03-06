import React from 'react';
import PropTypes from 'prop-types';
import {
  Picture, ToggleButton, ProductsText, PriceText,
} from 'components/controls';
import ProductStyled from './ProductStyled';

const displayName = 'Product';

const propTypes = {
  selectHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

const elementStyle = { display: 'inline' };

function Product({
  name, price, selectHandler, isSelected,
}) {
  return (
    <ProductStyled>
      <Picture style={elementStyle} />
      <ProductsText style={elementStyle}>{name}</ProductsText>
      {' '}
      <PriceText style={elementStyle}>{price}</PriceText>
      {' '}
      <ToggleButton toggled={isSelected} text="buy" otherText="bought" value="buy" onClick={selectHandler} />
    </ProductStyled>
  );
}

Product.displayName = displayName;

Product.propTypes = propTypes;

export default Product;
