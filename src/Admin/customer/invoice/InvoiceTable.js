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
import InvoiceColumns from "./InvoiceTableColumn";
import CommonDataTable from "../../../GlobalComponents/CommonDataTable";
import SearchIcon from "@mui/icons-material/Search";

const InvoiceTable = () => {
  const dummyData = [
    {
      id: 1,
      customerName: "john doe",
      DateTime: "2023-01-01 - 12:56 PM",
      crnNo: "123456",
      planAmount: "Besic - 25000",
      status: "Paid",
    },
    {
      id: 2,
      customerName: "john doe",
      DateTime: "2023-01-01 - 12:56 PM",
      crnNo: "123456",
      planAmount: "Premium - 25000",
      status: "Paid",
    },
    {
      id: 3,
      customerName: "Ram Das",
      DateTime: "2023-01-01 - 12:56 PM",
      crnNo: "22345",
      planAmount: "Besic - 25000",
      //   status: "Pertial",
    },
  ];

  return (
    <Container
      maxWidth="xl"
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
            INVOICES
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
              placeholder="Search for Invoice"
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
      <CommonDataTable rows={dummyData || []} columns={InvoiceColumns()} />
    </Container>
  );
};

export default InvoiceTable;
