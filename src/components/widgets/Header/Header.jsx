import React from 'react';
import { HeaderText } from 'components/controls';

const divStyle = {
  padding: '0.5%',
};

const Header = () => (
  <div className="Header" style={divStyle}>
    <HeaderText>Header</HeaderText>
  </div>
);

Header.displayName = 'Header';

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
