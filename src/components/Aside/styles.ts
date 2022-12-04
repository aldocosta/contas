import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    grid-area: AS;    
    background-color: ${props => props.theme.color.secondary};
    border-right:1px solid ${props => props.theme.color.gray};
    padding-left: 20px;
`;

export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.color.info};
    text-decoration:none;
    transition: opacity 3s;
    margin: 7px 0;
    display:flex;
    align-items:center;

    > svg {
        font-size:20px;
        margin-right:5px;
    }

    &:hover {
        opacity: .7;
    }
`;

