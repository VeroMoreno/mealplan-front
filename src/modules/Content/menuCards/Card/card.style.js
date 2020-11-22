import styled from 'styled-components';
import { device } from '../../../../Device';

const CardWrapper = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.colors.gray};
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  min-height: 100px;
  transition: 0.5s;
  color: ${(props) => props.theme.colors.ultraLight};
  h2 {
    font-size: ${(props) => props.theme.fontSizes.small};
    padding-left: ${(props) => props.theme.spaces.small};
    padding-right: ${(props) => props.theme.spaces.small};
  }
  &:hover {
    background: ${(props) => props.theme.colors.grayDark};
  }
  @media ${device.mobileL} {
    h2 {
      font-size: 0.7em;
      padding: 0;
    }
  }
`;

export { CardWrapper };
