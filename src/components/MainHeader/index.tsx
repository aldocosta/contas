import React from "react";
import { useAuth } from "../hooks/auth";
import { Container } from "./styles";

const MainHeader: React.FC = () => {
    const { userName } = useAuth();
    return (
        <Container>
            {userName}
        </Container>
    )
}

export default MainHeader;