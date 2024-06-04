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

const headingStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

const Details = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
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
              <Box
                sx={{
                  //   width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Tabs
                  value={selectedTab}
                  onChange={handleChange}
                  centered
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
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
              </Box>
              <Divider sx={{ mb: 3 }} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Details;
