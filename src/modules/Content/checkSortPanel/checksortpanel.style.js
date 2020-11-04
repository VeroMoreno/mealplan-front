import styled from 'styled-components';

const TopPanel = styled.div`
  padding: ${props => props.theme.spaces.medium};
  display: flex;
  justify-content: space-between;
  .button {
    display: flex;
    width: auto;
  }
`;

export { TopPanel };