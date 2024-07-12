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
import CommonDataTable from "../../../components/GlobalComponents/CommonDataTable";
import SearchIcon from "@mui/icons-material/Search";
import BabyDetailsTableColumn from "./BabyDetailsTableColumn";
import { useDispatch, useSelector } from "react-redux";
import { getAllBabyList } from "../../../redux/Slices/babySlice";

const BabyDetails = () => {
  const dispatch = useDispatch();
  const babyList = useSelector((state) => state.baby.babyList);
  console.log("listData", babyList);
  useEffect(() => {
    dispatch(getAllBabyList());
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const filteredList = babyList?.filter((item) => {
    const matchesSearch =
      item?.babyName &&
      item.babyName.toLowerCase().includes(searchValue.toLowerCase());

    return matchesSearch;
  });

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
      <CommonDataTable
        rows={filteredList || []}
        columns={BabyDetailsTableColumn()}
      />
    </Container>
  );
};

export default BabyDetails;
