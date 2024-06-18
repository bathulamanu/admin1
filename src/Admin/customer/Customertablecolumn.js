import { Button, Stack } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const StyledHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
});

function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

const CustomerTableColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerColumns = [
    {
      field: "customerName",
      headerName: (
        <StyledHeader>
          CUSTOMER NAME
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      flex: 1,
      sortable: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.customerName),
    },
    {
      field: "RegDate",
      headerName: (
        <StyledHeader>
          REGISTER DATE
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      flex: 1,
      disableColumnMenu: true,
      sortable: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.RegDate),
    },
    {
      field: "crnNo",
      headerName: (
        <StyledHeader>
          CRN NUMBER
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      flex: 1,
      disableColumnMenu: true,
      sortable: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.crnNo),
    },
    {
      field: "contact",
      headerName: (
        <StyledHeader>
          CONTACT
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      sortable: true,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.contact?.phoneNumber,
    },
    {
      field: "location",
      headerName: (
        <StyledHeader>
          LOCATION
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      sortable: true,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) =>
        capitalizeFirstLetter(row?.LocationInfo?.cityName),
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
