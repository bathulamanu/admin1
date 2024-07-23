import React, { useRef, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientDetailsSec from "./ClientDetailsSec";
import ClientDetailsFirst from "./ClientDetailsFirst";
import ClientDetailsThree from "./ClientDetailsThree";
import ClientDetailsForth from "./ClientDetailsForth";
import ClientDetailsFive from "./ClientDetailsFive";
import ClientDetailsSix from "./ClientDetailsSix";
import ClientDetailsSeven from "./ClientDetailsSeven";
import ClientDetailsEight from "./ClientDetailsEight";
import ClientDetailsPreview from "./ClientDetailsPreview";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ClientDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const totalSteps = 8;
  const childFatherDetailsRef = useRef();
  const childMotherDetailsRef = useRef();
  const childCommunicationDetailsRef = useRef();
  const childHospitalDetailsRef = useRef();
  const childReferenceIformationRef = useRef();
  const childSignatureRef = useRef();
  const childForbankUseRef = useRef();
  const childHealthHistoryRef = useRef();

  const handleNext = () => {
    // if (currentStep < totalSteps) {
    //   setCurrentStep(currentStep + 1);
    // } else if (currentStep === totalSteps) {
    //   setShowPreview(true);
    // }
    if (childFatherDetailsRef.current) {
      childFatherDetailsRef.current.getFatherData();
    }
    if (childMotherDetailsRef.current) {
      childMotherDetailsRef.current.getMotherData();
    }
    if (childCommunicationDetailsRef.current) {
      childCommunicationDetailsRef.current.getCommunicationDetailsChildData();
    }
    if (childHospitalDetailsRef.current) {
      childHospitalDetailsRef.current.getHospitalDetailsChildData();
    }
    if (childReferenceIformationRef.current) {
      childReferenceIformationRef.current.getReferenceIformationChildData();
    }
    if (childSignatureRef.current) {
      childSignatureRef.current.getSignatureChildData();
    }
    if (childForbankUseRef.current) {
      childForbankUseRef.current.getForbankUseChildData();
    }
    if (childHealthHistoryRef.current) {
      childHealthHistoryRef.current.getHealthHistoryChildData();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        // padding: "8px",
      }}
    >
      <ToastContainer />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"40px"}
        pl={1}
      >
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          {!showPreview && (
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 500,
                paddingTop: "4px",
                paddingBottom: "20px",
              }}
              variant="h5"
            >
              {currentStep === 8
                ? "HEALTH HISTORY QUESTIONNAIRE"
                : "CLIENT INFORMATION"}
            </Typography>
          )}
        </Stack>
      </Box>

      {showPreview ? (
        <ClientDetailsPreview setCurrentStep={setCurrentStep} />
      ) : (
        <>
          {currentStep === 1 && (
            <ClientDetailsFirst
              ref={childFatherDetailsRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 2 && (
            <ClientDetailsSec
              ref={childMotherDetailsRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 3 && (
            <ClientDetailsThree
              ref={childCommunicationDetailsRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 4 && (
            <ClientDetailsForth
              ref={childHospitalDetailsRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 5 && (
            <ClientDetailsFive
              ref={childReferenceIformationRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 6 && (
            <ClientDetailsSix
              ref={childSignatureRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 7 && (
            <ClientDetailsSeven
              ref={childForbankUseRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            />
          )}
          {currentStep === 8 && (
            <ClientDetailsEight
              ref={childHealthHistoryRef}
              handleNext={handleNext}
              handlePrev={handlePrevious}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
              setShowPreview={setShowPreview}
            />
          )}
        </>
      )}

      {!showPreview && (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginTop: 2 }}
        >
          <Box>
            <Button
              variant="contained"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ArrowBackIcon sx={{ marginRight: "10px" }} /> Previous
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.5rem !important" }} variant="h4">
              {"<"}
            </Typography>
            <Typography
              sx={{ fontSize: "1.5rem !important", display: "flex" }}
              variant="h4"
            >
              <span style={{ color: "blue" }}>0{`${currentStep} `}</span>
              <span>/</span>
              <span>0{`${totalSteps} `}</span>
            </Typography>
            <Typography sx={{ fontSize: "1.5rem !important" }} variant="h4">
              {">"}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={currentStep === totalSteps && showPreview}
            >
              Next <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default ClientDetails;
