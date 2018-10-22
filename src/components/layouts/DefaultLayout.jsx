import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Footer, Header, CartBox } from 'components/widgets';
import DefaultLayoutStyled from './DefaultLayoutStyled';

const displayName = 'DefaultLayout';
const propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const defaultProps = {
  name: '',
};

function DefaultLayout({ name, children }) {
  return (
    <DefaultLayoutStyled>
      <Grid fluid>
        <Row>
          <Col xs={10} sm={10} md={10} lg={10}>
            <Header name={name} />
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <CartBox />
          </Col>
        </Row>
        <Row>{children}</Row>
        <Row>
          <Footer />
        </Row>
      </Grid>
    </DefaultLayoutStyled>
  );
}

DefaultLayout.displayName = displayName;
DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;

export default DefaultLayout;
