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

const ClientDetailsThree = () => {
  const getStateList = useSelector((state) => state.global.stateList);
  const getCitiesList = useSelector((state) => state.global.cityList);
  const cityList = getCityIdList(getCitiesList);
  const stateList = getStateIdList(getStateList);

  const countryList = useSelector((state) => state.global.countryList);
  const upDatedCountryList = getNamesIdList(countryList);
  const [formValues, setFormValues] = useState({
    CurrentAddress: {
      addressLine1: "",
      country: 352,
      state: "",
      city: "",
      pincode: "",
    },
    PermanentAddress: {
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
        COUMMUNICATION DETAILS
      </Typography>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Current Address <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.CurrentAddress?.addressLine1}
                      onChange={(e) =>
                        handleChange(e.target.value, "addressLine1")
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.CurrentAddress?.city}
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
                    value={formValues?.CurrentAddress?.state}
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
                    value={formValues?.CurrentAddress?.country}
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
                      value={formValues?.CurrentAddress?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%", color: "black" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                      // checked={sameAddress}
                      // onChange={handleCheckboxChange}
                      />
                    }
                    label="If permanent address is same as correspondence address"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent sx={{ height: "355px" }}>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Permanent Address (If default from current address)
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input text"
                      size="small"
                      value={formValues?.PermanentAddress?.addressLine2}
                      onChange={(e) => handleChange(e.target.value, "otherId")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    City <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={cityList}
                    value={formValues?.PermanentAddress?.city}
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
                    value={formValues?.PermanentAddress?.state}
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
                    value={formValues?.PermanentAddress?.country}
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
                      value={formValues?.PermanentAddress?.pincode}
                      onChange={(e) => handleChange(e.target.value, "pincode")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ClientDetailsThree;
