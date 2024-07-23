import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
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

const ClientDetailsSix = forwardRef((props, ref) => {
  var { handlePrev, currentStep, setCurrentStep, totalSteps } = props;

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
    MotherOrGuardianSignature: "",
    FatherOrGuardianSignature: "",
    MedicalDirectorSignature: "",
    FatherOrGuardianName: "",
    MotherOrGuardianName: "",
    MedicalDirectorName: "",
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function getSignatureData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageData?.customerAnnexureInformationId
      );
      if (
        SubscribedInnerPageData &&
        SubscribedInnerPageData.CustomerData &&
        SubscribedInnerPageData.CustomerData.length != 0 &&
        SubscribedInnerPageData.CustomerData[0].AllSignature
      ) {
        for (let item in SubscribedInnerPageData.CustomerData[0].AllSignature) {
          for (let item1 in formValues) {
            if (item1 == item) {
              formValues[item1] =
                SubscribedInnerPageData.CustomerData[0].AllSignature[item];
            }
          }
        }
      }
    }
    getSignatureData();
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    getAnnexureInfo();
  }, [handlePrev]);

  useImperativeHandle(ref, () => ({
    getSignatureChildData: () => {
      dispatch(
        addOrupdateAnnexureInfo({
          AllSignature: formValues,
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
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          SIGNATURE
        </Typography>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Father / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="FatherOrGuardianSignature"
                name="FatherOrGuardianSignature"
                size="small"
                value={formValues?.FatherOrGuardianSignature}
                onChange={(e) =>
                  handleChange(e.target.value, "FatherOrGuardianSignature")
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Mother / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="MotherOrGuardianSignature"
                name="MotherOrGuardianSignature"
                size="small"
                value={formValues?.MotherOrGuardianSignature}
                onChange={(e) =>
                  handleChange(e.target.value, "MotherOrGuardianSignature")
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Medical Director CBIPL
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="MedicalDirectorSignature"
                name="MedicalDirectorSignature"
                size="small"
                value={formValues?.MedicalDirectorSignature}
                onChange={(e) =>
                  handleChange(e.target.value, "MedicalDirectorSignature")
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Father / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="FatherOrGuardianName"
                name="FatherOrGuardianName"
                placeholder="Input text"
                size="small"
                value={formValues?.FatherOrGuardianName}
                onChange={(e) =>
                  handleChange(e.target.value, "FatherOrGuardianName")
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Mother / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="MotherOrGuardianName"
                name="MotherOrGuardianName"
                placeholder="Input text"
                size="small"
                value={formValues?.MotherOrGuardianName}
                onChange={(e) =>
                  handleChange(e.target.value, "MotherOrGuardianName")
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Medical Director CBIPL
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="MedicalDirectorName"
                name="MedicalDirectorName"
                placeholder="Input text"
                size="small"
                value={formValues?.MedicalDirectorName}
                onChange={(e) =>
                  handleChange(e.target.value, "MedicalDirectorName")
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
});

export default ClientDetailsSix;
