import styled from "styled-components";


export const Container = styled.div`
    grid-area: MH;    
    div {
        color:white;
        background-color: ${props => props.theme.color.tertiary};        
    }

    > div {
        height:400px;
    }
`;
