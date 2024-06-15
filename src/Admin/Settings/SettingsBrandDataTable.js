import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const SettingsBrandDataTable = ({ rows, columns }) => {
  console.log('rows and columns in brands table', rows, columns)
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(rows) => rows.id}
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

export default SettingsBrandDataTable
