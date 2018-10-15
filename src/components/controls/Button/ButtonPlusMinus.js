import styled from "styled-components";
import Button from "./Button";

const plus = "100px 2px 2px 100px";
const minus = "2px 100px 100px 2px";

const ButtonPlusMinus = styled(Button)`
  border-radius: ${props => (props.value === "+" ? plus : minus)};
  margin-left: 0;
  margin-right: 0;
  color: tomato;
  border-color: tomato;
`;

export default ButtonPlusMinus;
