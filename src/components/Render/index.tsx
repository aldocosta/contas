import React, { ReactNode } from "react";
import { useAuth } from "../hooks/auth";
import { Container } from "./styles";

type IRender = {
    rendered: boolean,
    children: ReactNode
}

const Render: React.FC<IRender> = ({ rendered, children }: IRender) => {

    return (

        <Container>
            {
                rendered ? children : ""
            }
        </Container >

    )
}

export default Render;