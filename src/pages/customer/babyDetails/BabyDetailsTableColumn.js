import { Button, Stack } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { formatDate } from "../../../service/globalFunctions";
import { getBabyDetails } from "../../../redux/Slices/babySlice";

const StyledHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
});
function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

const BabyDetailsTableColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BabyDetailsColumn = [
    {
      field: "customerName",
      headerName: (
        <StyledHeader>
          BABY NAME
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      flex: 1,
      sortable: true,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.babyName),
    },
    {
      field: "RegDate",
      headerName: (
        <StyledHeader>
          DATE OF BIRTH
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      flex: 1,
      disableColumnMenu: true,
      sortable: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => formatDate(row?.babyDOB),
    },
    {
      field: "crnNo",
      headerName: (
        <StyledHeader>
          TIME OF BIRTH
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      flex: 1,
      disableColumnMenu: true,
      sortable: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.timeOfBirth,
    },
    {
      field: "contact",
      headerName: (
        <StyledHeader>
          WEIGHT
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      sortable: true,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.weight,
    },
    {
      field: "doctorName",
      headerName: (
        <StyledHeader>
          DOCTOR NAME
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      sortable: true,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.DoctorName),
    },
    {
      field: "location",
      headerName: (
        <StyledHeader>
          HOSPITAL NAME & PLACE
          {/* <UnfoldMoreIcon style={{ marginLeft: 4 }} /> */}
        </StyledHeader>
      ),
      sortable: true,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) =>
        capitalizeFirstLetter(row?.HospitalName) +
        " & " +
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
              localStorage.setItem("selectedbabyId", params?.row?.babyID);
              dispatch(getBabyDetails(params?.row?.babyID));
              navigate("/customerPage/baby_details/babyDetailsView");
            }}
          >
            View Details
          </Button>
        </Stack>
      ),
    },
  ];
  return BabyDetailsColumn;
};

export default BabyDetailsTableColumn;
