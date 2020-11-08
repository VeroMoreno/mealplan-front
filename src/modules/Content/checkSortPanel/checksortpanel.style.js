import styled from 'styled-components';

const TopPanel = styled.div`
  padding-top: ${(props) => props.theme.spaces.small};
  padding-bottom: ${(props) => props.theme.spaces.small};
  display: flex;
  justify-content: space-between;
  .button {
    display: flex;
    width: auto;
  }
`;

export { TopPanel };
