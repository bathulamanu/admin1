import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
  Box,
  IconButton,
  Divider,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";

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

const PlansForm = () => {
  const [formValues, setFormValues] = useState({
    fatherName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    occupation: "",
    designation: "",
    orgName: "",
    idProof: "",
    idProofNo: "",
    otherId: "",
  });

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Container
      maxWidth="lg"
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
            width: "600px",
            gap: 2,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2} pt={3}>
                <Grid item xs={6}>
                  <InputLabel sx={inputLableStyle}>
                    Expectant Father Name <span style={redStarStyle}>*</span>
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.fatherName}
                      onChange={(e) => handleChange(e, "fatherName")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent></CardContent>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            gap: 2,
          }}
        >
          <Card variant="outlined">
            <CardContent></CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent></CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PlansForm;
