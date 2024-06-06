import React, { useState } from "react";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import ClientDetailsSec from "./ClientDetailsSec";
import ClientDetailsFirst from "./ClientDetailsFirst";
import ClientDetailsThree from "./ClientDetailsThree";
import ClientDetailsForth from "./ClientDetailsForth";
import ClientDetailsFive from "./ClientDetailsFive";
import ClientDetailsSix from "./ClientDetailsSix";
import ClientDetailsSeven from "./ClientDetailsSeven";
import ClientDetailsEight from "./ClientDetailsEight";

const ClientDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        padding: "8px",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"40px"}
        // pt={5}
        // pb={5}
        pl={1}
      >
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
          <Typography
            sx={{ fontWeight: "bold", paddingTop: "4px" }}
            variant="h5"
          >
            {currentStep === 8
              ? "HEALTH HISTORY QUESTIONNAIRE"
              : "CLIENT INFORMATION"}
          </Typography>
        </Stack>
      </Box>
      {currentStep === 1 && <ClientDetailsFirst />}
      {currentStep === 2 && <ClientDetailsSec />}
      {currentStep === 3 && <ClientDetailsThree />}
      {currentStep === 4 && <ClientDetailsForth />}
      {currentStep === 5 && <ClientDetailsFive />}
      {currentStep === 6 && <ClientDetailsSix />}
      {currentStep === 7 && <ClientDetailsSeven />}
      {currentStep === 8 && <ClientDetailsEight />}

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
            <NavigateBeforeIcon sx={{ fontSize: "large" }} /> 0{currentStep} / 0
            {totalSteps} <NavigateNextIcon sx={{ fontSize: "large" }} />
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentStep === totalSteps}
          >
            Next <KeyboardTabIcon />
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default ClientDetails;
