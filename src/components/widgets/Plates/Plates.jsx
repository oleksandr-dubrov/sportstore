import React from 'react';
import PropTypes from 'prop-types';
import { AcceptButton } from 'components/controls';
import Plate from '../Plate';

const displayName = 'Plates';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      picture: PropTypes.string,
    }),
  ).isRequired,
  selectProductsHandler: PropTypes.func.isRequired,
};

const devStyle = {
  display: 'inline-block',
  borderColor: 'black',
  border: '1px solid #ccc',
};

function Plates({ products, selectProductsHandler }) {
  return (
    <div style={devStyle}>
      {products.map(product => (
        <Plate key={product.name} {...product} selectProductsHandler={selectProductsHandler} />
      ))}
      <AcceptButton to="/summary" text="Accept" value="acceptButton" style={{ display: 'block' }} />
    </div>
  );
}

Plates.displayName = displayName;
Plates.propTypes = propTypes;

export default Plates;
