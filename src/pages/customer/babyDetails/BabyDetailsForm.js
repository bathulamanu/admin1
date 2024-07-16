import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
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
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import api from "../../../utils/api/httpRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHospitalsList } from "../../../redux/Slices/hospitalSlice";
import { getDoctorList } from "../../../redux/Slices/doctorSlice";
import { getDoctorListById } from "../../../service/globalFunctions";
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import { toast } from "react-toastify";
import TimePicker from "react-time-picker";
import {
  addBabyDetails,
  getAllBabyList,
} from "../../../redux/Slices/babySlice";

const headingStyle = {
  fontSize: "24px",
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

const BabyDetailsForm = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hospitalsList = useSelector((state) => state.hospitals.hospitalsList);
  const doctorsList = useSelector((state) => state.doctor.doctorsList);
  const allDoctor = getDoctorListById(doctorsList);
  const trigger = useSelector((state) => state.customers.trigger);
  const triggerCounter = useSelector((state) => state.customers.triggerCounter);

  useEffect(() => {
    dispatch(getHospitalsList(null));
    dispatch(getDoctorList(null));
  }, []);

  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    babyName: "",
    babyDOB: "",
    timeOfBirth: "",
    Meridiem: "",
    weight: "",
    DeliveryDoctorName: null,
    placeOfBirth: "",
    NomineeName: "",
    NomineeRelationship: "",
    babyProfile: "",
    DoctorProfile: "",
    DoctorName: null,
    HospitalName: null,
    HospitalAddressLine1: "",
    HospitalAddressLine2: "",
    Frames: "",
  });

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;

    setFormValues((prev) => {
      let updatedValues = { ...prev, [name]: value };

      if (name === "HospitalName") {
        const selectedHospital = hospitalsList.find(
          (hospital) => hospital.HospitalID === value
        );

        if (selectedHospital) {
          updatedValues = {
            ...updatedValues,
            HospitalAddressLine1: selectedHospital.hospitalAddress.addressLine1,
            HospitalAddressLine2: selectedHospital.hospitalAddress.addressLine2,
          };
        } else {
          updatedValues = {
            ...updatedValues,
            HospitalAddressLine1: "",
            HospitalAddressLine2: "",
          };
        }
      }

      return updatedValues;
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  useEffect(() => {
    if (triggerCounter && trigger) {
      if (localStorage.getItem("check")) {
        localStorage.removeItem("check");
        if (!formValues.babyName) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            babyName: "Baby Name is required",
          }));
          return;
        } else if (!formValues.babyDOB) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            babyDOB: "Baby DOB is required",
          }));
          return;
        } else if (!formValues.timeOfBirth) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            timeOfBirth: "Time Of Birth is required",
          }));
          return;
        } else if (!formValues.Meridiem) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            Meridiem: "Meridiem is required",
          }));
          return;
        } else if (!formValues.weight) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            weight: "Weight is required",
          }));
          return;
        } else if (!formValues.DeliveryDoctorName) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            DeliveryDoctorName: "Delivery Doctor Name is required",
          }));
          return;
        } else if (!formValues.placeOfBirth) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            placeOfBirth: "Place Of Birth is required",
          }));
          return;
        } else if (!formValues.NomineeName) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            NomineeName: "Nominee Name is required",
          }));
          return;
        } else if (!formValues.NomineeRelationship) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            NomineeRelationship: "Nominee Relationship is required",
          }));
          return;
        } else if (!formValues.DoctorName) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            DoctorName: "Doctor Name is required",
          }));
          return;
        } else if (!formValues.HospitalName) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            HospitalName: "Hospital Name is required",
          }));
          return;
        } else if (!formValues.HospitalAddressLine1) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            HospitalAddressLine1: "Hospital Address 1 is required",
          }));
          return;
        } else if (!formValues.HospitalAddressLine2) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            HospitalAddressLine2: "Hospital Address 2 is required",
          }));
          return;
        }
        dispatch(addBabyDetails(formValues));
        dispatch(getAllBabyList());
        navigate("/customerPage/baby_details");
      }
    }
  }, [triggerCounter]);

  const handleFatherImageUpload = async (e, fieldName) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("folder", "babyProfile");
    try {
      const response = await api.post("/upload", formData, { headers });
      if (response?.data?.status === 200) {
        setFormValues((prev) => ({
          ...prev,
          [fieldName]: response?.data?.data?.key,
        }));
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("formValues", formValues);

  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Stack
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
                  BABY DETAILS
                </Typography>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Baby Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.babyName}
                    >
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.babyName}
                        onChange={(e) =>
                          handleChange(e.target.value, "babyName")
                        }
                      />
                      {!!errors.babyName && (
                        <FormHelperText>{errors.babyName}</FormHelperText>
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
                      error={!!errors.babyDOB}
                    >
                      <OutlinedInput
                        fullWidth
                        type="date"
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.babyDOB}
                        onChange={(e) =>
                          handleChange(e.target.value, "babyDOB")
                        }
                      />
                      {!!errors.babyDOB && (
                        <FormHelperText>{errors.babyDOB}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Time of Birth <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <FormControl
                        variant="outlined"
                        fullWidth
                        size="small"
                        error={!!errors.timeOfBirth}
                        sx={{ flex: 1 }}
                      >
                        <OutlinedInput
                          fullWidth
                          type="time"
                          id="outlined-adornment-password"
                          placeholder="Input Time of Birth"
                          size="small"
                          value={formValues?.timeOfBirth}
                          onChange={(e) =>
                            handleChange(e.target.value, "timeOfBirth")
                          }
                        />
                        {!!errors.timeOfBirth && (
                          <FormHelperText>{errors.timeOfBirth}</FormHelperText>
                        )}
                      </FormControl>
                      <FormControl
                        variant="outlined"
                        size="small"
                        error={!!errors.Meridiem}
                        sx={{ marginLeft: 1, width: "100px" }}
                      >
                        <Select
                          id="outlined-am-pm"
                          value={formValues?.Meridiem}
                          onChange={(e) =>
                            handleChange(e.target.value, "Meridiem")
                          }
                        >
                          <MenuItem value="am">AM</MenuItem>
                          <MenuItem value="pm">PM</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Weight <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.weight}
                    >
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Weight"
                        size="small"
                        value={formValues?.weight}
                        onChange={(e) => handleChange(e.target.value, "weight")}
                      />
                      {!!errors.weight && (
                        <FormHelperText>{errors.weight}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Delivery Doctor Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.DeliveryDoctorName}
                    >
                      <SingleSelect
                        placeholder={"Select"}
                        value={formValues?.DeliveryDoctorName}
                        data={allDoctor}
                        width={"100%"}
                        onChange={(e) => handleChange(e, "DeliveryDoctorName")}
                      />
                      {!!errors.DeliveryDoctorName && (
                        <FormHelperText>
                          {errors.DeliveryDoctorName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Place of Birth <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.placeOfBirth}
                    >
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.placeOfBirth}
                        onChange={(e) =>
                          handleChange(e.target.value, "placeOfBirth")
                        }
                      />
                      {!!errors.placeOfBirth && (
                        <FormHelperText>{errors.placeOfBirth}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Nominee Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.NomineeName}
                    >
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.NomineeName}
                        onChange={(e) =>
                          handleChange(e.target.value, "NomineeName")
                        }
                      />
                      {!!errors.NomineeName && (
                        <FormHelperText>{errors.NomineeName}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Nominee Relationship <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.NomineeRelationship}
                    >
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.NomineeRelationship}
                        onChange={(e) =>
                          handleChange(e.target.value, "NomineeRelationship")
                        }
                      />
                      {!!errors.NomineeRelationship && (
                        <FormHelperText>
                          {errors.NomineeRelationship}
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
                  Upload Baby's Picture
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
                        src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.babyProfile}`}
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
                                handleFatherImageUpload(e, "babyProfile")
                              }
                            />
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
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
                  DOCTOR DETAILS
                </Typography>
                <Grid container spacing={2} pt={3}>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Doctor's Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.DoctorName}
                    >
                      <SingleSelect
                        placeholder={"Select"}
                        value={formValues?.DoctorName}
                        data={allDoctor}
                        width={"100%"}
                        onChange={(e) => handleChange(e, "DoctorName")}
                      />
                      {!!errors.DoctorName && (
                        <FormHelperText>{errors.DoctorName}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel sx={inputLableStyle}>
                      Hospital Name <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.HospitalName}
                    >
                      <Select
                        sx={{ height: "40px" }}
                        width={"100%"}
                        labelId="hospital-select-label"
                        id="hospital-select"
                        value={formValues?.HospitalName}
                        onChange={(e) => {
                          handleChange(e, "HospitalName");
                        }}
                        renderValue={(selected) => {
                          const selectedHospital = hospitalsList.find(
                            (hospital) => hospital.HospitalID === selected
                          );
                          return selectedHospital
                            ? `${selectedHospital.hospitalName} - ${selectedHospital.LocationInfo?.cityName}`
                            : "";
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        {hospitalsList.map((hospital) => (
                          <MenuItem
                            key={hospital.HospitalID}
                            value={hospital.HospitalID}
                          >
                            <ListItemText
                              primary={`${hospital.hospitalName} - ${hospital.LocationInfo?.cityName}`}
                              secondary={`${hospital.hospitalAddress.addressLine1} , ${hospital.hospitalAddress.addressLine1}`}
                            />
                          </MenuItem>
                        ))}
                      </Select>
                      {!!errors.HospitalName && (
                        <FormHelperText>{errors.HospitalName}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Hospital Address Line-1{" "}
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.HospitalAddressLine1}
                    >
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.HospitalAddressLine1}
                        onChange={(e) =>
                          handleChange(e.target.value, "HospitalAddressLine1")
                        }
                      />
                      {!!errors.HospitalAddressLine1 && (
                        <FormHelperText>
                          {errors.HospitalAddressLine1}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} pt={3} pb={2}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Hospital Address Line-2{" "}
                      <span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.HospitalAddressLine2}
                    >
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.HospitalAddressLine2}
                        onChange={(e) =>
                          handleChange(e.target.value, "HospitalAddressLine2")
                        }
                      />
                      {!!errors.HospitalAddressLine2 && (
                        <FormHelperText>
                          {errors.HospitalAddressLine2}
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
                  Upload Doctor's Picture
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
                        src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.DoctorProfile}`}
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
                                handleFatherImageUpload(e, "DoctorProfile")
                              }
                            />
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Card variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginTop: "10px", fontWeight: "bold" }}
            >
              Frames
            </Typography>

            <Button variant="contained" size="small">
              <AddIcon fontSize="small" /> Add Files
            </Button>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
});

export default BabyDetailsForm;
