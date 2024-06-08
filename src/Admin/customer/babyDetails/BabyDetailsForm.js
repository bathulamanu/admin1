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
import BabyDetailsFormData from "./BabyDetailsFormData";

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

const BabyDetailsForm = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [formValues, setFormValues] = useState({
    motherName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    occupation: "",
    designation: "",
    orgName: "",
    idProof: "",
    idProofNo: "",
    otherId: "",
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <Card variant="outlined">
            <CardContent sx={{ width: "550px" }}>
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
                      value={formValues?.motherName}
                      onChange={(e) =>
                        handleChange(e.target.value, "motherName")
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
                    value={formValues?.dob}
                    onChange={(e) => handleChange(e.target.value, "dob")}
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
                      value={formValues?.email}
                      onChange={(e) => handleChange(e.target.value, "email")}
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
                    value={formValues?.phoneNumber}
                    onChange={(e) =>
                      handleChange(e.target.value, "phoneNumber")
                    }
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
                      value={formValues?.occupation}
                      onChange={(e) =>
                        handleChange(e.target.value, "occupation")
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
                    value={formValues?.designation}
                    onChange={(e) =>
                      handleChange(e.target.value, "designation")
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
                    value={formValues?.idProofNo}
                    onChange={(e) => handleChange(e.target.value, "idProofNo")}
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
                    value={formValues?.idProofNo}
                    onChange={(e) => handleChange(e.target.value, "idProofNo")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent sx={{ width: "550px" }}>
              <Typography variant="h5" sx={{ marginTop: "20px" }}>
                Upload Baby's Picture
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
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
                      <Box sx={{ alignItems: "center", marginLeft: "50px" }}>
                        <Button
                          component="label"
                          variant="contained"
                          disabled
                          sx={{ fontSize: "24px" }}
                        >
                          Choose File
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ marginTop: "10px", marginLeft: "350px" }}
              >
                Upload Image
                <VisuallyHiddenInput type="file" />
              </Button>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card variant="outlined">
            <CardContent sx={{ width: "550px" }}>
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
                      value={formValues?.motherName}
                      onChange={(e) =>
                        handleChange(e.target.value, "motherName")
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
                    value={formValues?.dob}
                    onChange={(e) => handleChange(e.target.value, "dob")}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Hospital Address Line-1 <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.orgName}
                      onChange={(e) => handleChange(e.target.value, "orgName")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Hospital Address Line-2 <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.orgName}
                      onChange={(e) => handleChange(e.target.value, "orgName")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent sx={{ width: "550px" }}>
              <Typography variant="h5" sx={{ marginTop: "20px" }}>
                Upload Doctor's Picture
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
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
                      <Box sx={{ alignItems: "center", marginLeft: "50px" }}>
                        <Button
                          component="label"
                          variant="contained"
                          disabled
                          sx={{ fontSize: "24px" }}
                        >
                          Choose File
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ marginTop: "10px", marginLeft: "350px" }}
              >
                Upload Image
                <VisuallyHiddenInput type="file" />
              </Button>
            </CardContent>
          </Card>
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
              onClick={() => setShowDetails(!showDetails)}
            >
              Preview
            </Button>
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
        {showDetails && <BabyDetailsFormData />}
      </CardContent>
    </Card>
  );
};

export default BabyDetailsForm;
