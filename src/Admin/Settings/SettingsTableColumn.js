import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter, getStatusIdList } from "../../globalFunctions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SingleSelect from "../../GlobalComponents/SingleSelect";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import api from "../../api/httpRequest";
import {
  getQualification,
  getSpecialization,
  getStatus,
} from "../Slices/globalSlice";

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
const SettingsTableColumn = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);
  const { activeTitle, activeButton } = useSelector(
    (state) => state.settinglayout
  );

  const getStatusList = useSelector((state) => state.global.statusList);
  useEffect(() => {
    dispatch(getStatus(null));
  }, [dispatch]);
  const statuses = getStatusIdList(getStatusList);
  // console.log("getStatusList", statuses);

  const [openEdit, setOpenEdit] = useState(false);
  const [formValues, setFormValues] = useState({
    title: activeTitle,
    value: "",
    IsActive: "",
  });
  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      title: activeTitle,
    }));
  }, [activeTitle]);
  const handleOnChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnClick = (params) => {
    setFormValues({
      title: activeTitle,
      value: params.row.value,
      IsActive: params.row.IsActive, //params.row.status,
    });
    setOpenEdit(true);
  };
  const handleSave = async (params) => {
    // console.log("formvalues", formValues);
    try {
      const response = await api.put(
        `/UpdateMasterConfiguration/${params}`,
        formValues
      );
      toast.success(response.data.message);
      dispatch(getSpecialization(searchQuery));
      dispatch(getQualification(searchQuery));
      setOpenEdit(!openEdit);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (params) => {
    // console.log("formvalues", formValues);
    try {
      const response = await api.delete(
        `/deleteMasterConfiguration/${params}`,
        formValues
      );
      toast.success(response.data.message);
      dispatch(getSpecialization(searchQuery));
      dispatch(getQualification(searchQuery));
    } catch (error) {
      console.log(error);
    }
  };

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
            checked={row.IsActiveValue}
            label={row?.IsActiveValue ? "Active" : "In Active"}
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
      renderCell: (params) => {
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
              onClick={() => handleOnClick(params)}
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
                    Edit {activeTitle}
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
                            value={formValues?.value}
                            onChange={(e) =>
                              handleOnChange(e.target.value, "value")
                            }
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
                          value={formValues?.IsActive}
                          data={statuses}
                          onChange={(e) => handleOnChange(e, "IsActive")}
                        />
                      </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", marginLeft: "115px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: "200px" }}
                        onClick={() =>
                          handleSave(params?.row?.masterConfigurationID)
                        }
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </DialogContent>
            </Dialog>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(params?.row?.masterConfigurationID)}
            >
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
