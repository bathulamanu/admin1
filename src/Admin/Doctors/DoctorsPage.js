import React, { useEffect, useState } from "react";
import CommonDataTable from "../../GlobalComponents/CommonDataTable";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorList } from "../Slices/doctorSlice";
import { columns } from "./DoctorsTableColumn";
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
import CommonSelect from "../../GlobalComponents/CommonSelect";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import column from "../Doctors/DoctorsTableColumn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSpecialization } from "../Slices/globalSlice";
import { getByIdList } from "../../globalFunctions";

const DoctorsPage = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);
  const doctorsList = useSelector((state) => state.doctor.doctorsList);

  console.log("doctorsList", doctorsList);

  useEffect(() => {
    dispatch(getDoctorList(searchQuery));
  }, []);

  const [statusFilter, setStatusFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const filteredList = doctorsList?.filter((item) => {
    const matchesSearch =
      item?.doctorFirstName &&
      item.doctorFirstName.toLowerCase().includes(searchValue.toLowerCase());

    const matchesStatus =
      statusFilter === "" ||
      (statusFilter === "Active" && item.status === true) ||
      (statusFilter === "Inactive" && item.status === false);

    const matchesSpecialization =
      selectValue === "" ||
      item.specilizationInfo.some(
        (specialization) => specialization.specilizationID === selectValue
      );
    return matchesSearch && matchesStatus && matchesSpecialization;
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

  const uniqueSpecializations = Array.from(
    uniqueSpecializationsMap,
    ([id, value]) => ({ id, value })
  );
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
          {/* <CommonSelect data={specialiList} Placeholder={"Spacialist"} /> */}
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
                <em>specialization</em>
              </MenuItem>
              {[...uniqueSpecializations].map((specialization, index) => (
                <MenuItem key={index} value={specialization.id}>
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
              <MenuItem value="Inactive">Inactive</MenuItem>
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
