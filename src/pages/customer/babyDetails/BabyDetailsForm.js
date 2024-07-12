import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import api from "../../../utils/api/httpRequest";

const headingStyle = {
  fontSize: "24px",
  fontWeight: 500,
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

const BabyDetailsForm = () => {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    babyName: "",
    babyDOB: "",
    timeOfBirth: "",
    weight: "",
    DeliveryDoctorName: null,
    placeOfBirth: "",
    NomineeName: "",
    NomineeRelationship: "",
    babyProfile: "",
    DoctorProfile: "",
    DoctorName: null,
    HospitalName: null,
    HospitalAddressLine1: "",
    HospitalAddressLine2: "",
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const handleFatherImageUpload = async (e, fieldName) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("folder", "ClientDetails");
    try {
      const response = await api.post("/upload", formData, { headers });
      if (response?.data?.status === 200) {
        setFormValues((prev) => ({
          ...prev,
          [fieldName]: response?.data?.data?.key,
        }));
        console.log(formValues[fieldName]);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
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
                  BABY DETAILS
                </Typography>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Baby Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.babyName}
                        onChange={(e) =>
                          handleChange(e.target.value, "babyName")
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Date of Birth <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.babyDOB}
                      onChange={(e) => handleChange(e.target.value, "babyDOB")}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Time of Birth <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Time of Birth"
                        size="small"
                        value={formValues?.timeOfBirth}
                        onChange={(e) =>
                          handleChange(e.target.value, "timeOfBirth")
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Weight <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Weight"
                      size="small"
                      value={formValues?.weight}
                      onChange={(e) => handleChange(e.target.value, "weight")}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Delivery Doctor Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.DeliveryDoctorName}
                        onChange={(e) =>
                          handleChange(e.target.value, "DeliveryDoctorName")
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Place of Birth <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.placeOfBirth}
                      onChange={(e) =>
                        handleChange(e.target.value, "placeOfBirth")
                      }
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Nominee Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.NomineeName}
                      onChange={(e) =>
                        handleChange(e.target.value, "NomineeName")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Nominee Relationship <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.NomineeRelationship}
                      onChange={(e) =>
                        handleChange(e.target.value, "NomineeRelationship")
                      }
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "37%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" sx={headingStyle}>
                  Upload Baby's Picture
                </Typography>
                <Card variant="outlined" sx={{ marginTop: "10px" }}>
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
                        sx={{ width: 150, height: 150, marginRight: 2 }}
                      />
                      <Stack sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="h5"
                          sx={{ fontSize: "14px", marginBottom: "10px" }}
                        >
                          Drop your new profile Image here
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "14px",
                            marginBottom: "10px",
                            marginLeft: "50px",
                          }}
                        >
                          Maximum (2MB)
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{ fontSize: "14px", marginBottom: "10px" }}
                        >
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
                              onChange={(e) =>
                                handleFatherImageUpload(
                                  e,
                                  "ExpectantFatherProfilePhoto"
                                )
                              }
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
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
          }}
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
                  DOCTOR DETAILS
                </Typography>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Doctor's Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.DoctorName}
                        onChange={(e) =>
                          handleChange(e.target.value, "DoctorName")
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Hospital Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.HospitalName}
                      onChange={(e) =>
                        handleChange(e.target.value, "HospitalName")
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Hospital Address Line-1{" "}
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.HospitalAddressLine1}
                        onChange={(e) =>
                          handleChange(e.target.value, "HospitalAddressLine1")
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Hospital Address Line-2{" "}
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.HospitalAddressLine2}
                        onChange={(e) =>
                          handleChange(e.target.value, "HospitalAddressLine2")
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "37%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" sx={headingStyle}>
                  Upload Doctor's Picture
                </Typography>
                <Card variant="outlined" sx={{ marginTop: "10px" }}>
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
                        sx={{ width: 150, height: 150, marginRight: 2 }}
                      />
                      <Stack sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="h5"
                          sx={{ fontSize: "14px", marginBottom: "10px" }}
                        >
                          Drop your new profile Image here
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "14px",
                            marginBottom: "10px",
                            marginLeft: "50px",
                          }}
                        >
                          Maximum (2MB)
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{ fontSize: "14px", marginBottom: "10px" }}
                        >
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
                              onChange={(e) =>
                                handleFatherImageUpload(
                                  e,
                                  "ExpectantFatherProfilePhoto"
                                )
                              }
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
        </Stack>
        <Card variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginTop: "10px", fontWeight: "bold" }}
            >
              Frames
            </Typography>

            <Button
              variant="contained"
              size="small"
              //   onClick={(e) => {
              //     e.preventDefault();
              //     navigate("/customerPage/customerForm");
              //   }}
            >
              <AddIcon fontSize="small" /> Add Files
            </Button>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default BabyDetailsForm;
