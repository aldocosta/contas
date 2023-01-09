import styled from "styled-components";
import AppBar from '@mui/material/AppBar';


export const Container = styled.div`
    grid-area: MH;    
    background-color: ${props => props.theme.color.primary};    
    color: ${props => props.theme.color.white}

    
    > AppBar {
        background-color:red !important;
    }
`;

export const AppBarC = styled(AppBar)`
    background-color: ${props => props.theme.color.primary} !important;    
`

