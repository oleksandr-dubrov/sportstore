import React from 'react';
import PropTypes from 'prop-types';
import { Picture, Button } from 'components/controls';

const displayName = 'Plate';

const propTypes = {
  selectProductsHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const divStyle = {
  display: 'inline',
  borderColor: 'coral',
  border: '2px solid red',
  borderRadius: '80px',
};

function Plate({ name, price, selectProductsHandler }) {
  const style = { display: 'inline' };
  return (
    <div style={divStyle}>
      <Picture style={style} />
      <span style={style}>{name}</span>
      {' '}
      <span style={style}>{`$${price}`}</span>
      {' '}
      <Button text="buy" onClick={() => selectProductsHandler(name, price)} />
    </div>
  );
}

Plate.displayName = displayName;

Plate.propTypes = propTypes;

export default Plate;
