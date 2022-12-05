import styled from "styled-components";


export const Container = styled.div`
       
`;

export const BoxCenter = styled.div`
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;

    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    border: 1px solid;
    border-color: ${props => props.theme.color.black};
    background-color: ${props => props.theme.color.primary};
    padding:15px;
    border-radius:5px;
`

export const Row = styled.div`
    > span {
        width : 100px;
        text-align:left;
        margin-left:15px;
        display:inline-block;
    }   

    div > Button {
        background-color: ${props => props.theme.color.success};
        color: ${props => props.theme.color.white};
        width:100%;
        margin : 2px;        
    }

    div {
        margin: 1px;
    }
    
    margin:3px;

`

export const Col = styled.div`
    float: left;
    width: 49%;
    ::after{
        content: "";
        display: table;
        clear: both;
    }
`