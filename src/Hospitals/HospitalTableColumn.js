import { Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";

function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}


export const hospitalColumns = [
  {
    field: "hospitalName",
    headerName: "HOSPITAL NAME",
    width: 200,
    sortable: false,
    disableColumnFilter: true,
    disableColumnMenu: true,
    valueGetter: (_, row) => capitalizeFirstLetter(row?.hospitalName),
  },
  {
    field: "specialist",
    headerName: "SPECIALIST",
    width: 150,
    disableColumnMenu: true,
    sortable: false,
    disableColumnFilter: true,
    valueGetter: (_, row) => capitalizeFirstLetter(row?.specialist?.[0]?.value),
  },
  {
    field: "contact",
    headerName: "CONTACT",
    sortable: false,
    width: 160,
    disableColumnMenu: true,
    disableColumnFilter: true,
    valueGetter: (_, row) => row?.contact?.phoneNumber,
  },
  {
    field: "location",
    headerName: "LOCATION",
    sortable: false,
    width: 160,
    disableColumnMenu: true,
    disableColumnFilter: true,
    valueGetter: (_, row) => capitalizeFirstLetter(row?.LocationInfo?.cityName),
  },
  {
    field: "status",
    headerName: "STATUS",
    sortable: false,
    disableColumnMenu: true,
    disableColumnFilter: true,
    width: 160,
    renderCell: ({ row }) => (
      <Stack
        alignItems={"start"}
        justifyContent={"center"}
        height={"100%"}
        width={"100%"}
      >
        <Chip
          label={row?.status ? "Active" : "In Active"}
          sx={{
            borderRadius: "4px",
            color: row?.status ? "#269254" : "#EF4646",
            background:row?.status ? "#DEF7EC" : "#FDEDED"
          }}
        />
      </Stack>
    ),
  },
  {
    field: "action",
    headerName: "ACTION",
    sortable: false,
    width: 160,
    disableColumnFilter: true,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Stack
        alignItems={"start"}
        justifyContent={"center"}
        height={"100%"}
        width={"100%"}
      >
        <Button variant="contained" size="small">
          View Hospital
        </Button>
      </Stack>
    ),
  },
];
