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
import CommonSelect from "../../components/GlobalComponents/CommonSelect";
import CommonDataTable from "../../components/GlobalComponents/CommonDataTable";
import customerColumns from "./Customertablecolumn";
import { getCustomersList } from "../../redux/Slices/customerSlice";

const Customers = () => {
  const dispatch = useDispatch();
  const customersList = useSelector((state) => state.customers.customersList);

  console.log("listData", customersList);

  useEffect(() => {
    dispatch(getCustomersList(null));
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const filteredList = customersList?.filter((item) => {
    const matchesSearch =
      item?.firstName &&
      item.firstName.toLowerCase().includes(searchValue.toLowerCase());

    return matchesSearch;
  });
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
    <Container maxWidth="xxl" sx={{ background: "#fff" }}>
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
            {customersList?.length} Customer
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
            <OutlinedInput
              type={"text"}
              placeholder="Search Customer"
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
          <CommonSelect data={names} Placeholder={"Status"} />
          <MoreVertIcon />
        </Stack>
      </Box>
      <CommonDataTable rows={filteredList || []} columns={customerColumns()} />
    </Container>
  );
};

export default Customers;
