import React, { forwardRef, useState } from "react";
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
import { useDispatch } from "react-redux";

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

const ClientDetailsFive = forwardRef((props, ref) => {
  var {
    handleNext,
    handlePrev,
    currentStep,
    setCurrentStep,
    totalSteps,
  } = props;

  const [
    customerAnnexureInformationId,
    setCustomerAnnexureInformationId,
  ] = useState(null);
  const dispatch = useDispatch();
  const Shipment = [
    { id: 1, name: "Shipment 1" },
    { id: 2, name: "Shipment 2" },
    { id: 3, name: "Shipment 3" },
    { id: 4, name: "Shipment 4" },
    { id: 5, name: "Shipment 5" },
    { id: 6, name: "Shipment 6" },
  ];
  const [formValues, setFormValues] = useState({
    ExisitingCryovaultClientUIN: "",
    IfReferredByExisitingClientName: "",
    Mobile1: "",
    Mobile2: "",
    shipmentDetails: "",
    Name: "",
    RelationShip: "",
    EmergencyMobile1: "",
    EmergencyMobile2: "",
    meternalSampleAndUmbilicalBleed: false,
    phledopomist: false,
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error message when the user starts typing
    // setErrors({
    //   ...errors,
    //   [name]: "",
    // });
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
        <Box
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent sx={{ height: "440px" }}>
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
                      id="ExisitingCryovaultClientUIN"
                      name="ExisitingCryovaultClientUIN"
                      placeholder="Input text"
                      size="small"
                      value={formValues?.ExisitingCryovaultClientUIN}
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          "ExisitingCryovaultClientUIN"
                        )
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Typography
                variant="h5"
                sx={{ fontSize: "15px", marginTop: "10px" }}
              >
                If referred by an existing client, please provide details as
                below
                <span style={redStarStyle}>*</span>
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
                      id="IfReferredByExisitingClientName"
                      name="IfReferredByExisitingClientName"
                      placeholder="Input text"
                      size="small"
                      value={formValues?.IfReferredByExisitingClientName}
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          "IfReferredByExisitingClientName"
                        )
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
                    id="Mobile1"
                    name="Mobile1"
                    placeholder="Select"
                    size="small"
                    value={formValues?.Mobile1}
                    onChange={(e) => handleChange(e, "Mobile1")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Mobile-2</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="Mobile2"
                    name="Mobile2"
                    placeholder="Select"
                    size="small"
                    value={formValues?.Mobile2}
                    onChange={(e) => handleChange(e, "Mobile2")}
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
            <CardContent>
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
                    data={Shipment}
                    value={formValues?.shipmentDetails}
                    onChange={(e) => handleChange(e, "shipmentDetails")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
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
                      id="Name"
                      name="Name"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.Name}
                      onChange={(e) => handleChange(e.target.value, "Name")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Relationship</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      type="number"
                      id="RelationShip"
                      name="RelationShip"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.RelationShip}
                      onChange={(e) =>
                        handleChange(e.target.value, "RelationShip")
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
                      id="EmergencyMobile1"
                      name="EmergencyMobile1"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.EmergencyMobile1}
                      onChange={(e) =>
                        handleChange(e.target.value, "EmergencyMobile1")
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
                      id="EmergencyMobile2"
                      name="EmergencyMobile2"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.EmergencyMobile2}
                      onChange={(e) =>
                        handleChange(e.target.value, "EmergencyMobile2")
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
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
                    name="meternalSampleAndUmbilicalBleed"
                    checked={formValues?.meternalSampleAndUmbilicalBleed}
                    onChange={(e) =>
                      handleChange(
                        e.target.checked,
                        "meternalSampleAndUmbilicalBleed"
                      )
                    }
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
                    name="phledopomist"
                    checked={formValues?.phledopomist}
                    onChange={(e) =>
                      handleChange(e.target.checked, "phledopomist")
                    }
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
});

export default ClientDetailsFive;
