import React from "react";
import { useAuth } from "../hooks/auth";
import { AppBarC, Container } from "./styles";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const MainHeader: React.FC = () => {
    const { userName, pageName } = useAuth();

    return (
        <Container>            
            <Box sx={{ flexGrow: 1 }}>
                <AppBarC position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {pageName}
                        </Typography>
                        <Button color="inherit"> {userName} </Button>
                    </Toolbar>
                </AppBarC>
            </Box>
        </Container>
    )
}

export default MainHeader;