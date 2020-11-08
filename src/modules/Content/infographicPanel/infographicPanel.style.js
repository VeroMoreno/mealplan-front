import styled from 'styled-components';

const BottomPanel = styled.div`
  padding: ${props => props.theme.spaces.small};
  .expandable {
    border-top: 1px solid white;
    display: flex;
    width: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export { BottomPanel };
