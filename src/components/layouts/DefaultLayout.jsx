import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header } from 'components/widgets';

const displayName = 'DefaultLayout';
const propTypes = {
  children: PropTypes.element.isRequired,
};

function DefaultLayout({ children }) {
  return (
    <main style={{ paddingLeft: '50px' }}>
      <Header name={children.type.displayName} />
      {children}
      <Footer />
    </main>
  );
}

DefaultLayout.displayName = displayName;
DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
