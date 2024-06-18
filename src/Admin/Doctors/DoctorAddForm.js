import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import doctorImg from "../../assets/doctor_img.png";
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
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
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
import { useSelector } from "react-redux";
import { getByIdList, getNamesIdList } from "../../globalFunctions";
import SingleSelect from "../../GlobalComponents/SingleSelect";

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

// {
//   "doctorFirstName": "Amrutha",
//   "doctorLastName": "",
//   "doctorID": "doc-02",
//   "doctorProfile": "DoctorProfile/PomKpPCUkG-doctorFlyingbyes.jpg",
//   "IMRregisterID": "74fghj7ghh",
//   "countryCode": "+91",
//   "phoneNumber": "9512368745",
//   "status": true,
//   "doctorDetailsID": 1,
//   "specilizationInfo": [
//       {
//           "specilizationID": 58,
//           "value": "Rheumatology"
//       },
//       {
//           "specilizationID": 60,
//           "value": "Gynecologist"
//       }
//   ],
//   "id": 1,
//   "cityInfo": {
//       "cityID": 52385,
//       "name": "Hyderabad"
//   },
//   "experienceInfo": {
//       "experienceID": 5,
//       "value": "3 Years"
//   }
// },

const socialMediaLogoSize = 24;

const DoctorAddForm = () => {
  const theme = useTheme();
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
  // console.log("kjdgjkhdsgh", specializationList);

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
    doctorProfile: "",
    qualification: [{ qualificationId: 1 }, { qualificationId: 2 }],
    specialist: [
      {
        specilizationID: 1,
      },
      {
        specilizationID: 5,
      },
    ],
    location: "", // any city id
    DOB: "",
    IMRregisterID: "",
    experience: "",
    doctorID: "",
    gender: "",
    email: "",
    status: "",
    countryCode: "",
    phoneNumber: "",
    websiteLinks: [{ link: String }],
    sociallink: {
      facebook: "",
      instagram: "",
      twitter: "",
      LinkedIn: "",
      youtube: "",
      pinterest: "",
    },
    doctorBio: "",
    previousExperience: [
      {
        country: "",
        state: "",
        city: "",
        specialist: [
          {
            specilizationID: "",
          },
        ],
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
  });

  const handleOnChange = (e, name) => {
    // console.log("jkdhvkjgsdg", e);
    setFormValues((prev) => ({ ...prev, [name]: e }));
  };

  // console.log("dhkjshdgjshcjs", formValues);

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
                  <InputLabel id="demo-select-small-label">
                    Doctor Name
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
                    Doctor ID
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
                    Doctor Name
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
                    onChange={(e) => handleOnChange(e, "specilizationInfo")}
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
                    onChange={(e) => handleOnChange(e, "experienceInfo")}
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
                    onChange={(e) => handleOnChange(e)}
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
                        onChange={(e) => {
                          handleOnChange(e, "dob");
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
                      onChange={(e) => handleOnChange(e, "phoneNumber")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Email Address</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      name="email"
                      onChange={(e) => handleOnChange(e, "email")}
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
                    onChange={(e) => handleOnChange(e, "countryName")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>State</InputLabel>
                  {/* <CommonSelect Placeholder={"Select"} width={"100%"} /> */}
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    onChange={(e) => handleOnChange(e, "stateName")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>City</InputLabel>
                  {/* <CommonSelect Placeholder={"Select"} width={"100%"} /> */}
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    onChange={(e) => handleOnChange(e, "cityName")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Specialist</InputLabel>
                  <CommonSelect
                    Placeholder={"Select"}
                    data={specializationList}
                    width={"100%"}
                  />
                </Grid>
              </Grid>
              <Grid width={"100%"} sx={{ mt: 2, mb: 2 }}>
                <InputLabel>Hospital and Address</InputLabel>
                {/* <CommonSelect Placeholder={"Select"} width={"100%"} /> */}
                <SingleSelect Placeholder={"Select"} width={"100%"} />
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
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Start date </InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>End Date</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Stack sx={{ pt: 3 }}>
                    <Typography variant="subtitle2">
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
                  <Typography variant="subtitle2">Upload image</Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <img src={doctorImg} height={"auto"} width={"150px"} />
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
                    Upload file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Stack>
                <Stack height={"170px"} sx={{ pt: 3 }}>
                  <Typography>Bio</Typography>
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
                      size="small"
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
                    />
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

export default DoctorAddForm;
