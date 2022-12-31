import styled from "styled-components";
import { Col as C, Row as R } from "../SignIn/styles";

export const Container = styled.div`
    grid-area: MH;    
    div {
        color:white;        
    }

    > div {        
    }

    div.MuiDataGrid-columnHeaderTitle {
        color: #337ab7;
        font-size:12pt;
    }

    div.MuiDataGrid-columnHeaders :hover {
        color:${props => props.theme.color.success};        
    }

    div.MuiDataGrid-columnHeaders {
        background-color:lightgray;        
    }

    div.MuiDataGrid-root {
        background-color: ${props => props.theme.color.tertiary};
        
        .MuiDataGrid-virtualScrollerContent {
            background-color: ${props => props.theme.color.white}
        }
        
    }

    div.MuiDataGrid-row {
        background-color: ${props => props.theme.color.white};
        .MuiDataGrid-cellContent {
            color: #337ab7;
        }
    }

    div.MuiDataGrid-footerContainer {
        background-color:lightgray;        
        p {
            color: #337ab7;     
        }
    }

`;

export const Row = styled(R)`
    
`

export const Col = styled(C)`
 #sl,#slm {  
    color:${props => props.theme.color.info};
 }
 
`