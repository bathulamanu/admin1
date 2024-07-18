import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import CustomerSettingsDataTable from "./CustomerSettingsDataTable";
import customerSettingColumns from "./CustomerSettingsTableColumn";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTitle } from "../../../redux/Slices/settingCustomerLayout";
import {
  GetButtonText,
  getPaymentModeList,
  getPaymentStatusList,
} from "../../../redux/Slices/globalSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { activeTitle, activeButton } = useSelector(
    (state) => state.settingCutomerLayout
  );
  const handleButtonClick = (newTitle, buttonIndex) => {
    dispatch(setActiveTitle({ title: newTitle, buttonIndex }));
  };
  const getAllPaymentModeList = useSelector(
    (state) => state.global.paymentModeList
  );
  const getAllPaymentStatusList = useSelector(
    (state) => state.global.paymentStatusList
  );
  const getButtonTextList = useSelector((state) => state.global.buttonTextData);
  useEffect(() => {
    dispatch(getPaymentModeList(null));
    dispatch(getPaymentStatusList(null));
    dispatch(GetButtonText(null));
  }, [dispatch]);

  //PaymentMode
  const [statusFilterPayMode, setStatusFilterPayMode] = useState("");
  const [searchValuePayMode, setSearchValuePayMode] = useState("");
  const [selectValuePayMode, setSelectValuePayMode] = useState("");

  const filteredListPayMode = getAllPaymentModeList.filter((item) => {
    const matchesSearchPayMode =
      item?.value &&
      item.value.toLowerCase().includes(searchValuePayMode.toLowerCase());

    const matchesStatusPayMode =
      statusFilterPayMode === "" ||
      (statusFilterPayMode === "Active" && item.IsActiveValue === true) ||
      (statusFilterPayMode === "Inactive" && item.IsActiveValue === false);

    const matchesSpecializationPayMode =
      selectValuePayMode === "" || item.value === selectValuePayMode;

    return (
      matchesSearchPayMode &&
      matchesStatusPayMode &&
      matchesSpecializationPayMode
    );
  });

  // Create a unique list of PaymentMode
  const uniquePaymentModeList = Array.from(
    new Set(getAllPaymentModeList.map((item) => item.value))
  ).map((value) => {
    return getAllPaymentModeList.find((item) => item.value === value);
  });

  //PaymentStatus
  const [statusFilterPayStatus, setStatusFilterPayStatus] = useState("");
  const [searchValuePayStatus, setSearchValuePayStatus] = useState("");
  const [selectValuePayStatus, setSelectValuePayStatus] = useState("");

  const filteredListPayStatus = getAllPaymentStatusList.filter((item) => {
    const matchesSearchPayStatus =
      item?.value &&
      item.value.toLowerCase().includes(searchValuePayStatus.toLowerCase());

    const matchesStatusPayStatus =
      statusFilterPayStatus === "" ||
      (statusFilterPayStatus === "Active" && item.IsActiveValue === true) ||
      (statusFilterPayStatus === "Inactive" && item.IsActiveValue === false);

    const matchesSpecializationPayStatus =
      selectValuePayStatus === "" || item.value === selectValuePayStatus;

    return (
      matchesSearchPayStatus &&
      matchesStatusPayStatus &&
      matchesSpecializationPayStatus
    );
  });

  // Create a unique list of PaymentStatus
  const uniquePaymentStatus = Array.from(
    new Set(getAllPaymentStatusList.map((item) => item.value))
  ).map((value) => {
    return getAllPaymentStatusList.find((item) => item.value === value);
  });

  //ButtonText
  const [statusFilterBtnText, setStatusFilterBtnText] = useState("");
  const [searchValueBtnText, setSearchValueBtnText] = useState("");
  const [selectValueBtnText, setSelectValueBtnText] = useState("");

  const filteredListBtnText = getButtonTextList.filter((item) => {
    const matchesSearchBtnText =
      item?.value &&
      item.value.toLowerCase().includes(searchValueBtnText.toLowerCase());

    const matchesStatusBtnText =
      statusFilterBtnText === "" ||
      (statusFilterBtnText === "Active" && item.IsActiveValue === true) ||
      (statusFilterBtnText === "Inactive" && item.IsActiveValue === false);

    const matchesSpecializationBtnText =
      selectValueBtnText === "" || item.value === selectValueBtnText;

    return (
      matchesSearchBtnText &&
      matchesStatusBtnText &&
      matchesSpecializationBtnText
    );
  });

  // Create a unique list of ButtonText
  const uniqueButtonTextLiat = Array.from(
    new Set(getButtonTextList.map((item) => item.value))
  ).map((value) => {
    return getButtonTextList.find((item) => item.value === value);
  });

  const getRows = () => {
    if (activeTitle === "Payment Mode") {
      return filteredListPayMode || [];
    } else if (activeTitle === "Payment Status") {
      return filteredListPayStatus || [];
    } else if (activeTitle === "Button Text") {
      return filteredListBtnText || [];
    }
    return [];
  };

  return (
    <Container maxWidth="xxl" sx={{ background: "#fff" }}>
      <ToastContainer />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"12px 8px"}
      >
        <Stack justifyContent={"center"}>
          <Typography variant="h6">{activeTitle}</Typography>
        </Stack>
        {activeTitle === "Payment Mode" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValuePayMode}
                onChange={(e) => setSearchValuePayMode(e.target.value)}
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
                displayEmpty
                placeholder="Payment Mode"
                value={selectValuePayMode}
                onChange={(e) => setSelectValuePayMode(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Payment Mode</em>
                </MenuItem>
                {uniquePaymentModeList.map((paymentMode, index) => (
                  <MenuItem key={index} value={paymentMode.value}>
                    {paymentMode.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                displayEmpty
                value={statusFilterPayMode}
                onChange={(e) => setStatusFilterPayMode(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Payment Status" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValuePayStatus}
                onChange={(e) => setSearchValuePayStatus(e.target.value)}
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
                displayEmpty
                placeholder="Payment Status"
                value={selectValuePayStatus}
                onChange={(e) => setSelectValuePayStatus(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Payment Status</em>
                </MenuItem>
                {uniquePaymentStatus.map((paymentStatus, index) => (
                  <MenuItem key={index} value={paymentStatus.value}>
                    {paymentStatus.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                displayEmpty
                value={statusFilterPayStatus}
                onChange={(e) => setStatusFilterPayStatus(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : activeTitle === "Button Text" ? (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <OutlinedInput
                type={"text"}
                placeholder="Search"
                size="small"
                value={searchValueBtnText}
                onChange={(e) => setSearchValueBtnText(e.target.value)}
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
                displayEmpty
                placeholder="Button Text"
                value={selectValueBtnText}
                onChange={(e) => setSelectValueBtnText(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Button Text</em>
                </MenuItem>
                {uniqueButtonTextLiat.map((buttonText, index) => (
                  <MenuItem key={index} value={buttonText.value}>
                    {buttonText.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "30%" }}>
              <Select
                width={"100%"}
                sx={{ height: "40px" }}
                displayEmpty
                value={statusFilterBtnText}
                onChange={(e) => setStatusFilterBtnText(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <MoreVertIcon />
          </Stack>
        ) : null}
      </Box>
      <Box display={"flex"} justifyContent={"left"} marginBottom={2} gap={2}>
        <Stack>
          <Button
            variant={activeButton === 0 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 0 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 0 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Payment Mode", 0)}
          >
            Payment Mode
          </Button>
        </Stack>
        <Stack>
          <Button
            variant={activeButton === 1 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 1 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 1 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Payment Status", 1)}
          >
            Payment Status
          </Button>
        </Stack>
        <Stack>
          <Button
            variant={activeButton === 2 ? "contained" : "outlined"}
            sx={{
              border: "none",
              backgroundColor: activeButton === 2 ? "#1976d2" : "#e0e0e0",
              color: activeButton === 2 ? "#fff" : "#000",
            }}
            onClick={() => handleButtonClick("Button Text", 2)}
          >
            Button Text
          </Button>
        </Stack>
      </Box>
      <CustomerSettingsDataTable
        rows={getRows()}
        columns={customerSettingColumns()}
      />
    </Container>
  );
};

export default SettingsPage;
