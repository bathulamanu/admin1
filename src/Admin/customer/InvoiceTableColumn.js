import { Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

const InvoiceTableColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const InvoiceColumns = [
    {
      field: "customerName",
      headerName: "CUSTOMER NAME",
      width: 200,
      sortable: false,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.customerName),
    },
    {
      field: "DateTime",
      headerName: " DATE & TIME",
      width: 150,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.DateTime),
    },
    {
      field: "crnNo",
      headerName: "CRN NUMBER",
      width: 150,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.crnNo),
    },
    {
      field: "planAmount",
      headerName: "PLAN & AMOUNT",
      sortable: false,
      width: 160,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.planAmount,
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
            label={row?.status ? "Paid" : "Pertial"}
            sx={{
              borderRadius: "4px",
              color: row?.status ? "#269254" : "#EF4646",
              background: row?.status ? "#DEF7EC" : "#FDEDED",
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
          <Button
            variant="contained"
            size="small"
            onClick={(e) => {
              e.preventDefault();
              //   dispatch(getHospitalDetails(params?.row?.id));
              navigate("/customerPage/customers/invoice");
            }}
          >
            View Invoice
          </Button>
        </Stack>
      ),
    },
  ];
  return InvoiceColumns;
};

export default InvoiceTableColumn;
