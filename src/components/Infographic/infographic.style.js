import styled from 'styled-components';

const InfoWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.dark};
  width: 100%;
  padding: ${(props) => props.theme.spaces.small};
  &:last-child {
    border-right: 0;
  }
  p { margin-bottom: ${(props) => props.theme.spaces.small}; }
`;

export {
  InfoWrapper,
};
