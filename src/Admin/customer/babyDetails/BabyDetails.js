import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CommonDataTable from "../../../GlobalComponents/CommonDataTable";
import SearchIcon from "@mui/icons-material/Search";
import BabyDetailsTableColumn from "./BabyDetailsTableColumn";

const BabyDetails = () => {
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
  return (
    <Container
      maxWidth="xxl"
      sx={{
        maxHeight: "75%",
        overflow: "auto",
        padding: "8px",
        // display: "flex",
        background: "#fff",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        // padding={"12px 8px"}
        sx={{
          background: "#F3F8FF",
          padding: "15px",
          marginX: "20px",
          border: "1px solid #CFD4DB",
          borderRadius: "10px",
        }}
      >
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          <Typography
            sx={{ paddingTop: "7px", fontSize: "24px", fontWeight: 500 }}
            variant="h6"
          >
            BABY DETAILS
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          //   sx={{ marginRight: "40px" }}
        >
          <FormControl
            variant="outlined"
            size="small"
            sx={{
              width: 300,
              background: "#fff",
              border: "1px solid #CFD4DB",
              borderRadius: "10px",
            }}
          >
            <OutlinedInput
              type={"text"}
              placeholder="Search for Baby"
              size="small"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
      </Box>
      <CommonDataTable
        rows={dummyData || []}
        columns={BabyDetailsTableColumn()}
      />
    </Container>
  );
};

export default BabyDetails;
