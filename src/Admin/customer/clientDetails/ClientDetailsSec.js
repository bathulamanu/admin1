import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SingleSelect from "../../../GlobalComponents/SingleSelect";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, getTypeOfProofList } from "../../../globalFunctions";
import api from "../../../api/httpRequest";
import { getAnnexureInfo, GetTypeOfProof } from "../../Slices/globalSlice";
import { addOrupdateAnnexureInfo } from "../../Slices/customerClientSlice";

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

const ClientDetailsSec = forwardRef((props, ref) => {
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
  const IDproofDetails = useSelector((state) => state.global.typeOfProofData);
  const IDList = getTypeOfProofList(IDproofDetails);

  const SubscribedInnerPageData = useSelector(
    (state) => state.global.SubscribedUserData
  );
  console.log("SubscribedInnerPageData", SubscribedInnerPageData);

  const customerDetail = useSelector((state) => state.customers.customerDetail);

  const [formValues, setFormValues] = useState({
    ExpectantMotherName: "",
    ExpectantMotherDOB: "",
    ExpectantMotherEmail: "",
    ExpectantMotherMobile: "",
    ExpectantMotherOccupation: "",
    ExpectantMotherDesignation: "",
    ExpectantMotherOrganizationName: "",
    ExpectantMotherIDproof: "",
    ExpectantMotherIdproofNo: "",
    ExpectantMotherOtherInfo: "",
    ExpectantMotherIDproofPhoto: "",
    ExpectantMotherProfilePhoto: "",
  });

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleImageUpload = async (e, fieldName) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("folder", "ClientDetails");
    try {
      const response = await api.post("/upload", formData, { headers });
      if (response?.data?.status === 200) {
        setFormValues((prev) => ({
          ...prev,
          [fieldName]: response?.data?.data?.key,
        }));
        console.log(formValues[fieldName]);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getCustomerMotherData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageData?.customerAnnexureInformationId
      );
      if (
        SubscribedInnerPageData &&
        SubscribedInnerPageData.CustomerClientMotherDetails
      ) {
        for (let item in SubscribedInnerPageData.CustomerClientMotherDetails) {
          for (let item1 in formValues) {
            if (item1 == item) {
              formValues[item1] =
                item == "ExpectantMotherDOB"
                  ? formatDate(
                      SubscribedInnerPageData.CustomerClientMotherDetails[item]
                    )
                  : SubscribedInnerPageData.CustomerClientMotherDetails[item];
            }
          }
          for (let item2 in formValues) {
            if (item2 == item) {
              formValues[item2] =
                SubscribedInnerPageData.CustomerClientMotherDetails[item];
            }
          }
        }
      }
    }
    getCustomerMotherData();
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    // e.preventDefault();
    getAnnexureInfo();
  }, [handlePrev]);
  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    getMotherData: () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      if (!formValues.ExpectantMotherName.trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherName: "Mother Name is required",
        }));
        return;
      } else if (!formValues.ExpectantMotherDOB.trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherDOB: "Date of Birth is required",
        }));
        return;
      } else if (!emailRegex.test(formValues.ExpectantMotherEmail)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherEmail: "Invalid email address",
        }));
        return;
      } else if (!phoneRegex.test(formValues.ExpectantMotherMobile)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherMobile: "Phone number must be 10 digits.",
        }));
        return;
      } else if (!formValues.ExpectantMotherOccupation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherOccupation: "Occupation is required",
        }));
        return;
      } else if (!formValues.ExpectantMotherDesignation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherDesignation: "Designation is required",
        }));
        return;
      } else if (!formValues.ExpectantMotherOrganizationName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherOrganizationName: "Organization Name is required",
        }));
        return;
      } else if (!formValues.ExpectantMotherIDproof) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherIDproof: "IDproof is required",
        }));
        return;
      } else if (!formValues.ExpectantMotherIdproofNo) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherIdproofNo: "IDproof No is required",
        }));
        return;
      } else if (!formValues.ExpectantMotherOtherInfo) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantMotherOtherInfo: "Other IDproof No is required",
        }));
        return;
      }
      dispatch(
        addOrupdateAnnexureInfo({
          CustomerClientMotherDetails: formValues,
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

  const customerID = customerDetail?.customerID;
  console.log("customerDetail customerID", customerID);
  useEffect(() => {
    dispatch(GetTypeOfProof());
    dispatch(getAnnexureInfo(customerID));
  }, []);

  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" sx={headingStyle}>
                MOTHER'S INFORMATION
              </Typography>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Expectant Mother Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherName}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherName"
                      name="ExpectantMotherName"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantMotherName}
                      onChange={(e) =>
                        handleChange(e.target.value, "ExpectantMotherName")
                      }
                    />
                    {!!errors.ExpectantMotherName && (
                      <FormHelperText>
                        {errors.ExpectantMotherName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Date of Birth <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherDOB}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherDOB"
                      name="ExpectantMotherDOB"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantMotherDOB}
                      onChange={(e) =>
                        handleChange(e.target.value, "ExpectantMotherDOB")
                      }
                    />
                    {!!errors.ExpectantMotherDOB && (
                      <FormHelperText>
                        {errors.ExpectantMotherDOB}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Email Address <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherEmail}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherEmail"
                      name="ExpectantMotherEmail"
                      placeholder="Input Email"
                      size="small"
                      value={formValues?.ExpectantMotherEmail}
                      onChange={(e) =>
                        handleChange(e.target.value, "ExpectantMotherEmail")
                      }
                    />
                    {!!errors.ExpectantMotherEmail && (
                      <FormHelperText>
                        {errors.ExpectantMotherEmail}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Phone Number <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherMobile}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherMobile"
                      name="ExpectantMotherMobile"
                      placeholder="Input Phone Number"
                      size="small"
                      value={formValues?.ExpectantMotherMobile}
                      onChange={(e) =>
                        handleChange(e.target.value, "ExpectantMotherMobile")
                      }
                    />
                    {!!errors.ExpectantMotherMobile && (
                      <FormHelperText>
                        {errors.ExpectantMotherMobile}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Occupation <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherOccupation}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherOccupation"
                      name="ExpectantMotherOccupation"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantMotherOccupation}
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          "ExpectantMotherOccupation"
                        )
                      }
                    />
                    {!!errors.ExpectantMotherOccupation && (
                      <FormHelperText>
                        {errors.ExpectantMotherOccupation}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Designation <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherDesignation}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherDesignation"
                      name="ExpectantMotherDesignation"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantMotherDesignation}
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          "ExpectantMotherDesignation"
                        )
                      }
                    />
                    {!!errors.ExpectantMotherDesignation && (
                      <FormHelperText>
                        {errors.ExpectantMotherDesignation}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Organization Name<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherOrganizationName}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherOrganizationName"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantMotherOrganizationName}
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          "ExpectantMotherOrganizationName"
                        )
                      }
                    />
                    {!!errors.ExpectantMotherOrganizationName && (
                      <FormHelperText>
                        {errors.ExpectantMotherOrganizationName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    ID Proof <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherIDproof}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={IDList}
                      value={formValues?.ExpectantMotherIDproof}
                      onChange={(e) => {
                        handleChange(e, "ExpectantMotherIDproof");
                      }}
                    />
                    {!!errors.ExpectantMotherIDproof && (
                      <FormHelperText>
                        {errors.ExpectantMotherIDproof}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    ID Proof Number <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherIdproofNo}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherIdproofNo"
                      name="ExpectantMotherIdproofNo"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantMotherIdproofNo}
                      onChange={(e) =>
                        handleChange(e.target.value, "ExpectantMotherIdproofNo")
                      }
                    />
                    {!!errors.ExpectantMotherIdproofNo && (
                      <FormHelperText>
                        {errors.ExpectantMotherIdproofNo}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    If Other, please Specify
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantMotherOtherInfo}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantMotherOtherInfo"
                      name="ExpectantMotherOtherInfo"
                      placeholder="Input text"
                      size="small"
                      value={formValues?.ExpectantMotherOtherInfo}
                      onChange={(e) =>
                        handleChange(e.target.value, "ExpectantMotherOtherInfo")
                      }
                    />
                    {!!errors.ExpectantMotherOtherInfo && (
                      <FormHelperText>
                        {errors.ExpectantMotherOtherInfo}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: "37%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" sx={headingStyle}>
                Upload Mother's Picture
              </Typography>
              <Card variant="outlined" sx={{ marginTop: "10px" }}>
                <CardContent>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Avatar
                      src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.ExpectantMotherProfilePhoto}`}
                      sx={{ width: 150, height: 150, marginRight: 2 }}
                    />
                    <Stack sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h5"
                        sx={{ fontSize: "14px", marginBottom: "10px" }}
                      >
                        Drop your new profile Image here
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "14px",
                          marginBottom: "10px",
                          marginLeft: "50px",
                        }}
                      >
                        Maximum (2MB)
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontSize: "14px", marginBottom: "10px" }}
                      >
                        Support Formats: JPG, PNG, SVG
                      </Typography>
                      <Box sx={{ alignItems: "center", marginLeft: "50px" }}>
                        <Button
                          component="label"
                          variant="contained"
                          disabled
                          sx={{ fontSize: "14px" }}
                        >
                          Choose File
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack></Stack>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{ marginTop: "10px" }}
                >
                  Upload Image
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/svg+xml"
                    hidden
                    onChange={(e) =>
                      handleImageUpload(e, "ExpectantMotherProfilePhoto")
                    }
                  />
                </Button>
              </Stack>
              <Typography variant="h5" sx={headingStyle}>
                Upload ID Proofs
              </Typography>
              <Card variant="outlined" sx={{ marginTop: "10px" }}>
                <CardContent>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Avatar
                      src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.ExpectantMotherIDproofPhoto}`}
                      sx={{ width: 150, height: 150, marginRight: 2 }}
                    />
                    <Stack sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "14px",
                          marginBottom: "10px",
                          marginLeft: "30px",
                        }}
                      >
                        Drop your ID Proof here
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "14px",
                          marginBottom: "10px",
                          marginLeft: "50px",
                        }}
                      >
                        Maximum (2MB)
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontSize: "14px", marginBottom: "10px" }}
                      >
                        Support Formats: JPG, PNG, SVG
                      </Typography>
                      <Box sx={{ alignItems: "center", marginLeft: "50px" }}>
                        <Button
                          component="label"
                          variant="contained"
                          disabled
                          sx={{ fontSize: "14px" }}
                        >
                          Choose File
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack></Stack>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{ marginTop: "10px" }}
                >
                  Upload Image
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/svg+xml"
                    hidden
                    onChange={(e) =>
                      handleImageUpload(e, "ExpectantMotherIDproofPhoto")
                    }
                  />
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ClientDetailsSec;
