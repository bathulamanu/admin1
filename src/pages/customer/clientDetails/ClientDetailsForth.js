import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  formatDateYYYYMMDD,
  getCityIdList,
  getDoctorListById,
  getNamesIdList,
  getStateIdList,
  getTypeOfPregnancyList,
} from "../../../service/globalFunctions";
import {
  getAnnexureInfo,
  getCityList,
  getCountryList,
  getStateList,
  GetTypeOfPregnancy,
} from "../../../redux/Slices/globalSlice";
import { addOrupdateAnnexureInfo } from "../../../redux/Slices/customerClientSlice";
import { getHospitalsList } from "../../../redux/Slices/hospitalSlice";
import { getDoctorList } from "../../../redux/Slices/doctorSlice";

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

const ClientDetailsForth = forwardRef((props, ref) => {
  var { handlePrev, currentStep, setCurrentStep, totalSteps } = props;

  const [
    customerAnnexureInformationId,
    setCustomerAnnexureInformationId,
  ] = useState(null);
  const dispatch = useDispatch();
  const NoofChildres = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
  ];
  const typeOfPreganacyData = useSelector(
    (state) => state.global.typeOfPreganacyData
  );
  const typeOfPreganacyDataList = getTypeOfPregnancyList(typeOfPreganacyData);
  // console.log("typeOfPreganacyDataList", typeOfPreganacyDataList);

  const allStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(allStateList);
  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);
  const hospitalsList = useSelector((state) => state.hospitals.hospitalsList);
  const doctorsList = useSelector((state) => state.doctor.doctorsList);
  const allDoctor = getDoctorListById(doctorsList);

  const SubscribedInnerPageData = useSelector(
    (state) => state.global.SubscribedUserData
  );
  console.log("SubscribedInnerPageData", SubscribedInnerPageData);

  const customerDetail = useSelector((state) => state.customers.customerDetail);
  const customerID = customerDetail?.customerID;
  console.log("customerDetail customerID", customerID);

  useEffect(() => {
    dispatch(GetTypeOfPregnancy(null));
    dispatch(getCountryList());
    dispatch(getStateList(352));
    dispatch(getHospitalsList(null));
    dispatch(getDoctorList(null));
    dispatch(getAnnexureInfo(customerID));
  }, []);

  const [formValues, setFormValues] = useState({
    ExpectedDateOfDelivery: "",
    TypeOfpregnancy: "",
    HowManyChildrensDoYouHaveAlready: "",
    ConsultingGynocologist: null,
    ConsultingHospital: "",
    ConsultingHospitalAddress: null,
    ConsultingHospitalCountry: 352,
    ConsultingHospitalState: "",
    ConsultingHosptalCity: "",
    ConsultingHospitalPinCode: "",
    IsDeliveringHospitalSameAsConsultingHospotal: false,
    DeliveringHospitalAddress: null,
    DeliveringHospitalCountry: 352,
    DeliveringHospitalState: "",
    DeliveringHosptalCity: "",
    DeliveringHospitalPinCode: "",
    DeliveryGynocologist: null,
  });
  const handleChange = (value, name) => {
    setFormValues((prev) => {
      const newValues = { ...prev, [name]: value };

      if (name === "IsDeliveringHospitalSameAsConsultingHospotal") {
        if (value) {
          newValues.DeliveringHospitalAddress =
            newValues.ConsultingHospitalAddress;
          newValues.DeliveryGynocologist = newValues.ConsultingGynocologist;
          newValues.DeliveringHospitalCountry =
            newValues.ConsultingHospitalCountry;
          newValues.DeliveringHospitalState = newValues.ConsultingHospitalState;
          newValues.DeliveringHosptalCity = newValues.ConsultingHosptalCity;
          newValues.DeliveringHospitalPinCode =
            newValues.ConsultingHospitalPinCode;
        } else {
          newValues.DeliveringHospitalAddress = null;
          newValues.DeliveryGynocologist = null;
          newValues.DeliveringHospitalCountry = 352;
          newValues.DeliveringHospitalState = "";
          newValues.DeliveringHosptalCity = "";
          newValues.DeliveringHospitalPinCode = "";
        }
      }

      return newValues;
    });

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  useEffect(() => {
    async function getCommunicationData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageData?.customerAnnexureInformationId
      );
      if (
        SubscribedInnerPageData &&
        SubscribedInnerPageData.CustomerHospitalBirthingdetails
      ) {
        for (let item in SubscribedInnerPageData.CustomerHospitalBirthingdetails) {
          for (let item1 in formValues) {
            if (item1 == item) {
              formValues[item1] =
                item == "ExpectedDateOfDelivery"
                  ? formatDateYYYYMMDD(
                      SubscribedInnerPageData.CustomerHospitalBirthingdetails[
                        item
                      ]
                    )
                  : SubscribedInnerPageData.CustomerHospitalBirthingdetails[
                      item
                    ];
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
    getHospitalDetailsChildData: () => {
      if (!formValues.ExpectedDateOfDelivery.trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectedDateOfDelivery: "Expected Date Of Delivery is required",
        }));
        return;
      } else if (!formValues.TypeOfpregnancy) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          TypeOfpregnancy: "Type Of pregnancy is required",
        }));
        return;
      } else if (!formValues.HowManyChildrensDoYouHaveAlready) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          HowManyChildrensDoYouHaveAlready: "No of Childrens is required",
        }));
        return;
      } else if (!formValues.ConsultingGynocologist) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ConsultingGynocologist: "Consulting Gynocologist is required",
        }));
        return;
        // } else if (!formValues.ConsultingHospital) {
        //   setErrors((prevErrors) => ({
        //     ...prevErrors,
        //     ConsultingHospital: "Consulting Hospital is required",
        //   }));
        //   return;
      } else if (!formValues.ConsultingHospitalCountry) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ConsultingHospitalCountry: "Country is required",
        }));
        return;
      } else if (!formValues.ConsultingHospitalState) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ConsultingHospitalState: "State is required",
        }));
        return;
      } else if (!formValues.ConsultingHosptalCity) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ConsultingHosptalCity: "City is required",
        }));
        return;
      } else if (!formValues.ConsultingHospitalPinCode) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ConsultingHospitalPinCode: "PinCode is required",
        }));
        return;
      } else if (!formValues.ConsultingHospitalAddress) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ConsultingHospitalAddress: "Consulting Hospital Address is required",
        }));
        return;
      } else if (!formValues.DeliveringHospitalCountry) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DeliveringHospitalCountry: "Country is required",
        }));
        return;
      } else if (!formValues.DeliveringHospitalState) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DeliveringHospitalState: "State is required",
        }));
        return;
      } else if (!formValues.DeliveringHosptalCity) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DeliveringHosptalCity: "City is required",
        }));
        return;
      } else if (!formValues.DeliveringHospitalPinCode) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DeliveringHospitalPinCode: "PinCode is required",
        }));
        return;
      } else if (!formValues.DeliveringHospitalAddress) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DeliveringHospitalAddress: "Delivering Hospital Address is required",
        }));
        return;
      } else if (!formValues.DeliveryGynocologist) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DeliveryGynocologist: "Delivery Gynocologist Address is required",
        }));
        return;
      }

      dispatch(
        addOrupdateAnnexureInfo({
          CustomerHospitalBirthingdetails: formValues,
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
        HOSPITAL & BIRTHING DETAILS (TO INFORM BANK OF ANY CHANGES PRIOR TO
        DELIVERY)
      </Typography>
      <CardContent>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined" sx={{ marginBottom: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Expected date of delivery{" "}
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectedDateOfDelivery}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectedDateOfDelivery"
                      name="ExpectedDateOfDelivery"
                      placeholder="Input Text"
                      type="date"
                      size="small"
                      value={formValues?.ExpectedDateOfDelivery}
                      onChange={(e) =>
                        handleChange(e.target.value, "ExpectedDateOfDelivery")
                      }
                    />
                    {!!errors.ExpectedDateOfDelivery && (
                      <FormHelperText>
                        {errors.ExpectedDateOfDelivery}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Type of pregnancy <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.TypeOfpregnancy}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={typeOfPreganacyDataList}
                      value={formValues?.TypeOfpregnancy}
                      onChange={(e) => {
                        handleChange(e, "TypeOfpregnancy");
                      }}
                    />
                    {!!errors.TypeOfpregnancy && (
                      <FormHelperText>{errors.TypeOfpregnancy}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    How many childrens do you have alredy{" "}
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.HowManyChildrensDoYouHaveAlready}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={NoofChildres}
                      value={formValues?.HowManyChildrensDoYouHaveAlready}
                      onChange={(e) => {
                        handleChange(e, "HowManyChildrensDoYouHaveAlready");
                      }}
                    />
                    {!!errors.HowManyChildrensDoYouHaveAlready && (
                      <FormHelperText>
                        {errors.HowManyChildrensDoYouHaveAlready}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {/* <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Consulting Gynaecologist <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth 
                    error={!!errors.ConsultingGynocologist}
                  >
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="ConsultingGynocologist"
                      name="ConsultingGynocologist"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ConsultingGynocologist}
                      onChange={(e) =>
                        handleChange(e.target.value, "ConsultingGynocologist")
                      }
                    />
                    {!!errors.ConsultingGynocologist && (
                      <FormHelperText>
                        {errors.ConsultingGynocologist}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Consulting Hospitals <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.ConsultingHospital}
                  >
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="ConsultingHospital"
                      name="ConsultingHospital"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ConsultingHospital}
                      onChange={(e) =>
                        handleChange(e.target.value, "ConsultingHospital")
                      }
                    />
                    {!!errors.ConsultingHospital && (
                      <FormHelperText>
                        {errors.ConsultingHospital}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid> */}
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Stack
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
              // gap: 4,
            }}
          >
            <Card variant="outlined">
              <Typography
                sx={{
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  fontWeight: "bold",
                }}
              >
                Consulting Hospital Address
              </Typography>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Country <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.ConsultingHospitalCountry}
                    >
                      <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        // disabled={true}
                        data={upDatedCountryList}
                        value={formValues?.ConsultingHospitalCountry}
                        onChange={(e) => {
                          handleChange(e, "ConsultingHospitalCountry");
                        }}
                      />
                      {!!errors.ConsultingHospitalCountry && (
                        <FormHelperText>
                          {errors.ConsultingHospitalCountry}
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
                      error={!!errors.ConsultingHospitalState}
                    >
                      <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        data={stateList}
                        value={formValues?.ConsultingHospitalState}
                        onChange={(e) => {
                          dispatch(getCityList(e));
                          handleChange(e, "ConsultingHospitalState");
                        }}
                      />
                      {!!errors.ConsultingHospitalState && (
                        <FormHelperText>
                          {errors.ConsultingHospitalState}
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
                      error={!!errors.ConsultingHosptalCity}
                    >
                      <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        data={cityList}
                        value={formValues?.ConsultingHosptalCity}
                        onChange={(e) => {
                          handleChange(e, "ConsultingHosptalCity");
                        }}
                      />
                      {!!errors.ConsultingHosptalCity && (
                        <FormHelperText>
                          {errors.ConsultingHosptalCity}
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
                      error={!!errors.ConsultingHospitalPinCode}
                    >
                      <OutlinedInput
                        fullWidth
                        type="number"
                        id="ConsultingHospitalPinCode"
                        name="ConsultingHospitalPinCode"
                        placeholder="pincode"
                        size="small"
                        value={formValues?.ConsultingHospitalPinCode}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            "ConsultingHospitalPinCode"
                          )
                        }
                      />
                      {!!errors.ConsultingHospitalPinCode && (
                        <FormHelperText>
                          {errors.ConsultingHospitalPinCode}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Hospital Address <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      size="small"
                      fullWidth
                      error={!!errors.ConsultingHospitalAddress}
                    >
                      <Select
                        sx={{ height: "40px" }}
                        width={"100%"}
                        labelId="hospital-select-label"
                        id="hospital-select"
                        value={formValues?.ConsultingHospitalAddress}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            "ConsultingHospitalAddress"
                          )
                        }
                        renderValue={(selected) => {
                          const selectedHospital = hospitalsList.find(
                            (hospital) => hospital.HospitalID === selected
                          );
                          return selectedHospital
                            ? `${selectedHospital.hospitalName} - ${selectedHospital.LocationInfo?.cityName}`
                            : "";
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        {hospitalsList.map((hospital) => (
                          <MenuItem
                            key={hospital.HospitalID}
                            value={hospital.HospitalID}
                          >
                            <ListItemText
                              primary={`${hospital.hospitalName} - ${hospital.LocationInfo?.cityName}`}
                              secondary={`${hospital.hospitalAddress.addressLine1} , ${hospital.hospitalAddress.addressLine1}`}
                            />
                          </MenuItem>
                        ))}
                      </Select>
                      {!!errors.ConsultingHospitalAddress && (
                        <FormHelperText>
                          {errors.ConsultingHospitalAddress}
                        </FormHelperText>
                      )}
                    </FormControl>
                    {/* <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.ConsultingHospitalAddress}
                    >
                      <OutlinedInput
                        fullWidth
                        id="ConsultingHospitalAddress"
                        name="ConsultingHospitalAddress"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.ConsultingHospitalAddress}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            "ConsultingHospitalAddress"
                          )
                        }
                      />
                      {!!errors.ConsultingHospitalAddress && (
                        <FormHelperText>
                          {errors.ConsultingHospitalAddress}
                        </FormHelperText>
                      )}
                    </FormControl> */}
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Consulting Gynaecologist{" "}
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      size="small"
                      fullWidth
                      error={!!errors.ConsultingGynocologist}
                    >
                      <SingleSelect
                        placeholder={"Select"}
                        value={formValues?.ConsultingGynocologist}
                        data={allDoctor}
                        width={"100%"}
                        onChange={(e) =>
                          handleChange(e, "ConsultingGynocologist")
                        }
                      />
                      {/* <OutlinedInput
                        fullWidth
                        // type="number"
                        id="ConsultingGynocologist"
                        name="ConsultingGynocologist"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.ConsultingGynocologist}
                        onChange={(e) =>
                          handleChange(e.target.value, "ConsultingGynocologist")
                        }
                      /> */}
                      {!!errors.ConsultingGynocologist && (
                        <FormHelperText>
                          {errors.ConsultingGynocologist}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item style={{ width: "100%", color: "black" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="IsDeliveringHospitalSameAsConsultingHospotal"
                          checked={
                            formValues?.IsDeliveringHospitalSameAsConsultingHospotal
                          }
                          onChange={(e) =>
                            handleChange(
                              e.target.checked,
                              "IsDeliveringHospitalSameAsConsultingHospotal"
                            )
                          }
                        />
                      }
                      label="If  delivering hospital address is same as Current hospital address"
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
              // gap: 4,
            }}
          >
            <Card variant="outlined">
              <Typography
                sx={{
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  fontWeight: "bold",
                }}
              >
                Delivering Hospital Address
              </Typography>
              <CardContent sx={{ height: "422px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Country <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.DeliveringHospitalCountry}
                    >
                      <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        // disabled={true}
                        data={upDatedCountryList}
                        value={formValues?.DeliveringHospitalCountry}
                        onChange={(e) => {
                          handleChange(e, "DeliveringHospitalCountry");
                        }}
                      />
                      {!!errors.DeliveringHospitalCountry && (
                        <FormHelperText>
                          {errors.DeliveringHospitalCountry}
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
                      error={!!errors.DeliveringHospitalState}
                    >
                      <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        data={stateList}
                        value={formValues?.DeliveringHospitalState}
                        onChange={(e) => {
                          dispatch(getCityList(e));
                          handleChange(e, "DeliveringHospitalState");
                        }}
                      />
                      {!!errors.DeliveringHospitalState && (
                        <FormHelperText>
                          {errors.DeliveringHospitalState}
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
                      error={!!errors.DeliveringHosptalCity}
                    >
                      <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        data={cityList}
                        value={formValues?.DeliveringHosptalCity}
                        onChange={(e) => {
                          handleChange(e, "DeliveringHosptalCity");
                        }}
                      />
                      {!!errors.DeliveringHosptalCity && (
                        <FormHelperText>
                          {errors.DeliveringHosptalCity}
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
                      error={!!errors.DeliveringHospitalPinCode}
                    >
                      <OutlinedInput
                        fullWidth
                        type="number"
                        id="DeliveringHospitalPinCode"
                        name="DeliveringHospitalPinCode"
                        placeholder="pincode"
                        size="small"
                        value={formValues?.DeliveringHospitalPinCode}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            "DeliveringHospitalPinCode"
                          )
                        }
                      />
                      {!!errors.DeliveringHospitalPinCode && (
                        <FormHelperText>
                          {errors.DeliveringHospitalPinCode}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Delivering Address (If different from consulting
                      gynaecologist)
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      size="small"
                      fullWidth
                      error={!!errors.DeliveringHospitalAddress}
                    >
                      <Select
                        sx={{ height: "40px" }}
                        width={"100%"}
                        labelId="hospital-select-label"
                        id="hospital-select"
                        value={formValues?.DeliveringHospitalAddress}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            "DeliveringHospitalAddress"
                          )
                        }
                        renderValue={(selected) => {
                          const selectedHospital = hospitalsList.find(
                            (hospital) => hospital.HospitalID === selected
                          );
                          return selectedHospital
                            ? `${selectedHospital.hospitalName} - ${selectedHospital.LocationInfo?.cityName}`
                            : "";
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        {hospitalsList.map((hospital) => (
                          <MenuItem
                            key={hospital.HospitalID}
                            value={hospital.HospitalID}
                          >
                            <ListItemText
                              primary={`${hospital.hospitalName} - ${hospital.LocationInfo?.cityName}`}
                              secondary={`${hospital.hospitalAddress.addressLine1} , ${hospital.hospitalAddress.addressLine1}`}
                            />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {/* <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.DeliveringHospitalAddress}
                    >
                      <OutlinedInput
                        fullWidth
                        id="DeliveringHospitalAddress"
                        name="DeliveringHospitalAddress"
                        placeholder="Input text"
                        size="small"
                        value={formValues?.DeliveringHospitalAddress}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            "DeliveringHospitalAddress"
                          )
                        }
                      />
                      {!!errors.DeliveringHospitalAddress && (
                        <FormHelperText>
                          {errors.DeliveringHospitalAddress}
                        </FormHelperText>
                      )}
                    </FormControl> */}
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Delivering Gynaecologist{" "}
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      size="small"
                      fullWidth
                      error={!!errors.DeliveryGynocologist}
                    >
                      <SingleSelect
                        placeholder={"Select"}
                        value={formValues?.DeliveryGynocologist}
                        data={allDoctor}
                        width={"100%"}
                        onChange={(e) =>
                          handleChange(e, "DeliveryGynocologist")
                        }
                      />
                      {/* <OutlinedInput
                        fullWidth
                        // type="number"
                        id="ConsultingGynocologist"
                        name="ConsultingGynocologist"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.DeliveryGynocologist}
                        onChange={(e) =>
                          handleChange(e.target.value, "DeliveryGynocologist")
                        }
                      /> */}
                      {!!errors.DeliveryGynocologist && (
                        <FormHelperText>
                          {errors.DeliveryGynocologist}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
});

export default ClientDetailsForth;
