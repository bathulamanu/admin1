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

const SettingsPage = () => {
  const [title, setTitle] = useState("Specialization");
  const [searchQuery, setSearchQuery] = useState(null);
  const [activeTag, setActiveTag] = useState("Specialist");
  const dispatch = useDispatch();

  const specializationList = useSelector(
    (state) => state.settings.settingsList
  );
  // console.log('specializationList', specializationList)
  const brandList = useSelector((state) => state.hospitals.hospitalsList);
  console.log("brandList", brandList);

  useEffect(() => {
    if (title === "Brands") {
      dispatch(getHospitalsList(searchQuery));
    } else if (title === "Specialization") {
      dispatch(getSettingList(title, searchQuery));
    } else {
      dispatch(getSettingList(`Doctor ${title}`, searchQuery));
    }
  }, [dispatch, title]);

  const handleButtonClick = (newTitle) => {
    setTitle(newTitle);
    if (newTitle === "Specialization") {
      setActiveTag("Specialist");
    } else {
      setActiveTag(newTitle);
    }
  };

  const getRows = () => {
    if (title === "Brands") {
      return brandList || [];
    }
    if (title === "Specialization" || "Qualification") {
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
          <Typography variant="h6">{activeTag}</Typography>
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
            variant={title === "Specialization" ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor:
                title === "Specialization" ? "#1976d2" : "#e0e0e0",
              color: title === "Specialization" ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Specialization")}
          >
            Specialization
          </Button>
        </Stack>
        <Stack>
          <Button
            variant={title === "Qualification" ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor:
                title === "Qualification" ? "#1976d2" : "#e0e0e0",
              color: title === "Qualification" ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Qualification")}
          >
            Qualification
          </Button>
        </Stack>
        <Stack>
          <Button
            variant={title === "Brands" ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: title === "Brands" ? "#1976d2" : "#e0e0e0",
              color: title === "Brands" ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Brands")}
          >
            Brands
          </Button>
        </Stack>
      </Box>
      {title && title === "Brands" ? (
        <SettingsBrandDataTable
          rows={getRows()}
          columns={settingBrandColumns(title)}
        />
      ) : (
        <>
          <SettingsDataTable rows={getRows()} columns={settingColumns(title)} />
        </>
      )}
    </Container>
  );
};

export default SettingsPage;
