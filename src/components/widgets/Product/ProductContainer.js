import { compose, setDisplayName, withHandlers } from 'recompose';
import Product from './Product';

const enhance = compose(
  setDisplayName('ProductContainer'),
  withHandlers({
    selectHandler: ({ name, price, selectProductsHandler }) => () => {
      selectProductsHandler(name, price);
    },
  }),
);

export default enhance(Product);
