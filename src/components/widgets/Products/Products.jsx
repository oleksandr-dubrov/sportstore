import React from 'react';
import PropTypes from 'prop-types';
import { AcceptButton } from 'components/controls';
import Product from '../Product';
import ProductsStyled from './ProductsStyled';

const displayName = 'Products';

const propTypes = {
  fetchedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      picture: PropTypes.string,
    }),
  ).isRequired,
  selectProductsHandler: PropTypes.func.isRequired,
};

function Products({ fetchedProducts, selectProductsHandler }) {
  return (
    <ProductsStyled>
      {fetchedProducts.map(fetchedProduct => (
        <Product key={fetchedProduct.name} {...fetchedProduct} selectProductsHandler={selectProductsHandler} />
      ))}
      <AcceptButton to="/cart" text="Accept" value="acceptButton" style={{ display: 'block' }} />
    </ProductsStyled>
  );
}

Products.displayName = displayName;
Products.propTypes = propTypes;

export default Products;
