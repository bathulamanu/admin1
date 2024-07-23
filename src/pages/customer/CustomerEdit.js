import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SingleSelect from "../../components/GlobalComponents/SingleSelect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  formatDateYYYYMMDD,
  getCityIdList,
  getNamesIdList,
  getPaymentModeListById,
  getPaymentStatusListById,
  getPlanListById,
  getStateIdList,
} from "../../service/globalFunctions";
import { useNavigate } from "react-router-dom";
import {
  customerUpdateByAdmin,
  getCustomerDetails,
  getCustomersList,
} from "../../redux/Slices/customerSlice";
import {
  getCityList,
  getCountryList,
  getPaymentModeList,
  getPaymentStatusList,
  getStateList,
} from "../../redux/Slices/globalSlice";
import { getSubscriptionPlan } from "../../redux/Slices/planSlice";
import api from "../../utils/api/httpRequest";

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

function deepCopyFormValues(customerDetail, formValues) {
  function deepCopy(target, source) {
    for (let key in source) {
      if (source[key] && typeof source[key] === "object") {
        if (Array.isArray(source[key])) {
          target[key] = [...source[key]];
        } else {
          if (!target[key]) target[key] = {};
          deepCopy(target[key], source[key]);
        }
      } else {
        target[key] = source[key];
      }
    }
  }

  let copiedFormValue = JSON.parse(JSON.stringify(formValues));
  deepCopy(copiedFormValue, customerDetail);
  return copiedFormValue;
}
const CustomerEdit = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getAllStateList = useSelector((state) => state.global.stateList);
  const stateList = getStateIdList(getAllStateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  const cityList = getCityIdList(getCitiesList);
  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);
  const getAllPlansList = useSelector((state) => state.plan.planList);
  const plansList = getPlanListById(getAllPlansList);
  const getAllPaymentModeList = useSelector(
    (state) => state.global.paymentModeList
  );
  const paymentModeList = getPaymentModeListById(getAllPaymentModeList);
  const getAllPaymentStatusList = useSelector(
    (state) => state.global.paymentStatusList
  );
  const paymentStatusList = getPaymentStatusListById(getAllPaymentStatusList);

  useEffect(() => {
    dispatch(getCountryList());
    dispatch(getStateList(352));
    dispatch(getSubscriptionPlan());
    dispatch(getPaymentModeList(null));
    dispatch(getPaymentStatusList(null));
  }, [dispatch]);
  const customerDetail = useSelector((state) => state.customers.customerDetail);

  useEffect(() => {
    const customerID = localStorage.getItem("selectedCustomerId");
    dispatch(getCustomerDetails(customerID));
  }, [dispatch]);
  const customerID = localStorage.getItem("selectedCustomerId");

  const [formValues, setFormValues] = useState({
    customerID: customerID,
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
    paymentStatus: "",
    PaymentGatewayID: "",
    paymentType: "",
    paymentDate: "",
  });

  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    validateCustomerEditForm: () => {
      if (!formValues.firstName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: "First Name is required.",
        }));
        return;
      } else if (!formValues.lastName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: "Last Name is required.",
        }));
        return;
      } else if (!formValues.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email ID is required.",
        }));
        return;
      } else if (!formValues.phoneNumber) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Phone Number is required.",
        }));
        return;
      } else if (!formValues.registrationCRNid) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          registrationCRNid: "CRN Number is required.",
        }));
        return;
      } else if (!formValues.addressLine1) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          addressLine1: "Address 1 is required.",
        }));
        return;
      }
      if (!formValues.addressLine2) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          addressLine2: "Address 2 is required.",
        }));
        return;
      } else if (!formValues.nearLandMark) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          nearLandMark: "Near Land Mark is required.",
        }));
        return;
      } else if (!formValues.country) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          country: "Country is required.",
        }));
        return;
      } else if (!formValues.state) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          state: "State is required.",
        }));
        return;
      } else if (!formValues.city) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          city: "City is required.",
        }));
        return;
      } else if (!formValues.pincode) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pincode: "Pincode is required.",
        }));
        return;
      } else if (!formValues.subscriptionPlanId) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          subscriptionPlanId: "Subscription Plan ID is required.",
        }));
        return;
      } else if (!formValues.totalAmount) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          totalAmount: "Total Amount is required.",
        }));
        return;
      } else if (!formValues.offerValue) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          offerValue: "Offer Value is required.",
        }));
        return;
      } else if (!formValues.paymentStatus) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          paymentStatus: "Status is required.",
        }));
        return;
      } else if (!formValues.PaymentGatewayID) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PaymentGatewayID: "Trasaction ID is required.",
        }));
        return;
      } else if (!formValues.paymentType) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          paymentType: "Payment Mode is required.",
        }));
        return;
      } else if (!formValues.paymentDate) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          paymentDate: "Trasaction Date And Time is required.",
        }));
        return;
      }
      // console.log("total payloadv ", formValues);
      dispatch(customerUpdateByAdmin(formValues));
      dispatch(getCustomersList());
      navigate("/customerPage/customers");
    },
  }));

  const handleChange = (e, name) => {
    // setFormValues((data) => ({
    //   ...data,
    //   [name]: e,
    // }));
    const value = e.target ? e.target.value : e;

    setFormValues((prev) => {
      let updatedValues = { ...prev, [name]: value };

      if (name === "subscriptionPlanId") {
        const selectedPlane = getAllPlansList.find(
          (plan) => plan.subscriptionID === value
        );

        if (selectedPlane) {
          updatedValues = {
            ...updatedValues,
            totalAmount: selectedPlane.price,
          };
        } else {
          updatedValues = {
            ...updatedValues,
            totalAmount: "",
          };
        }
      }

      return updatedValues;
    });

    setErrors({
      ...errors,
      [name]: "",
    });
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
          profilePhoto: response?.data?.data?.key,
        }));
        console.log(formValues?.profilePhoto);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updatedFormValues = deepCopyFormValues(customerDetail, formValues);

  useEffect(() => {
    setFormValues((prevValue) => ({
      ...prevValue,
      ...updatedFormValues,
    }));
  }, [customerDetail]);

  console.log("Form Values:", formValues);

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "40%",
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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.firstName}
                  >
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
                    {!!errors?.firstName && (
                      <FormHelperText>{errors?.firstName}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Last Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.lastName}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.lastName}
                      onChange={(e) => handleChange(e.target.value, "lastName")}
                    />
                    {!!errors?.lastName && (
                      <FormHelperText>{errors?.lastName}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Email Address <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.email}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Email"
                      size="small"
                      value={formValues?.email}
                      onChange={(e) => handleChange(e.target.value, "email")}
                    />

                    {errors?.email && (
                      <FormHelperText>{errors?.email}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Phone Number <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.phoneNumber}
                  >
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

                    {errors?.phoneNumber && (
                      <FormHelperText>{errors?.phoneNumber}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    CRN Number<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.registrationCRNid}
                  >
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
                    {errors?.registrationCRNid && (
                      <FormHelperText>
                        {errors?.registrationCRNid}
                      </FormHelperText>
                    )}
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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.addressLine1}
                  >
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
                    {errors?.addressLine1 && (
                      <FormHelperText>{errors?.addressLine1}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Address 2<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.addressLine2}
                  >
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
                    {errors?.addressLine2 && (
                      <FormHelperText>{errors?.addressLine2}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Near Land mark <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.nearLandMark}
                  >
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
                    {errors?.nearLandMark && (
                      <FormHelperText>{errors?.nearLandMark}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Country <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.country}
                  >
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
                    {errors?.country && (
                      <FormHelperText>{errors?.country}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    State <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.state}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={stateList}
                      value={formValues?.state}
                      onChange={(e) => {
                        dispatch(getCityList(e));
                        handleChange(e, "state");
                      }}
                    />
                    {errors?.state && (
                      <FormHelperText>{errors?.state}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.city}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={cityList}
                      value={formValues?.city}
                      onChange={(e) => {
                        handleChange(e, "city");
                      }}
                    />
                    {errors?.city && (
                      <FormHelperText>{errors?.city}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Pincode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.pincode}
                  >
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="pincode"
                      size="small"
                      value={formValues?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                    {errors?.pincode && (
                      <FormHelperText>{errors?.pincode}</FormHelperText>
                    )}
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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.subscriptionPlanId}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={plansList}
                      value={formValues?.subscriptionPlanId}
                      onChange={(e) => {
                        handleChange(e, "subscriptionPlanId");
                      }}
                    />
                    {errors?.subscriptionPlanId && (
                      <FormHelperText>
                        {errors?.subscriptionPlanId}
                      </FormHelperText>
                    )}
                  </FormControl>
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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.totalAmount}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      disabled
                      value={formValues?.totalAmount}
                      onChange={(e) =>
                        handleChange(e.target.value, "totalAmount")
                      }
                    />
                    {errors?.totalAmount && (
                      <FormHelperText>{errors?.totalAmount}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    offer Value <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.offerValue}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.offerValue}
                      onChange={(e) =>
                        handleChange(e.target.value, "offerValue")
                      }
                    />
                    {errors?.offerValue && (
                      <FormHelperText>{errors?.offerValue}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Status <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.paymentStatus}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={paymentStatusList}
                      value={formValues?.paymentStatus}
                      onChange={(e) => {
                        handleChange(e, "paymentStatus");
                      }}
                    />
                    {errors?.isActive && (
                      <FormHelperText>{errors?.isActive}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Trasaction ID <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.PaymentGatewayID}
                  >
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
                    {errors?.PaymentGatewayID && (
                      <FormHelperText>
                        {errors?.PaymentGatewayID}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Payment Mode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.paymentType}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={paymentModeList}
                      value={formValues?.paymentType}
                      onChange={(e) => {
                        handleChange(e, "paymentType");
                      }}
                    />
                    {errors?.paymentType && (
                      <FormHelperText>{errors?.paymentType}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Transaction Date & Time <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.paymentDate}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      type="date"
                      size="small"
                      value={formatDateYYYYMMDD(formValues?.paymentDate)}
                      onChange={(e) =>
                        handleChange(e.target.value, "paymentDate")
                      }
                    />
                    {errors?.paymentDate && (
                      <FormHelperText>{errors?.paymentDate}</FormHelperText>
                    )}
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
                    <Avatar
                      src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.profilePhoto}`}
                      sx={{ width: 200, height: 200, marginRight: 2 }}
                    />
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

export default CustomerEdit;
