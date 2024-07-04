import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import dayjs from "dayjs";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleSelect from "../../../GlobalComponents/SingleSelect";
import api from "../../../api/httpRequest";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, getTypeOfProofList } from "../../../globalFunctions";
import { getAnnexureInfo, GetTypeOfProof } from "../../Slices/globalSlice";
import { addOrupdateAnnexureInfo } from "../../Slices/customerClientSlice";
import { getCustomerDetails } from "../../Slices/customerSlice";

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

const ClientDetailsFirst = forwardRef((props, ref) => {
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

  useEffect(() => {
    dispatch(getCustomerDetails(null));
  }, []);
  // console.log("customerDetail", customerDetail);

  const [formValues, setFormValues] = useState({
    ExpectantFatherName: "",
    ExpectantFatherDOB: "",
    ExpectantFatherEmail: "",
    ExpectantFatherMobile: "",
    ExpectantFatherOccupation: "",
    ExpectantFatherDesignation: "",
    ExpectantFatherOrganizationName: "",
    ExpectantFatherIDproof: "",
    ExpectantFatherIdproofNo: "",
    ExpectantFatherOtherInfo: "",
    ExpectantFatherProfilePhoto: "",
    ExpectantFatherIDproofPhoto: "",
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

  const handleFatherImageUpload = async (e, fieldName) => {
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
    async function getCustomerFatherData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageData?.customerAnnexureInformationId
      );
      if (
        SubscribedInnerPageData &&
        SubscribedInnerPageData.CustomerClientFatherDetails
      ) {
        for (let item in SubscribedInnerPageData.CustomerClientFatherDetails) {
          for (let item1 in formValues) {
            if (item1 === item) {
              formValues[item1] =
                item === "ExpectantFatherDOB"
                  ? formatDate(
                      SubscribedInnerPageData.CustomerClientFatherDetails[item]
                    )
                  : SubscribedInnerPageData.CustomerClientFatherDetails[item];
            }
          }
          for (let item2 in formValues) {
            if (item2 == item) {
              formValues[item2] =
                SubscribedInnerPageData.CustomerClientFatherDetails[item];
            }
          }
        }
      }
    }
    getCustomerFatherData();
  }, [SubscribedInnerPageData]);

  useEffect(() => {
    // e.preventDefault();
    getAnnexureInfo();
  }, [handlePrev]);
  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    getFatherData: () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;

      if (!formValues.ExpectantFatherName.trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherName: "Father Name is required",
        }));
        return;
      } else if (!formValues.ExpectantFatherDOB.trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherDOB: "Date of Birth is required",
        }));
        return;
      } else if (!emailRegex.test(formValues.ExpectantFatherEmail)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherEmail: "Invalid email address",
        }));
        return;
      } else if (!phoneRegex.test(formValues.ExpectantFatherMobile)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherMobile: "Phone number must be 10 digits.",
        }));
        return;
      } else if (!formValues.ExpectantFatherOccupation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherOccupation: "Occupation is required",
        }));
        return;
      } else if (!formValues.ExpectantFatherDesignation) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherDesignation: "Designation is required",
        }));
        return;
      } else if (!formValues.ExpectantFatherOrganizationName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherOrganizationName: "Organization Name is required",
        }));
        return;
      } else if (!formValues.ExpectantFatherIDproof) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherIDproof: "IDproof is required",
        }));
        return;
      } else if (!formValues.ExpectantFatherIdproofNo) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ExpectantFatherIdproofNo: "IDproof No is required",
        }));
      }
      dispatch(
        addOrupdateAnnexureInfo({
          CustomerClientFatherDetails: formValues,
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

  const customerID = customerDetail?.customerID;
  console.log("customerDetail customerID", customerID);
  useEffect(() => {
    dispatch(GetTypeOfProof());
    dispatch(getAnnexureInfo(customerID));
  }, []);

  return (
    <Card variant="outlined">
      <ToastContainer />
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
                FATHER'S INFORMATION
              </Typography>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Expectant Father Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ExpectantFatherName}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherName"
                      name="ExpectantFatherName"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantFatherName}
                      onChange={(e) => handleChange(e, "ExpectantFatherName")}
                    />
                    {!!errors.ExpectantFatherName && (
                      <FormHelperText>
                        {errors.ExpectantFatherName}
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
                    error={!!errors.ExpectantFatherDOB}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherDOB"
                      name="ExpectantFatherDOB"
                      type="date"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantFatherDOB}
                      onChange={(e) => handleChange(e, "ExpectantFatherDOB")}
                    />
                    {!!errors.ExpectantFatherDOB && (
                      <FormHelperText>
                        {errors.ExpectantFatherDOB}
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
                    error={!!errors.ExpectantFatherEmail}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherEmail"
                      name="ExpectantFatherEmail"
                      placeholder="Input Email"
                      size="small"
                      value={formValues?.ExpectantFatherEmail}
                      onChange={(e) => handleChange(e, "ExpectantFatherEmail")}
                    />
                    {!!errors.ExpectantFatherEmail && (
                      <FormHelperText>
                        {errors.ExpectantFatherEmail}
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
                    error={!!errors.ExpectantFatherMobile}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherMobile"
                      name="ExpectantFatherMobile"
                      placeholder="Input Phone Number"
                      size="small"
                      value={formValues?.ExpectantFatherMobile}
                      onChange={(e) => handleChange(e, "ExpectantFatherMobile")}
                    />
                    {!!errors.ExpectantFatherMobile && (
                      <FormHelperText>
                        {errors.ExpectantFatherMobile}
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
                    error={!!errors.ExpectantFatherOccupation}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherOccupation"
                      name="ExpectantFatherOccupation"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantFatherOccupation}
                      onChange={(e) =>
                        handleChange(e, "ExpectantFatherOccupation")
                      }
                    />
                    {!!errors.ExpectantFatherOccupation && (
                      <FormHelperText>
                        {errors.ExpectantFatherOccupation}
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
                    error={!!errors.ExpectantFatherDesignation}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherDesignation"
                      name="ExpectantFatherDesignation"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantFatherDesignation}
                      onChange={(e) =>
                        handleChange(e, "ExpectantFatherDesignation")
                      }
                    />
                    {!!errors.ExpectantFatherOccupation && (
                      <FormHelperText>
                        {errors.ExpectantFatherOccupation}
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
                    error={!!errors.ExpectantFatherOrganizationName}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherOrganizationName"
                      name="ExpectantFatherOrganizationName"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantFatherOrganizationName}
                      onChange={(e) =>
                        handleChange(e, "ExpectantFatherOrganizationName")
                      }
                    />
                    {!!errors.ExpectantFatherOrganizationName && (
                      <FormHelperText>
                        {errors.ExpectantFatherOrganizationName}
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
                    error={!!errors.ExpectantFatherIDproof}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={IDList}
                      value={formValues?.ExpectantFatherIDproof}
                      onChange={(e) =>
                        handleChange(e, "ExpectantFatherIDproof")
                      }
                    />
                    {!!errors.ExpectantFatherIDproof && (
                      <FormHelperText>
                        {errors.ExpectantFatherIDproof}
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
                    error={!!errors.ExpectantFatherIdproofNo}
                  >
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherIdproofNo"
                      name="ExpectantFatherIdproofNo"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ExpectantFatherIdproofNo}
                      onChange={(e) =>
                        handleChange(e, "ExpectantFatherIdproofNo")
                      }
                    />
                    {!!errors.ExpectantFatherIdproofNo && (
                      <FormHelperText>
                        {errors.ExpectantFatherIdproofNo}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={2}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    If Other, please Specify
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="ExpectantFatherOtherInfo"
                      name="ExpectantFatherOtherInfo"
                      placeholder="Input text"
                      size="small"
                      value={formValues?.ExpectantFatherOtherInfo}
                      onChange={(e) =>
                        handleChange(e, "ExpectantFatherOtherInfo")
                      }
                    />
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
                Upload Father's Picture
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
                      src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.ExpectantFatherProfilePhoto}`}
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
                      handleFatherImageUpload(e, "ExpectantFatherProfilePhoto")
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
                      src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.ExpectantFatherIDproofPhoto}`}
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
                  sx={{
                    marginTop: "10px",

                    // marginLeft: "250px"
                  }}
                >
                  Upload Image
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/svg+xml"
                    hidden
                    onChange={(e) =>
                      handleFatherImageUpload(e, "ExpectantFatherIDproofPhoto")
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

export default ClientDetailsFirst;
