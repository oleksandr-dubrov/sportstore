import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';

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
      <h3>Summary</h3>
      {products.length > 0 ? (
        <div>
          <ol>
            {products.map(product => (
              <li key={product.id}>
                {product.name}
                {' - '}
                {product.price}
              </li>
            ))}
          </ol>
          <span>Enter all contact information:</span>
          <input type="text" name="contacts" />
          <Button text="Commit" />
        </div>
      ) : (
        <div> Nothing bought. Go back </div>
      )}
    </div>
  );
}

Summary.displayName = displayName;
Summary.propTypes = propTypes;

export default Summary;
