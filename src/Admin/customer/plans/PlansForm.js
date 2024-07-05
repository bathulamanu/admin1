import React, { useEffect, useState, useContext } from "react";
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
} from "@mui/material";
import SingleSelect from "../../../GlobalComponents/SingleSelect";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { handleCreatePlan } from "../../Slices/planSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from '../../../ContextProvider';
import { createSubscriptionPlan } from "../../Slices/planSlice"
import { useLocation } from "react-router-dom";


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

const PlansForm = () => {
  const dispatch = useDispatch();
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
    status: null,
    description: "",
    additionalInfo: "",
    durationYear: "",
    durationYearText: "",
    customText: "",
    offerTiming: null
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
    offerTiming: null
  });
  const { trigger } = useContext(AppContext);
  const { triggerChildUpdate } = useContext(AppContext);
  const location = useLocation();
  useEffect(() => {
    // This will run every time the `trigger` changes
    // if (trigger >= 0) {
    // triggerChildUpdate();
    // if (location.pathname === "/customerPage/plans/plansForm") {
    alert("ok ok ")
    // console.log('Parent triggered an update');
    if (!formValues.title) {
      setErrorformValues((prev) => ({
        ...prev,
        ['title']: "Title is required",
      }));
      return;
    }

    if (!formValues.subTitle) {
      setErrorformValues((prev) => ({
        ...prev,
        ['subTitle']: "subTitle is required",
      }));
      return;
    }
    dispatch(createSubscriptionPlan(formValues))
    // }
  }, [trigger]);

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
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.title}
                      onChange={(e) => handleChange(e, "title")}
                    />
                    {ErrorformValues?.title ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.title}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Sub - Title<span style={redStarStyle}>*</span>
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
                    {ErrorformValues?.subTitle ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.subTitle}</Typography> : null}

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
                    {ErrorformValues?.subTitle ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.subTitle}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid> */}
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Icon<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.Icon}
                      onChange={(e) => handleChange(e, "Icon")}
                    />
                    {ErrorformValues?.Icon ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.Icon}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Currency Symbol<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.currencySymbol}
                      onChange={(e) => handleChange(e, "currencySymbol")}
                    />
                    {ErrorformValues?.currencySymbol ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.currencySymbol}</Typography> : null}

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
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.EMI}
                      onChange={(e) => handleChange(e, "EMI")}
                    />
                    {ErrorformValues?.EMI ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.EMI}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    EMI Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.EMItext}
                      onChange={(e) => handleChange(e, "EMItext")}
                    />
                    {ErrorformValues?.EMItext ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.EMItext}</Typography> : null}

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
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.btnText}
                    onChange={(e) => handleChange(e, "btnText")}
                  />
                  {ErrorformValues?.btnText ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.btnText}</Typography> : null}

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
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.status}
                    onChange={(e) => handleChange(e, "status")}
                  />
                  {ErrorformValues?.status ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.status}</Typography> : null}

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
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.price}
                      onChange={(e) => handleChange(e, "price")}
                    />
                    {ErrorformValues?.price ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.price}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Offer Price<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.offerPrice}
                      onChange={(e) => handleChange(e, "offerPrice")}
                    />
                    {ErrorformValues?.offerPrice ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.offerPrice}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Event Offer Price<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.eventOfferPrice}
                      onChange={(e) => handleChange(e, "eventOfferPrice")}
                    />
                    {ErrorformValues?.eventOfferPrice ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.eventOfferPrice}</Typography> : null}

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
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.ribben}
                      onChange={(e) => handleChange(e, "ribben")}
                    />
                    {ErrorformValues?.ribben ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.ribben}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Ribbon Status<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.ribbenStatus}
                    onChange={(e) => handleChange(e, "ribbenStatus")}
                  />
                  {ErrorformValues?.ribbenStatus ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.ribbenStatus}</Typography> : null}

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
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.durationYear}
                      onChange={(e) => handleChange(e, "durationYear")}
                    />
                    {ErrorformValues?.durationYear ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.durationYear}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Duration Year Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.durationYearText}
                      onChange={(e) => handleChange(e, "durationYearText")}
                    />
                    {ErrorformValues?.durationYearText ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.durationYearText}</Typography> : null}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Custom Text<span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.customText}
                      onChange={(e) => handleChange(e, "customText")}
                    />
                    {ErrorformValues?.customText ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.customText}</Typography> : null}

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
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    value={formValues?.offerTiming}
                    onChange={(e) => handleChange(e, "offerTiming")}
                  />
                  {ErrorformValues?.offerTiming ? <Typography sx={{ fontSize: "1.75rem", color: "red" }}>{ErrorformValues?.offerTiming}</Typography> : null}

                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PlansForm;
