import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";

const headingStyle = {
  fontSize: "24px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "5px",
};

const inputLableStyle = {
  color: "black",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const ClientDetailsSix = () => {
  const [formValues, setFormValues] = useState({
    fatherSign: "",
    motherSign: "",
    medicalDirectorSign: "",
    fatherName: "",
    motherName: "",
    medicalDirectorName: "",
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          SIGNATURE
        </Typography>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Father / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="outlined-adornment-password"
                size="small"
                value={formValues?.fatherSign}
                onChange={(e) => handleChange(e.target.value, "fatherSign")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Mother / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="outlined-adornment-password"
                size="small"
                value={formValues?.motherSign}
                onChange={(e) => handleChange(e.target.value, "motherSign")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Signature of Medical Director CBIPL
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <TextareaAutosize
                minRows={4}
                id="outlined-adornment-password"
                size="small"
                value={formValues?.medicalDirectorSign}
                onChange={(e) =>
                  handleChange(e.target.value, "medicalDirectorSign")
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Father / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.fatherName}
                onChange={(e) => handleChange(e.target.value, "fatherName")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Mother / Legal Guardian
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.motherName}
                onChange={(e) => handleChange(e.target.value, "motherName")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>
              Name of Medical Director CBIPL
            </InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.medicalDirectorName}
                onChange={(e) =>
                  handleChange(e.target.value, "medicalDirectorName")
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ClientDetailsSix;
