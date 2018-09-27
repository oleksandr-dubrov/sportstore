import React from 'react';
import PropTypes from 'prop-types';
import { Picture, ToggleButton } from 'components/controls';

const displayName = 'Plate';

const propTypes = {
  selectProductsHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const divStyle = {
  display: 'inline-block',
  border: '2px solid',
  borderColor: 'red',
  borderRadius: '80px',
};

const elementStyle = { display: 'inline' };

function Plate({ name, price, selectProductsHandler }) {
  return (
    <div style={divStyle}>
      <Picture style={elementStyle} />
      <span style={elementStyle}>{name}</span>
      {' '}
      <span style={elementStyle}>{`$${price}`}</span>
      {' '}
      <ToggleButton text="buy" otherText="bought" value="buy" onClick={() => selectProductsHandler(name, price)} />
    </div>
  );
}

Plate.displayName = displayName;

Plate.propTypes = propTypes;

export default Plate;
