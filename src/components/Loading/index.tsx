
import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { Container } from "./styles";

type IRender = {
    visible: boolean,
}

const Loading: React.FC<IRender> = ({ visible }: IRender) => {

    return (
        <Container>
            <Box sx={{ width: '100%',position:'absolute' }}>
                {visible ? <LinearProgress /> : ''}
            </Box>
        </Container >
    )
}

export default Loading;