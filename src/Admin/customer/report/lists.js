import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ReportDetails from "./reportDetails"; // Make sure this component starts with a capital letter

const reportTypes = [
  "Preservation certificate",
  "CFU & sterility report",
  "CD34 report",
  "Maternity sample report",
  "NBS reports",
  "HLA reports",
  "Others",
];

const Lists = () => {
  const [selectedReport, setSelectedReport] = useState(false);

  if (selectedReport) {
    return <ReportDetails />;
  }

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
      {reportTypes.map((report, index) => (
        <Card
          variant="outlined"
          key={index}
          sx={{ marginTop: "20px", borderRadius: "30px" }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginTop: "10px", fontWeight: "bold" }}
            >
              {report}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "30px" }}
              onClick={() => setSelectedReport(true)}
            >
              <AddIcon />
              Add Files
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Lists;
