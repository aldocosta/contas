import styled from "styled-components";


export const Container = styled.div`
       
`;

export const BoxCenter = styled.div`
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;

    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    border: 10px;
    border-color: ${props => props.theme.color.info};
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