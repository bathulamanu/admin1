import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import CommonSelect from "../../GlobalComponents/CommonSelect";
import CommonDataTable from "../../GlobalComponents/CommonDataTable";
import customerColumns from "./Customertablecolumn";

const Customers = () => {
  const dummyData = [
    {
      id: 1,
      customerName: "john doe",
      RegDate: "2023-01-01",
      crnNo: "123456",
      contact: { phoneNumber: "123-456-7890" },
      LocationInfo: { cityName: "new york" },
    },
    {
      id: 2,
      customerName: "jane smith",
      RegDate: "2022-12-01",
      crnNo: "654321",
      contact: { phoneNumber: "098-765-4321" },
      LocationInfo: { cityName: "los angeles" },
    },
    // Add more dummy records as needed
  ];

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  return (
    <Container sx={{ background: "#fff" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"12px 8px"}
      >
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          <Typography sx={{ paddingTop: "7px" }} variant="h6">
            All Customer
          </Typography>
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "8px",
              borderRadius: "4px",
            }}
            color="primary"
          >
            256 Customer
          </Typography>
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
          <CommonSelect data={names} Placeholder={"Status"} />
          <MoreVertIcon />
        </Stack>
      </Box>
      <CommonDataTable rows={dummyData || []} columns={customerColumns()} />
    </Container>
  );
};

export default Customers;
