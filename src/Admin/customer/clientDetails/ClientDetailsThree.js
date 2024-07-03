import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SingleSelect from "../../../GlobalComponents/SingleSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../../globalFunctions";
import {
  getAnnexureInfo,
  getCityList,
  getCountryList,
  getStateList,
} from "../../Slices/globalSlice";
import { addOrupdateAnnexureInfo } from "../../Slices/customerClientSlice";

const headingStyle = {
  fontSize: "18px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "15px",
};

const inputLableStyle = {
  color: "black",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};

const ClientDetailsThree = forwardRef((props, ref) => {
  var {
    handleNext,
    handlePrev,
    currentStep,
    setCurrentStep,
    totalSteps,
  } = props;

  const [
    customerAnnexureInformationId,
    setCustomerAnnexureInformationId,
  ] = useState(null);
  const dispatch = useDispatch();
  const allStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(allStateList);
  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);

  const SubscribedInnerPageData = useSelector(
    (state) => state.global.SubscribedUserData
  );
  console.log("SubscribedInnerPageData", SubscribedInnerPageData);

  const customerDetail = useSelector((state) => state.customers.customerDetail);
  const customerID = customerDetail?.customerID;
  console.log("customerDetail customerID", customerID);

  useEffect(() => {
    dispatch(getCountryList());
    dispatch(getStateList(352));
    dispatch(getAnnexureInfo(customerID));
  }, []);

  const [formValues, setFormValues] = useState({
    Address: "",
    Country: 352,
    State: "",
    City: "",
    PinCode: "",
    permanentAddressIsSameAsCorrespondenceAddress: false,
    PermanentAddress: "",
    PermanentAddressCountry: 352,
    PermanentAddressState: "",
    PermanentAddressCity: "",
    PermanentAddressPinCode: "",
  });

  const handleChange = (value, name) => {
    if (name === "permanentAddressIsSameAsCorrespondenceAddress") {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
        ...(value ? copyAddress(prev) : clearAddress()),
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const copyAddress = (values) => ({
    PermanentAddress: values.Address,
    PermanentAddressCountry: values.Country,
    PermanentAddressState: values.State,
    PermanentAddressCity: values.City,
    PermanentAddressPinCode: values.PinCode,
  });

  const clearAddress = () => ({
    PermanentAddress: "",
    PermanentAddressCountry: 352,
    PermanentAddressState: "",
    PermanentAddressCity: "",
    PermanentAddressPinCode: "",
  });

  useEffect(() => {
    async function getCommunicationData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageData?.customerAnnexureInformationId
      );
      if (
        SubscribedInnerPageData &&
        SubscribedInnerPageData.CustomerCommunicationDetails
      ) {
        for (let item in SubscribedInnerPageData.CustomerCommunicationDetails) {
          for (let item1 in formValues) {
            if (item1 == item) {
              formValues[item1] =
                SubscribedInnerPageData.CustomerCommunicationDetails[item];
            }
          }
        }
      }
    }
    getCommunicationData();
  }, [SubscribedInnerPageData]);
  useEffect(() => {
    // e.preventDefault();
    getAnnexureInfo();
  }, [handlePrev]);
  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    getCommunicationDetailsChildData: () => {
      if (!formValues.Address.trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Address: "Address is required",
        }));
        return;
      } else if (!formValues.Country) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Country: "Country is required",
        }));
        return;
      } else if (!formValues.State) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          State: "State is required",
        }));
        return;
      } else if (!formValues.City) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          City: "City is required",
        }));
        return;
      } else if (!formValues.PinCode) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PinCode: "PinCode is required",
        }));
        return;
      } else if (!formValues.PermanentAddress) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PermanentAddress: "Permanent Address is required",
        }));
        return;
      } else if (!formValues.PermanentAddressCountry) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PermanentAddressCountry: "Permanent Address Country is required",
        }));
        return;
      } else if (!formValues.PermanentAddressState) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PermanentAddressState: "Permanent Address State is required",
        }));
        return;
      } else if (!formValues.PermanentAddressCity) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PermanentAddressCity: "Permanent Address City is required",
        }));
        return;
      } else if (!formValues.PermanentAddressPinCode) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PermanentAddressPinCode: "Permanent Address PinCode is required",
        }));
        return;
      }
      dispatch(
        addOrupdateAnnexureInfo({
          CustomerCommunicationDetails: formValues,
          customerAnnexureInformationId: customerAnnexureInformationId,
          customerID: customerID,
        })
      );

      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    },
  }));
  console.log("formValues", formValues);

  return (
    <Card variant="outlined">
      <Typography variant="h5" sx={headingStyle}>
        COMMUNICATION DETAILS
      </Typography>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Current Address <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.Address}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.Address}
                      onChange={(e) => handleChange(e.target.value, "Address")}
                    />
                    {!!errors.Address && (
                      <FormHelperText>{errors.Address}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Country <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.Country}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      // disabled={true}
                      data={upDatedCountryList}
                      value={formValues?.Country}
                      onChange={(e) => {
                        handleChange(e, "Country");
                      }}
                    />
                    {!!errors.Country && (
                      <FormHelperText>{errors.Country}</FormHelperText>
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
                    error={!!errors.State}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={stateList}
                      value={formValues?.State}
                      onChange={(e) => {
                        dispatch(getCityList(e));
                        handleChange(e, "State");
                      }}
                    />
                    {!!errors.State && (
                      <FormHelperText>{errors.State}</FormHelperText>
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
                    error={!!errors.City}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={cityList}
                      value={formValues?.City}
                      onChange={(e) => {
                        handleChange(e, "City");
                      }}
                    />
                    {!!errors.City && (
                      <FormHelperText>{errors.City}</FormHelperText>
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
                    error={!!errors.PinCode}
                  >
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="pincode"
                      size="small"
                      value={formValues?.PinCode}
                      onChange={(e) => handleChange(e.target.value, "PinCode")}
                    />
                    {!!errors.PinCode && (
                      <FormHelperText>{errors.PinCode}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%", color: "black" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="permanentAddressIsSameAsCorrespondenceAddress"
                        checked={
                          formValues?.permanentAddressIsSameAsCorrespondenceAddress
                        }
                        onChange={(e) =>
                          handleChange(
                            e.target.checked,
                            "permanentAddressIsSameAsCorrespondenceAddress"
                          )
                        }
                      />
                    }
                    label="If permanent address is same as correspondence address"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent sx={{ height: "355px" }}>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Permanent Address (If different from current address)
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.PermanentAddress}
                  >
                    <OutlinedInput
                      fullWidth
                      id="PermanentAddress"
                      name="PermanentAddress"
                      placeholder="Input text"
                      size="small"
                      value={formValues?.PermanentAddress}
                      onChange={(e) =>
                        handleChange(e.target.value, "PermanentAddress")
                      }
                    />
                    {!!errors.PermanentAddress && (
                      <FormHelperText>{errors.PermanentAddress}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Country <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.PermanentAddressCountry}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      // disabled={true}
                      data={upDatedCountryList}
                      value={formValues?.PermanentAddressCountry}
                      onChange={(e) => {
                        handleChange(e, "PermanentAddressCountry");
                      }}
                    />
                    {!!errors.PermanentAddressCountry && (
                      <FormHelperText>
                        {errors.PermanentAddressCountry}
                      </FormHelperText>
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
                    error={!!errors.PermanentAddressState}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={stateList}
                      value={formValues?.PermanentAddressState}
                      onChange={(e) => {
                        dispatch(getCityList(e));
                        handleChange(e, "PermanentAddressState");
                      }}
                    />
                    {!!errors.PermanentAddressState && (
                      <FormHelperText>
                        {errors.PermanentAddressState}
                      </FormHelperText>
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
                    error={!!errors.PermanentAddressCity}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={cityList}
                      value={formValues?.PermanentAddressCity}
                      onChange={(e) => {
                        handleChange(e, "PermanentAddressCity");
                      }}
                    />
                    {!!errors.PermanentAddressCity && (
                      <FormHelperText>
                        {errors.PermanentAddressCity}
                      </FormHelperText>
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
                    error={!!errors.PermanentAddressPinCode}
                  >
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="PermanentAddressPinCode"
                      name="PermanentAddressPinCode"
                      placeholder="pincode"
                      size="small"
                      value={formValues?.PermanentAddressPinCode}
                      onChange={(e) =>
                        handleChange(e.target.value, "PermanentAddressPinCode")
                      }
                    />
                    {!!errors.PermanentAddressPinCode && (
                      <FormHelperText>
                        {errors.PermanentAddressPinCode}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ClientDetailsThree;
