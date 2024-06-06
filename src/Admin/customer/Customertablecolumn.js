import { Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

const CustomerTableColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerColumns = [
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
      field: "RegDate",
      headerName: "REGISTER DATE",
      width: 150,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.RegDate),
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
      valueGetter: (_, row) =>
        capitalizeFirstLetter(row?.LocationInfo?.cityName),
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
              navigate("/customerPage/customers/allDetails");
            }}
          >
            View Details
          </Button>
        </Stack>
      ),
    },
  ];
  return customerColumns;
};

export default CustomerTableColumn;
