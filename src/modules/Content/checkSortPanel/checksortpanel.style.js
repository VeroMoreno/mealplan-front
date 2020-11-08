import styled from 'styled-components';

const TopPanel = styled.div`
  /*Css temporal*/
  border: 1px solid white;
  /*Css temporal*/
  padding: ${(props) => props.theme.spaces.medium};
  display: flex;
  justify-content: space-between;

  .button {
    display: flex;
    width: auto;
  }
`;

export { TopPanel };
