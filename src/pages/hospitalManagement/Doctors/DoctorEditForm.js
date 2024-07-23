import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import doctorImg from "../../../assets/doctor_img.png";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
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
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommonSelect from "../../../components/GlobalComponents/CommonSelect";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import youtube from "../../../assets/youtube.png";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";
import pinterest from "../../../assets/pinterest.png";
import link from "../../../assets/link.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getByIdList,
  getCityIdList,
  getNamesIdList,
  getStateIdList,
  getQualificationIdList,
  getCityNameByCountryIdList,
  getStatusIdList,
  getEmpTypeIdList,
  formatDateYYYYMMDD,
} from "../../../service/globalFunctions";
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import api from "../../../utils/api/httpRequest";
import { handleEditPostDoctor } from "../../../redux/Slices/doctorSlice";
import {
  getCityList,
  getCityNameByCountry,
  getEmploymentType,
  getStatus,
} from "../../../redux/Slices/globalSlice";
import { getHospitalsList } from "../../../redux/Slices/hospitalSlice";
import { getQualification } from "../../../redux/Slices/globalSlice";

const socialMediaLogoSize = 24;
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

function deepCopyFormValues(doctorDetail, formValues) {
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
  deepCopy(copiedFormValue, doctorDetail);
  return copiedFormValue;
}

const DoctorEditForm = () => {
  const dispatch = useDispatch();
  const getSpecializationList = useSelector(
    (state) => state.global.specializationList
  );
  const getExperienceList = useSelector((state) => state.global.experienceList);
  const getGenderList = useSelector((state) => state.global.genderList);
  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);
  const specializationList = getByIdList(getSpecializationList);
  const experienceList = getByIdList(getExperienceList);
  const genderList = getByIdList(getGenderList);
  const getStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(getStateList);
  const hospitalsList = useSelector((state) => state.hospitals.hospitalsList);
  const getQualificationList = useSelector(
    (state) => state.global.qualificationList
  );
  const getQualif = getQualificationIdList(getQualificationList);
  const getLoactionList = useSelector((state) => state.global.locationList);
  const getLoaction = getCityNameByCountryIdList(getLoactionList);
  const getStatusList = useSelector((state) => state.global.statusList);
  const statuses = getStatusIdList(getStatusList);
  const getEmpTypeList = useSelector((state) => state.global.employementList);
  const EmpType = getEmpTypeIdList(getEmpTypeList);

  useEffect(() => {
    dispatch(getHospitalsList(null));
    dispatch(getQualification(null));
    dispatch(getCityNameByCountry(null));
    dispatch(getStatus(null));
    dispatch(getEmploymentType(null));
  }, [dispatch]);

  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    doctorFirstName: "",
    doctorLastName: "",
    doctorID: "",
    qualification: [],
    specialist: [],
    experience: "",
    IsActive: "",
    location: "",
    IMRregisterID: "",
    DOB: "",
    gender: "",
    phoneNumber: "",
    email: "",
    previousExperience: [
      {
        country: 352,
        state: "",
        city: "",
        specialist: [],
        hospitalAddress: "",
        experience: "",
        employmentType: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
    ],
    doctorAddress: {
      addressLine1: "",
      addressLine2: "",
      nearLandMark: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
    },
    doctorProfile: "",
    doctorBio: "",
    sociallink: {
      facebook: "",
      instagram: "",
      twitter: "",
      LinkedIn: "",
      youtube: "",
      pinterest: "",
    },
    websiteLinks: [{ link: "" }],
  });
  const validateField = (name, value, updatedValues) => {
    let tempErrors = { ...errors };

    switch (name) {
      case "doctorFirstName":
        tempErrors.doctorFirstName =
          value.length >= 3
            ? ""
            : "Doctor's name must be at least 3 characters .";
        break;
      case "doctorID":
        tempErrors.doctorID =
          value.length >= 5 ? "" : "Doctor ID must be at least 5 characters.";
        break;
      case "qualification":
        tempErrors.qualification = updatedValues.qualification.length
          ? ""
          : "Qualification is required.";
        break;
      case "specialist":
        tempErrors.specialist = updatedValues.specialist.length
          ? ""
          : "Specialist is required.";
        break;
      case "experience":
        tempErrors.experience = value ? "" : "Experience is required.";
        break;
      default:
        break;
    }

    setErrors(tempErrors);
  };

  const handleOnChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => {
      let temp = { ...prev };

      switch (name) {
        case "specialist":
          let res = value?.map((ele) => ({ specializationID: ele }));
          temp.specialist = res;
          break;

        case "qualification":
          let qul = value?.map((ele) => ({ qualificationId: ele }));
          temp.qualification = qul;
          break;

        case "country":
          temp.previousExperience[0] = {
            ...temp.previousExperience[0],
            country: value,
          };
          break;
        // updatedExperience.country = value;
        // break;

        case "Exstate":
          // temp.previousExperience.map((exp, index) => {
          //   if (exp.id == 1) {
          //     temp.previousExperience[index] = { ...exp, state: value }
          //   }
          //   else {
          //     exp = { ...exp }
          //   }
          // })
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   state: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0 ? { ...exp, state: value } : exp
          );
          break;

        case "city":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   city: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0 ? { ...exp, city: value } : exp
          );
          break;

        case "Exspecialist":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   specialist: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0
              ? {
                  ...exp,
                  specialist: value?.map((ele) => ({ specializationID: ele })),
                }
              : exp
          );
          break;

        case "hospitalAddress":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   hospitalAddress: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0 ? { ...exp, hospitalAddress: value } : exp
          );
          break;

        case "Exexperience":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   experience: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0 ? { ...exp, experience: value } : exp
          );
          break;

        case "employmentType":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   employmentType: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0 ? { ...exp, employmentType: value } : exp
          );
          break;

        case "startDate":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   startDate: value ? dayjs(value).toISOString() : null,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0
              ? // ? { ...exp, startDate: value ? dayjs(value).toISOString() : null }
                { ...exp, startDate: value }
              : exp
          );
          break;

        case "endDate":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   endDate: value ? dayjs(value).toISOString() : null,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0
              ? // ? { ...exp, endDate: value ? dayjs(value).toISOString() : null }
                { ...exp, endDate: value }
              : exp
          );
          break;

        case "currentlyWorking":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   currentlyWorking: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0 ? { ...exp, currentlyWorking: value } : exp
          );
          break;

        case "description":
          // temp.previousExperience[0] = {
          //   ...temp.previousExperience[0],
          //   description: value,
          // };
          // break;
          temp.previousExperience = temp.previousExperience.map((exp, index) =>
            index === 0 ? { ...exp, description: value } : exp
          );
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

        case "OtherLink1":
          temp.websiteLinks = temp.websiteLinks.map((links, index) =>
            index === 0 ? { ...links, link: value } : links
          );
          break;

        default:
          temp[name] = value;
          break;
      }
      validateField(name, value, temp);
      return temp;
    });
  };

  const handleImageUpload = async (e) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("folder", "DoctorProfile");
    try {
      const response = await api.post("/upload", formData, { headers });
      if (response?.data?.status === 200) {
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

  useEffect(() => {
    dispatch(handleEditPostDoctor(formValues));
  }, [formValues]);
  const doctorDetail = useSelector((state) => state.doctor.doctorDetail);
  const updatedFormValues = deepCopyFormValues(doctorDetail, formValues);
  useEffect(() => {
    setFormValues((prevValue) => ({
      ...prevValue,
      ...updatedFormValues,
    }));
  }, [doctorDetail]);

  console.log("formvalues", formValues);

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        padding: "15px",
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
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"40px"}
        pt={3}
        pb={3}
        pl={1}
        gap={6}
      >
        <Stack>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            Edit doctor
          </Typography>
        </Stack>
        <Stack>
          <MoreVertIcon />
        </Stack>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          sx={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Doctor Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.doctorFirstName}
                  >
                    <OutlinedInput
                      fullWidth
                      name="doctorFirstName"
                      id="outlined-adornment-password"
                      placeholder="Dr.Sal"
                      size="small"
                      value={formValues?.doctorFirstName}
                      onChange={(e) =>
                        handleOnChange(e.target.value, "doctorFirstName")
                      }
                    />
                    {!!errors.doctorFirstName && (
                      <FormHelperText>{errors.doctorFirstName}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Doctor ID <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.doctorID}
                  >
                    <OutlinedInput
                      fullWidth
                      name="doctorID"
                      id="outlined-adornment-password"
                      placeholder="#D-00012"
                      size="small"
                      value={formValues?.doctorID}
                      onChange={(e) =>
                        handleOnChange(e.target.value, "doctorID")
                      }
                    />
                    {!!errors.doctorID && (
                      <FormHelperText>{errors.doctorID}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Qualification<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.qualification}
                  >
                    <CommonSelect
                      placeholder={"Select"}
                      width={"100%"}
                      value={formValues?.qualification?.map(
                        (item) => item?.qualificationId
                      )}
                      data={getQualif}
                      onChange={(e) => handleOnChange(e, "qualification")}
                      error={!!errors.qualification}
                    />
                    {!!errors.qualification && (
                      <FormHelperText>{errors.qualification}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Specialist<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.specialist}
                  >
                    <CommonSelect
                      placeholder={"Select"}
                      width={"100%"}
                      value={formValues?.specialist?.map(
                        (item) => item?.specilizationID
                      )}
                      data={specializationList}
                      onChange={(e) => handleOnChange(e, "specialist")}
                      error={!!errors.specialist}
                    />
                    {!!errors.specialist && (
                      <FormHelperText>{errors.specialist}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Experience<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.experience}
                  >
                    <SingleSelect
                      placeholder={"Select"}
                      value={formValues?.experience}
                      data={experienceList}
                      width={"100%"}
                      onChange={(e) => handleOnChange(e, "experience")}
                      error={!!errors.experience}
                    />
                    {!!errors.experience && (
                      <FormHelperText>{errors.experience}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Status</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.IsActive}
                    data={statuses}
                    onChange={(e) => handleOnChange(e, "IsActive")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Location</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    width={"100%"}
                    data={getLoaction}
                    value={formValues?.location}
                    onChange={(e) => handleOnChange(e, "location")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    IMR Registration ID
                  </InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      name="IMRregisterID"
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                      value={formValues?.IMRregisterID}
                      onChange={(e) =>
                        handleOnChange(e.target.value, "IMRregisterID")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>DOB</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherDOB"
                      name="ExpectantFatherDOB"
                      type="date"
                      placeholder="Input Text"
                      size="small"
                      value={formatDateYYYYMMDD(formValues?.DOB)}
                      onChange={(e) => handleOnChange(e, "DOB")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Gender</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    width={"100%"}
                    data={genderList}
                    value={formValues?.gender}
                    onChange={(e) => {
                      handleOnChange(e, "gender");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Phone number</InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.phoneNumber}
                  >
                    <OutlinedInput
                      name="phoneNumber"
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                      value={formValues?.phoneNumber}
                      onChange={(e) =>
                        handleOnChange(e.target.value, "phoneNumber")
                      }
                    />
                    {!!errors.phoneNumber && (
                      <FormHelperText>{errors.phoneNumber}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Email Address</InputLabel>
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.email}
                  >
                    <OutlinedInput
                      fullWidth
                      name="email"
                      value={formValues?.email}
                      onChange={(e) => handleOnChange(e.target.value, "email")}
                      id="outlined-adornment-password"
                      placeholder="email"
                      size="small"
                    />
                    {!!errors.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
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
                sx={{ mt: 3, mb: 3 }}
              >
                <Typography>Experience</Typography>
                <Button size="small" variant="outlined" startIcon={<AddIcon />}>
                  Add Experience
                </Button>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Country</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    data={upDatedCountryList}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.country}
                    onChange={(e) => {
                      handleOnChange(e, "country");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>State</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.previousExperience[0]?.state}
                    onChange={(e) => {
                      dispatch(getCityList(e));
                      handleOnChange(e, "Exstate");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>City</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.previousExperience[0]?.city}
                    onChange={(e) => {
                      handleOnChange(e, "city");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Specialist</InputLabel>
                  <CommonSelect
                    placeholder={"Select"}
                    data={specializationList}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.specialist?.map(
                      (item) => item?.specilizationID
                    )}
                    onChange={(e) => {
                      handleOnChange(e, "Exspecialist");
                    }}
                  />
                </Grid>
              </Grid>
              <Grid width={"100%"} sx={{ mt: 2, mb: 2 }}>
                <InputLabel sx={inputLableStyle}>
                  {" "}
                  Hospital and Address
                </InputLabel>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    sx={{ height: "40px" }}
                    width={"100%"}
                    labelId="hospital-select-label"
                    id="hospital-select"
                    value={formValues?.previousExperience[0]?.hospitalAddress}
                    onChange={(e) => {
                      handleOnChange(e, "hospitalAddress");
                    }}
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
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Experience</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    data={experienceList}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.experience}
                    onChange={(e) => {
                      handleOnChange(e, "Exexperience");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Employment type</InputLabel>
                  <SingleSelect
                    placeholder={"Select"}
                    data={EmpType}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.employmentType}
                    onChange={(e) => {
                      handleOnChange(e, "employmentType");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Start date </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherDOB"
                      name="ExpectantFatherDOB"
                      type="date"
                      placeholder="Input Text"
                      size="small"
                      value={formatDateYYYYMMDD(
                        formValues?.previousExperience[0]?.startDate
                      )}
                      onChange={(e) => handleOnChange(e, "startDate")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>End Date</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherDOB"
                      name="ExpectantFatherDOB"
                      type="date"
                      placeholder="Input Text"
                      size="small"
                      value={formatDateYYYYMMDD(
                        formValues?.previousExperience[0]?.endDate
                      )}
                      onChange={(e) => handleOnChange(e, "endDate")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid width={"100%"} sx={{ mb: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="currentlyWorking"
                      checked={
                        formValues?.previousExperience[0]?.currentlyWorking
                      }
                      onChange={(e) =>
                        handleOnChange(e.target.checked, "currentlyWorking")
                      }
                    />
                  }
                  label="Currently working here"
                />
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Stack sx={{ pt: 3 }}>
                    <InputLabel sx={inputLableStyle}>Description</InputLabel>
                    <TextField
                      id="description"
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Add description here"
                      value={formValues?.previousExperience[0]?.description}
                      onChange={(e) =>
                        handleOnChange(e.target.value, "description")
                      }
                    />
                  </Stack>
                </Grid>
              </Grid>
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
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Stack spacing={1}>
                <Stack>
                  <Typography>ABOUT HOSPITAL </Typography>
                </Stack>
                <Stack>
                  <Typography variant="subtitle2" sx={inputLableStyle}>
                    Upload image
                  </Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <img
                    src={
                      formValues.doctorProfile
                        ? `https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.doctorProfile}`
                        : doctorImg
                    }
                    alt="doctorProfile"
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
                <Stack height={"170px"} sx={{ pt: 3 }}>
                  <InputLabel sx={inputLableStyle}>Doctor Bio</InputLabel>
                  <TextField
                    id="doctorBio"
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Add Bio here"
                    value={formValues?.doctorBio}
                    onChange={(e) =>
                      handleOnChange(e.target.value, "doctorBio")
                    }
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Stack pt={2} pb={2}>
                <Typography>SOCIAL LINKS</Typography>
              </Stack>
              <Stack spacing={2}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={facebook}
                    alt="facebook"
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
                        handleOnChange(e.target.value, "socialF");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={instagram}
                    alt="instagram"
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
                        handleOnChange(e.target.value, "socialI");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={linkedin}
                    alt="linkedin"
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
                        handleOnChange(e.target.value, "socialL");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={youtube}
                    alt="youtube"
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
                        handleOnChange(e.target.value, "socialY");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={twitter}
                    alt="twitter"
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
                        handleOnChange(e.target.value, "socialT");
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={pinterest}
                    alt="pinterest"
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
                        handleOnChange(e.target.value, "socialP");
                      }}
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Stack pt={2} pb={2}>
                <Typography>WEBSITES LINKS</Typography>
              </Stack>
              <Stack spacing={2}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <img
                    src={link}
                    alt="weblink"
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{" "}
                  <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.website}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.websiteLinks[0]?.link}
                      onChange={(e) => {
                        handleOnChange(e.target.value, "OtherLink1");
                      }}
                    />
                    {!!errors.website && (
                      <FormHelperText>{errors.website}</FormHelperText>
                    )}
                  </FormControl>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default DoctorEditForm;
