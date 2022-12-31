import { Alert } from "@mui/material";
import React, { ReactNode } from "react";
import { useAuth } from "../hooks/auth";
import { Container } from "./styles";

const ERROR = 'error'
const WARNING = "warning"
const INFO = 'info'
const SUCCESS = 'success'
const NONE = ''

export enum AlertTypeEnum {
    ERROR,
    WARNING,
    INFO,
    SUCCESS,
    NONE
}

type IRender = {
    severity: AlertTypeEnum | undefined,
    message: string
}

const Alerto: React.FC<IRender> = ({ severity, message }: IRender) => {

    return (
        <Container>
            {
                severity == AlertTypeEnum.ERROR ? <Alert severity="error">{message}</Alert> : ""
            }
            {
                severity == AlertTypeEnum.WARNING ? <Alert severity="warning">
                    {message}</Alert> : ""
            }
            {
                severity == AlertTypeEnum.INFO ? <Alert severity="info">{message}</Alert> : ""
            }
            {
                severity == AlertTypeEnum.SUCCESS ? <Alert severity="success">{message}</Alert> : ""
            }
        </Container >
    )
}

export default Alerto;
