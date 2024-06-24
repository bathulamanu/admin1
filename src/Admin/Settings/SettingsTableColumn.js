import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../globalFunctions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SingleSelect from "../../GlobalComponents/SingleSelect";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const StyledHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
});
const inputLableStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};
const SettingsTableColumn = (title) => {
  const { activeTitle, activeButton } = useSelector(
    (state) => state.settinglayout
  );
  const [openEdit, setOpenEdit] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    status: "",
  });

  const handleOnChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("formvalues", formValues);
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
            <Button
              variant="contained"
              size="small"
              onClick={() =>
                //  console.log("clicked")
                setOpenEdit(true)
              }
            >
              <EditIcon fontSize="small" /> Edit
            </Button>
            <Dialog open={openEdit}>
              <DialogContent sx={{ width: "500px" }}>
                <CloseIcon
                  sx={{
                    marginLeft: "400px",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenEdit(!openEdit)}
                />
                <Box sx={{}}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Add {activeTitle}
                  </Typography>
                  <Box>
                    <Grid container spacing={2} pt={3} pb={2}>
                      <Grid item style={{ width: "100%" }}>
                        <InputLabel sx={inputLableStyle}>Title</InputLabel>
                        <FormControl variant="outlined" fullWidth size="small">
                          <OutlinedInput
                            fullWidth
                            id="outlined-adornment-password"
                            placeholder="Input Text"
                            size="small"
                            value={formValues?.firstName}
                            // onChange={(e) =>
                            //   // handleChange(e.target.value, "firstName")
                            // }
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} pt={3} pb={2}>
                      <Grid item style={{ width: "100%" }}>
                        <InputLabel sx={inputLableStyle}>Status</InputLabel>
                        <SingleSelect
                          placeholder={"Select"}
                          width={"100%"}
                          value={formValues?.status}
                          data={[
                            { id: "1", name: "Active" },
                            { id: "2", name: "InActive" },
                          ]}
                          onChange={(e) => handleOnChange(e, "status")}
                        />
                      </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", marginLeft: "115px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: "200px" }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </DialogContent>
            </Dialog>
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
