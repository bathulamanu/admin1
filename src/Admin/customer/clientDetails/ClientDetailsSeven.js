import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
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
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAnnexureInfo } from "../../Slices/globalSlice";
import { addOrupdateAnnexureInfo } from "../../Slices/customerClientSlice";
import { formatDateYYYYMMDD } from "../../../globalFunctions";

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

const ClientDetailsSeven = forwardRef((props, ref) => {
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
    NameOfExcutive: "",
    EmployeeCode: "",
    NameOfManager: "",
    AreaOrRegion: "",
    Date: "",
    ExcutiveSignature: "",
    Name: "",
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        SubscribedInnerPageData.CustomerData[0].ExcutiveInfoForbankUse
      ) {
        for (let item in SubscribedInnerPageData.CustomerData[0]
          .ExcutiveInfoForbankUse) {
          for (let item1 in formValues) {
            if (item1 == item) {
              formValues[item1] =
                item == "Date"
                  ? formatDateYYYYMMDD(
                      SubscribedInnerPageData.CustomerData[0]
                        .ExcutiveInfoForbankUse[item]
                    )
                  : SubscribedInnerPageData.CustomerData[0]
                      .ExcutiveInfoForbankUse[item];
            }
          }
        }
      }
    }
    getCommunicationData();
  }, [SubscribedInnerPageData]);
  useEffect(() => {
    getAnnexureInfo();
  }, [handlePrev]);

  useImperativeHandle(ref, () => ({
    getForbankUseChildData: () => {
      dispatch(
        addOrupdateAnnexureInfo({
          ExcutiveInfoForbankUse: formValues,
          customerAnnexureInformationId: customerAnnexureInformationId,
          customerID: customerID,
        })
      );

      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    },
  }));
  console.log("formvalues", formValues);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          FOR BANK USE ONLY
        </Typography>
        <Grid container spacing={2} pt={1} pb={2}>
          <Grid item xs={6}>
            <InputLabel sx={inputLableStyle}>Name of excutive</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="NameOfExcutive"
                name="NameOfExcutive"
                placeholder="Input text"
                size="small"
                value={formValues?.NameOfExcutive}
                onChange={(e) => handleChange(e.target.value, "NameOfExcutive")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={inputLableStyle}>Employee Code</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="EmployeeCode"
                name="EmployeeCode"
                placeholder="Input text"
                size="small"
                value={formValues?.EmployeeCode}
                onChange={(e) => handleChange(e.target.value, "EmployeeCode")}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Name of manager</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="NameOfManager"
                placeholder="Input text"
                size="small"
                value={formValues?.NameOfManager}
                onChange={(e) => handleChange(e.target.value, "NameOfManager")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Area / Region</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="AreaOrRegion"
                name="AreaOrRegion"
                placeholder="Input text"
                size="small"
                value={formValues?.AreaOrRegion}
                onChange={(e) => handleChange(e.target.value, "AreaOrRegion")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Date</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="Date"
                placeholder="Input text"
                type="date"
                size="small"
                value={formValues?.Date}
                onChange={(e) => handleChange(e.target.value, "Date")}
              />
            </FormControl>
          </Grid>
        </Grid>
        {/* <Stack
          sx={{ display: "flex", marginLeft: "1020px", maxWidth: "350px" }}
        > */}
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack></Stack>
          <Stack
            sx={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Grid container spacing={2} pt={3} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Signature of executive
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <TextareaAutosize
                    minRows={4}
                    id="ExcutiveSignature"
                    name="ExcutiveSignature"
                    size="small"
                    value={formValues?.ExcutiveSignature}
                    onChange={(e) =>
                      handleChange(e.target.value, "ExcutiveSignature")
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>Name of excutive</InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="Name"
                    name="Name"
                    placeholder="Input text"
                    size="small"
                    value={formValues?.Name}
                    onChange={(e) => handleChange(e.target.value, "Name")}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
});

export default ClientDetailsSeven;
