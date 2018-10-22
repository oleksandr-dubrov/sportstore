import styled from 'styled-components';
import { AcceptButton } from 'components/controls';
import cartPng from './Cart-PNG-HD.png';

const CartBoxStyled = styled(AcceptButton)`
  display: inline;
  /* float: right; */
  margin-left: 10%;
  height: 2em;
  width: 4em;
  background-image: url(${cartPng});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default CartBoxStyled;
