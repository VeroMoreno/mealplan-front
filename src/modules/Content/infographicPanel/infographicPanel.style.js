import styled from 'styled-components';

const BottomPanel = styled.div`
  /*Css temporal*/
  border: 1px solid white;
  /*Css temporal*/
  padding: ${(props) => props.theme.spaces.medium};

  .expandable {
    border-top: 1px solid white;
    display: flex;
    width: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export { BottomPanel };