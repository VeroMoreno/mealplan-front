import styled from 'styled-components';

const MenuPanel = styled.div`
  display: grid;
  grid-template-areas: "content";
  main {
    grid-area: content;
  }
  .calendar {
    border: 1px solid ${props => props.theme.colors.ultraUltraLight};
    &__header {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 50px;
      align-items: center;
      text-align: center;
        > div {
          color: ${props => props.theme.colors.ultraLight};
          text-transform: uppercase;
          font-size: ${props => props.theme.fontSizes.small};
          font-weight: bold;
        }
    }
    &__week {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 100px;
      text-align: right;
      .day {
        padding: 5px;
        border-right: 1px solid ${props => props.theme.colors.ultraUltraLight};
        border-top: 1px solid ${props => props.theme.colors.ultraUltraLight};
          &:last-child {
            border-right: 0;
          }
      }
    }
  }
`;

export { MenuPanel };