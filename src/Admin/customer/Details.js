import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import CustomerForm from "./CustomerForm";
import { useNavigate } from "react-router-dom";

const headingStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

const Details = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const formDetails = () => {
    return <CustomerForm />;
  };
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        maxHeight: "75%",
        overflow: "auto",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box>
        <Card justifyContent={"space-between"}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Stack direction={"row"} justifyContent={"center"} spacing={2}>
                  <Typography
                    sx={{ fontWeight: "bold", paddingTop: "8px" }}
                    variant="h5"
                  >
                    Details
                  </Typography>
                </Stack>
                <Button variant="contained" size="small">
                  <AddIcon fontSize="small" /> Add Details
                </Button>
              </Box>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <Tabs
                  value={selectedTab}
                  onChange={handleChange}
                  centered
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{}}
                >
                  <Tab
                    label="USER"
                    sx={{ fontWeight: selectedTab === 0 ? "bold" : "normal" }}
                  />
                  <Tab
                    label="DETAILS"
                    sx={{ fontWeight: selectedTab === 1 ? "bold" : "normal" }}
                  />
                  <Tab
                    label="BABY DETAILS"
                    sx={{ fontWeight: selectedTab === 2 ? "bold" : "normal" }}
                  />
                  <Tab
                    label="REPORT"
                    sx={{ fontWeight: selectedTab === 3 ? "bold" : "normal" }}
                  />
                </Tabs>
              </Stack>
              <Divider sx={{ mb: 3 }} />
              {selectedTab === 0 && (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "200px",
                    marginBottom: "200px",
                  }}
                >
                  <Typography>ADD USER DETAILS</Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navigate("/customerPage/customerForm")}
                    >
                      <AddIcon fontSize="small" /> Add Details
                    </Button>
                  </Box>
                </Box>
              )}
              {selectedTab === 1 && (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "200px",
                    marginBottom: "200px",
                  }}
                >
                  <Typography>ADD DETAILS</Typography>
                  <Box>
                    <Button variant="contained" size="small">
                      <AddIcon fontSize="small" /> Add Details
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Details;
