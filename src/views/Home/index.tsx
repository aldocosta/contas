import { Col, Container, Row } from "./styles";
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grido from "../../components/Grido";


const Home: React.FC = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 ,headerClassName:'' },
        { field: 'contaDescricao', headerName: 'Desc. Conta', width: 165 },
        { field: 'contaValor', headerName: 'Valor', width: 130 },
        {
            field: 'contaVencimento',
            headerName: 'Vencimento',
            width: 175, type : 'Date'
        },
        {
            field: 'contaDiasVencer',
            headerName: 'Dias a Vencer',
            width: 175, type: 'number'
        }    
    ];

    const rows = [
        {
            "id": "1"
            ,
            "contaDescricao": "Luz"
            ,
            "contaVencimento":"10/01/2023",
            "contaValor": "150"
            ,
            "contaDiasVencer": "12"
        },
        {
            "id":"2"
            ,  
            "contaDescricao":"Internet"
            ,  
            "contaVencimento":"12/01/2023",
            "contaValor":"250"
            ,  
            "contaDiasVencer":"18"
            }
    ];

    const mounths = [{ 'display': 'Janeiro', 'value': '1' }, { 'display': 'Fevereiro', 'value': '2' }]
    const years = [{ 'display': '2021', 'value': '2021' }, { 'display': '2022', 'value': '2022' }]



    return (
        <Container>
            <Row>
                <Col>
                    <FormControl fullWidth>
                        <InputLabel id="slm">Mês</InputLabel>
                        <Select
                            labelId="slm"
                            id="dslm"
                            value={age}
                            label="Mês"
                            onChange={handleChange}
                        >
                            {
                                mounths.map((m) => (<MenuItem key={m.value} value={m.value}>{m.display}</MenuItem>))
                            }

                        </Select>
                    </FormControl>
                </Col>
                <Col>
                    <FormControl fullWidth>
                        <InputLabel id="sl">Ano</InputLabel>
                        <Select
                            labelId="sl"
                            id="dsl"
                            value={age}
                            label="Ano"
                            onChange={handleChange}
                        >
                            {
                                years.map((m) => (<MenuItem key={m.value} value={m.value}>{m.display}</MenuItem>))
                            }
                        </Select>
                    </FormControl>
                </Col>
            </Row>
            <Grido
                _rows={rows}
                _columns={columns}
            >
            </Grido>

        </Container >
    )
}

export default Home;