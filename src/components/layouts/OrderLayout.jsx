import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Footer, Header } from 'components/widgets';
import DefaultLayoutStyled from './DefaultLayoutStyled';

const displayName = 'OrderLayout';
const propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const defaultProps = {
  name: '',
};

function OrderLayout({ name, children }) {
  return (
    <DefaultLayoutStyled>
      <Grid fluid>
        <Row>
          <Col xs>
            <Header name={name} />
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

OrderLayout.displayName = displayName;
OrderLayout.propTypes = propTypes;
OrderLayout.defaultProps = defaultProps;

export default OrderLayout;
