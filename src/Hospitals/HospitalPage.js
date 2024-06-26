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
import CommonDataTable from "../GlobalComponents/CommonDataTable";
// import { hospitalColumns } from "./HospitalTableColumn";
import CommonSelect from "../GlobalComponents/CommonSelect";
import { getHospitalsList } from "../Admin/Slices/hospitalSlice";
import { getCountryList, getSpecialization } from "../Admin/Slices/globalSlice";
import hospitalColumns from "../Hospitals/HospitalTableColumn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getByIdList } from "../globalFunctions";

const HospitalPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const dispatch = useDispatch();
  const hospitalsList = useSelector((state) => state.hospitals.hospitalsList);

  console.log("listData", hospitalsList);
  // hospitalsList.forEach((hospital) => {
  //   console.log(`Hospital ID: ${hospital.HospitalID}`);
  //   console.log(`Hospital Name: ${hospital.hospitalName}`);

  //   // Iterate over each specialization in the 'specialist' array
  //   hospital.specialist.forEach((specialization) => {
  //     console.log(`Specialization ID: ${specialization.specilizationID}`);
  //     console.log(`Specialization Name: ${specialization.value}`);
  //   });
  // });

  useEffect(() => {
    dispatch(getHospitalsList(searchQuery));
  }, []);

  const specializationList = useSelector(
    (state) => state.global.specializationList
  );
  useEffect(() => {
    dispatch(getSpecialization(null));
  }, [dispatch]);
  const specialiList = getByIdList(specializationList);
  // console.log("specializationList", specializationList);

  const [statusFilter, setStatusFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const filteredList = hospitalsList.filter((item) => {
    const matchesSearch =
      item?.hospitalName &&
      item.hospitalName.toLowerCase().includes(searchValue.toLowerCase());
    const matchesSelect =
      item?.hospitalName &&
      item.hospitalName.toLowerCase().includes(selectValue.toLowerCase());
    const matchesStatus =
      statusFilter === "" ||
      (statusFilter === "Active" && item.status === true) ||
      (statusFilter === "Inactive" && item.status === false);
    return matchesSearch && matchesStatus;
  });
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const uniqueValues = [
    ...new Set(filteredList.map((item) => item.specialist)),
  ];

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
          <CommonSelect
            data={specialiList}
            Placeholder={"Spacialist"}
            // value={uniqueValues}
            // value={selectedValue}
            value={selectedValue?.specialist?.map(
              (item) => item?.specializationID
            )}
            onChange={handleSelectChange}
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
      </Box>
      <CommonDataTable rows={filteredList || []} columns={hospitalColumns()} />
    </Container>
  );
};

export default HospitalPage;
