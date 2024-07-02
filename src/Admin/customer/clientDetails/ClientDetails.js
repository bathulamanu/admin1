import React, { useRef, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ToastContainer, toast } from "react-toastify";
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
import { useDispatch } from "react-redux";

const ClientDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const totalSteps = 8;
  const dispatch = useDispatch();
  const childFatherDetailsRef = useRef();
  const childMotherDetailsRef = useRef();

  const handleNext = () => {
    // if (currentStep < totalSteps) {
    //   setCurrentStep(currentStep + 1);
    // } else if (currentStep === totalSteps) {
    //   setShowPreview(true);
    // }
    if (childFatherDetailsRef.current) {
      childFatherDetailsRef.current.getFatherData();
    }
    // if (childMotherDetailsRef.current) {
    //   childMotherDetailsRef.current.getMotherDetails();
    // }
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
        <ClientDetailsPreview />
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
          {currentStep === 2 && <ClientDetailsSec />}
          {currentStep === 3 && <ClientDetailsThree />}
          {currentStep === 4 && <ClientDetailsForth />}
          {currentStep === 5 && <ClientDetailsFive />}
          {currentStep === 6 && <ClientDetailsSix />}
          {currentStep === 7 && <ClientDetailsSeven />}
          {currentStep === 8 && <ClientDetailsEight />}
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
              <KeyboardBackspaceIcon /> Previous
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
              <NavigateBeforeIcon sx={{ fontSize: "large" }} /> 0{currentStep} /
              0{totalSteps} <NavigateNextIcon sx={{ fontSize: "large" }} />
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={currentStep === totalSteps && showPreview}
            >
              Next <KeyboardTabIcon />
            </Button>
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default ClientDetails;
