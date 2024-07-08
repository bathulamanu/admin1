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
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { handleCreatePlan } from "../../../redux/Slices/planSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../context/ContextProvider";
import { createSubscriptionPlan } from "../../../redux/Slices/planSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { GetButtonText, getStatus } from "../../../redux/Slices/globalSlice";
import {
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
    ribbenStatus: true,
    btnText: null,
    status: null,
    description: "",
    additionalInfo: "",
    durationYear: "",
    durationYearText: "",
    customText: "",
    offerTiming: null,
  });
  const [ErrorformValues, setErrorformValues] = useState({
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
    status: null,
    // description: "",
    // additionalInfo: "",
    durationYear: "",
    durationYearText: "",
    customText: "",
    offerTiming: null,
  });
  const { trigger } = useContext(AppContext);
  const { triggerChildUpdate } = useContext(AppContext);
  const location = useLocation();

  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    validateForm: () => {
      if (!formValues.title) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          title: "Title is required",
        }));
        return;
      }
      console.log("Form is valid");
      navigate("/customerPage/plans");
    },
  }));
  // useEffect(() => {
  //   // This will run every time the `trigger` changes
  //   // if (trigger >= 0) {
  //   // triggerChildUpdate();
  //   // if (location.pathname === "/customerPage/plans/plansForm") {
  //   alert("ok ok ");
  //   // console.log('Parent triggered an update');
  //   if (!formValues.title) {
  //     setErrorformValues((prev) => ({
  //       ...prev,
  //       ["title"]: "Title is required",
  //     }));
  //     return;
  //   }

  //   if (!formValues.subTitle) {
  //     setErrorformValues((prev) => ({
  //       ...prev,
  //       ["subTitle"]: "subTitle is required",
  //     }));
  //     return;
  //   }
  //   dispatch(createSubscriptionPlan(formValues));
  //   // }
  // }, [trigger]);

  // useEffect(() => {
  // if (!formValues.title) {
  //   setErrorformValues((prev) => ({
  //     ...prev,
  //     ['title']: "Title is required",
  //   }));
  //   return;
  // }

  // dispatch(handleCreatePlan(formValues));
  // }, [formValues]);

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorformValues((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  useEffect(() => {
    dispatch(handleCreatePlan(formValues));
  }, [formValues]);

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
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        padding: "8px",
      }}
    >
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
              {/* <Grid container spacing={2} pt={1} pb={1}>
                  <Grid item style={{ width: "100%" }}>
                    <InputLabel sx={inputLableStyle}>
                      Organization Name<span style={redStarStyle}>*</span>
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth size="small">
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        placeholder="Input Text"
                        size="small"
                        value={formValues?.subTitle}
                        onChange={(e) => handleChange(e, "subTitle")}
                      />
                      {ErrorformValues?.subTitle ? <FormHelperText>{ErrorformValues?.subTitle}</Typography> : null}
  
                    </FormControl>
                  </Grid>
                </Grid> */}
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
          {/* <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent> */}
          <Grid container spacing={2} pt={1} pb={1}>
            <Grid item style={{ width: "100%" }}>
              <ReactQuill
                value={formValues?.desc}
                onChange={(e) => handleChange(e, "desc")}
                modules={modules}
                placeholder="Description"
                theme="snow"
              />
            </Grid>
          </Grid>
          {/* </CardContent>
            </Card> */}
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
                    error={!!errors.status}
                  >
                    <SingleSelect
                      Placeholder={"Select"}
                      width={"100%"}
                      data={statuses}
                      value={formValues?.status}
                      onChange={(e) => handleChange(e, "status")}
                    />
                    {!!errors?.status && (
                      <FormHelperText>{errors?.status}</FormHelperText>
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
          {/* Additional info */}
          {/* <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent> */}
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
          {/* </CardContent>
            </Card> */}
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
                      placeholder="Input Text"
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
                    <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.offerTiming}
                  >
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.offerTiming}
                      onChange={(e) => handleChange(e, "offerTiming")}
                    />
                    {/* <SingleSelect
                        Placeholder={"Select"}
                        width={"100%"}
                        value={formValues?.offerTiming}
                        onChange={(e) => handleChange(e, "offerTiming")}
                      /> */}
                    {!!errors?.offerTiming && (
                      <FormHelperText>{errors?.offerTiming}</FormHelperText>
                    )}
                  </FormControl>
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
