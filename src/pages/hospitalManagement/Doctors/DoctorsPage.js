import React, { useEffect, useState } from "react";
import CommonDataTable from "../../../components/GlobalComponents/CommonDataTable";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorList } from "../../../redux/Slices/doctorSlice";
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
import { getSpecialization } from "../../../redux/Slices/globalSlice";
import column from "../Doctors/DoctorsTableColumn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getByIdList } from "../../../service/globalFunctions";

const DoctorsPage = () => {
  const dispatch = useDispatch();
  const doctorsList = useSelector((state) => state.doctor.doctorsList);
  const getSpecializationList = useSelector(
    (state) => state.global.specializationList
  );
  const allSpecializations = getByIdList(getSpecializationList);
  console.log("doctorsList", doctorsList);

  useEffect(() => {
    dispatch(getDoctorList(null));
    dispatch(getSpecialization(null));
  }, []);

  const [statusFilter, setStatusFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const filteredList = doctorsList?.filter((item) => {
    // const matchesSearch =
    //   item?.doctorFirstName &&
    //   item.doctorFirstName.toLowerCase().includes(searchValue.toLowerCase());

    // const matchesStatus =
    //   statusFilter === "" ||
    //   (statusFilter === "Active" && item.IsActive === 47) ||
    //   (statusFilter === "InActive" && item.IsActive === 46);

    // const matchesSpecialization =
    //   selectValue === "" ||
    //   item.specilizationInfo.some(
    //     (specialization) => specialization.specilizationID === parseInt(selectValue)
    //   );
    // return matchesSearch && matchesStatus && matchesSpecialization;

    return (
      (searchValue === "" ||
        item?.doctorFirstName
          .toLowerCase()
          .includes(searchValue?.toLowerCase())) &&
      (statusFilter === "" ||
        statusFilter === item?.IsActiveInfo?.IsActiveValue) &&
      (selectValue === "" ||
        item.specilizationInfo.some(
          (spec) => spec.specializationID === parseInt(selectValue)
        ))
    );
  });

  const uniqueSpecializationsMap = new Map();
  doctorsList.forEach((doctor) => {
    doctor.specilizationInfo.forEach((specialization) => {
      uniqueSpecializationsMap.set(
        specialization.specilizationID,
        specialization.value
      );
    });
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
              placeholder="specialization"
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Adjust this value as needed
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

      <CommonDataTable rows={filteredList || []} columns={column()} />
    </Container>
  );
};

export default DoctorsPage;
