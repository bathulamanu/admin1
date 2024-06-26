import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
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
import { getByIdList, getQualificationIdList } from "../../globalFunctions";

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
  const specialiList = getByIdList(specializationList);
  // console.log("specializationList", specializationList);

  const qualificationList = useSelector(
    (state) => state.global.qualificationList
  );
  useEffect(() => {
    dispatch(getQualification(null));
  }, [dispatch]);
  const getQualif = getQualificationIdList(qualificationList);
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
  const [statusFilter, setStatusFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const filteredList = specializationList.filter((item) => {
    const matchesSearch =
      item?.value &&
      item.value.toLowerCase().includes(searchValue.toLowerCase());

    const matchesStatus =
      statusFilter === "" ||
      (statusFilter === "Active" && item.IsActiveValue === true) ||
      (statusFilter === "Inactive" && item.IsActiveValue === false);
    return matchesSearch && matchesStatus;
  });

  //qualification
  const [statusFilterQ, setStatusFilterQ] = useState("");
  const [searchValueQ, setSearchValueQ] = useState("");
  const filteredListQ = qualificationList.filter((item) => {
    const matchesSearchQ =
      item?.value &&
      item.value.toLowerCase().includes(searchValueQ.toLowerCase());

    const matchesStatusQ =
      statusFilterQ === "" ||
      (statusFilterQ === "Active" && item.IsActiveValue === true) ||
      (statusFilterQ === "Inactive" && item.IsActiveValue === false);
    return matchesSearchQ && matchesStatusQ;
  });
  const getRows = () => {
    if (activeTitle === "Specialization") {
      return filteredList || [];
    } else if (activeTitle === "Doctor Qualification") {
      return filteredListQ || [];
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
        {activeTitle === "Specialization" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <CommonSelect
              Placeholder={"Specialition"}
              data={specialiList}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Doctor Qualification" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValueQ}
                onChange={(e) => setSearchValueQ(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <CommonSelect Placeholder={"Qualification"} data={getQualif} />
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                value={statusFilterQ}
                onChange={(e) => setStatusFilterQ(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : null}
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
