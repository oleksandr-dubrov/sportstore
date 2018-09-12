import React from 'react';
import PropTypes from 'prop-types';
import { Picture, Button } from 'components/controls';

const divStyle = {
  display: 'inline',
  borderColor: 'coral',
  border: '2px solid red',
  borderRadius: '80px',
};

function Plate({ name, price, picture }) {
  const style = { display: 'inline' };
  return (
    <div style={divStyle}>
      <Picture style={style} {...picture} />
      <span style={style}>{name}</span>
      {' '}
      <span style={style}>{`${price}`}</span>
      {' '}
      <Button text="buy" />
    </div>
  );
}

Plate.displayName = 'Plate';

Plate.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string,
};

Plate.defaultProps = {
  picture: '',
};

export default Plate;
