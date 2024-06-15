import { Box, Container, Typography } from "@mui/material";
import React from "react";
import financeImg from "../../assets/finance.jpg";

const Finance = () => {
  return (
    <Container
      disableGutters
      maxWidth="xxl"
      sx={{
        maxHeight: "75%",
        overflow: "auto",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "120px",
          marginBottom: "120px",
          gap: 2,
        }}
      >
        <img src={financeImg} height={"250px"} width={"auto"} alt="Logo" />
        <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
          Working On It, Coming Soon!
        </Typography>
      </Box>
    </Container>
  );
};

export default Finance;
