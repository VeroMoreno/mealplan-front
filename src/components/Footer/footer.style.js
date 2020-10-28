import styled from 'styled-components';

const FooterStyle = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    footer {
        p, h1 { margin: 0; }
        background-color: ${props => props.theme.colors.ultraUltraLight};
        color: ${props => props.theme.colors.ultraLight};
        padding: ${props => props.theme.spaces.small};
    }
`;

export { FooterStyle };