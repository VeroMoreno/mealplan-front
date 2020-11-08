import styled from 'styled-components';

const HeaderStyle = styled.div`
    p, h1 { margin: 0; }
    background-color: ${(props) => props.theme.colors.ultraUltraLight};
    color: ${(props) => props.theme.colors.ultraLight};
    padding:  ${(props) => props.theme.spaces.small};
    font-size:  ${(props) => props.theme.fontSizes.medium};
`;

export { HeaderStyle };
