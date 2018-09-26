import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import Summary from './Summary';

export const enhance = compose(
  setDisplayName('SummaryContainer'),
  connect(state => ({
    products: state.get('products').toJS(),
  })),
);

export default enhance(Summary);
