import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import SingleSelect from "../../GlobalComponents/SingleSelect";

import {
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../globalFunctions";
import { useNavigate } from "react-router-dom";

const headingStyle = {
  fontSize: "14px",
  fontWeight: "bold",
};

const inputLableStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CustomerEdit = () => {
  const navigate = useNavigate();
  const getStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(getStateList);

  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);

  const [formValues, setFormValues] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "1234567890",
    crnNumber: "CRN123456",
    CustomerAddress: {
      addressLine1: "123 Main St",
      country: 352,
      state: "CA",
      city: "Los Angeles",
      pincode: "90001",
    },
    customerPlan: "Basic Plan",
    payment: {
      amount: "100",
      status: "Paid",
      transactionId: "TXN123456",
      paymentMode: "Credit Card",
      transactionDate: "2023-06-01",
      transactionTime: "12:00 PM",
    },
  });

  const handleSave = () => {
    console.log("Form Values:", formValues);
  };
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => {
      let temp = { ...prev };
      switch (name) {
        case "CustomerAddress1":
          temp.CustomerAddress = {
            ...temp.CustomerAddress,
            addressLine1: value,
          };
          break;

        case "country":
          temp.CustomerAddress = { ...temp.CustomerAddress, country: value };
          break;

        case "state":
          temp.CustomerAddress = { ...temp.CustomerAddress, state: value };
          break;

        case "city":
          temp.CustomerAddress = { ...temp.CustomerAddress, city: value };
          break;

        case "pincode":
          temp.CustomerAddress = { ...temp.CustomerAddress, pincode: value };
          break;

        case "amount":
          temp.payment = { ...temp.payment, amount: value };
          break;

        case "status":
          temp.payment = { ...temp.payment, status: value };
          break;

        case "transactionId":
          temp.payment = { ...temp.payment, transactionId: value };
          break;

        case "paymentMode":
          temp.payment = { ...temp.payment, paymentMode: value };
          break;

        case "transactionDate":
          temp.payment = { ...temp.payment, transactionDate: value };
          break;

        case "transactionTime":
          temp.payment = { ...temp.payment, transactionTime: value };
          break;

        default:
          temp[name] = value;
          break;
      }
      return temp;
    });
  };

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        maxHeight: "75%",
        overflow: "auto",
        background: "#fff",
        padding: "8px",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"40px"}
        pt={5}
        pb={5}
        pl={1}
      >
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          <Typography
            sx={{ fontWeight: "bold", paddingTop: "8px" }}
            variant="h5"
          >
            Edit Customer
          </Typography>
          <Typography
            variant="h5"
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "8px",
              borderRadius: "4px",
            }}
            color="primary"
          >
            001 Customer
          </Typography>
        </Stack>
        <Stack>
          <Stack direction={"row"} spacing={2}>
            <Button
              size="small"
              variant="contained"
              startIcon={<SaveAltIcon />}
              onClick={(e) => {
                e.preventDefault();
                handleSave();
                navigate("/customerPage/customers");
              }}
            >
              Save
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<CloseIcon />}
              // onClick={(e) => {
              //   e.preventDefault();
              //   setFormOpen(null);
              //   // dispatch(getHospitalsList(searchQuery))
              //   setActiveItem("Customers");
              //   navigate("/customerPage/customers");
              // }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} gap={2}>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" sx={headingStyle}>
                GENERAL INFORMATION
              </Typography>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    First Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.firstName}
                      onChange={(e) =>
                        handleChange(e.target.value, "firstName")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Last Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.lastName}
                    onChange={(e) => handleChange(e.target.value, "lastName")}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Email Address <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Email"
                      size="small"
                      value={formValues?.email}
                      onChange={(e) => handleChange(e.target.value, "email")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Phone Number <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Phone Number"
                    size="small"
                    value={formValues?.phoneNumber}
                    onChange={(e) =>
                      handleChange(e.target.value, "phoneNumber")
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    CRN Number<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input CRN Number"
                      size="small"
                      value={formValues?.crnNumber}
                      onChange={(e) =>
                        handleChange(e.target.value, "crnNumber")
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ mt: 1 }}
              >
                <Typography sx={headingStyle}>CUSTOMER ADDRESS</Typography>
              </Box>
              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Address 1<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.CustomerAddress?.addressLine1}
                      onChange={(e) => {
                        handleChange(e.target.value, "CustomerAddress1");
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.CustomerAddress?.city}
                    onChange={(e) => {
                      handleChange(e, "city");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    State <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.CustomerAddress?.state}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "state");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Country <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    disabled={true}
                    data={upDatedCountryList}
                    value={formValues?.CustomerAddress?.country}
                    onChange={(e) => {
                      handleChange(e, "country");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Pincode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="pincode"
                      size="small"
                      value={formValues?.CustomerAddress?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ mt: 1 }}
              >
                <Typography sx={headingStyle}>CUSTOMER Plan</Typography>
              </Box>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Customer Plan <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.customerPlan}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "customerPlan");
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ mt: 1 }}
              >
                <Typography sx={headingStyle}>PAYMENT</Typography>
              </Box>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Amount <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.payment?.amount}
                      onChange={(e) => handleChange(e.target.value, "amount")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Status <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.payment?.status}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "status");
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Trasaction ID <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.payment?.transactionId}
                      onChange={(e) =>
                        handleChange(e.target.value, "transactionId")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Payment Mode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.payment?.paymentMode}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "paymentMode");
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Trasaction Date <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.payment?.transactionDate}
                      onChange={(e) =>
                        handleChange(e.target.value, "transactionDate")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Trasaction Time <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.payment?.transactionTime}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "transactionTime");
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" sx={headingStyle}>
                PROFILE
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "20px" }}>
                Upload Your Profile Picture
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                    <Avatar sx={{ width: 200, height: 200, marginRight: 2 }} />
                    <Stack sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                        Drop your new profile Image here
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ marginBottom: "10px", marginLeft: "50px" }}
                      >
                        Maximum (2MB)
                      </Typography>
                      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                        Support Formats: JPG, PNG, SVG
                      </Typography>
                      <Box sx={{ alignItems: "center", marginLeft: "50px" }}>
                        <Button
                          component="label"
                          variant="contained"
                          disabled
                          sx={{ fontSize: "24px" }}
                        >
                          Choose File
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ marginTop: "10px", marginLeft: "400px" }}
              >
                Upload Image
                <VisuallyHiddenInput type="file" />
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default CustomerEdit;
