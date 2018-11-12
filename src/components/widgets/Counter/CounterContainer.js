import {
  compose, setDisplayName, withHandlers, withState,
} from 'recompose';
import Counter from './Counter';

const enhance = compose(
  setDisplayName('CounterContainer'),
  withState('quantity', 'setQuantity', props => props.product.quantity),
  withHandlers({
    increaseHandler: ({
      product, quantity, onChangeHandler, setQuantity,
    }) => () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChangeHandler(product, newQuantity);
    },
    decreaseHandler: ({
      product, quantity, onChangeHandler, setQuantity,
    }) => () => {
      const newQuantity = quantity - 1;
      if (newQuantity > 0) {
        setQuantity(newQuantity);
        onChangeHandler(product, newQuantity);
      }
    },
    onChangeHandler: ({ product, onChangeHandler, setQuantity }) => (quantity) => {
      setQuantity(Number(quantity));
      onChangeHandler(product, Number(quantity));
    },
  }),
);

export default enhance(Counter);
