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
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import ClientDetails from "./clientDetails/ClientDetails";
import CustomerDetails from "./CustomerDetails";
import { setSelectedTab } from "../Slices/tabSlice";

const Details = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tab.selectedTab);
  const [showClientDetails, setShowClientDetails] = useState(false);

  const handleChange = (newValue) => {
    dispatch(setSelectedTab(newValue));
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
              </Box>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 10,
                }}
                spacing={5}
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
                    sx={{
                      fontWeight: selectedTab === 0 ? "bold" : "normal",
                      marginRight: "100px",
                    }}
                  />
                  <Tab
                    label="DETAILS"
                    sx={{
                      fontWeight: selectedTab === 1 ? "bold" : "normal",
                      marginRight: "100px",
                      marginLeft: "100px",
                    }}
                  />
                  <Tab
                    label="BABY DETAILS"
                    sx={{
                      fontWeight: selectedTab === 2 ? "bold" : "normal",
                      marginRight: "100px",
                      marginLeft: "100px",
                    }}
                  />
                  <Tab
                    label="REPORT"
                    sx={{
                      fontWeight: selectedTab === 3 ? "bold" : "normal",
                      marginLeft: "200px",
                    }}
                  />
                </Tabs>
              </Stack>
              <Divider sx={{ mb: 3 }} />
              {selectedTab === 0 && <CustomerDetails />}
              {selectedTab === 1 &&
                (showClientDetails ? (
                  <ClientDetails />
                ) : (
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "250px",
                      marginBottom: "250px",
                    }}
                  >
                    <Typography>ADD CLIENT DETAILS</Typography>
                    <Box>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => setShowClientDetails(!showClientDetails)}
                      >
                        <AddIcon fontSize="small" /> Add Details
                      </Button>
                    </Box>
                  </Box>
                ))}
              {selectedTab === 2 && (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "250px",
                    marginBottom: "250px",
                  }}
                >
                  <Typography>ADD BABY DETAILS</Typography>
                  <Box>
                    <Button variant="contained" size="small">
                      <AddIcon fontSize="small" /> Add Details
                    </Button>
                  </Box>
                </Box>
              )}
              {selectedTab === 3 && (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "250px",
                    marginBottom: "250px",
                  }}
                >
                  <Typography>Report</Typography>
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
