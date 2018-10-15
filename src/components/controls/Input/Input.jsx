import React from "react";
import styled from "styled-components";

const displayName = "Input";

const InputStyled = styled.input`
  width: 2em;
  padding: 2;
  background-color: #3cbc8d;
  color: white;
`;

function Input() {
  return <InputStyled type="text" name="counter" />;
}

Input.displayName = displayName;

export default Input;
