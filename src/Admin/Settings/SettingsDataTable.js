import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const SettingsDataTable = ({ rows, columns }) => {
  return (
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
    />
  )
}

export default SettingsDataTable
