import React from 'react';
import { FooterText } from 'components/controls';

const Footer = () => (
  <div className="Footer" style={{ padding: '0.5%' }}>
    <FooterText>© 1996-2018, SportStore.com, Inc. or its affiliates</FooterText>
  </div>
);

Footer.displayName = 'Footer';

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
