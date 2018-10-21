import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyled from './HeaderStyled';

const Header = ({ name }) => (
  <div className="Header">
    <HeaderStyled>{`Sport Store. ${name}`}</HeaderStyled>
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
