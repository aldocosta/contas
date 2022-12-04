import React from "react";
import { useAuth } from "../hooks/auth";
import Render from "../Render";
import { Container, MenuItemLink } from "./styles";

const Aside: React.FC = () => {
    const { logged, signOut } = useAuth();
    return (
        <Container>

            <Render rendered={logged}>
                <MenuItemLink to='/'>Home</MenuItemLink>
                <MenuItemLink to='/about'>About</MenuItemLink>
                <MenuItemLink to='/' onClick={(e) => { e.preventDefault(); signOut(); }}>Logout</MenuItemLink>
            </Render>

        </Container>
    )
}

export default Aside;