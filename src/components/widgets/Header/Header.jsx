import React from 'react';
import PropTypes from 'prop-types';
import { HeaderText } from 'components/controls';

const Header = ({ name }) => (
  <div className="Header" style={{ padding: '0.5%' }}>
    <HeaderText>{`Sport Store. ${name}`}</HeaderText>
  </div>
);

Header.displayName = 'Header';

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: '',
};

export default Header;
