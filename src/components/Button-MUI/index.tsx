import React, { ButtonHTMLAttributes } from 'react';

import { Container }  from './styles'

const ButtonMUI: React.FC<any> = ({children, ...rest }) => (
    <Container {...rest}>
        {children}
    </Container>
);

export default ButtonMUI;