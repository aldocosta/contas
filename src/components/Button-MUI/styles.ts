import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Container = styled(Button)`
    width: 100%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: bold;
    color: ${props => props.theme.color.white};    

    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }
`;