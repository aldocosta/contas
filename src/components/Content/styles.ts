import styled from "styled-components";


export const Container = styled.div`
    grid-area: CT;    
    background-color: ${props => props.theme.color.tertiary};
    padding: 25px;
    color: ${props => props.theme.color.white}
`;
