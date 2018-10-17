import styled from 'styled-components';
import Button from './Button';

const ButtonPlusMinus = styled(Button)`
  border-radius: ${({ value }) => (value === '+' ? '100px 2px 2px 100px' : '2px 100px 100px 2px')};
  margin-left: 0;
  margin-right: 0;
  color: tomato;
  border-color: tomato;
`;

export default ButtonPlusMinus;
