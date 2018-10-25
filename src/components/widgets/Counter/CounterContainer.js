import { compose, setDisplayName, withHandlers } from 'recompose';
import Counter from './Counter';

const enhance = compose(
  setDisplayName('CounterContainer'),
  withHandlers({
    increaseHandler: ({ product, increaseQuantityHandler }) => () => {
      increaseQuantityHandler(product);
    },
  }),
);

export default enhance(Counter);
