import React, { ReactNode } from "react";
import { useAuth } from "../hooks/auth";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container } from "./styles";

type IGrido = {
    _rows: any[],
    _columns: any[],    
    onClick: (e: any) => void;
}

const Grido: React.FC<IGrido> = ({ _rows, _columns, onClick }: IGrido) => {

    return (

        <Container className="grido">
            <div style={{ clear: 'both', height: 400, width: '100%', padding: '15px 0 0 0' }}>
                <DataGrid                    
                    editMode="row"
                    rows={_rows}
                    columns={_columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection       
                    onSelectionModelChange={onClick}
                    // onRowClick={onClick}
                />
            </div>
        </Container >

    )
}

export default Grido;