import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header } from 'components/widgets';
import DefaultLayoutStyled from './DefaultLayoutStyled';

const displayName = 'OrderLayout';
const propTypes = {
  children: PropTypes.element.isRequired,
};

function OrderLayout({ children }) {
  return (
    <DefaultLayoutStyled>
      <Header name="Order" />
      {children}
      <Footer />
    </DefaultLayoutStyled>
  );
}

OrderLayout.displayName = displayName;
OrderLayout.propTypes = propTypes;

export default OrderLayout;
