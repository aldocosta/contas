import React, { useState } from "react";
import Button from "../../components/Button";
import ButtonMUI from "../../components/Button-MUI";
import { useAuth } from "../../components/hooks/auth";
import Input from "../../components/Input";
import { BoxCenter, Col, Container, Row } from "./styles";

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <BoxCenter>
                <Row>
                    <span>E-mail:</span>
                    <Input placeholder="E-mail" onChange={(e) => { setEmail(e.target.value) }} />
                </Row>
                <Row>

                    <span>Password:</span>
                    <Input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </Row>
                <Row>
                    <Col>
                        <ButtonMUI onClick={() => signIn(email, password)}> Logar</ButtonMUI>                        
                    </Col>
                    <Col>
                    <ButtonMUI > Esqueci a senha</ButtonMUI>                        
                    </Col>
                </Row>
            </BoxCenter>
        </Container>
    )
}

export default SignIn;