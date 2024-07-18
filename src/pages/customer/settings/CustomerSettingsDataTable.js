import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Grid } from "@mui/material";

const CustomerSettingsDataTable = ({ rows, columns }) => {
  return (
    <Container maxWidth="xl" sx={{ background: "#fff", padding: "18px" }}>
      <Grid item xs={12}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(rows) => rows._id}
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
    </Container>
  );
};

export default CustomerSettingsDataTable;
