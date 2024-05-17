import { Typography } from "@mui/material";
import React from "react";

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log("bjxghjknlm", capitalizeFirstLetter("chandana"));

export const columns = [
  {
    field: "doctorName",
    headerName: "DOCTOR NAME",
    width: 170,
    sortable: false,
    disableColumnFilter: true,
    disableColumnMenu: true,
    valueGetter: (_, row) => capitalizeFirstLetter(row.doctorName),
  },
  {
    field: "specialist",
    headerName: "SPECIALIST",
    width: 150,
    disableColumnMenu: true,
    sortable: false,
    disableColumnFilter: true,
    valueGetter: (_, row) => console.log('hdfsgjdsfh',row),
  },
  {
    field: "Experience",
    headerName: "EXPERIENCE",
    type: "number",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
    disableColumnFilter: true,
  },
  {
    field: "contact",
    headerName: "CONTACT",
    sortable: false,
    width: 160,
    disableColumnMenu: true,
    disableColumnFilter: true,
  },
  {
    field: "location",
    headerName: "LOCATION",
    sortable: false,
    width: 160,
    disableColumnMenu: true,
    disableColumnFilter: true,
  },
  {
    field: "status",
    headerName: "STATUS",
    sortable: false,
    disableColumnMenu: true,
    disableColumnFilter: true,
    width: 160,
  },
  {
    field: "action",
    headerName: "ACTION",
    sortable: false,
    width: 160,
    disableColumnFilter: true,
    disableColumnMenu: true,
  },
];
