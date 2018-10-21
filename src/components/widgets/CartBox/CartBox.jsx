import React from 'react';
import PropTypes from 'prop-types';
import CartBoxStyled from './CartBoxStyled';

const propTypes = {
  quantity: PropTypes.number,
};

const defaultProps = {
  quantity: 0,
};

function CartBox({ quantity }) {
  return <CartBoxStyled to="/cart" text={quantity.toString()} value="acceptButton" />;
}

CartBox.displayName = 'CartBox';
CartBox.propTypes = propTypes;
CartBox.defaultProps = defaultProps;

export default CartBox;
