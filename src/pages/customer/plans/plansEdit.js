import React, {
  useEffect,
  useState,
  useContext,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Stack,
  Divider,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { UpdateSubscriptionPlan } from "../../../redux/Slices/planSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GetButtonText, getStatus } from "../../../redux/Slices/globalSlice";
import {
  formatDateYYYYMMDD,
  getButtonTexListById,
  getStatusIdList,
} from "../../../service/globalFunctions";

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

function deepCopyFormValues(hospitalDetails, formValues) {
  function deepCopy(target, source) {
    for (let key in source) {
      if (source[key] && typeof source[key] === "object") {
        if (Array.isArray(source[key])) {
          target[key] = [...source[key]];
        } else {
          if (!target[key]) target[key] = {};
          deepCopy(target[key], source[key]);
        }
      } else {
        target[key] = source[key];
      }
    }
  }

  let copiedFormValue = JSON.parse(JSON.stringify(formValues));
  deepCopy(copiedFormValue, hospitalDetails);
  return copiedFormValue;
}

const PlansEdit = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getStatusList = useSelector((state) => state.global.statusList);
  const statuses = getStatusIdList(getStatusList);
  const getButtonTextList = useSelector((state) => state.global.buttonTextData);
  const ButtonTexts = getButtonTexListById(getButtonTextList);

  useEffect(() => {
    dispatch(GetButtonText(null));
    dispatch(getStatus(null));
  }, [dispatch]);

  const subscriptionPanDetails = useSelector(
    (state) => state.plan.subscriptionPanDetails
  );
  const subscriptionID = subscriptionPanDetails?.subscriptionID;
  console.log("subscriptionID edit", subscriptionID);

  const [formValues, setFormValues] = useState({
    title: "",
    subTitle: "",
    price: "",
    offerPrice: "",
    eventOfferPrice: "",
    EMI: "",
    EMItext: "",
    Icon: "",
    currencySymbol: "",
    ribben: "",
    ribbenStatus: null,
    btnText: null,
    description: "",
    additionalInfo: "",
    durationYear: "",
    durationYearText: "",
    customText: "",
    offerTimingFrom: null,
    offerTimingTo: null,
    IsActive: null
  });

  const location = useLocation();

  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    validateEditForm: () => {
      if (!formValues.title) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          title: "Title is required",
        }));
        return;
      } else if (!formValues.subTitle) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          subTitle: "sub Title is required",
        }));
        return;
      } else if (!formValues.price) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          price: "Price is required",
        }));
        return;
      } else if (!formValues.offerPrice) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          offerPrice: "Offer Price is required",
        }));
        return;
      } else if (!formValues.Icon) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Icon: "Icon is required",
        }));
        return;
      } else if (!formValues.eventOfferPrice) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          eventOfferPrice: "Event Offer Price is required",
        }));
        return;
      } else if (!formValues.currencySymbol) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          currencySymbol: "Currency Symbol is required",
        }));
        return;
      } else if (!formValues.EMI) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          EMI: "EMI is required",
        }));
        return;
      } else if (!formValues.EMItext) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          EMItext: "EMI Text is required",
        }));
        return;
      } else if (!formValues.ribben) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ribben: "Ribben is required",
        }));
        return;
      } else if (!formValues.ribbenStatus) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ribbenStatus: "Ribben Status is required",
        }));
        return;
      } else if (!formValues.btnText) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          btnText: "Button Text is required",
        }));
        return;
      } else if (!formValues.durationYear) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          durationYear: "Duration Year is required",
        }));
        return;
      } else if (!formValues.durationYearText) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          durationYearText: "Duration Year Text is required",
        }));
        return;
      } else if (!formValues.customText) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          customText: "Custom Text is required",
        }));
        return;
      } else if (!formValues.IsActive) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          IsActive: "Status is required",
        }));
        return;
      }
      dispatch(UpdateSubscriptionPlan({ subscriptionID, formValues }));
      setTimeout(() => {
        navigate("/customerPage/plans");
      }, 2000);
      
    },
  }));

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  console.log("formValues", formValues);

  const updatedFormValues = deepCopyFormValues(
    subscriptionPanDetails,
    formValues
  );

  useEffect(() => {
    setFormValues((prevValue) => ({
      ...prevValue,
      ...updatedFormValues,
    }));
  }, [subscriptionPanDetails]);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ color: [] }],
      [{ align: [] }],
      [{ align: "center" }],
      [{ align: "right" }],
      [{ align: "justify" }],
      [{ list: "bullet" }],
      // ["clean"],
    ],
  };
  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "47%",
        overflow: "auto",
        background: "#fff",
        // padding: "8px",
        marginBottom: "30px",
      }}
    >
      <ToastContainer />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          paddingTop: "8px",
          marginLeft: "10px",
        }}
        variant="h5"
      >
        Create Plans
      </Typography>
      <Divider sx={{ mt: 3, mb: 3 }} />

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          padding: "10px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "49%",
            gap: 2,
            marginBottom: "60px",
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Title<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.title}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Title"
                      size="small"
                      value={formValues?.title}
                      onChange={(e) => handleChange(e, "title")}
                    />
                    {!!errors.title && (
                      <FormHelperText>{errors.title}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Sub - Title<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.subTitle}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Sub - Title"
                      size="small"
                      value={formValues?.subTitle}
                      onChange={(e) => handleChange(e, "subTitle")}
                    />
                    {!!errors.subTitle && (
                      <FormHelperText>{errors?.subTitle}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Icon<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.Icon}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Icon"
                      size="small"
                      value={formValues?.Icon}
                      onChange={(e) => handleChange(e, "Icon")}
                    />
                    {!!errors?.Icon && (
                      <FormHelperText>{errors?.Icon}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Currency Symbol<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.currencySymbol}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Currency Symbol"
                      size="small"
                      value={formValues?.currencySymbol}
                      onChange={(e) => handleChange(e, "currencySymbol")}
                    />
                    {!!errors?.currencySymbol && (
                      <FormHelperText>{errors?.currencySymbol}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    EMI Amount<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.EMI}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="EMI Amount"
                      size="small"
                      value={formValues?.EMI}
                      onChange={(e) => handleChange(e, "EMI")}
                    />
                    {!!errors?.EMI && (
                      <FormHelperText>{errors?.EMI}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    EMI Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.EMItext}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="EMI Text"
                      size="small"
                      value={formValues?.EMItext}
                      onChange={(e) => handleChange(e, "EMItext")}
                    />
                    {!!errors?.EMItext && (
                      <FormHelperText>{errors?.EMItext}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Grid container spacing={2} pt={1} pb={1}>
            <Grid item style={{ width: "100%" }}>
              <ReactQuill
                value={formValues?.description}
                onChange={(e) => handleChange(e, "description")}
                modules={modules}
                placeholder="Description"
                theme="snow"
              />
            </Grid>
          </Grid>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Button Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.btnText}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={ButtonTexts}
                      value={formValues?.btnText}
                      onChange={(e) => handleChange(e, "btnText")}
                    />
                    {!!errors?.btnText && (
                      <FormHelperText>{errors?.btnText}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Status<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.IsActive}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={statuses}
                      value={formValues?.IsActive}
                      onChange={(e) => handleChange(e, "IsActive")}
                    />
                    {!!errors?.IsActive && (
                      <FormHelperText>{errors?.IsActive}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "49%",
            gap: 2,
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Price<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.price}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Price"
                      size="small"
                      value={formValues?.price}
                      onChange={(e) => handleChange(e, "price")}
                    />
                    {!!errors?.price && (
                      <FormHelperText>{errors?.price}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Offer Price<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.offerPrice}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Offer Price"
                      size="small"
                      value={formValues?.offerPrice}
                      onChange={(e) => handleChange(e, "offerPrice")}
                    />
                    {!!errors?.offerPrice && (
                      <FormHelperText>{errors?.offerPrice}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Event Offer Price<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.eventOfferPrice}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Event Offer Price"
                      size="small"
                      value={formValues?.eventOfferPrice}
                      onChange={(e) => handleChange(e, "eventOfferPrice")}
                    />
                    {!!errors?.eventOfferPrice && (
                      <FormHelperText>{errors?.eventOfferPrice}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Ribbon<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ribben}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Ribbon"
                      size="small"
                      value={formValues?.ribben}
                      onChange={(e) => handleChange(e, "ribben")}
                    />
                    {!!errors?.ribben && (
                      <FormHelperText>{errors?.ribben}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Ribbon Status<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.ribbenStatus}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={statuses}
                      value={formValues?.ribbenStatus}
                      onChange={(e) => handleChange(e, "ribbenStatus")}
                    />
                    {!!errors?.ribbenStatus && (
                      <FormHelperText>{errors?.ribbenStatus}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Grid container spacing={2} pt={1} pb={1}>
            <Grid item style={{ width: "100%" }}>
              <ReactQuill
                theme="snow"
                value={formValues?.additionalInfo}
                onChange={(e) => handleChange(e, "additionalInfo")}
                modules={modules}
                placeholder="Additional Info"
              />
            </Grid>
          </Grid>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Duration Year<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.durationYear}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Duration Year"
                      size="small"
                      value={formValues?.durationYear}
                      onChange={(e) => handleChange(e, "durationYear")}
                    />
                    {!!errors?.durationYear && (
                      <FormHelperText>{errors?.durationYear}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Duration Year Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.durationYearText}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Duration Year Text"
                      size="small"
                      value={formValues?.durationYearText}
                      onChange={(e) => handleChange(e, "durationYearText")}
                    />
                    {!!errors?.durationYearText && (
                      <FormHelperText>
                        {errors?.durationYearText}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Custom Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.customText}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Custom Text"
                      size="small"
                      value={formValues?.customText}
                      onChange={(e) => handleChange(e, "customText")}
                    />
                    {!!errors?.customText && (
                      <FormHelperText>{errors?.customText}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Offer Timing (Date & Time)
                  </InputLabel>
                  <Grid
                    item
                    style={{
                      marginTop: "10px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 4,
                    }}
                  >
                    <Grid item xs={6}>
                      <InputLabel sx={inputLableStyle}>Start Date </InputLabel>
                      <FormControl
                        variant="outlined"
                        fullWidth
                        size="small"
                        error={!!errors.offerTimingFrom}
                      >
                        <OutlinedInput
                          fullWidth
                          type="date"
                          id="outlined-adornment-password"
                          placeholder="Start Date"
                          size="small"
                          value={formatDateYYYYMMDD(
                            formValues?.offerTimingFrom
                          )}
                          onChange={(e) => handleChange(e, "offerTimingFrom")}
                        />

                        {!!errors?.offerTimingFrom && (
                          <FormHelperText>
                            {errors?.offerTimingFrom}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel sx={inputLableStyle}>End Date </InputLabel>
                      <FormControl
                        variant="outlined"
                        fullWidth
                        size="small"
                        error={!!errors.offerTimingTo}
                      >
                        <OutlinedInput
                          fullWidth
                          type="date"
                          id="outlined-adornment-password"
                          placeholder="End Date"
                          size="small"
                          value={formatDateYYYYMMDD(formValues?.offerTimingTo)}
                          onChange={(e) => handleChange(e, "offerTimingTo")}
                        />

                        {!!errors?.offerTimingTo && (
                          <FormHelperText>
                            {errors?.offerTimingTo}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
});

export default PlansEdit;
