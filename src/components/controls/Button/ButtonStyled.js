import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${({ isActive }) => (isActive ? 'blueviolet' : 'gray')};
  color: ${({ isActive }) => (isActive ? 'blueviolet' : 'gray')};
  margin: 0 1em;
  padding: 0.25em 1em;
  :hover {
    color: red;
    border: 2px solid royalblue;
  }
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default ButtonStyled;
