import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .1s;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px double ${props => props.theme.colors.ultraUltraLight};
  color: ${props => props.theme.colors.dark};
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    color: white;
    border: 2px double ${props => props.theme.colors.ultraLight};
    letter-spacing: 1px;
  }
  &.disabled {
    color: ${props => props.theme.colors.brandDisabled};
    background-color: ${props => props.theme.colors.brandFillDisabled};
  }
`;

const Text = styled.p`
  visibility: ${props => props.hidden ? 'hidden' : ''};
`;

export {
  Text, ButtonWrapper
};