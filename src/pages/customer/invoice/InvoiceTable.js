import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InvoiceColumns from "./InvoiceTableColumn";
import CommonDataTable from "../../../components/GlobalComponents/CommonDataTable";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvoiceList } from "../../../redux/Slices/invoiceSlice";

const InvoiceTable = () => {
  const dispatch = useDispatch();
  const invoiceList = useSelector((state) => state.invoice.invoiceList);
  console.log("lllllllllllllllllll ", invoiceList);
  useEffect(() => {
    dispatch(getAllInvoiceList());
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const filteredList = invoiceList?.filter((item) => {
    const matchesSearch =
      item?.CRNno &&
      item.CRNno.toLowerCase().includes(searchValue.toLowerCase());

    return matchesSearch;
  });

  return (
    <Container
      maxWidth="xxl"
      sx={{
        maxHeight: "85%",
        overflow: "auto",
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
          marginTop: "15px",
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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
      </Box>
      <CommonDataTable rows={invoiceList || []} columns={InvoiceColumns()} />
    </Container>
  );
};

export default InvoiceTable;
