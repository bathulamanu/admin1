import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const headingStyle = {
  fontSize: "24px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "5px",
};

const ClientDetailsEight = () => {
  const [formValues, setFormValues] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    question15: "",
    question16: "",
    question17: "",
    question18: "",
    question19: "",
    question20: "",
    question21: "",
    chooseValue: "",
    question22: "",
    question23: "",
  });

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          GENETIC MOTHER
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "17px", marginTop: "10px", marginLeft: "5px" }}
        >
          The following questions are required for determination of
          donor-eligibility. We understand that there may sensitivities to some
          of the questions, and inconvenience is regretted. However, response is
          mandatory.
        </Typography>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              Do you have a history of any medical condition that could affect
              the collection or use of the stem cells such as
            </Typography>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  A) Cancer, Diabetes, Hepatitis, Blood Disease, Bleeding
                  Problem, Heart Disease, Drug or Alcohol abuse.
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question1 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question1", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question1 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question1", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  B) HIVIAIDS ora positive test for the HIVIAIDS virus, HTLV,
                  Malaria, Hepatitis?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question2 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question2", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question2 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question2", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  C) Stroke, Seizureor Multiple Scierosis, Lung Disease, Kident
                  Disease, Liver Disease, Babesiosis, Genetic Disorder?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question3 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question3", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question3 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question3", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  Do you currently have or are you being treated for any type of
                  inection?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question4 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question4", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question4 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question4", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  Do you have, or have a family history of Dementia,
                  Degenerative or Neurological Disease, or CreutzfeldtJakob
                  Disease?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question5 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question5", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question5 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question5", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 6 months, have you received a bite from an animal
                  suspected of Rabies or takken any vaccinations (shots) for the
                  same?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question6 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question6", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question6 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question6", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  Have you been treated for a sexually trasmitted diseasein the
                  last 12 months?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question7 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question7", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question7 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question7", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you had any immunisations,
                  tattoos, body piercing, an accidental needle-prick, or come
                  into contact with someone’s blood, open wound, or small pox
                  vaccination site and /or bandage?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question8 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question8", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question8 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question8", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you been in juvenile detention,
                  lock-up, jail or prison for more than 72 hours?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question9 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question9", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question9 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question9", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you lived with a person who has
                  Hepatitis?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question10 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question10", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question10 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question10", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you in the past 5 years received compensation for sex?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question11 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question11", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question11 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question11", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you ever received whole blood, blood factor products,
                  blood derivatves, growth hormones, bone or skin graft, or a
                  tissue, organ (either human or animal), dura mater or bone
                  marrow traspiantation?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question12 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question12", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question12 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question12", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you in the Past 12 Months had Intimate contact with who
                  has HIVIAIDS or Hepatitis B/C
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question13 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question13", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question13 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question13", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you been or travelled to a country endemic for SARS
                  AvianFlu, H1N1, (Swine) Flu or had intimate contact with some
                  one having risk factors?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question14 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question14", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question14 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question14", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              From 1980 through 1986 have you?
            </Typography>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  A) Spent 3 months or more cumulatively in the United Kingdom?
                  If so, what city and country?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question15 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question15", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question15 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question15", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  B) Resided at a US military basein Europe for 6months or more
                  cumulatively? If so, what city and country?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question16 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question16", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question16 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question16", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  Have you been or travelled to a country endemic for, and/or
                  suffered from Malaria, Chikungunya, Dengueand West Nile Fever?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question17 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question17", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question17 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question17", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="930px">
                  In the past 12 months, have you visited or lived outside of
                  India? Pleaselist the countries, cities and the duration of
                  your stay(s)
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question18 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question18", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question18 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question18", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              Personal History
            </Typography>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  A) Are you and the would-be baby’s genetic father, blood
                  relatives?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question19 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question19", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question19 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question19", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  B) Did this pregnancy result from Donor Egg/Sperm/Surrogate?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question20 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question20", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question20 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question20", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5">
                  C) Haveyou ever had abnormal pregnancy?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question21 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question21", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question21 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question21", "no")}
                  >
                    No
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "15px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ marginTop: "4px", fontWeight: "bold" }}
            >
              Family History - If yes, please usethe following codesfor WHO?
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: "10px",
                maxWidth: "900px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "M" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "M")}
                  >
                    M - Mother
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "F" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "F")}
                  >
                    F - Father
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "MSS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "MSS")}
                  >
                    MSS - Maternal Side Sibling
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "100%" }}
                    variant={
                      formValues.chooseValue === "FSS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "FSS")}
                  >
                    FSS - Father Side Sibling
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "220px" }}
                    variant={
                      formValues.chooseValue === "GPM"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "GPM")}
                  >
                    GPM - Gland Parent Maternal Side
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap", width: "220px" }}
                    variant={
                      formValues.chooseValue === "GPF"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "GPF")}
                  >
                    GPF - Gland Parent Father’s Side
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap" }}
                    variant={
                      formValues.chooseValue === "OMS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "OMS")}
                  >
                    OMS - Others Maternal Side
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{ whiteSpace: "nowrap" }}
                    variant={
                      formValues.chooseValue === "OFS"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("chooseValue", "OFS")}
                  >
                    OFS - Others Father Side
                  </Button>
                </Grid>
              </Grid>
            </Stack>
            <Stack spacing={2} marginTop="15px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="800px">
                  A) Anyblood relatives with cancer/leukemia before 20 years of
                  age?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question22 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question22", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question22 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question22", "no")}
                  >
                    No
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question22 === "who" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question22", "who")}
                  >
                    Who
                  </Button>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" maxWidth="800px">
                  B) Any Red Cell related Diseaseor any Metabolic/Storage
                  Diseaseor any diseasesof Immune Deficiency or Genetic
                  Diseases? If yes, please list the details asbelow.
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question23 === "yes" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question23", "yes")}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.question23 === "no" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question23", "no")}
                  >
                    No
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.question23 === "who" ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("question23", "who")}
                  >
                    Who
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default ClientDetailsEight;
