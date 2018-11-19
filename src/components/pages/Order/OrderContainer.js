import {
  compose, setDisplayName, mapProps, pure,
} from 'recompose';
import { connect } from 'react-redux';
import Order from './Order';

const enhance = compose(
  setDisplayName('OrderContainer'),
  connect(state => ({
    products: state.get('selectedProducts').toJS(),
  })),
  mapProps(props => ({
    ...props,
    data: {
      labels: props.products.map(p => p.name),
      datasets: [
        {
          label: 'Selected products',
          backgroundColor: '#42A5F5',
          data: props.products.map(p => p.price * p.quantity),
        },
      ],
    },
  })),
  pure,
);

export default enhance(Order);
