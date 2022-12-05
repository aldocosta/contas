import React, { ButtonHTMLAttributes } from 'react';
import Buttonn from '@mui/material/Button';

import { Container }  from './styles'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({children, ...rest }) => (
    <Container {...rest}>
        {children}
    </Container>
);

export default Button;