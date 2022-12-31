import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;    

    div.MuiDataGrid-root{
        color:${props => props.theme.color.secondary} ;
        background-color:${props => props.theme.color.white} ;
    }
`;

export const BoxCenter = styled.div`
    margin: auto;        
    border: 1px solid;
    border-color: ${props => props.theme.color.black};        
    padding:1px;
    border-radius:5px;
    
    input {
        color: ${props => props.theme.color.info};    
        background-color: ${props => props.theme.color.white};    
        height:10px;
        border-radius:3px;
    }
`

export const Row = styled.div`
    
    > div.MuiFormControl-root{
        width: 100%;
    }
    
    > span {
        width : 100px;
        text-align:left;
        margin-left:15px;
        display:inline-block;
    }   

    min-height:35px;
    div > Button {
        background-color: ${props => props.theme.color.success};
        color: ${props => props.theme.color.white};        
        margin : 2px;        
        :hover{
            color: ${props => props.theme.color.black};        
        }
    }

    div {
        margin: 1px;
    }
    
    margin: 5px;

`

export const Col = styled.div`
    float: left;
    width: 49%;    

    > svg.MuiSvgIcon-root{
        cursor: pointer;
    }
`
