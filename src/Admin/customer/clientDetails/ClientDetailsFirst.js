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
import SingleSelect from "../../../GlobalComponents/SingleSelect";

const headingStyle = {
  fontSize: "18px",
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

const ClientDetailsFirst = () => {
  const [formValues, setFormValues] = useState({
    fatherName: "",
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
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Card variant="outlined">
          <CardContent sx={{ width: "550px" }}>
            <Typography variant="h5" sx={headingStyle}>
              FATHER'S INFORMATION
            </Typography>
            <Grid container spacing={2} pt={3}>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Expectant Father Name <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.fatherName}
                    onChange={(e) => handleChange(e, "fatherName")}
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
                  onChange={(e) => handleChange(e, "dob")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3}>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Email Address <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Email"
                    size="small"
                    value={formValues?.email}
                    onChange={(e) => handleChange(e, "email")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Phone Number <span style={redStarStyle}>*</span>
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  placeholder="Input Phone Number"
                  size="small"
                  value={formValues?.phoneNumber}
                  onChange={(e) => handleChange(e, "phoneNumber")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3}>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Occupation <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.occupation}
                    onChange={(e) => handleChange(e, "occupation")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Designation <span style={redStarStyle}>*</span>
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  placeholder="Input Text"
                  size="small"
                  value={formValues?.designation}
                  onChange={(e) => handleChange(e, "designation")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Organization Name<span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.orgName}
                    onChange={(e) => handleChange(e, "orgName")}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3}>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  ID Proof <span style={redStarStyle}>*</span>
                </InputLabel>
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  value={formValues?.idProof}
                  onChange={(e) => handleChange(e, "idProof")}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  ID Proof Number <span style={redStarStyle}>*</span>
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  placeholder="Input Text"
                  size="small"
                  value={formValues?.idProofNo}
                  onChange={(e) => handleChange(e, "idProofNo")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  If Other, please Specify
                  <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input text"
                    size="small"
                    value={formValues?.otherId}
                    onChange={(e) => handleChange(e, "otherId")}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ width: "550px" }}>
            <Typography variant="h5" sx={headingStyle}>
              Upload Father's Picture
            </Typography>
            <Card variant="outlined" sx={{ marginTop: "10px" }}>
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
            <Typography variant="h5" sx={headingStyle}>
              Upload ID Proofs
            </Typography>
            <Card variant="outlined" sx={{ marginTop: "10px" }}>
              <CardContent>
                <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                  <Avatar sx={{ width: 200, height: 200, marginRight: 2 }} />
                  <Stack sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="h5"
                      sx={{ marginBottom: "10px", marginLeft: "30px" }}
                    >
                      Drop your ID Proof here
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
      </CardContent>
    </Card>
  );
};

export default ClientDetailsFirst;
