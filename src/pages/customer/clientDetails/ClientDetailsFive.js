import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import { useDispatch, useSelector } from "react-redux";
import { getAnnexureInfo } from "../../../redux/Slices/globalSlice";
import { addOrupdateAnnexureInfo } from "../../../redux/Slices/customerClientSlice";

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
  var { handlePrev, currentStep, setCurrentStep, totalSteps } = props;

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

  const SubscribedInnerPageData = useSelector(
    (state) => state.global.SubscribedUserData
  );
  console.log("SubscribedInnerPageData", SubscribedInnerPageData);

  const customerDetail = useSelector((state) => state.customers.customerDetail);
  const customerID = customerDetail?.customerID;
  console.log("customerDetail customerID", customerID);

  useEffect(() => {
    dispatch(getAnnexureInfo(customerID));
  }, []);

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
    let isValid = true;
    let errorMsg = "";

    if (
      name === "Mobile1" ||
      name === "Mobile2" ||
      name === "EmergencyMobile1" ||
      name === "EmergencyMobile2"
    ) {
      const regex = /^[0-9]*$/;
      if (!regex.test(value)) {
        isValid = false;
        errorMsg = "Only numbers are allowed";
      } else if (value.length > 10) {
        isValid = false;
        errorMsg = "Maximum 10 digits are allowed";
      }
    }

    if (isValid) {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMsg,
      }));
    }
  };

  useEffect(() => {
    async function getCommunicationData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageData?.customerAnnexureInformationId
      );
      if (
        SubscribedInnerPageData &&
        SubscribedInnerPageData.CustomerData &&
        SubscribedInnerPageData.CustomerData.length != 0 &&
        SubscribedInnerPageData.CustomerData[0].ReferenceDetails
      ) {
        for (let item in SubscribedInnerPageData.CustomerData[0]
          .ReferenceDetails) {
          for (let item1 in formValues) {
            if (item1 == item) {
              formValues[item1] =
                SubscribedInnerPageData.CustomerData[0].ReferenceDetails[item];
            }
          }
        }
      }
    }
    getCommunicationData();
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    // e.preventDefault();
    getAnnexureInfo();
  }, [handlePrev]);

  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    getReferenceIformationChildData: () => {
      if (!formValues.ExisitingCryovaultClientUIN) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExisitingCryovaultClientUIN: "UIN is required",
        }));
        return;
      } else if (!formValues.IfReferredByExisitingClientName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          IfReferredByExisitingClientName: "Name is required",
        }));
        return;
      }
      dispatch(
        addOrupdateAnnexureInfo({
          ReferenceDetails: formValues,
          customerAnnexureInformationId: customerAnnexureInformationId,
          customerID: customerID,
        })
      );

      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    },
  }));

  console.log("formValues", formValues);

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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExisitingCryovaultClientUIN}
                  >
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
                    {!!errors.ExisitingCryovaultClientUIN && (
                      <FormHelperText>
                        {errors.ExisitingCryovaultClientUIN}
                      </FormHelperText>
                    )}
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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.IfReferredByExisitingClientName}
                  >
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
                    {!!errors.IfReferredByExisitingClientName && (
                      <FormHelperText>
                        {errors.IfReferredByExisitingClientName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Mobile-1</InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.Mobile1}
                  >
                    <OutlinedInput
                      fullWidth
                      id="Mobile1"
                      name="Mobile1"
                      placeholder="Select"
                      size="small"
                      value={formValues?.Mobile1}
                      onChange={(e) => handleChange(e, "Mobile1")}
                    />
                    {!!errors.Mobile1 && (
                      <FormHelperText>{errors.Mobile1}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Mobile-2</InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.Mobile2}
                  >
                    <OutlinedInput
                      fullWidth
                      id="Mobile2"
                      name="Mobile2"
                      placeholder="Select"
                      size="small"
                      value={formValues?.Mobile2}
                      onChange={(e) => handleChange(e, "Mobile2")}
                    />
                    {!!errors.Mobile2 && (
                      <FormHelperText>{errors.Mobile2}</FormHelperText>
                    )}
                  </FormControl>
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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.Name}
                  >
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="Name"
                      name="Name"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.Name}
                      onChange={(e) => handleChange(e.target.value, "Name")}
                    />
                    {!!errors.Name && (
                      <FormHelperText>{errors.Name}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Relationship</InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.RelationShip}
                  >
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="RelationShip"
                      name="RelationShip"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.RelationShip}
                      onChange={(e) =>
                        handleChange(e.target.value, "RelationShip")
                      }
                    />
                    {!!errors.RelationShip && (
                      <FormHelperText>{errors.RelationShip}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Mobile-1</InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.EmergencyMobile1}
                  >
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="EmergencyMobile1"
                      name="EmergencyMobile1"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.EmergencyMobile1}
                      onChange={(e) =>
                        handleChange(e.target.value, "EmergencyMobile1")
                      }
                    />
                    {!!errors.EmergencyMobile1 && (
                      <FormHelperText>{errors.EmergencyMobile1}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>Mobile-2</InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.EmergencyMobile2}
                  >
                    <OutlinedInput
                      fullWidth
                      type="text"
                      id="EmergencyMobile2"
                      name="EmergencyMobile2"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.EmergencyMobile2}
                      onChange={(e) =>
                        handleChange(e.target.value, "EmergencyMobile2")
                      }
                    />
                    {!!errors.EmergencyMobile2 && (
                      <FormHelperText>{errors.EmergencyMobile2}</FormHelperText>
                    )}
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
