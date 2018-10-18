import React from 'react';
import { FooterText } from 'components/controls';

const divStyle = {
  padding: '0.5%',
};

const Footer = () => (
  <div className="Footer" style={divStyle}>
    <FooterText>© 1996-2018, SportStore.com, Inc. or its affiliates</FooterText>
  </div>
);

Footer.displayName = 'Footer';

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
