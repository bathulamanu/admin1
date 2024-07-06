// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

import { DataGrid } from "@mui/x-data-grid";
import { Grid, Container } from "@mui/material";
import React from "react";

const CommonDataTable = ({ rows, columns }) => {
  return (
    <Container maxWidth="xl" sx={{ background: "#fff", padding: "18px" }}>
      {/* <Grid container justifyContent="center" style={{ padding: 20 }}> */}
      <Grid item xs={12}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableColumnSelector
          autoHeight
        />
      </Grid>
      {/* </Grid> */}
    </Container>
  );
};

export default CommonDataTable;
