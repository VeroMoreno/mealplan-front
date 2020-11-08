import styled from 'styled-components';

const BottomPanel = styled.div`
  padding-top: ${(props) => props.theme.spaces.small};
  .expandable {
    border-top: 1px solid ${(props) => props.theme.colors.ultraUltraLight};
    display: flex;
    width: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export { BottomPanel };
