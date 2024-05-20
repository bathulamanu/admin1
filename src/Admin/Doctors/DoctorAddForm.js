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
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CommonSelect from "../../GlobalComponents/CommonSelect";
import ReactQuill from "react-quill";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import pinterest from "../../assets/pinterest.png";
import link from "../../assets/link.png";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

const DoctorAddForm = ({ open, setOpen }) => {
  const theme = useTheme();

  const [formValues, setFormValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    field8: "",
    field9: "",
    field10: "",
    field11: "",
    field12: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
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
                  <InputLabel>Doctor Name</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Dr.Sal"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Doctor ID</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="#D-00012"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Doctor Name</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="#D-00012"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Specialist</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Experience</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Status</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Location</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>IMr Registration ID</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>DOB</InputLabel>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Gender</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Phone number</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Email</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
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
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>State</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>City</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>

                <Grid item xs={6}>
                  <InputLabel>Specialist</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
              </Grid>
              <Grid width={"100%"} sx={{ mt: 2, mb: 2 }}>
                <InputLabel>Hospital and Address</InputLabel>
                <CommonSelect Placeholder={"Select"} width={"100%"} />
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel>Experience</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Employment type</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
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
                      <DatePicker  />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Gender</InputLabel>
                  <CommonSelect Placeholder={"Select"} width={"100%"} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Phone number</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Email</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="email"
                      size="small"
                    />
                  </FormControl>
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
                <Stack height={"170px"}></Stack>
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
