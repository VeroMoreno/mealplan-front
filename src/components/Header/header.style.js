import styled from 'styled-components';

const HeaderStyle = styled.div`
    p, h1 { margin: 0; }
    background-color: ${props => props.theme.colors.lightGreen};
    color: ${props => props.theme.colors.gray};
    padding:  ${props => props.theme.spaces.medium};
`;

export { HeaderStyle };