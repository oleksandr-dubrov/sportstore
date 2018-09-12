import {
  withHandlers, setDisplayName, compose, mapProps,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import Button from '../Button';

export const enhance = compose(
  setDisplayName('AcceptButtonContainer'),
  withRouter,
  withHandlers({
    onClick: ({ to, history }) => () => {
      history.push(to);
    },
  }),
  mapProps(({ text, value, onClick }) => ({ text, value, onClick })),
);

export default enhance(Button);
