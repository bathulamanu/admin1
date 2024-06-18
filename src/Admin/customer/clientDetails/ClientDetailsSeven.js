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
  fontSize: "18px",
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

const ClientDetailsSeven = () => {
  const [formValues, setFormValues] = useState({
    executiveName: "",
    employeeCode: "",
    managerName: "",
    area: "",
    date: "",
    excutiveSign: "",
    excutivename: "",
  });
  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
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
          FOR BANK USE ONLY
        </Typography>
        <Grid container spacing={2} pt={1} pb={2}>
          <Grid item xs={6}>
            <InputLabel sx={inputLableStyle}>Name of excutive</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.executiveName}
                onChange={(e) => handleChange(e.target.value, "executiveName")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={inputLableStyle}>Employee Code</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.employeeCode}
                onChange={(e) => handleChange(e.target.value, "employeeCode")}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={1} pb={2}>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Name of manager</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.managerName}
                onChange={(e) => handleChange(e.target.value, "managerName")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Area / Region</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.area}
                onChange={(e) => handleChange(e.target.value, "area")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={inputLableStyle}>Date</InputLabel>
            <FormControl variant="outlined" fullWidth size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="Input text"
                size="small"
                value={formValues?.date}
                onChange={(e) => handleChange(e.target.value, "date")}
              />
            </FormControl>
          </Grid>
        </Grid>
        {/* <Stack
          sx={{ display: "flex", marginLeft: "1020px", maxWidth: "350px" }}
        > */}
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack></Stack>
          <Stack
            sx={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Grid container spacing={2} pt={3} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Signature of executive
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <TextareaAutosize
                    minRows={4}
                    id="outlined-adornment-password"
                    size="small"
                    value={formValues?.excutiveSign}
                    onChange={(e) =>
                      handleChange(e.target.value, "excutiveSign")
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={3} pb={2}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>Name of excutive</InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input text"
                    size="small"
                    value={formValues?.excutiveName}
                    onChange={(e) =>
                      handleChange(e.target.value, "excutiveName")
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ClientDetailsSeven;
