import React from 'react';
import { Picture, BlockedButton } from 'components/controls';

const divStyle = {
  display: 'inline',
  borderColor: 'coral',
  border: '2px solid red',
  borderRadius: '80px',
};

function Plate(props) {
  const style = { display: 'inline' };
  return (
    <div style={divStyle}>
      <Picture style={style} />
      <span style={style}>{props.product.name}</span>
      {' '}
      <span style={style}>{`${props.product.price}`}</span>
      {' '}
      <BlockedButton text="buy" />
    </div>
  );
}

Plate.displayName = 'Plate';

export default Plate;
