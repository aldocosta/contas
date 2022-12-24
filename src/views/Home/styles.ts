import styled from "styled-components";
import { Col as C, Row as R } from "../SignIn/styles";

export const Container = styled.div`
    grid-area: MH;    
    div {
        color:white;
        
    }

    > div {
        
    }
`;

export const Row = styled(R)`
    
`

export const Col = styled(C)`
 

 #sl,#slm {  
    color:${props => props.theme.color.info};
 }
 
`