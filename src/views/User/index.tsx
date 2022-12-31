import { TextField } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import Grido from "../../components/Grido";
import { BoxCenter, Col, Container, Row } from "./styles";
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UserService from "./services/user.service";
import Alerto, { AlertTypeEnum } from "../../components/Alerto";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Render from "../../components/Render";


const User: React.FC = () => {

    const [rows, setRows] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enumType, setEnumType] = useState<AlertTypeEnum>()
    const [alertMessage, setAlertMessage] = useState<string>('')
    const [deleteForeverIconVisibility, setDeleteForeverIconVisibility] = useState<boolean>(false)
    const [gridRowsSelected, setgridRowsSelected] = useState<string[]>([])

    const rStyle = {
        cursor: 'pointer'
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 365 },
        { field: 'name', headerName: 'Nome', width: 165, editable: true },
        { field: 'email', headerName: 'Email', width: 330, editable: true }
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
        clearAll()
        setEnumType(AlertTypeEnum.INFO)
        setAlertMessage('Registro inserido com sucesso!')
    }

    const gridRowClick = (data: string[]) => {
        //setando visibilidade de alguns botoes de controle de açao(salvar, exlucir)
        setDeleteForeverIconVisibility(data.length > 0)
        setgridRowsSelected(data)
    }

    const clearAll = () => {
        clearForm()
        loadGrid()
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        loadGrid()
    }, [])


    const deleteUsers = async () => {
        const ret = await UserService.deleteUser(JSON.stringify(gridRowsSelected))
        console.log(ret)

        clearAll()
        setEnumType(AlertTypeEnum.INFO)
        setAlertMessage('Registros excluídos com sucesso!')
    }


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
                        <Render rendered={!deleteForeverIconVisibility}>
                            <SaveIcon onClick={() => {
                                saveUser()
                            }} sx={{ fontSize: 40 }}></SaveIcon>
                            <RestartAltIcon
                                onClick={clearForm}
                                sx={{ fontSize: 40 }}></RestartAltIcon>
                        </Render>
                        <Render rendered={deleteForeverIconVisibility}>
                            <DeleteForeverIcon
                                onClick={async () => {
                                    await deleteUsers()
                                }}
                                sx={{ fontSize: 40 }}>
                                Remover
                            </DeleteForeverIcon>
                        </Render>

                    </Col>
                </Row>
            </BoxCenter>
            <Row
                style={rStyle}
                onClick={() => {
                    setEnumType(AlertTypeEnum.NONE)
                }} >
                <Alerto
                    message={alertMessage}
                    severity={enumType}
                ></Alerto>
            </Row>

            <Row>
                <Grido
                    onClick={gridRowClick}
                    _rows={rows}
                    _columns={columns}
                />

            </Row>
        </Container>
    )
}

export default User;