import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import doctorImg from "../../../assets/doctor_img.png";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
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
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReactQuill from "react-quill";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import youtube from "../../../assets/youtube.png";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";
import pinterest from "../../../assets/pinterest.png";
import link from "../../../assets/link.png";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CommonSelect from "../../../components/GlobalComponents/CommonSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  getByIdList,
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../../service/globalFunctions";
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import { getCityList } from "../../../redux/Slices/globalSlice";
import {
  addHospitals,
  getHospitalsList,
  handlePostHospital,
} from "../../../redux/Slices/hospitalSlice";
import mapIcon from "../../../assets/map.png";
import api from "../../../utils/api/httpRequest";
import { useNavigate } from "react-router-dom";

const socialMediaLogoSize = 24;

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

const HospitalAddForm = forwardRef((props, ref) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);
  const getSpecializationList = useSelector(
    (state) => state.global.specializationList
  );

  const getStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  // console.log('All city for a state', getCitiesList)
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(getStateList);
  const specializationList = getByIdList(getSpecializationList);

  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    hospitalName: "",
    hospitalLogo: "",
    specialist: [],
    LicenseNumber: "",
    validity: {
      from: null,
      to: null,
    },
    email: "",
    website: "",
    about: "",
    sociallink: {
      facebook: "",
      instagram: "",
      twitter: "",
      LinkedIn: "",
      youtube: "",
      pinterest: "",
      googleMap: "",
      otherLink: "",
    },
    faxNumber: "",
    contact: {
      countryCode: "+91",
      phoneNumber: "",
      AlterNativePhoneNumber: "",
      landLine: "",
    },
    HospitalAddress: {
      addressLine1: "",
      addressLine2: "",
      nearLandMark: "",
      country: 352,
      state: "",
      city: "",
      pincode: "",
      latitude: "",
      longitude: "",
    },
  });
  useImperativeHandle(ref, () => ({
    hospitalAddFormData: () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
      // const phoneRegex = /^\d{10}$/;

      if (!formValues.hospitalName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          hospitalName: "Hospital Name is required",
        }));
        return;
      } else if (!formValues.specialist || formValues.specialist.length === 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          specialist: "Specialist is required",
        }));
        return;
      } else if (!formValues.LicenseNumber) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          LicenseNumber: "License Number is required",
        }));
        return;
      } else if (!formValues.validity.from) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          validityfrom: "validity from is required",
        }));
        return;
      } else if (!formValues.validity.to) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          validityTo: "validity to is required",
        }));
        return;
      } else if (!emailRegex.test(formValues.email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is Invalid",
        }));
        return;
      } else if (!urlRegex.test(formValues.website)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          website: "Website URL is Invalid",
        }));
        return;
      } else if (!formValues.HospitalAddress.addressLine1) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          addressLine1: "Address 1 is required",
        }));
        return;
      } else if (!formValues.HospitalAddress.addressLine2) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          addressLine2: "Address 2 is required",
        }));
        return;
      } else if (
        !formValues.HospitalAddress.state ||
        formValues.HospitalAddress.state.length === 0
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          state: "State is required",
        }));
        return;
      } else if (
        !formValues.HospitalAddress.city ||
        formValues.HospitalAddress.city.length === 0
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          city: "City is required",
        }));
        return;
      } else if (!formValues.HospitalAddress.nearLandMark) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          nearLandMark: "Near LandMark is required",
        }));
        return;
      } else if (!formValues.HospitalAddress.pincode) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pincode: "Pincode is required",
        }));
        return;
      } else if (!formValues.contact.phoneNumber) {
        // } else if (!phoneRegex.test(!formValues.contact.phoneNumber)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Phone Number is Invalid",
        }));
        return;
      }
      dispatch(addHospitals(formValues));
      navigate("/mainPage/hospitals");
      dispatch(getHospitalsList(null));
    },
  }));

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => {
      let temp = { ...prev };
      switch (name) {
        case "specialist":
          let res = value?.map((ele) => ({ specializationID: ele }));
          temp.specialist = res;
          break;

        case "HospitalAddress1":
          temp.HospitalAddress = {
            ...temp.HospitalAddress,
            addressLine1: value,
          };
          break;

        case "HospitalAddress2":
          temp.HospitalAddress = {
            ...temp.HospitalAddress,
            addressLine2: value,
          };
          break;

        case "country":
          temp.HospitalAddress = { ...temp.HospitalAddress, country: value };
          break;

        case "state":
          temp.HospitalAddress = { ...temp.HospitalAddress, state: value };
          break;

        case "city":
          temp.HospitalAddress = { ...temp.HospitalAddress, city: value };
          break;
        case "longitude":
          temp.HospitalAddress = { ...temp.HospitalAddress, longitude: value };
          break;
        case "latitude":
          temp.HospitalAddress = { ...temp.HospitalAddress, latitude: value };
          break;

        case "nearLandMark":
          temp.HospitalAddress = {
            ...temp.HospitalAddress,
            nearLandMark: value,
          };
          break;

        case "pincode":
          temp.HospitalAddress = { ...temp.HospitalAddress, pincode: value };
          break;

        case "phoneNumber":
          temp.contact = { ...temp.contact, phoneNumber: value };
          break;

        case "landLine":
          temp.contact = { ...temp.contact, landLine: value };
          break;

        case "socialF":
          temp.sociallink = { ...temp.sociallink, facebook: value };
          break;

        case "socialI":
          temp.sociallink = { ...temp.sociallink, instagram: value };
          break;

        case "socialL":
          temp.sociallink = { ...temp.sociallink, LinkedIn: value };
          break;

        case "socialY":
          temp.sociallink = { ...temp.sociallink, youtube: value };
          break;

        case "socialT":
          temp.sociallink = { ...temp.sociallink, twitter: value };
          break;

        case "socialP":
          temp.sociallink = { ...temp.sociallink, pinterest: value };
          break;

        case "socialO":
          temp.sociallink = { ...temp.sociallink, otherLink: value };
          break;

        case "validity_from":
          temp.validity = {
            ...temp.validity,
            from: value,
            // from: value ? dayjs(value).toISOString() : null,
          };
          break;
        case "validity_to":
          temp.validity = {
            ...temp.validity,
            to: value,
            // to: value ? dayjs(value).toISOString() : null,
          };
          break;

        default:
          temp[name] = value;
          break;
      }
      // validateField(name, value, temp);
      return temp;
    });
    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
      validityfrom: "",
      validityTo: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      state: "",
      city: "",
      nearLandMark: "",
      pincode: "",
      phoneNumber: "",
    });
  };

  const handleImageUpload = async (e) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("folder", "CareerResume");
    try {
      const response = await api.post("/upload", formData, { headers });
      if (response?.data?.status === 200) {
        // console.log(response?.data?.message).
        setFormValues((prev) => ({
          ...prev,
          hospitalLogo: response?.data?.data?.key,
        }));
        console.log(formValues?.hospitalLogo);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   dispatch(handlePostHospital(formValues));
  // }, [formValues]);

  const fetchingLocation = (formValues, getCitiesList) => {
    const cityId = formValues.HospitalAddress.city;

    const city = getCitiesList.find((item) => item.cityID === cityId);

    if (city) {
      const latitude = city.latitude.toString();
      const longitude = city.longitude.toString();

      return { latitude, longitude };
    } else {
      return null;
    }
  };

  useEffect(() => {
    const location = fetchingLocation(formValues, getCitiesList);
    if (location) {
      setFormValues({
        ...formValues,
        HospitalAddress: {
          ...formValues.HospitalAddress,
          longitude: location.longitude,
          latitude: location.latitude,
        },
      });
    }
  }, [formValues.HospitalAddress.city]);

  console.log("formvalues", formValues);

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "35%",
        overflow: "auto",
        background: "#fff",
        // padding: "8px",
        marginBottom: "30px",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"40px"}
        pt={5}
        pb={5}
        pl={1}
      >
        <Stack>
          {/* <Typography variant="h5">GENERAL INFORMATION</Typography> */}
        </Stack>
        <Stack>
          <MoreVertIcon />
        </Stack>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={2}
        padding={2}
      >
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
              <Grid container spacing={2} pt={3} pb={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Hospital Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.hospitalName}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="XYZ Hospital"
                      size="small"
                      value={formValues?.hospitalName}
                      onChange={(e) =>
                        handleChange(e.target.value, "hospitalName")
                      }
                    />
                    {!!errors.hospitalName && (
                      <FormHelperText>{errors.hospitalName}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Specialist <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.specialist}
                  >
                    <CommonSelect
                      Placeholder={"Select"}
                      data={specializationList}
                      value={formValues?.specialist?.map(
                        (item) => item?.specializationID
                      )}
                      width={"100%"}
                      onChange={(e) => handleChange(e, "specialist")}
                    />
                    {!!errors.specialist && (
                      <FormHelperText>{errors.specialist}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Licence number <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.LicenseNumber}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="#D-00012"
                      size="small"
                      value={formValues?.LicenseNumber}
                      onChange={(e) =>
                        handleChange(e.target.value, "LicenseNumber")
                      }
                    />
                    {!!errors.LicenseNumber && (
                      <FormHelperText>{errors.LicenseNumber}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Recongnition Validity from{" "}
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.validityfrom}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherDOB"
                      name="ExpectantFatherDOB"
                      type="date"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.validity.from}
                      onChange={(e) => handleChange(e, "validity_from")}
                    />
                    {!!errors.validityfrom && (
                      <FormHelperText>{errors.validityfrom}</FormHelperText>
                    )}
                  </FormControl>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        value={
                          formValues.validity.from
                            ? dayjs(formValues.validity.from)
                            : null
                        }
                        onChange={(newValue) =>
                          handleChange(newValue, "validity_from")
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider> */}
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Recongnition Validity to<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.validityTo}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherDOB"
                      name="ExpectantFatherDOB"
                      type="date"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.validity.to}
                      onChange={(e) => handleChange(e, "validity_to")}
                    />
                    {!!errors.validityTo && (
                      <FormHelperText>{errors.validityTo}</FormHelperText>
                    )}
                  </FormControl>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        value={
                          formValues.validity.to
                            ? dayjs(formValues.validity.to)
                            : null
                        }
                        onChange={(newValue) =>
                          handleChange(newValue, "validity_to")
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider> */}
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Email Address<span style={redStarStyle}>*</span>
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
                      placeholder="hospial@gmail.com"
                      size="small"
                      value={formValues?.email}
                      onChange={(e) => handleChange(e.target.value, "email")}
                    />
                    {!!errors.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={3}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Website URL<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.website}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="http://example.com"
                      size="small"
                      value={formValues?.website}
                      onChange={(e) => handleChange(e.target.value, "website")}
                    />
                    {!!errors.website && (
                      <FormHelperText>{errors.website}</FormHelperText>
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
                <Typography sx={headingStyle}>HOSPITAL ADDRESS</Typography>
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
                      value={formValues?.HospitalAddress?.addressLine1}
                      onChange={(e) => {
                        handleChange(e.target.value, "HospitalAddress1");
                      }}
                    />
                    {!!errors.addressLine1 && (
                      <FormHelperText>{errors.addressLine1}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={3}>
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
                      value={formValues?.HospitalAddress?.addressLine2}
                      onChange={(e) =>
                        handleChange(e.target.value, "HospitalAddress2")
                      }
                    />
                    {!!errors.addressLine2 && (
                      <FormHelperText>{errors.addressLine2}</FormHelperText>
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
                    size="small"
                    fullWidth
                    error={!!errors.country}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      disabled={true}
                      data={upDatedCountryList}
                      value={formValues?.HospitalAddress?.country}
                      onChange={(e) => {
                        handleChange(e, "country");
                      }}
                    />
                    {!!errors.country && (
                      <FormHelperText>{errors.country}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    State <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.state}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={stateList}
                      value={formValues?.HospitalAddress?.state}
                      onChange={(e) => {
                        dispatch(getCityList(e));
                        handleChange(e, "state");
                      }}
                    />
                    {!!errors.state && (
                      <FormHelperText>{errors.state}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.city}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={cityList}
                      value={formValues?.HospitalAddress?.city}
                      onChange={(e) => {
                        handleChange(e, "city");
                      }}
                    />
                    {!!errors.city && (
                      <FormHelperText>{errors.city}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Near LandMark <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.nearLandMark}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                      value={formValues?.HospitalAddress?.nearLandMark}
                      onChange={(e) =>
                        handleChange(e.target.value, "nearLandMark")
                      }
                    />
                    {!!errors.nearLandMark && (
                      <FormHelperText>{errors.nearLandMark}</FormHelperText>
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
                      inputProps={{ maxLength: 6 }}
                      value={formValues?.HospitalAddress?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                    {!!errors.pincode && (
                      <FormHelperText>{errors.pincode}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Phone number <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.phoneNumber}
                  >
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="outlined-adornment-phone"
                      placeholder="Phone number"
                      size="small"
                      inputProps={{ maxLength: 10 }}
                      value={formValues?.contact?.phoneNumber}
                      onChange={(e) => {
                        const { value } = e.target;
                        // Remove non-numeric characters
                        const numericValue = value.replace(/\D/g, "");
                        handleChange(numericValue, "phoneNumber");
                      }}
                    />
                    {!!errors.phoneNumber && (
                      <FormHelperText>{errors.phoneNumber}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Landline</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Landline"
                      size="small"
                      value={formValues?.contact?.landLine}
                      onChange={(e) => {
                        handleChange(e.target.value, "landLine");
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Fax Number</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Fax number"
                      size="small"
                      value={formValues?.faxNumber}
                      onChange={(e) => {
                        handleChange(e.target.value, "faxNumber");
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: "20px" }}>
            <CardContent>
              <Stack pt={2} pb={2}>
                <Typography sx={headingStyle}>SOCIAL LINKS</Typography>
              </Stack>
              <Stack spacing={2}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={facebook}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                    style={{ borderRadius: "4px" }}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.facebook.com"
                      size="small"
                      value={formValues?.sociallink?.facebook}
                      onChange={(e) => {
                        handleChange(e.target.value, "socialF");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={instagram}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.instagram.com"
                      value={formValues?.sociallink?.instagram}
                      size="small"
                      onChange={(e) => {
                        handleChange(e.target.value, "socialI");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={linkedin}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.linkedin.com"
                      size="small"
                      value={formValues?.sociallink?.LinkedIn}
                      onChange={(e) => {
                        handleChange(e.target.value, "socialL");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={youtube}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.youtube.com"
                      size="small"
                      value={formValues?.sociallink?.youtube}
                      onChange={(e) => {
                        handleChange(e.target.value, "socialY");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={twitter}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.twitter.com"
                      size="small"
                      value={formValues?.sociallink?.twitter}
                      onChange={(e) => {
                        handleChange(e.target.value, "socialT");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={pinterest}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                    style={{ borderRadius: "4px" }}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.pinterest.com"
                      size="small"
                      value={formValues?.sociallink?.pinterest}
                      onChange={(e) => {
                        handleChange(e.target.value, "socialP");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={link}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.sociallink?.otherLink}
                      onChange={(e) => {
                        handleChange(e.target.value, "socialO");
                      }}
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              <Stack spacing={1}>
                <Stack>
                  <Typography sx={headingStyle}>ABOUT HOSPITAL </Typography>
                </Stack>
                <Stack>
                  <Typography variant="subtitle2">Upload Image</Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <img
                    src={
                      formValues.hospitalLogo
                        ? `https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.hospitalLogo}`
                        : doctorImg
                    }
                    alt="Hospital Logo"
                    height={"auto"}
                    width={"150px"}
                  />
                </Stack>
                <Stack direction={"row"} spacing={4}>
                  <Stack>
                    <Typography variant="subtitle2">
                      supported formats JPG,PNG,SVG
                    </Typography>
                    <Typography variant="subtitle2">
                      Maximum size : 2MB
                    </Typography>
                  </Stack>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
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
                <Card variant="outlined">
                  <CardContent>
                    <Stack height={"175px"}>
                      <InputLabel sx={inputLableStyle}>Description</InputLabel>
                      <TextField
                        id="about"
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Add description here"
                        value={formValues?.about}
                        onChange={(e) => handleChange(e.target.value, "about")}
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <Typography sx={({ marginTop: "5px" }, headingStyle)}>
                LOCATION
              </Typography>
              <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Longitude</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="longitude"
                      placeholder="logitude"
                      size="small"
                      value={formValues?.HospitalAddress?.longitude}
                      // data={cityList}
                      // onChange={(e) => {
                      //   handleChange(e, 'longitude')
                      // }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Latitude</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="latitude"
                      placeholder="latitude"
                      size="small"
                      value={formValues?.HospitalAddress?.latitude}
                      data={getCityList}
                      onChange={(e) => {
                        handleChange(e, "latitude");
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <img src={mapIcon} alt="mapIcon" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
});

export default HospitalAddForm;
