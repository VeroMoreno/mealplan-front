import styled from 'styled-components';
import { device } from '../../../Device';

const BottomPanel = styled.div`
  padding-top: ${(props) => props.theme.spaces.small};
  .expandable {
    border-top: 1px solid ${(props) => props.theme.colors.ultraUltraLight};
    display: flex;
    width: auto;
    justify-content: space-between;
    &--menuList {
      padding-left: 27px;
      font-size: ${(props) => props.theme.fontSizes.small};
      color: ${(props) => props.theme.colors.ultraLight};
      display: flex;
      flex-wrap: wrap;
      li {
        list-style-type: decimal-leading-zero;
        text-align: left;
        width: 400px;
        box-sizing: border-box;
        padding: 10px 0 0 0;
      }
    }
    button {
      background: ${(props) => props.theme.colors.ultraLight};
      border: 0;
      color: ${(props) => props.theme.colors.gray};
      cursor: pointer;
      font-weight: bold;
    }
    @media ${device.mobileL} {
      display:block;
      margin: 20px 0;
      flex-direction: column-reverse;
      display: flex;
      button {
        width: 100%;
        padding: 10px;
        margin-top: 20px;
      }
    }
  }
`;

export { BottomPanel };
