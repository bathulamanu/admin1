import { Button, Chip, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
});

function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

const InvoiceTableColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const InvoiceColumns = [
    {
      field: "customerName",
      headerName: <StyledHeader>CUSTOMER NAME</StyledHeader>,
      flex: 1,
      sortable: false,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.customerName),
    },
    {
      field: "DateTime",
      headerName: <StyledHeader>DATE & TIME</StyledHeader>,
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.DateTime),
    },
    {
      field: "crnNo",
      headerName: <StyledHeader>CRN NUMBER</StyledHeader>,
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.crnNo),
    },
    {
      field: "planAmount",
      headerName: <StyledHeader>PLAN & AMOUNT</StyledHeader>,
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.planAmount,
    },
    {
      field: "status",
      headerName: <StyledHeader>STATUS</StyledHeader>,
      sortable: false,
      disableColumnMenu: true,
      disableColumnFilter: true,
      flex: 1,
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
              background: row?.status ? "#fff" : "#fff",
            }}
          />
        </Stack>
      ),
    },
    {
      field: "action",
      headerName: <StyledHeader>ACTION</StyledHeader>,
      sortable: false,
      flex: 1,
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
              navigate("/customerPage/invoices/invoiceView");
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
