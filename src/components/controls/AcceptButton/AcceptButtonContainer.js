import { withHandlers, setDisplayName, compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import AcceptButtonStyled from './AcceptButtonStyled';

export const enhance = compose(
  setDisplayName('AcceptButtonContainer'),
  withRouter,
  withHandlers({
    onClick: ({ to, history }) => () => {
      history.push(to);
    },
  }),
);

export default enhance(AcceptButtonStyled);
