import styled from 'styled-components';
import { device } from '../../../Device';

const MenuPanel = styled.div`
@media ${device.mobileL} {
  display:block;
  .calendar {
    &__week {
      display: flex;
      .day {
        // width: 17%;
      }
    }
  }
}
  display: grid;
  grid-template-areas: "content";
  main {
    grid-area: content;
  }
  .calendar {
    border: 1px solid ${(props) => props.theme.colors.ultraUltraLight};
    &__header {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 50px;
      align-items: center;
      text-align: center;
        > button {
          cursor: pointer;
          color: ${(props) => props.theme.colors.ultraLight};
          text-transform: uppercase;
          font-size: ${(props) => props.theme.fontSizes.small};
          font-weight: bold;
          background: none;
          border: 0;
          line-height: 3;
          transition: .1s;
          &:focus { outline: none; }
          &:hover { background: #343536; }
        }
    }
    &__week {
      display: grid;
      grid-template-columns: repeat(5,1fr);
      grid-auto-rows: minmax(100px, auto);
      text-align: center;
      .day {
        padding: 5px;
        border-right: 1px solid ${(props) => props.theme.colors.ultraUltraLight};
        border-top: 1px solid ${(props) => props.theme.colors.ultraUltraLight};
          &:last-child {
            border-right: 0;
        }
      }
    }
  }
  .clickToStart {
    padding: 50px 0 40px 0;
    font-size: 30px;
    color: #bbbfca;
  }
  .blink {
    animation-name: blinking;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    -webkit-animation-name:blinking;
    -webkit-animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }

  @-moz-keyframes blinking{
    0% { opacity: 1.0; }
    50% { opacity: 0.3; }
    100% { opacity: 1.0; }
  }

  @-webkit-keyframes blinking {
    0% { opacity: 1.0; }
    50% { opacity: 0.3; }
    100% { opacity: 1.0; }
  }

  @keyframes blinking {
    0% { opacity: 1.0; }
    50% { opacity: 0.3; }
    100% { opacity: 1.0; }
  }
`;
export { MenuPanel };
