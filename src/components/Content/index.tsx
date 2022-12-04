import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../views/About";
import Home from "../../views/Home";
import { Container } from "./styles";
import AppRoutes from '../Routes/app.routes'
import { useAuth } from "../hooks/auth";
import AuthRoutes from "../Routes/auth.routes";

const Content: React.FC = () => {

    const { logged } = useAuth();

    return (
        <Container>
            {logged ? <AppRoutes /> : <AuthRoutes />}
        </Container>
    )
}

export default Content;