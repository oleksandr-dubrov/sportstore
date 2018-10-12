import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const displayName = 'PriceText';
const propTypes = {
  currency: PropTypes.string,
  children: PropTypes.number.isRequired,
};
const defaultProps = {
  currency: '$',
};

const PriceTextStyled = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const PriceText = ({ currency, children }) => <PriceTextStyled>{`${currency}${children}`}</PriceTextStyled>;

PriceText.displayName = displayName;
PriceText.propTypes = propTypes;
PriceText.defaultProps = defaultProps;

export default PriceText;
