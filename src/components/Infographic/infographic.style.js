import styled from 'styled-components';
import { device } from '../../Device';

const InfoWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.dark};
  width: 100%;
  padding: ${(props) => props.theme.spaces.small};
  box-sizing: border-box;
  &:last-child {
    border-right: 0;
  }
  p { margin-bottom: ${(props) => props.theme.spaces.small}; }
  @media ${device.mobileL} {
    border-right: none;
  }
  `;

export {
  InfoWrapper,
};
