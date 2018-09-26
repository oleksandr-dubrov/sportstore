import React from 'react';
import PropTypes from 'prop-types';
import { AcceptButton } from 'components/controls';
import Plate from '../Plate';

const displayName = 'Plates';

const propTypes = {
  selectProductsHandler: PropTypes.func.isRequired,
};

const devStyle = {
  display: 'inline-block',
  borderColor: 'black',
  border: '1px solid #ccc',
};

const products = {
  products: [
    {
      name: 'product1',
      price: 1,
      picture: null,
    },
    {
      name: 'product2',
      price: 2,
      picture: null,
    },
    {
      name: 'product3',
      price: 3,
      picture: null,
    },
  ],
};

function Plates({ selectProductsHandler }) {
  return (
    <div style={devStyle}>
      {products.products.map(product => (
        <Plate key={product.name} {...product} selectProductsHandler={selectProductsHandler} />
      ))}
      <AcceptButton to="/summary" text="Accept" value="acceptButton" style={{ display: 'block' }} />
    </div>
  );
}

Plates.displayName = displayName;
Plates.propTypes = propTypes;

export default Plates;
