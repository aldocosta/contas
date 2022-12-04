import React, { useState } from "react";
import Button from "../../components/Button";
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
                        <Button type="button" onClick={() => signIn(email, password)}> Logar</Button>
                    </Col>
                    <Col>
                        <Button type="button"> Esqueci Senha</Button>
                    </Col>
                </Row>
            </BoxCenter>
        </Container>
    )
}

export default SignIn;