import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header, CartBox } from 'components/widgets';
import DefaultLayoutStyled from './DefaultLayoutStyled';

const displayName = 'DefaultLayout';
const propTypes = {
  children: PropTypes.element.isRequired,
};

function DefaultLayout({ children }) {
  return (
    <DefaultLayoutStyled>
      <div>
        <Header name="Catalog" />
        <CartBox />
      </div>
      {children}
      <Footer />
    </DefaultLayoutStyled>
  );
}

DefaultLayout.displayName = displayName;
DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
