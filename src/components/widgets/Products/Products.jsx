import React from 'react';
import PropTypes from 'prop-types';
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
  isSelected: PropTypes.func.isRequired,
};

function Products({ fetchedProducts, selectProductsHandler, isSelected }) {
  return (
    <div>
      {fetchedProducts.length > 0 ? (
        <ProductsStyled>
          {fetchedProducts.map(fetchedProduct => (
            <Product
              isSelected={isSelected(fetchedProduct)}
              key={fetchedProduct.name}
              {...fetchedProduct}
              selectProductsHandler={selectProductsHandler}
            />
          ))}
        </ProductsStyled>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

Products.displayName = displayName;
Products.propTypes = propTypes;

export default Products;
