import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import CommonDataTable from "../../../components/GlobalComponents/CommonDataTable";
import { getSpecialization } from "../../../redux/Slices/globalSlice";
import { getHospitalsList } from "../../../redux/Slices/hospitalSlice";
import hospitalColumns from "../Hospitals/HospitalTableColumn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getByIdList } from "../../../service/globalFunctions";

const HospitalPage = () => {
  const dispatch = useDispatch();
  const hospitalsList = useSelector((state) => state.hospitals.hospitalsList);
  const getSpecializationList = useSelector(
    (state) => state.global.specializationList
  );
  const allSpecializations = getByIdList(getSpecializationList);

  // console.log("listData", hospitalsList);

  useEffect(() => {
    dispatch(getHospitalsList(null));
    dispatch(getSpecialization(null));
  }, [dispatch]);

  const [statusFilter, setStatusFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const filteredList = hospitalsList.filter((item) => {
    return (
      (searchValue === "" ||
        item?.hospitalName
          .toLowerCase()
          .includes(searchValue?.toLowerCase())) &&
      (statusFilter === "" ||
        (statusFilter === item?.IsActiveInfo?.IsActiveValue)) &&
      (selectValue === "" ||
        item.specialist.some(
          (spec) => spec.specializationID === parseInt(selectValue)
        ))
    );
  });

  return (
    <Container maxWidth="xxl" sx={{ background: "#fff" }}>
      <ToastContainer />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"12px 8px"}
      >
        <Stack justifyContent={"center"}></Stack>
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
              width={"100%"}
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              displayEmpty
              placeholder={"Select"}
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
              {allSpecializations?.map((specialization, index) => (
                <MenuItem key={index} value={specialization.id}>
                  {specialization.name}
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
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="InActive">InActive</MenuItem>
            </Select>
          </FormControl>
          <MoreVertIcon />
        </Stack>
      </Box>
      <CommonDataTable rows={filteredList || []} columns={hospitalColumns()} />
    </Container>
  );
};

export default HospitalPage;
