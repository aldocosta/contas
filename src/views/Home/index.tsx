import { Col, Container, Row } from "./styles";
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Home: React.FC = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Caruso', firstName: 'Daniel', age: 35 },
        { id: 2, lastName: 'Comeric', firstName: 'Comeric', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const mounths = [{ 'display': 'Janeiro', 'value': '1' }, { 'display': 'Fevereiro', 'value': '2' }]
    const years = [{ 'display': '2021', 'value': '2021' }, { 'display': '2022', 'value': '2022' }]



    return(
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
                                mounths.map((m) => (<MenuItem key={m.value} value={m.value}>{ m.display}</MenuItem>))
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
                                years.map((m) => (<MenuItem key={m.value} value={m.value}>{ m.display}</MenuItem>))
                            }
                        </Select>
                    </FormControl>
                </Col>
            </Row>
            <div style={{ clear: 'both', height: 400, width: '100%', padding: '15px 0 0 0' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>


        </Container >
    )
}

export default Home;