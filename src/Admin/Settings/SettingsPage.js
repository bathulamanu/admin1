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

import CommonSelect from "../../GlobalComponents/CommonSelect";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import settingColumns from "../Settings/SettingsTableColumn";
import settingBrandColumns from "../Settings/SettingBrandTableColumn";
import SettingsDataTable from "./SettingsDataTable";
import SettingsBrandDataTable from "./SettingsBrandDataTable";
import { getSettingList } from "../Slices/settingSlice";
import { getHospitalsList } from "../Slices/hospitalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTitle } from "../Slices/settingLayoutSlice";

const SettingsPage = () => {
  const [title, setTitle] = useState("Specialization");
  const [searchQuery, setSearchQuery] = useState(null);
  const [activeTag, setActiveTag] = useState("Specialist");
  const dispatch = useDispatch();

  const { activeTitle, activeButton } = useSelector(
    (state) => state.settinglayout
  );

  const specializationList = useSelector(
    (state) => state.settings.settingsList
  );
  // console.log('specializationList', specializationList)
  const brandList = useSelector((state) => state.hospitals.hospitalsList);
  console.log("brandList", brandList);

  useEffect(() => {
    if (activeTitle === "Brands") {
      dispatch(getHospitalsList(searchQuery));
    } else if (activeTitle === "Specialization") {
      dispatch(getSettingList(activeTitle, searchQuery));
    } else {
      dispatch(getSettingList(`Doctor ${activeTitle}`, searchQuery));
    }
  }, [dispatch, activeTitle]);

  const handleButtonClick = (newTitle, buttonIndex) => {
    dispatch(setActiveTitle({ title: newTitle, buttonIndex }));
    if (newTitle === "Specialization") {
      setActiveTag("Specialist");
    } else {
      setActiveTag(newTitle);
    }
  };

  const getRows = () => {
    if (activeTitle === "Brands") {
      return brandList || [];
    }
    if (activeTitle === "Specialization" || "Qualification") {
      return specializationList || [];
    }
    return [];
  };

  return (
    <Container maxWidth="xxl" sx={{ background: "#fff" }}>
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
      </Box>
      {activeTitle === "Brands" ? (
        <SettingsBrandDataTable
          rows={getRows()}
          columns={settingBrandColumns(activeTitle)}
        />
      ) : (
        <SettingsDataTable
          rows={getRows()}
          columns={settingColumns(activeTitle)}
        />
      )}
    </Container>
  );
};

export default SettingsPage;
