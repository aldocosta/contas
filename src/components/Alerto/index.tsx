
import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { Container } from "./styles";
//const [open, setOpen] = React.useState(false);

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
    message: string,
    open: boolean
}

const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
};

const Alerto: React.FC<IRender> = ({ severity, message, open }: IRender) => {

    return (
        <Container>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={8000}
                onClose={handleClose}>
                <div>
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
                </div>

            </Snackbar>

        </Container >
    )
}

export default Alerto;
