import React from "react";
import { useAuth } from "../hooks/auth";
import Render from "../Render";
import { Container, MenuItemLink } from "./styles";

const Aside: React.FC = () => {
    const { logged, signOut, setActualPageName } = useAuth();
    return (
        <Container>

            <Render rendered={logged}>
                <MenuItemLink to='/' onClick={() => { setActualPageName('Merchant Register')}} >Merchant Register</MenuItemLink>
                <MenuItemLink to='/about' onClick={() => { setActualPageName('About Page') }}>Client Register</MenuItemLink>
                <MenuItemLink to='/' onClick={(e) => {  signOut(); }}>Logout</MenuItemLink>
            </Render>

        </Container>
    )
}

export default Aside;