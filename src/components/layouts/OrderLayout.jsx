import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Footer, Header } from 'components/widgets';
import OrderLayoutStyled from './OrderLayoutStyled';

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
    <OrderLayoutStyled>
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
    </OrderLayoutStyled>
  );
}

OrderLayout.displayName = displayName;
OrderLayout.propTypes = propTypes;
OrderLayout.defaultProps = defaultProps;

export default OrderLayout;
