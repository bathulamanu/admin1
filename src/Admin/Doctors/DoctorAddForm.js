import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import doctorImg from "../../assets/doctor_img.png";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CommonSelect from "../../GlobalComponents/CommonSelect";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import pinterest from "../../assets/pinterest.png";
import link from "../../assets/link.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import {
  getByIdList,
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../globalFunctions";
import SingleSelect from "../../GlobalComponents/SingleSelect";
import api from "../../httpRequest";
import { handlePostDoctor } from "../Slices/doctorSlice";
import { getCityList } from "../Slices/globalSlice";
import { getHospitalsList } from "../Slices/hospitalSlice";
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

function deepCopyFormValues(doctorDetails, formValues) {
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
  deepCopy(copiedFormValue, doctorDetails);
  return copiedFormValue;
}

const DoctorAddForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const getSpecializationList = useSelector(
    (state) => state.global.specializationList
  );
  const getExperienceList = useSelector((state) => state.global.experienceList);
  const getGenderList = useSelector((state) => state.global.genderList);
  const getEmployementList = useSelector((state) => state.global.genderList);
  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);
  const specializationList = getByIdList(getSpecializationList);
  const experienceList = getByIdList(getExperienceList);
  const genderList = getByIdList(getGenderList);
  const employementTypeList = getByIdList(getEmployementList);
  const getStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  // console.log('All city for a state', getCitiesList)
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(getStateList);
  const hospitalsList = useSelector((state) => state.hospitals.hospitalsList);
  const [selectedHospital, setSelectedHospital] = useState("");
  useEffect(() => {
    dispatch(getHospitalsList(null));
  }, []);
  const handleHospitalChange = (event) => {
    const selectedId = event.target.value;
    const selectedHospital = hospitalsList.find(
      (hospital) => hospital.id === selectedId
    );
    setSelectedHospital(selectedId);
    handleOnChange(event, "hospitalAddress", selectedHospital.address);
  };

  const doctorDetails = useSelector((state) => state.doctor.doctorDetail);

  const [experienceData, setExperienceData] = useState({
    countryName: "",
    stateName: "",
    cityName: "",
    startDate: "",
    endDate: "",
  });

  const [formValues, setFormValues] = useState({
    doctorFirstName: "",
    doctorLastName: "",
    doctorID: "",
    specialist: [],
    experience: "",
    status: "",
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
        currentlyWorking: {
          type: "",
          default: false,
        },
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

  const handleOnChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => {
      let temp = { ...prev };
      switch (name) {
        case "specialist":
          let res = value?.map((ele) => ({ specializationID: ele }));
          temp.specialist = res;
          break;

        case "DOB":
          let dob = value ? dayjs(value).toISOString() : null;
          temp.DOB = dob;
          break;

        case "country":
          temp.previousExperience = {
            ...temp.previousExperience,
            country: value,
          };
          break;

        case "state":
          temp.previousExperience = {
            ...temp.previousExperience,
            state: value,
          };
          break;

        case "city":
          temp.previousExperience = { ...temp.previousExperience, city: value };
          break;

        case "Exspecialist":
          temp.previousExperience = {
            ...temp.previousExperience,
            specialist: value,
          };
          break;

        case "hospitalAddress":
          temp.previousExperience = {
            ...temp.previousExperience,
            hospitalAddress: value,
          };
          break;

        case "experience":
          temp.previousExperience = {
            ...temp.previousExperience,
            experience: value,
          };
          break;

        case "employmentType":
          temp.previousExperience = {
            ...temp.previousExperience,
            employmentType: value,
          };
          break;

        case "startDate":
          temp.previousExperience = {
            ...temp.previousExperience[0],
            startDate: value ? dayjs(value).toISOString() : null,
          };
          break;

        case "endDate":
          temp.previousExperience = {
            ...temp.previousExperience[0],
            endDate: value ? dayjs(value).toISOString() : null,
          };
          break;

        case "description":
          temp.previousExperience = {
            ...temp.previousExperience,
            description: value,
          };
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
          temp.websiteLinks = { ...temp.websiteLinks, link: value };
          break;

        default:
          temp[name] = value;
          break;
      }
      return temp;
    });
  };

  // console.log("dhkjshdgjshcjs", formValues);

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
          doctorProfile: response?.data?.data?.key,
        }));
        console.log(formValues?.hospitalLogo);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(handlePostDoctor(formValues));
  }, [formValues]);

  const fetchingLocation = (formValues, getCitiesList) => {
    const cityId = formValues.previousExperience.city;

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
        previousExperience: {
          ...formValues.previousExperience,
          longitude: location.longitude,
          latitude: location.latitude,
        },
      });
    }
  }, [formValues.previousExperience.city]);

  const updatedFormValues = deepCopyFormValues(doctorDetails, formValues);

  useEffect(() => {
    setFormValues((prevValue) => ({
      ...prevValue,
      ...updatedFormValues,
    }));
  }, [doctorDetails]);

  console.log("doctorDetails", doctorDetails);
  console.log("formvalues", formValues);

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
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"40px"}
        pt={5}
        pb={5}
        pl={1}
        gap={6}
      >
        <Stack>
          <Typography>Add doctor</Typography>
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
                  <FormControl variant="outlined" fullWidth size="small">
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
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="demo-select-small-label">
                    Doctor ID <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
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
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="demo-select-small-label">
                    Doctor Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      name="doctorLastName"
                      id="outlined-adornment-password"
                      placeholder="#D-00012"
                      size="small"
                      value={formValues?.doctorLastName}
                      onChange={(e) =>
                        handleOnChange(e.target.value, "doctorLastName")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="demo-select-small-label">
                    Specialist
                  </InputLabel>
                  <CommonSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.specialist?.map(
                      (item) => item?.specilizationID
                    )}
                    data={specializationList}
                    onChange={(e) => handleOnChange(e, "specialist")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="demo-select-small-label">
                    Experience
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    value={formValues?.experience}
                    data={experienceList}
                    width={"100%"}
                    onChange={(e) => handleOnChange(e, "experience")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="demo-select-small-label">Status</InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.status}
                    data={[
                      { id: "1", name: "Active" },
                      { id: "2", name: "InActive" },
                    ]}
                    onChange={(e) => handleOnChange(e, "status")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Location</InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.location}
                    onChange={(e) => handleOnChange(e, "location")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>IMr Registration ID</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      name="IMRregisterID"
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                      onChange={(e) =>
                        handleOnChange(e.target.value, "IMRregisterID")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>DOB</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        value={formValues.DOB ? dayjs(formValues.DOB) : null}
                        onChange={(e) => {
                          handleOnChange(e, "DOB");
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Gender</InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={genderList}
                    value={formValues?.gender}
                    onChange={(e) => {
                      handleOnChange(e, "gender");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Phone number</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
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
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Email Address</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      name="email"
                      value={formValues?.email}
                      onChange={(e) => handleOnChange(e.target.value, "email")}
                      id="outlined-adornment-password"
                      placeholder="email"
                      size="small"
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
                sx={{ mt: 3, mb: 3 }}
              >
                <Typography>Experience</Typography>
                <Button size="small" variant="outlined" startIcon={<AddIcon />}>
                  Add Experience
                </Button>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel>Country</InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    data={upDatedCountryList}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.country}
                    onChange={(e) => {
                      handleOnChange(e, "country");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>State</InputLabel>
                  {/* <CommonSelect Placeholder={"Select"} width={"100%"} /> */}
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.previousExperience[0]?.state}
                    onChange={(e) => {
                      dispatch(getCityList(e));
                      handleOnChange(e, "state");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>City</InputLabel>
                  {/* <CommonSelect Placeholder={"Select"} width={"100%"} /> */}
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.previousExperience[0]?.city}
                    onChange={(e) => {
                      handleOnChange(e, "city");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Specialist</InputLabel>
                  <CommonSelect
                    Placeholder={"Select"}
                    data={specializationList}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.specialist}
                    onChange={(e) => {
                      handleOnChange(e, "Exspecialist");
                    }}
                  />
                </Grid>
              </Grid>
              <Grid width={"100%"} sx={{ mt: 2, mb: 2 }}>
                <InputLabel>Hospital and Address</InputLabel>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    Placeholder={"Select"}
                    width={"100%"}
                    value={selectedHospital || ""}
                    onChange={handleHospitalChange}
                  >
                    {hospitalsList.map((hospital) => (
                      <MenuItem key={hospital.id} value={hospital.id}>
                        {`${hospital.hospitalName} - ${hospital.LocationInfo?.cityName}`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel>Experience</InputLabel>
                  {/* <CommonSelect
                    Placeholder={"Select"}
                    data={experienceList}
                    width={"100%"}
                  /> */}
                  <SingleSelect
                    Placeholder={"Select"}
                    data={experienceList}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.experience}
                    onChange={(e) => {
                      handleOnChange(e, "experience");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Employment type</InputLabel>
                  {/* <CommonSelect
                    Placeholder={"Select"}
                    data={employementTypeList}
                    width={"100%"}
                  /> */}
                  <SingleSelect
                    Placeholder={"Select"}
                    data={employementTypeList}
                    width={"100%"}
                    value={formValues?.previousExperience[0]?.employmentType}
                    onChange={(e) => {
                      handleOnChange(e, "employmentType");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Start date </InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        value={
                          formValues?.previousExperience[0]?.startDate
                            ? dayjs(
                                formValues?.previousExperience[0]?.startDate
                              )
                            : null
                        }
                        onChange={(e) => {
                          handleOnChange(e, "startDate");
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>End Date</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        value={
                          formValues?.previousExperience[0]?.endDate
                            ? dayjs(formValues?.previousExperience[0]?.endDate)
                            : null
                        }
                        onChange={(e) => {
                          handleOnChange(e, "endDate");
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
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
                    {/* <Typography variant="subtitle2">
                      Description (optional)
                    </Typography>
                    <CKEditor
                      editor={ClassicEditor}
                      disableWatchdog
                      data=""
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        // console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event) => {
                        // console.log(event);
                      }}
                      onBlur={(event, editor) => {
                        // console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log("Focus.", editor);
                      }}
                    /> */}
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
                  <Typography variant="subtitle2">Upload image</Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <img
                    src={formValues.doctorProfile || doctorImg}
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
                  {/* <Typography>Bio</Typography>
                  <CKEditor
                    editor={ClassicEditor}
                    disableWatchdog
                    data=""
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      // console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event) => {
                      // console.log(event);
                    }}
                    onBlur={(event, editor) => {
                      // console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      // console.log("Focus.", editor);
                    }}
                  /> */}
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
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{" "}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.websiteLinks?.link}
                      onChange={(e) => {
                        handleOnChange(e.target.value, "OtherLink1");
                      }}
                    />
                  </FormControl>
                </Stack>
                {/* <Stack direction={"row"} spacing={2} alignItems={"center"}>
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
                    />
                  </FormControl>
                </Stack> */}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default DoctorAddForm;
