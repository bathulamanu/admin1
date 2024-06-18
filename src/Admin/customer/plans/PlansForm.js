import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Stack,
  Divider,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import SingleSelect from "../../../GlobalComponents/SingleSelect";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

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

const PlansForm = () => {
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
    desc: "",
    additionalInfo: "",
  });

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ color: [] }],
      [{ align: [] }],
      [{ align: "center" }],
      [{ align: "right" }],
      [{ align: "justify" }],
      [{ list: "bullet" }],
      // ["clean"],
    ],
  };
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
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          paddingTop: "8px",
          marginLeft: "10px",
        }}
        variant="h5"
      >
        Create Plans
      </Typography>
      <Divider sx={{ mt: 3, mb: 3 }} />

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          padding: "10px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "49%",
            gap: 2,
            marginBottom: "60px",
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Title<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Sub - Title<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Icon<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Currency Symbol<span style={redStarStyle}>*</span>
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
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    EMI Amount<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    EMI Text<span style={redStarStyle}>*</span>
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
            </CardContent>
          </Card>
          {/* <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent> */}
          <Grid container spacing={2} pt={1} pb={1}>
            <Grid item style={{ width: "100%" }}>
              <ReactQuill
                value={formValues?.desc}
                onChange={(e) => handleChange(e, "desc")}
                modules={modules}
                placeholder="Description"
                theme="snow"
              />
            </Grid>
          </Grid>
          {/* </CardContent>
          </Card> */}
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Button Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.idProof}
                    onChange={(e) => handleChange(e, "idProof")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Status<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.idProof}
                    onChange={(e) => handleChange(e, "idProof")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "49%",
            gap: 2,
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Price<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Offer Price<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Event Offer Price<span style={redStarStyle}>*</span>
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
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Ribbon<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Ribbon Status<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.idProof}
                    onChange={(e) => handleChange(e, "idProof")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* Additional info */}
          {/* <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent> */}
          <Grid container spacing={2} pt={1} pb={1}>
            <Grid item style={{ width: "100%" }}>
              <ReactQuill
                theme="snow"
                value={formValues?.additionalInfo}
                onChange={(e) => handleChange(e, "additionalInfo")}
                modules={modules}
                placeholder="Additional Info"
              />
            </Grid>
          </Grid>
          {/* </CardContent>
          </Card> */}
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Duration Year<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Duration Year Text<span style={redStarStyle}>*</span>
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
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Custom Text<span style={redStarStyle}>*</span>
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
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Offer Timing (Date & Time)
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.idProof}
                    onChange={(e) => handleChange(e, "idProof")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PlansForm;
