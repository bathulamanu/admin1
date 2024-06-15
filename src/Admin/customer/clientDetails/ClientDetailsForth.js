import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
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
import { useDispatch, useSelector } from "react-redux";
import {
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from "../../../globalFunctions";

const headingStyle = {
  fontSize: "18px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "15px",
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

const ClientDetailsForth = () => {
  const getStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(getStateList);

  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);
  const [formValues, setFormValues] = useState({
    expectedDate: "",
    pregnancy: "",
    childrens: "",
    gynaecologist: "",
    constHospitals: "",
    HospitalAddress: {
      addressLine1: "",
      country: 352,
      state: "",
      city: "",
      pincode: "",
    },
    DeliveringAddress: {
      addressLine2: "",
      country: 352,
      state: "",
      city: "",
      pincode: "",
    },
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
      <Typography variant="h5" sx={headingStyle}>
        HOSPITAL & BIRTHING DETAILS (TO INFORM BANK OF ANY CHANGES PRIOR TO
        DELIVERY)
      </Typography>
      <CardContent>
        <Card variant="outlined" sx={{ width: "700px", marginBottom: "15px" }}>
          <CardContent sx={{ width: "600px" }}>
            <Grid container spacing={2} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Expected date of delivery <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.expectedDate}
                    onChange={(e) =>
                      handleChange(e.target.value, "expectedDate")
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Type of pregnancy <span style={redStarStyle}>*</span>
                </InputLabel>
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  data={cityList}
                  value={formValues?.pregnancy}
                  onChange={(e) => {
                    handleChange(e, "pregnancy");
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  How many childrens do you have alredy{" "}
                  <span style={redStarStyle}>*</span>
                </InputLabel>
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  data={stateList}
                  value={formValues?.childrens}
                  onChange={(e) => {
                    // dispatch(getCityList(e))
                    handleChange(e, "childrens");
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Consulting Gynaecologist <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" size="small" fullWidth>
                  <OutlinedInput
                    fullWidth
                    type="number"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.gynaecologist}
                    onChange={(e) =>
                      handleChange(e.target.value, "gynaecologist")
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Consulting Hospitals <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" size="small" fullWidth>
                  <OutlinedInput
                    fullWidth
                    type="number"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.constHospitals}
                    onChange={(e) =>
                      handleChange(e.target.value, "constHospitals")
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.HospitalAddress?.city}
                    onChange={(e) => {
                      handleChange(e, "city");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    State <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.HospitalAddress?.state}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "state");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Country <span style={redStarStyle}>*</span>
                  </InputLabel>
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
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Pincode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="pincode"
                      size="small"
                      value={formValues?.HospitalAddress?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Hospital Address <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.HospitalAddress?.addressLine1}
                      onChange={(e) =>
                        handleChange(e.target.value, "addressLine1")
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item style={{ width: "100%", color: "black" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                      // checked={sameAddress}
                      // onChange={handleCheckboxChange}
                      />
                    }
                    label="If  delivering hospital address is same as Current hospital address"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.DeliveringAddress?.city}
                    onChange={(e) => {
                      handleChange(e, "city");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    State <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={stateList}
                    value={formValues?.DeliveringAddress?.state}
                    onChange={(e) => {
                      // dispatch(getCityList(e))
                      handleChange(e, "state");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Country <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    disabled={true}
                    data={upDatedCountryList}
                    value={formValues?.DeliveringAddress?.country}
                    onChange={(e) => {
                      handleChange(e, "country");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Pincode <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="pincode"
                      placeholder="pincode"
                      size="small"
                      value={formValues?.DeliveringAddress?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Delivering Address (If different from consulting
                    gynaecologist)
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input text"
                      size="small"
                      value={formValues?.DeliveringAddress?.addressLine2}
                      onChange={(e) => handleChange(e.target.value, "otherId")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ClientDetailsForth;
