import { Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { getDoctorDetail } from "../Slices/doctorSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

console.log("bjxghjknlm", capitalizeFirstLetter("chandana"));

const DoctorsTableColumn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = [
    {
      field: "doctorName",
      headerName: "DOCTOR NAME",
      width: 170,
      sortable: false,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row.doctorFirstName),
    },
    {
      field: "specialist",
      headerName: "SPECIALIST",
      width: 140,
      disableColumnMenu: true,
      sortable: false,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter("gyno"),
    },
    {
      field: "experience",
      headerName: "EXPERIENCE",
      type: "number",
      width: 140,
      sortable: false,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) =>
        capitalizeFirstLetter(row?.experienceInfo?.value),
    },
    {
      field: "contact",
      headerName: "CONTACT",
      sortable: false,
      width: 150,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => row?.phoneNumber,
    },
    {
      field: "location",
      headerName: "LOCATION",
      sortable: false,
      width: 150,
      disableColumnMenu: true,
      disableColumnFilter: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.cityInfo?.name),
    },
    {
      field: "status",
      headerName: "STATUS",
      sortable: false,
      disableColumnMenu: true,
      disableColumnFilter: true,
      width: 150,
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
      width: 150,
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
