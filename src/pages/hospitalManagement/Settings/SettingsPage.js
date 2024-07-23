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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import settingColumns from "../Settings/SettingsTableColumn";
import SettingsDataTable from "./SettingsDataTable";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTitle } from "../../../redux/Slices/settingLayoutSlice";
import {
  getEmploymentType,
  getExperienceList,
  getGenderList,
  getQualification,
} from "../../../redux/Slices/globalSlice";
import { getSpecialization } from "../../../redux/Slices/globalSlice";
import { getHospitalsList } from "../../../redux/Slices/hospitalSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { activeTitle, activeButton } = useSelector(
    (state) => state.settinglayout
  );
  const specializationList = useSelector(
    (state) => state.global.specializationList
  );
  const qualificationList = useSelector(
    (state) => state.global.qualificationList
  );
  const experienceList = useSelector((state) => state.global.experienceList);
  const genderList = useSelector((state) => state.global.genderList);
  const employeeTypeList = useSelector((state) => state.global.employementList);
  console.log("employeeTypeList", employeeTypeList);

  useEffect(() => {
    dispatch(getSpecialization(null));
    dispatch(getQualification(null));
    dispatch(getExperienceList(null));
    dispatch(getGenderList(null));
    dispatch(getEmploymentType(null));
  }, [dispatch]);

  useEffect(() => {
    if (activeTitle === "Specialization") {
      dispatch(getSpecialization(null));
    } else if (activeTitle === "Qualification") {
      dispatch(getQualification(null));
    } else if (activeTitle === "Brands") {
      dispatch(getHospitalsList(null));
    } else if (activeTitle === "Experience") {
      dispatch(getExperienceList(null));
    } else if (activeTitle === "Gender") {
      dispatch(getGenderList(null));
    } else if (activeTitle === "Employment Type") {
      dispatch(getEmploymentType(null));
    }
  }, [dispatch, activeTitle]);

  const handleButtonClick = (newTitle, buttonIndex) => {
    dispatch(setActiveTitle({ title: newTitle, buttonIndex }));
  };
  //specialization
  const [statusFilter, setStatusFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const filteredList = specializationList?.filter((item) => {
    const matchesSearch =
      item?.value &&
      item.value.toLowerCase().includes(searchValue.toLowerCase());

    const matchesStatus =
      statusFilter === "" ||
      (statusFilter === "Active" && item.IsActiveValue === true) ||
      (statusFilter === "Inactive" && item.IsActiveValue === false);

    const matchesSpecialization =
      selectValue === "" || item.value === selectValue;

    return matchesSearch && matchesStatus && matchesSpecialization;
  });

  // Create a unique list of specializations
  const uniqueSpecializations = Array.from(
    new Set(specializationList?.map((item) => item.value))
  ).map((value) => {
    return specializationList?.find((item) => item.value === value);
  });

  //qualification
  const [statusFilterQ, setStatusFilterQ] = useState("");
  const [searchValueQ, setSearchValueQ] = useState("");
  const [selectValueQ, setSelectValueQ] = useState("");

  const filteredListQ = qualificationList?.filter((item) => {
    const matchesSearchQ =
      item?.value &&
      item.value.toLowerCase().includes(searchValueQ.toLowerCase());

    const matchesStatusQ =
      statusFilterQ === "" ||
      (statusFilterQ === "Active" && item.IsActiveValue === true) ||
      (statusFilterQ === "Inactive" && item.IsActiveValue === false);

    const matchesQulaification =
      selectValueQ === "" || item.value === selectValueQ;
    return matchesSearchQ && matchesStatusQ && matchesQulaification;
  });

  // Create a unique list of Qulaification
  const uniqueQulaification = Array.from(
    new Set(qualificationList?.map((item) => item.value))
  ).map((value) => {
    return qualificationList?.find((item) => item.value === value);
  });

  //experience
  const [statusFilterE, setStatusFilterE] = useState("");
  const [searchValueE, setSearchValueE] = useState("");
  const [selectValueE, setSelectValueE] = useState("");

  const filteredListE = experienceList?.filter((item) => {
    const matchesSearchE =
      item?.value &&
      item.value.toLowerCase().includes(searchValueE.toLowerCase());

    const matchesStatusE =
      statusFilterE === "" ||
      (statusFilterE === "Active" && item.IsActiveValue === true) ||
      (statusFilterE === "Inactive" && item.IsActiveValue === false);

    const matchesExperience =
      selectValueE === "" || item.value === selectValueE;
    return matchesSearchE && matchesStatusE && matchesExperience;
  });

  // Create a unique list of Experience
  const uniqueExperienceList = Array.from(
    new Set(experienceList?.map((item) => item.value))
  ).map((value) => {
    return experienceList?.find((item) => item.value === value);
  });

  //Gender
  const [statusFilterG, setStatusFilterG] = useState("");
  const [searchValueG, setSearchValueG] = useState("");
  const [selectValueG, setSelectValueG] = useState("");

  const filteredListG = genderList?.filter((item) => {
    const matchesSearchG =
      item?.value &&
      item.value.toLowerCase().includes(searchValueG.toLowerCase());

    const matchesStatusG =
      statusFilterG === "" ||
      (statusFilterG === "Active" && item.IsActiveValue === true) ||
      (statusFilterG === "Inactive" && item.IsActiveValue === false);

    const matchesGender = selectValueG === "" || item.value === selectValueG;
    return matchesSearchG && matchesStatusG && matchesGender;
  });

  // Create a unique list of Gender
  const uniqueGender = Array.from(
    new Set(genderList?.map((item) => item.value))
  ).map((value) => {
    return genderList?.find((item) => item.value === value);
  });

  // Employee Type
  const [statusFilterET, setStatusFilterET] = useState("");
  const [searchValueET, setSearchValueET] = useState("");
  const [selectValueET, setSelectValueET] = useState("");
  const filteredListET = employeeTypeList?.filter((item) => {
    const matchesSearchET =
      item?.value &&
      item.value.toLowerCase().includes(searchValueET.toLowerCase());

    const matchesStatusET =
      statusFilterET === "" ||
      (statusFilterET === "Active" && item.IsActiveValue === true) ||
      (statusFilterET === "Inactive" && item.IsActiveValue === false);

    const matchesEmployeeType =
      selectValueET === "" || item.value === selectValueET;
    return matchesSearchET && matchesStatusET && matchesEmployeeType;
  });
  // Create a unique list of Employment Type
  const uniqueEmployeeType = Array.from(
    new Set(employeeTypeList?.map((item) => item.value))
  ).map((value) => {
    return employeeTypeList?.find((item) => item.value === value);
  });

  const getRows = () => {
    if (activeTitle === "Specialization") {
      return filteredList || [];
    } else if (activeTitle === "Qualification") {
      return filteredListQ || [];
    } else if (activeTitle === "Brands") {
      return [];
    } else if (activeTitle === "Experience") {
      return filteredListE || [];
    } else if (activeTitle === "Gender") {
      return filteredListG || [];
    } else if (activeTitle === "Employment Type") {
      return filteredListET || [];
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
            <FormControl sx={{ width: "50%" }}>
              <Select
                sx={{ height: "40px" }}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                displayEmpty
                placeholder="Specialization"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {uniqueSpecializations?.map((specialization, index) => (
                  <MenuItem key={index} value={specialization.value}>
                    {specialization.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
                <MenuItem value="Inactive">InActive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Qualification" ? (
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
            <FormControl sx={{ width: "50%" }}>
              <Select
                sx={{ height: "40px" }}
                value={selectValueQ}
                onChange={(e) => setSelectValueQ(e.target.value)}
                displayEmpty
                placeholder="Qulaification"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {uniqueQulaification?.map((qulaification, index) => (
                  <MenuItem key={index} value={qulaification.value}>
                    {qulaification.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
                <MenuItem value="Inactive">InActive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Brands" ? (
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
            <FormControl sx={{ width: "50%" }}>
              <Select
                sx={{ height: "40px" }}
                value={selectValueQ}
                onChange={(e) => setSelectValueQ(e.target.value)}
                displayEmpty
                placeholder="Brands"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
              </Select>
            </FormControl>
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
                <MenuItem value="Inactive">InActive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Experience" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValueE}
                onChange={(e) => setSearchValueE(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <Select
                sx={{ height: "40px" }}
                value={selectValueE}
                onChange={(e) => setSelectValueE(e.target.value)}
                displayEmpty
                placeholder="Experience"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {uniqueExperienceList?.map((experience, index) => (
                  <MenuItem key={index} value={experience.value}>
                    {experience.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                value={statusFilterE}
                onChange={(e) => setStatusFilterE(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">InActive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Gender" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValueG}
                onChange={(e) => setSearchValueG(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <Select
                sx={{ height: "40px" }}
                value={selectValueG}
                onChange={(e) => setSelectValueG(e.target.value)}
                displayEmpty
                placeholder="Gender"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {uniqueGender?.map((gender, index) => (
                  <MenuItem key={index} value={gender.value}>
                    {gender.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                value={statusFilterG}
                onChange={(e) => setStatusFilterG(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">InActive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Employment Type" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValueET}
                onChange={(e) => setSearchValueET(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <Select
                sx={{ height: "40px" }}
                value={selectValueET}
                onChange={(e) => setSelectValueET(e.target.value)}
                displayEmpty
                placeholder="Select"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {uniqueEmployeeType?.map((employeeType, index) => (
                  <MenuItem key={index} value={employeeType.value}>
                    {employeeType.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                value={statusFilterET}
                onChange={(e) => setStatusFilterET(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">InActive</MenuItem>
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
            onClick={() => handleButtonClick("Qualification", 1)}
          >
            Qualification
          </Button>
        </Stack>
        <Stack>
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
        </Stack>
        <Stack>
          <Button
            variant={activeButton === 3 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 3 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 3 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Experience", 3)}
          >
            Experience
          </Button>
        </Stack>
        <Stack>
          <Button
            variant={activeButton === 4 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 4 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 4 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Gender", 4)}
          >
            Gender
          </Button>
        </Stack>
        <Stack>
          <Button
            variant={activeButton === 5 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 5 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 5 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Employment Type", 5)}
          >
            Employment Type
          </Button>
        </Stack>
      </Box>
      <SettingsDataTable rows={getRows()} columns={settingColumns()} />
    </Container>
  );
};

export default SettingsPage;
