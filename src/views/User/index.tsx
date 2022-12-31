import { TextField } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import ButtonMUI from "../../components/Button-MUI";
import Grido from "../../components/Grido";
import { BoxCenter, Col, Container, Row } from "./styles";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import UserService from "./services/user.service";


const User: React.FC = () => {

    const [rows, setRows] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 365 },
        { field: 'name', headerName: 'Nome', width: 165 },
        { field: 'email', headerName: 'Email', width: 330 }
    ];

    const loadGrid = () => {
        UserService.findAll()
            .then((data: any) => {

                const newData = data.map((d: any) => {
                    return {
                        id: d._id,
                        name: d.name,
                        email: d.email
                    }
                })
                setRows(newData)
                console.log(newData)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const saveUser = async () => {
        const newUser = JSON.stringify({
            name: name,
            email: email,
            password: password
        })
        const retorno = await UserService.saveUser(newUser)
        loadGrid()
    }

    useEffect(() => {
        loadGrid()
    }, [])

    return (
        <Container>
            <BoxCenter>
                <Row>
                    <TextField id="outlined-basic" value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        label="Nome Usuário" variant="outlined" />
                </Row>
                <Row>
                    <TextField id="outlined-basic" value={email}
                        onChange={(e) => { setEmail(e.target.value) }} label="Email Usuário" variant="outlined" />
                </Row>
                <Row>
                    <TextField id="outlined-basic" value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password" label="password" variant="outlined" />
                </Row>
                <Row>
                    <Col>
                        <SaveIcon onClick={() => {
                            saveUser()
                        }} sx={{ fontSize: 40 }}></SaveIcon>
                        <CancelIcon sx={{ fontSize: 40 }}></CancelIcon>
                    </Col>
                </Row>
            </BoxCenter>
            <div>
                <Grido
                    _rows={rows}
                    _columns={columns}
                >
                </Grido>
            </div>
        </Container>
    )
}

export default User;