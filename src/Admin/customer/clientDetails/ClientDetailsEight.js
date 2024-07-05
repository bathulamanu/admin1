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
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { getAnnexureInfo } from "../../Slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { addOrupdateAnnexureInfo } from "../../Slices/customerClientSlice";

const headingStyle = {
  fontSize: "24px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "5px",
};

const ClientDetailsEight = forwardRef((props, ref) => {
  var {
    handleNext,
    handlePrev,
    currentStep,
    setCurrentStep,
    totalSteps,
    setShowPreview,
  } = props;

  const [
    customerAnnexureInformationId,
    setCustomerAnnexureInformationId,
  ] = useState(null);
  const dispatch = useDispatch();
  const SubscribedInnerPageformValues = useSelector(
    (state) => state.global.SubscribedUserformValues
  );
  console.log("SubscribedInnerPageformValues", SubscribedInnerPageformValues);

  const customerDetail = useSelector((state) => state.customers.customerDetail);
  const customerID = customerDetail?.customerID;
  console.log("customerDetail customerID", customerID);

  useEffect(() => {
    dispatch(getAnnexureInfo(customerID));
  }, []);

  const [formValues, setFormValues] = useState({
    cancerDiabetesHepatitisBloodDisease: null,
    HIVAIDS: null,
    strokeLungSclerosis: null,
    anyTypeInfection: null,
    DementiaDegenerativeDisease: null,
    biteFromAnimal: null,
    sexuallyTransmittedDisease: null,
    immunisationsTattoosBodypiercing: null,
    juvenileDetentionLockupJail: null,
    livedWithApersonWhoHasHepatitis: null,
    compensationForSex: null,
    receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation: null,
    IntimateContactWithWhoHasHIVAIDS: null,
    SARSavianFluH1N1: null,
    spent3MonthsOrMoreCumulativelyInTheUnitedKingdom: null,
    ResidedAtaUSmilitaryBaseinEurope: null,
    sufferedFromMalariaChikungunyaDengueandWestNileFever: null,
    visitedOrlivedOutsideofIndia: null,
    AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives: null,
    pregnancyResultFromDonorEggSpermSurrogate: null,
    everHadAbnormalPregnancy: null,
    chooseValue: "F",
    relativesWithCancerleukemiaBefore20: null,
    RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor: null,
    relativesWithCancerleukemiaBefore20WHO: "",
    RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO: "",
  });

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }
  useEffect(() => {
    async function getHelathHistoryData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageformValues?.customerAnnexureInformationId
      );
      if (
        SubscribedInnerPageformValues &&
        SubscribedInnerPageformValues.CustomerData &&
        SubscribedInnerPageformValues.CustomerData.length != 0 &&
        SubscribedInnerPageformValues.CustomerData[0].HealthHistoryQuestionnaire
      ) {
        for (let item in SubscribedInnerPageformValues.CustomerData[0]
          .HealthHistoryQuestionnaire) {
          for (let item1 in formValues) {
            if (
              isObject(
                SubscribedInnerPageformValues.CustomerData[0]
                  .HealthHistoryQuestionnaire[item]
              )
            ) {
              for (let item2 in SubscribedInnerPageformValues.CustomerData[0]
                .HealthHistoryQuestionnaire[item]) {
                if (item1 == item2) {
                  formValues[item1] =
                    SubscribedInnerPageformValues.CustomerData[0].HealthHistoryQuestionnaire[
                      item
                    ][item2];
                }
              }
            } else {
              if (item1 == item) {
                formValues[item1] =
                  SubscribedInnerPageformValues.CustomerData[0].HealthHistoryQuestionnaire[
                    item
                  ];
              }
            }
          }
        }
      }
    }
    getHelathHistoryData();
  }, [SubscribedInnerPageformValues]);
  useEffect(() => {
    getAnnexureInfo();
  }, [handlePrev]);

  useImperativeHandle(ref, () => ({
    getHealthHistoryChildData: () => {
      const formValuesToSend = {
        medicalCondition: {
          cancerDiabetesHepatitisBloodDisease:
            formValues.cancerDiabetesHepatitisBloodDisease,
          HIVAIDS: formValues.HIVAIDS,
          strokeLungSclerosis: formValues.strokeLungSclerosis,
        },
        anyTypeInfection: formValues.anyTypeInfection,
        DementiaDegenerativeDisease: formValues.DementiaDegenerativeDisease,
        biteFromAnimal: formValues.biteFromAnimal,
        sexuallyTransmittedDisease: formValues.sexuallyTransmittedDisease,
        immunisationsTattoosBodypiercing:
          formValues.immunisationsTattoosBodypiercing,
        juvenileDetentionLockupJail: formValues.juvenileDetentionLockupJail,
        livedWithApersonWhoHasHepatitis:
          formValues.livedWithApersonWhoHasHepatitis,
        compensationForSex: formValues.compensationForSex,
        receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation:
          formValues.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation,
        IntimateContactWithWhoHasHIVAIDS:
          formValues.IntimateContactWithWhoHasHIVAIDS,
        SARSavianFluH1N1: formValues.SARSavianFluH1N1,
        from1980Through1986: {
          spent3MonthsOrMoreCumulativelyInTheUnitedKingdom:
            formValues.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom,
          ResidedAtaUSmilitaryBaseinEurope:
            formValues.ResidedAtaUSmilitaryBaseinEurope,
        },
        sufferedFromMalariaChikungunyaDengueandWestNileFever:
          formValues.sufferedFromMalariaChikungunyaDengueandWestNileFever,
        visitedOrlivedOutsideofIndia: formValues.visitedOrlivedOutsideofIndia,
        PersonalHistory: {
          AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives:
            formValues.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives,
          pregnancyResultFromDonorEggSpermSurrogate:
            formValues.pregnancyResultFromDonorEggSpermSurrogate,
          everHadAbnormalPregnancy: formValues.everHadAbnormalPregnancy,
        },
        FamilyHistory: {
          relativesWithCancerleukemiaBefore20:
            formValues.relativesWithCancerleukemiaBefore20,
          RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor:
            formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor,
          relativesWithCancerleukemiaBefore20WHO:
            formValues.relativesWithCancerleukemiaBefore20WHO,
          RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO:
            formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO,
        },
      };
      dispatch(
        addOrupdateAnnexureInfo({
          HealthHistoryQuestionnaire: formValuesToSend,
          customerAnnexureInformationId: customerAnnexureInformationId,
          customerID: customerID,
        })
      );

      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === totalSteps) {
        setShowPreview(true);
      }
    },
  }));

  console.log("formvalues", formValues);

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
                      formValues.cancerDiabetesHepatitisBloodDisease === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("cancerDiabetesHepatitisBloodDisease", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.cancerDiabetesHepatitisBloodDisease === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("cancerDiabetesHepatitisBloodDisease", false)
                    }
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
                      formValues.HIVAIDS === true ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("HIVAIDS", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.HIVAIDS === false ? "contained" : "outlined"
                    }
                    onClick={() => handleChange("HIVAIDS", false)}
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
                <Typography variant="h5" maxWidth="800px">
                  C) Stroke, Seizureor Multiple Scierosis, Lung Disease, Kident
                  Disease, Liver Disease, Babesiosis, Genetic Disorder?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.strokeLungSclerosis === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("strokeLungSclerosis", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.strokeLungSclerosis === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("strokeLungSclerosis", false)}
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
                      formValues.anyTypeInfection === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("anyTypeInfection", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.anyTypeInfection === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("anyTypeInfection", false)}
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
                <Typography variant="h5" maxWidth="800px">
                  Do you have, or have a family history of Dementia,
                  Degenerative or Neurological Disease, or CreutzfeldtJakob
                  Disease?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.DementiaDegenerativeDisease === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("DementiaDegenerativeDisease", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.DementiaDegenerativeDisease === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("DementiaDegenerativeDisease", false)
                    }
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
                <Typography variant="h5" maxWidth="800px">
                  In the past 6 months, have you received a bite from an animal
                  suspected of Rabies or takken any vaccinations (shots) for the
                  same?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.biteFromAnimal === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("biteFromAnimal", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.biteFromAnimal === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("biteFromAnimal", false)}
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
                      formValues.sexuallyTransmittedDisease === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("sexuallyTransmittedDisease", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.sexuallyTransmittedDisease === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("sexuallyTransmittedDisease", false)
                    }
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
                <Typography variant="h5" maxWidth="730px">
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
                      formValues.immunisationsTattoosBodypiercing === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("immunisationsTattoosBodypiercing", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.immunisationsTattoosBodypiercing === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("immunisationsTattoosBodypiercing", false)
                    }
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
                      formValues.juvenileDetentionLockupJail === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("juvenileDetentionLockupJail", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.juvenileDetentionLockupJail === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("juvenileDetentionLockupJail", false)
                    }
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
                      formValues.livedWithApersonWhoHasHepatitis === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("livedWithApersonWhoHasHepatitis", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.livedWithApersonWhoHasHepatitis === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("livedWithApersonWhoHasHepatitis", false)
                    }
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
                      formValues.compensationForSex === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("compensationForSex", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.compensationForSex === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("compensationForSex", false)}
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
                <Typography variant="h5" maxWidth="730px">
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
                      formValues.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation ===
                      true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation",
                        true
                      )
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation ===
                      false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation",
                        false
                      )
                    }
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
                      formValues.IntimateContactWithWhoHasHIVAIDS === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("IntimateContactWithWhoHasHIVAIDS", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.IntimateContactWithWhoHasHIVAIDS === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("IntimateContactWithWhoHasHIVAIDS", false)
                    }
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
                <Typography variant="h5" maxWidth="730px">
                  Have you been or travelled to a country endemic for SARS
                  AvianFlu, H1N1, (Swine) Flu or had intimate contact with some
                  one having risk factors?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.SARSavianFluH1N1 === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("SARSavianFluH1N1", true)}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.SARSavianFluH1N1 === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => handleChange("SARSavianFluH1N1", false)}
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
                      formValues.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom ===
                      true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "spent3MonthsOrMoreCumulativelyInTheUnitedKingdom",
                        true
                      )
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom ===
                      false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "spent3MonthsOrMoreCumulativelyInTheUnitedKingdom",
                        false
                      )
                    }
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
                      formValues.ResidedAtaUSmilitaryBaseinEurope === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("ResidedAtaUSmilitaryBaseinEurope", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.ResidedAtaUSmilitaryBaseinEurope === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("ResidedAtaUSmilitaryBaseinEurope", false)
                    }
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
                <Typography variant="h5" maxWidth="730px">
                  Have you been or travelled to a country endemic for, and/or
                  suffered from Malaria, Chikungunya, Dengueand West Nile Fever?
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.sufferedFromMalariaChikungunyaDengueandWestNileFever ===
                      true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "sufferedFromMalariaChikungunyaDengueandWestNileFever",
                        true
                      )
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.sufferedFromMalariaChikungunyaDengueandWestNileFever ===
                      false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "sufferedFromMalariaChikungunyaDengueandWestNileFever",
                        false
                      )
                    }
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
                <Typography variant="h5" maxWidth="730px">
                  In the past 12 months, have you visited or lived outside of
                  India? Pleaselist the countries, cities and the duration of
                  your stay(s)
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.visitedOrlivedOutsideofIndia === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("visitedOrlivedOutsideofIndia", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.visitedOrlivedOutsideofIndia === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("visitedOrlivedOutsideofIndia", false)
                    }
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
                      formValues.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives ===
                      true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives",
                        true
                      )
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives ===
                      false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives",
                        false
                      )
                    }
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
                      formValues.pregnancyResultFromDonorEggSpermSurrogate ===
                      true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "pregnancyResultFromDonorEggSpermSurrogate",
                        true
                      )
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.pregnancyResultFromDonorEggSpermSurrogate ===
                      false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "pregnancyResultFromDonorEggSpermSurrogate",
                        false
                      )
                    }
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
                      formValues.everHadAbnormalPregnancy === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("everHadAbnormalPregnancy", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.everHadAbnormalPregnancy === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("everHadAbnormalPregnancy", false)
                    }
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
                      formValues.relativesWithCancerleukemiaBefore20 === true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("relativesWithCancerleukemiaBefore20", true)
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.relativesWithCancerleukemiaBefore20 === false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("relativesWithCancerleukemiaBefore20", false)
                    }
                  >
                    No
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.relativesWithCancerleukemiaBefore20 === "who"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange("relativesWithCancerleukemiaBefore20", "who")
                    }
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
                <Typography variant="h5" maxWidth="730px">
                  B) Any Red Cell related Diseaseor any Metabolic/Storage
                  Diseaseor any diseasesof Immune Deficiency or Genetic
                  Diseases? If yes, please list the details asbelow.
                </Typography>
                <Box>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor ===
                      true
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor",
                        true
                      )
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    sx={{ marginRight: "10px" }}
                    variant={
                      formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor ===
                      false
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor",
                        false
                      )
                    }
                  >
                    No
                  </Button>
                  <Button
                    size="small"
                    variant={
                      formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor ===
                      "who"
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handleChange(
                        "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor",
                        "who"
                      )
                    }
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
});

export default ClientDetailsEight;
