import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .1s;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.ultraUltraLight};
  color: ${(props) => props.theme.colors.dark};
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    color: ${(props) => props.theme.colors.silver};
    border: 1px solid ${(props) => props.theme.colors.silver};
  }
  &.disabled {
    color: ${(props) => props.theme.colors.brandDisabled};
    background-color: ${(props) => props.theme.colors.brandFillDisabled};
  }
`;

const Text = styled.p`
  visibility: ${(props) => (props.hidden ? 'hidden' : '')};
`;

export {
  Text, ButtonWrapper,
};
