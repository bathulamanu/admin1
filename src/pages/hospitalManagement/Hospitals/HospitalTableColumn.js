import { Button, Chip, Stack, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHospitalDetails } from "../../../redux/Slices/hospitalSlice";

const StyledHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
});
function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

const HospitalTableColumn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hospitalColumns = [
    {
      field: "hospitalName",
      headerName: <StyledHeader>HOSPITAL NAME</StyledHeader>,
      flex: 1,
      sortable: false,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.hospitalName),
    },
    {
      field: "specialist",
      headerName: <StyledHeader>SPECIALIST</StyledHeader>,
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) =>
        row?.specialist?.map((s) => capitalizeFirstLetter(s.value)).join(", "),
    },
    {
      field: "contact",
      headerName: <StyledHeader>CONTACT</StyledHeader>,
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.contact?.phoneNumber,
    },
    {
      field: "location",
      headerName: <StyledHeader>LOCATION</StyledHeader>,
      sortable: false,
      flex: 1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) =>
        capitalizeFirstLetter(row?.LocationInfo?.cityName),
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
              localStorage.setItem("HospitalID", params?.row?.HospitalID);
              dispatch(getHospitalDetails(params?.row?.HospitalID));
              navigate("/mainPage/hospitals/view");
            }}
          >
            View Hospital
          </Button>
        </Stack>
      ),
    },
  ];
  return hospitalColumns;
};

export default HospitalTableColumn;
