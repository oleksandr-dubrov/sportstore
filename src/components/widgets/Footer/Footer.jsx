import React from 'react';
import { FooterText } from 'components/controls';

const divStyle = {
  padding: '0.5%',
};

const Footer = () => (
  <div className="Footer" style={divStyle}>
    <FooterText>Footer</FooterText>
  </div>
);

Footer.displayName = 'Footer';

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
