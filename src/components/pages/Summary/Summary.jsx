import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Summary';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function Summary({ products }) {
  return (
    <div style={{ display: 'inline-block' }}>
      <p>Summary</p>
      {products.length > 0 ? (
        <ol>
          {products.map(product => (
            <li key={product.id}>
              {product.name}
              {' '}
-
              {product.price}
            </li>
          ))}
        </ol>
      ) : (
        <div> Nothing bought. Go back </div>
      )}
    </div>
  );
}

Summary.displayName = displayName;
Summary.propTypes = propTypes;

export default Summary;
