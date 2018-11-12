import styled from 'styled-components';

const OrderLayoutStyled = styled.main`
  padding-left: ${props => props.theme.paddingLeft};
  padding-right: ${props => props.theme.paddingRight};
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

export default OrderLayoutStyled;
