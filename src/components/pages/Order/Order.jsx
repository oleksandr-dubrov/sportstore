import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'primereact/chart';
import { OrderLayout } from 'components/layouts';
import OrderStyled from './OrderStyled';

const displayName = 'Order';
const propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

function Order({ data }) {
  return (
    <OrderLayout name="Order">
      <OrderStyled>
        <h3>Order</h3>
        <Chart type="bar" data={data} />
      </OrderStyled>
    </OrderLayout>
  );
}

Order.displayName = displayName;
Order.propTypes = propTypes;

export default Order;
