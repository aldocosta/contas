import React, { ReactNode } from "react";
import { useAuth } from "../hooks/auth";
import { DataGrid, GridCellEditStopParams, GridCellEditStopReasons, GridColDef, GridRowEditStopParams, GridRowEditStopReasons, GridRowModel, GridValueGetterParams, MuiEvent } from '@mui/x-data-grid';
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
                    onRowEditStop={(params: GridRowEditStopParams, event: any) => {                                              
                        console.log(event.nativeEvent.target.value)
                        console.log(params)
                        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
                            event.defaultMuiPrevented = true;
                        }
                    }}
                // onRowEditCommit={(r) => { console.log(r) }}
                // onRowEditStop={(s) => { console.log(s) }}

                // onRowClick={onClick}
                />
            </div>
        </Container >

    )
}

export default Grido;