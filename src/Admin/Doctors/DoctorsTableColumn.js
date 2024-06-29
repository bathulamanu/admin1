import { Button, Chip, Stack, styled } from "@mui/material";
import React from "react";
import { getDoctorDetail } from "../Slices/doctorSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../globalFunctions";

const StyledHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
});

const DoctorsTableColumn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = [
    {
      field: "doctorName",
      headerName: <StyledHeader>DOCTOR NAME</StyledHeader>,
      flex: 1,
      sortable: false,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row.doctorFirstName),
    },
    {
      field: "specialist",
      headerName: <StyledHeader>SPECIALIST</StyledHeader>,
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) =>
        capitalizeFirstLetter(row?.specilizationInfo?.[0]?.value),
    },
    {
      field: "experience",
      headerName: <StyledHeader>EXPERIENCE</StyledHeader>,
      type: "number",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) =>
        capitalizeFirstLetter(row?.experienceInfo?.value),
    },
    {
      field: "contact",
      headerName: <StyledHeader>CONTACT</StyledHeader>,
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.phoneNumber,
    },
    {
      field: "location",
      headerName: <StyledHeader>LOCATION</StyledHeader>,
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.cityInfo?.name),
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
          {row?.IsActive === 47 && (
            <Chip
              label={"Active"}
              sx={{
                borderRadius: "4px",
                color: "#269254",
                background: "#DEF7EC",
              }}
            />
          )}
          {row?.IsActive === 46 && (
            <Chip
              label={"In Active"}
              sx={{
                borderRadius: "4px",
                color: "#EF4646",
                background: "#FDEDED",
              }}
            />
          )}
          {/* <Chip
            label={row?.status ? "Active" : "In Active"}
            sx={{
              borderRadius: "4px",
              color: row?.status ? "#269254" : "#EF4646",
              background: row?.status ? "#DEF7EC" : "#FDEDED",
            }}
          /> */}
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
      renderCell: (params, x) => {
        return (
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
                dispatch(getDoctorDetail(params?.row?.id));
                navigate("/mainPage/doctors/view");
              }}
            >
              View Doctor
            </Button>
          </Stack>
        );
      },
    },
  ];

  return columns;
};
export default DoctorsTableColumn;
