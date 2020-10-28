import styled from 'styled-components';

const ContentStyle = styled.div`
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    max-width: 900px;
    width: 100%;
`;

export { ContentStyle };