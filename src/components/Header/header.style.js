import styled from 'styled-components';

const HeaderStyle = styled.div`
    p, h1, h2 { margin: 0; }
    background-color: ${(props) => props.theme.colors.ultraUltraLight};
    color: ${(props) => props.theme.colors.ultraLight};
    padding: ${(props) => props.theme.spaces.small};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: 'Molle', cursive;
    h2 {
        font-family: 'Montserrat',sans-serif;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 9px;
    }
`;

export { HeaderStyle };
