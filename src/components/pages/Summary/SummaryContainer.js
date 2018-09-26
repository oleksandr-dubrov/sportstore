import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import Summary from './Summary';

export const enhance = compose(
  setDisplayName('SummaryContainer'),
  connect(state => ({
    products: state.get('selectedProducts').toJS(),
  })),
);

export default enhance(Summary);
