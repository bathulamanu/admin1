import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommonSelect from "../../GlobalComponents/CommonSelect";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import settingColumns from "../Settings/SettingsTableColumn";
import SettingsDataTable from "./SettingsDataTable";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTitle } from "../Slices/settingLayoutSlice";
import { getQualification } from "../Slices/globalSlice";
import { getSpecialization } from "../Slices/globalSlice";
import { getHospitalsList } from "../Slices/hospitalSlice";
import SettingsBrandDataTable from "./SettingsBrandDataTable";
import settingBrandColumns from "./SettingBrandTableColumn";

const SettingsPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const dispatch = useDispatch();

  const { activeTitle, activeButton } = useSelector(
    (state) => state.settinglayout
  );

  const specializationList = useSelector(
    (state) => state.global.specializationList
  );
  useEffect(() => {
    dispatch(getSpecialization(null));
  }, [dispatch]);
  // console.log("specializationList", specializationList);

  const qualificationList = useSelector(
    (state) => state.global.qualificationList
  );
  useEffect(() => {
    dispatch(getQualification(null));
  }, [dispatch]);
  // console.log("getQualification", qualificationList);

  const brandList = useSelector((state) => state.hospitals.hospitalsList);
  useEffect(() => {
    dispatch(getHospitalsList(null));
  }, [dispatch]);
  // console.log("brandList", brandList);

  useEffect(() => {
    if (activeTitle === "Specialization") {
      dispatch(getSpecialization(searchQuery));
    } else if (activeTitle === "Qualification") {
      dispatch(getQualification(searchQuery));
    } else if (activeTitle === "Brands") {
      dispatch(getHospitalsList(searchQuery));
    }
  }, [dispatch, activeTitle]);

  const handleButtonClick = (newTitle, buttonIndex) => {
    dispatch(setActiveTitle({ title: newTitle, buttonIndex }));
  };

  const getRows = () => {
    if (activeTitle === "Specialization") {
      return specializationList || [];
    } else if (activeTitle === "Doctor Qualification") {
      return qualificationList || [];
    } else if (activeTitle === "Brands") {
      return brandList || [];
    }
    return [];
  };

  return (
    <Container maxWidth="xxl" sx={{ background: "#fff" }}>
      <ToastContainer />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"12px 8px"}
      >
        <Stack justifyContent={"center"}>
          <Typography variant="h6">{activeTitle}</Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
            <OutlinedInput
              type={"text"}
              placeholder="Search"
              size="small"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <CommonSelect Placeholder={"Specialist"} />
          <CommonSelect Placeholder={"Status"} />
          <MoreVertIcon />
        </Stack>
      </Box>
      <Box display={"flex"} justifyContent={"left"} marginBottom={2} gap={2}>
        <Stack>
          <Button
            variant={activeButton === 0 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 0 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 0 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Specialization", 0)}
          >
            Specialization
          </Button>
        </Stack>
        <Stack>
          <Button
            variant={activeButton === 1 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 1 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 1 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Doctor Qualification", 1)}
          >
            Qualification
          </Button>
        </Stack>
        {/* <Stack>
          <Button
            variant={activeButton === 2 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 2 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 2 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Brands", 2)}
          >
            Brands
          </Button>
        </Stack> */}
      </Box>
      {/* {activeTitle === "Brands" ? (
        <SettingsBrandDataTable
          rows={getRows()}
          columns={settingBrandColumns()}
        />
      ) : ( */}
      <SettingsDataTable rows={getRows()} columns={settingColumns()} />
      {/* )} */}
    </Container>
  );
};

export default SettingsPage;
