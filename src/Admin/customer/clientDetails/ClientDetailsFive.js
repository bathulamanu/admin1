import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
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
  marginTop: "10px",
  marginLeft: "5px",
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

const ClientDetailsFive = () => {
  const [formValues, setFormValues] = useState({
    uin: "",
    refferClient: "",
    mobile1: "",
    mobile2: "",
    shipment: "",
    name: "",
    relationship: "",
    emgMobile1: "",
    emgMobile2: "",
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Stack sx={{ gap: 4 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card variant="outlined">
          <CardContent sx={{ width: "650px" }}>
            <Typography variant="h5" sx={headingStyle}>
              DETAILS REFERENCE / DETAILS OF RETURNING CRYOVAULT CLIENT
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "15px", marginTop: "12px" }}
            >
              If you are existing Cryovault client, please provide details as
              below<span style={redStarStyle}>*</span>
            </Typography>
            <Grid container spacing={2} pt={1} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  UIN
                  <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input text"
                    size="small"
                    value={formValues?.uin}
                    onChange={(e) => handleChange(e.target.value, "uin")}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              sx={{ fontSize: "15px", marginTop: "10px" }}
            >
              If referred by an existing client, please provide details as below
              <span style={redStarStyle}>*</span>
              below<span style={redStarStyle}>*</span>
            </Typography>
            <Grid container spacing={2} pt={1} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Referring clients name
                  <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input text"
                    size="small"
                    value={formValues?.refferClient}
                    onChange={(e) =>
                      handleChange(e.target.value, "refferClient")
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3}>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>Mobile-1</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  placeholder="Select"
                  size="small"
                  value={formValues?.mobile1}
                  onChange={(e) => handleChange(e, "mobile1")}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>Mobile-2</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  placeholder="Select"
                  size="small"
                  value={formValues?.mobile2}
                  onChange={(e) => handleChange(e, "mobile2")}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent sx={{ width: "650px" }}>
              <Typography variant="h5" sx={headingStyle}>
                SHIPMENT DETAILS
              </Typography>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Send collection kit to
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.shipment}
                    onChange={(e) => handleChange(e, "shipment")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent sx={{ width: "550px" }}>
              <Typography variant="h5" sx={headingStyle}>
                EMERGENCY CONTACT DETAILS
              </Typography>
              <Grid container spacing={2} pt={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Name</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.name}
                      onChange={(e) => handleChange(e.target.value, "name")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Relationship</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.relationship}
                      onChange={(e) =>
                        handleChange(e.target.value, "relationship")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Mobile-1</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.emgMobile1}
                      onChange={(e) =>
                        handleChange(e.target.value, "emgMobile1")
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Mobile-2</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.emgMobile2}
                      onChange={(e) =>
                        handleChange(e.target.value, "emgMobile2")
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" sx={headingStyle}>
            TICK AS APPLICABLE FOR CRYOVAULT BIOTECH INDIA PVT. LTD.
          </Typography>
          <Grid container spacing={2}>
            <Grid item style={{ width: "100%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                  // checked={sameAddress}
                  // onChange={handleCheckboxChange}
                  />
                }
                label="Requesting bank to arrange for pickup of meternal sample & Umbilical cord bleed"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item style={{ width: "100%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                  // checked={sameAddress}
                  // onChange={handleCheckboxChange}
                  />
                }
                label="Requesting bank to oranise for Phledopomist"
              />
            </Grid>
            <Typography sx={{ marginLeft: "50px" }}>
              We conform that the information provide above is correct to the
              best of my knowledge and we also agree to keep Cryovault
              information in case of change of above details for future
              communications.
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ClientDetailsFive;
