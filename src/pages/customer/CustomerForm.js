import React, {
  useEffect, useState, useImperativeHandle,
  forwardRef
} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
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
import SingleSelect from "../../components/GlobalComponents/SingleSelect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../service/globalFunctions";
import api from "../../utils/api/httpRequest";
import { customerCreateByAdmin } from "../../redux/Slices/customerSlice"
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

const CustomerForm = forwardRef((props, ref) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  // console.log('All city for a state', getCitiesList)
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(getStateList);

  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    registrationCRNid: "",
    addressLine1: "",
    addressLine2: "",
    nearLandMark: "",
    country: 352,
    state: null,
    city: null,
    profilePhoto: "",
    pincode: "",
    subscriptionPlanId: null,
    totalAmount: "",
    offerValue: "",
    isActive: "",
    PaymentGatewayID: "",
    paymentType: "",
    paymentDate: ""

    // ------------------

    // "countryCode": "+91",
    // "phoneNumber": "2374192564",
    // "firstName": "littu",
    // "lastName": "prasad",
    // "email": "prasad@gmail.com",
    // "addressLine1": "H.No:1-3/4, madur nagar",
    // "addressLine2": "naraynakhed",
    // "nearLandMark": "Back side of friu market",
    // "city": 52385,
    // "state": 1699,
    // "pincode": "508896",
    // "country": 352,
    // "profilePhoto": "",
    // "registrationCRNid": "CV/HYD/ytgh7",
    // "subscriptionPlanId": 2,
    // "totalAmount": "60,000",
    // "offerPrice": "0.00",
    // "isActive": 47,
    // "PaymentGatewayID": "bnjhbrtkeyh4565g",
    // "paymentType": "Card",
    // "paymentDate": "2024-07-04T14:27:35.348+0000"
  });

  const [errorValues, seterrorValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    registrationCRNid: "",
    addressLine1: "",
    addressLine2: "",
    nearLandMark: "",
    country: null,
    state: null,
    city: null,
    pincode: "",
    subscriptionPlanId: null,
    totalAmount: "",
    offerValue: "",
    isActive: "",
    PaymentGatewayID: "",
    paymentType: "",
    paymentDate: ""
  })

  useImperativeHandle(ref, () => ({
    validateCustomerAddForm: () => {
      if (!formValues.firstName) {
        seterrorValues((data) => ({
          ...data,
          ['firstName']: "First Name is required."
        }))
        return
      }
      if (!formValues.lastName) {
        seterrorValues((data) => ({
          ...data,
          ['lastName']: "Last Name is required."
        }))
        return
      }
      if (!formValues.email) {
        seterrorValues((data) => ({
          ...data,
          ['email']: "Email ID is required."
        }))
        return
      }
      if (!formValues.phoneNumber) {
        seterrorValues((data) => ({
          ...data,
          ['phoneNumber']: "Phone Number is required."
        }))
        return
      }
      if (!formValues.registrationCRNid) {
        seterrorValues((data) => ({
          ...data,
          ['registrationCRNid']: "CRN Number is required."
        }))
        return
      }
      if (!formValues.addressLine1) {
        seterrorValues((data) => ({
          ...data,
          ['addressLine1']: "Address 1 is required."
        }))
        return
      }
      if (!formValues.addressLine2) {
        seterrorValues((data) => ({
          ...data,
          ['addressLine2']: "Address 2 is required."
        }))
        return
      }
      if (!formValues.nearLandMark) {
        seterrorValues((data) => ({
          ...data,
          ['nearLandMark']: "Near Land Mark is required."
        }))
        return
      }
      if (!formValues.country) {
        seterrorValues((data) => ({
          ...data,
          ['country']: "Country is required."
        }))
        return
      }
      if (!formValues.state) {
        seterrorValues((data) => ({
          ...data,
          ['state']: "State is required."
        }))
        return
      }
      if (!formValues.city) {
        seterrorValues((data) => ({
          ...data,
          ['city']: "City is required."
        }))
        return
      }
      if (!formValues.pincode) {
        seterrorValues((data) => ({
          ...data,
          ['pincode']: "Pincode is required."
        }))
        return
      }
      if (!formValues.subscriptionPlanId) {
        seterrorValues((data) => ({
          ...data,
          ['subscriptionPlanId']: "Subscription Plan ID is required."
        }))
        return
      }
      if (!formValues.totalAmount) {
        seterrorValues((data) => ({
          ...data,
          ['totalAmount']: "Total Amount is required."
        }))
        return
      }
      if (!formValues.offerValue) {
        seterrorValues((data) => ({
          ...data,
          ['offerValue']: "Offer Value is required."
        }))
        return
      }
      if (!formValues.isActive) {
        seterrorValues((data) => ({
          ...data,
          ['isActive']: "Status is required."
        }))
        return
      }
      if (!formValues.PaymentGatewayID) {
        seterrorValues((data) => ({
          ...data,
          ['PaymentGatewayID']: "Trasaction ID is required."
        }))
        return
      }
      if (!formValues.paymentType) {
        seterrorValues((data) => ({
          ...data,
          ['paymentType']: "Payment Mode is required."
        }))
        return
      }
      if (!formValues.paymentDate) {
        seterrorValues((data) => ({
          ...data,
          ['paymentDate']: "Trasaction Date And Time is required."
        }))
        return
      }
      console.log("total payloadv ", formValues);
      // dispatchEvent(customerCreateByAdmin(formValues))

    }
  }))

  const handleChange = (e, name) => {
    setFormValues((data) => ({
      ...data,
      [name]: e
    }))
    seterrorValues((data) => ({
      ...data,
      [name]: ""
    }))
  };

  const handleImageUpload = async (e) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("folder", "customerProfile");
    try {
      const response = await api.post("/upload", formData, { headers });
      if (response?.data?.status === 200) {
        // console.log(response?.data?.message).
        setFormValues((prev) => ({
          ...prev,
          doctorProfile: response?.data?.data?.key,
        }));
        console.log(formValues?.doctorProfile);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        padding: "8px",
      }}
    >
      <ToastContainer />
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
            Add/Edit Customer
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
                    {errorValues?.firstName ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.firstName}</Typography> : null}
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
                  {errorValues?.lastName ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.lastName}</Typography> : null}
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

                    {errorValues?.email ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.email}</Typography> : null}
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

                  {errorValues?.phoneNumber ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.phoneNumber}</Typography> : null}
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
                      value={formValues?.registrationCRNid}
                      onChange={(e) =>
                        handleChange(e.target.value, "registrationCRNid")
                      }
                    />
                    {errorValues?.registrationCRNid ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.registrationCRNid}</Typography> : null}
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
                      value={formValues?.addressLine1}
                      onChange={(e) => {
                        handleChange(e.target.value, "addressLine1");
                      }}
                    />
                    {errorValues?.addressLine1 ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.addressLine1}</Typography> : null}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Address 2<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.addressLine2}
                      onChange={(e) => {
                        handleChange(e.target.value, "addressLine2");
                      }}
                    />
                    {errorValues?.addressLine2 ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.addressLine2}</Typography> : null}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Near Land mark <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.nearLandMark}
                      onChange={(e) => {
                        handleChange(e.target.value, "nearLandMark");
                      }}
                    />
                    {errorValues?.nearLandMark ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.nearLandMark}</Typography> : null}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>

                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Country <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    disabled={true}
                    data={upDatedCountryList}
                    value={formValues?.country}
                    onChange={(e) => {
                      handleChange(e, "country");
                    }}
                  />
                  {errorValues?.country ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.country}</Typography> : null}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    State <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.state}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "state");
                    }}
                  />
                  {errorValues?.state ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.state}</Typography> : null}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.city}
                    onChange={(e) => {
                      handleChange(e, "city");
                    }}
                  />
                  {errorValues?.city ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.city}</Typography> : null}
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
                      value={formValues?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                    {errorValues?.pincode ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.pincode}</Typography> : null}
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
                    value={formValues?.subscriptionPlanId}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "subscriptionPlanId");
                    }}
                  />
                  {errorValues?.subscriptionPlanId ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.subscriptionPlanId}</Typography> : null}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ marginBottom: "60px" }}>
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
                      value={formValues?.totalAmount}
                      onChange={(e) => handleChange(e.target.value, "totalAmount")}
                    />
                    {errorValues?.totalAmount ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.totalAmount}</Typography> : null}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    offer Value <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.offerValue}
                      onChange={(e) => handleChange(e.target.value, "offerValue")}
                    />
                    {errorValues?.offerValue ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.offerValue}</Typography> : null}
                  </FormControl>
                </Grid>


              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Status <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.isActive}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "isActive");
                    }}
                  />
                  {errorValues?.isActive ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.isActive}</Typography> : null}
                </Grid>
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
                      value={formValues?.PaymentGatewayID}
                      onChange={(e) =>
                        handleChange(e.target.value, "PaymentGatewayID")
                      }
                    />
                    {errorValues?.PaymentGatewayID ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.PaymentGatewayID}</Typography> : null}
                  </FormControl>
                </Grid>

              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Payment Mode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.paymentType}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "paymentType");
                    }}
                  />
                  {errorValues?.paymentType ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.paymentType}</Typography> : null}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Transaction Date & Time <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.paymentDate}
                      onChange={(e) =>
                        handleChange(e.target.value, "paymentDate")
                      }
                    />
                    {errorValues?.paymentDate ? <Typography sx={{ fontSize: "1rem", color: "red" }}>{errorValues?.paymentDate}</Typography> : null}
                  </FormControl>
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
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
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

                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Stack></Stack>
                        <Button
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                          sx={{ marginTop: "10px" }}
                        >
                          Upload Image
                          <input
                            type="file"
                            accept="image/jpeg, image/png, image/svg+xml"
                            hidden
                            onChange={handleImageUpload}
                          />
                        </Button>
                      </Stack>

                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
});

export default CustomerForm;
