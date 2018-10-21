import React from 'react';
import PropTypes from 'prop-types';
import PriceTextStyled from './PriceTextStyled';

const displayName = 'PriceText';
const propTypes = {
  currency: PropTypes.string,
  children: PropTypes.number.isRequired,
};
const defaultProps = {
  currency: '$',
};

const PriceText = ({ currency, children }) => (
  <PriceTextStyled>{`${currency}${children}`}</PriceTextStyled>
);

PriceText.displayName = displayName;
PriceText.propTypes = propTypes;
PriceText.defaultProps = defaultProps;

export default PriceText;
