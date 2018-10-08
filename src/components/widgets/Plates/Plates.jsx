import React from 'react';
import PropTypes from 'prop-types';
import { AcceptButton, Button } from 'components/controls';
import Plate from '../Plate';

const displayName = 'Plates';

const propTypes = {
  fetchedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      picture: PropTypes.string,
    }),
  ).isRequired,
  selectProductsHandler: PropTypes.func.isRequired,
  fetchProductsHandler: PropTypes.func.isRequired,
};

const devStyle = {
  display: 'inline-block',
  borderColor: 'black',
  border: '1px solid #ccc',
};

function Plates({ fetchedProducts, selectProductsHandler, fetchProductsHandler }) {
  return (
    <div style={devStyle}>
      <Button
        key="fetchProducts"
        text="fetch products"
        style={{ display: 'block' }}
        onClick={() => fetchProductsHandler()}
      />
      {fetchedProducts.map(fetchedProduct => (
        <Plate key={fetchedProduct.name} {...fetchedProduct} selectProductsHandler={selectProductsHandler} />
      ))}
      <AcceptButton to="/summary" text="Accept" value="acceptButton" style={{ display: 'block' }} />
    </div>
  );
}

Plates.displayName = displayName;
Plates.propTypes = propTypes;

export default Plates;
