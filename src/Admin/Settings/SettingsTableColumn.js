import { Button, Stack, styled, Switch } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../globalFunctions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
});

const SettingsTableColumn = (title) => {
  const settingColumns = [
    {
      field: "value",
      headerName: <StyledHeader>TITLE</StyledHeader>,
      flex: 1,
      sortable: false,
      disableColumnFilter: true,
      disableColumnMenu: true,
      valueGetter: (_, row) => capitalizeFirstLetter(row?.value),
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
          <Switch
            checked={row.status}
            label={row?.status ? "Active" : "In Active"}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#269254",
                "&:hover": {
                  backgroundColor: "rgba(38, 146, 84, 0.08)",
                },
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#269254",
              },
              "& .MuiSwitch-switchBase": {
                color: "#EF4646",
                "&:hover": {
                  backgroundColor: "rgba(239, 70, 70, 0.08)",
                },
              },
              "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                backgroundColor: "#EF4646",
              },
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
      renderCell: (params, x) => {
        return (
          <Stack
            gap={2}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"start"}
            justifyContent={"start"}
            marginTop={"10px"}
            height={"100%"}
            width={"100%"}
          >
            <Button variant="contained" size="small">
              <EditIcon fontSize="small" /> Edit
            </Button>
            <Button variant="outlined" size="small" disabled>
              <DeleteIcon fontSize="small" /> Delete
            </Button>
          </Stack>
        );
      },
    },
  ];

  return settingColumns;
};

export default SettingsTableColumn;
