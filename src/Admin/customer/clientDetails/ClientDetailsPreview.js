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
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";

const headingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "10px",
  marginLeft: "5px",
  textAlign: "center",
};

const ClientDetailsPreview = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          CLIENT INFORMATION
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
          }}
        >
          <Card
            variant="outlined"
            sx={{ width: "550px", marginBottom: "15px" }}
          >
            <CardContent sx={{ width: "600px" }}></CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{ width: "550px", marginBottom: "15px" }}
          >
            <CardContent sx={{ width: "600px" }}></CardContent>
          </Card>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ClientDetailsPreview;
