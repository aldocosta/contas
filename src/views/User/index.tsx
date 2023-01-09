import { Alert, Snackbar, TextField, Toolbar, Typography } from "@mui/material";
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
import EditIcon from '@mui/icons-material/Edit';
import { useAuth } from "../../components/hooks/auth";
import { AppBarC } from "../../components/MainHeader/styles";


const User: React.FC = () => {

    const [rows, setRows] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enumType, setEnumType] = useState<AlertTypeEnum>()
    const [alertMessage, setAlertMessage] = useState<string>('')
    const [actionMessage, setActionMessage] = useState<string>('Novo Registro')
    const [deleteForeverIconVisibility, setDeleteForeverIconVisibility] = useState<boolean>(false)
    const [editForeverIconVisibility, setEditForeverIconVisibility] = useState<boolean>(false)
    const [gridRowsSelected, setgridRowsSelected] = useState<string[]>([])
    const [open, setOpen] = React.useState<boolean>(false);

    const { setLoadVisibilityGlobal } = useAuth();

    const rStyle = {
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 365 },
        { field: 'name', headerName: 'Nome', width: 165 },
        { field: 'email', headerName: 'Email', width: 330 }
    ];

    const loadGrid = () => {
        setLoadVisibilityGlobal(true)
        UserService.findAll()
            .then((data: any) => {

                if (data?.statusCode === 401) {
                    setEnumType(AlertTypeEnum.ERROR)
                    setAlertMessage('Erro ao carregar grid')
                    return
                }

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
            .finally(() => {
                setLoadVisibilityGlobal(false)
            })

    }

    const saveUser = async () => {
        setLoadVisibilityGlobal(true)

        const newUser = JSON.stringify({
            name: name,
            email: email,
            password: password
        })

        const retorno = await UserService.saveUser(newUser)

        clearAll()
        setEnumType(AlertTypeEnum.INFO)
        setAlertMessage('Registro inserido com sucesso!')
        setLoadVisibilityGlobal(false)
        setOpen(true);
    }

    const gridRowClick = (data: string[]) => {
        //setando visibilidade de alguns botoes de controle de açao(salvar, exlucir)
        setDeleteForeverIconVisibility(data.length > 0)
        setEditForeverIconVisibility(data.length == 1)
        let actionMessageText: string = ''
        if (data.length === 0) actionMessageText = 'Novo Registro'
        if (data.length === 1) actionMessageText = 'Editar/Apagar Registro'
        if (data.length > 1) actionMessageText = 'Apagar Registros'

        setActionMessage(actionMessageText)

        setgridRowsSelected(data)
    }

    const clearAll = async () => {
        clearForm()
        loadGrid()
        setTimeout(() => {
            setEnumType(AlertTypeEnum.NONE)
        }, 5000)
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
        setOpen(true);
    }


    return (
        <Container>
            <Row>
                <Alerto
                    open={open}
                    message={alertMessage}
                    severity={enumType}
                ></Alerto>
            </Row>
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
                    <AppBarC position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
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
                                    </DeleteForeverIcon>
                                </Render>
                                <Render rendered={editForeverIconVisibility}>
                                    <EditIcon sx={{ fontSize: 38 }}
                                    ></EditIcon>
                                </Render>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
                                {actionMessage}
                            </Typography>
                        </Toolbar>
                    </AppBarC>
                </Row>
            </BoxCenter>
            <Row>
                <Grido
                    onClick={gridRowClick}
                    _rows={rows}
                    _columns={columns}
                />

            </Row>
        </Container >
    )
}

export default User;