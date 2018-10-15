import { withHandlers, setDisplayName, compose, mapProps } from "recompose";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";

const AcceptButton = styled(Button)`
  border: 2px solid red;
`;

export const enhance = compose(
  setDisplayName("AcceptButtonContainer"),
  withRouter,
  withHandlers({
    onClick: ({ to, history }) => () => {
      history.push(to);
    }
  }),
  mapProps(({ text, value, onClick }) => ({ text, value, onClick }))
);

export default enhance(AcceptButton);
