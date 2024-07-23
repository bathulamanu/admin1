import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import ClientDetails from "./clientDetails/ClientDetails";
import CustomerDetails from "./CustomerDetails";
import { setSelectedTab } from "../../redux/Slices/tabSlice";
import BabyDetailsForm from "./babyDetails/BabyDetailsForm";
import Lists from "./report/lists";
import { getAnnexureInfo } from "../../redux/Slices/globalSlice";

const Details = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tab.selectedTab);
  const [showClientDetails, setShowClientDetails] = useState(false);
  const [showBabyDetailsForm, setShowBabyDetailsForm] = useState(false);

  // const customerDetail = useSelector((state) => state.customers.customerDetail);
  const SubscribedInnerPageData = useSelector(
    (state) => state.global.SubscribedUserData
  );

  const handleChange = (event, newValue) => {
    dispatch(setSelectedTab(newValue));
  };

  useEffect(() => {
    const customerID = localStorage.getItem("selectedCustomerId");
    dispatch(getAnnexureInfo(customerID));
  }, [dispatch]);

  useEffect(() => {
    SubscribedInnerPageData?.customerAnnexureInformationId
      ? setShowClientDetails(true)
      : setShowClientDetails(false);
  }, [SubscribedInnerPageData]);

  // const getHeaderText = () => {
  //   switch (selectedTab) {
  //     case 0:
  //     case 2:
  //       return "Details";
  //     case 1:
  //       return "View/Edit Customer";
  //     case 3:
  //       return "001 - Customer Name";
  //     default:
  //       return "Details";
  //   }
  // };

  return (
    <Container
      disableGutters
      maxWidth="xxl"
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        // padding: "8px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box sx={{ marginBottom: "40px" }}>
        <Card sx={{ justifyContent: "space-between" }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <Box>
              <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
                <Stack
                  direction={"row"}
                  sx={{ justifyContent: "center" }}
                  spacing={2}
                >
                  <Typography
                    sx={{ fontWeight: "bold", paddingTop: "8px" }}
                    variant="h5"
                  >
                    {/* {getHeaderText()} */}
                  </Typography>
                </Stack>
              </Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Tabs
                  value={selectedTab}
                  onChange={handleChange}
                  centered
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{
                    width: "100%",
                    "& .MuiTabs-flexContainer": {
                      justifyContent: "space-between",
                    },
                  }}
                >
                  <Tab
                    label="USER"
                    sx={{
                      fontWeight: "bold",
                      // fontWeight: selectedTab === 0 ? "bold" : "normal",
                      flex: 1,
                      borderRight: 1,
                      borderColor: "divider",
                    }}
                  />
                  <Tab
                    label="DETAILS"
                    sx={{
                      fontWeight: "bold",
                      // fontWeight: selectedTab === 1 ? "bold" : "normal",
                      flex: 1,
                      borderRight: 1,
                      borderColor: "divider",
                    }}
                  />
                  <Tab
                    label="BABY DETAILS"
                    sx={{
                      fontWeight: "bold",
                      // fontWeight: selectedTab === 2 ? "bold" : "normal",
                      flex: 1,
                      borderRight: 1,
                      borderColor: "divider",
                    }}
                  />
                  <Tab
                    label="REPORT"
                    sx={{
                      fontWeight: "bold",
                      // fontWeight: selectedTab === 3 ? "bold" : "normal",
                      flex: 1,
                    }}
                  />
                </Tabs>
                <Divider sx={{ mb: 3, width: "100%" }} />
              </Stack>
              {/* {selectedTab === 0 &&
                (showUserDetails ? <CustomerForm /> : <CustomerDetails />)} */}
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
                        onClick={() => setShowClientDetails(true)}
                      >
                        <AddIcon fontSize="small" /> Add Details
                      </Button>
                    </Box>
                  </Box>
                ))}
              {selectedTab === 2 &&
                (showBabyDetailsForm ? (
                  <BabyDetailsForm />
                ) : (
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
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() =>
                          setShowBabyDetailsForm(!showBabyDetailsForm)
                        }
                      >
                        <AddIcon fontSize="small" /> Add Details
                      </Button>
                    </Box>
                  </Box>
                ))}
              {selectedTab === 3 && (
                // <Box
                //   display={"flex"}
                //   flexDirection={"column"}
                //   sx={{
                //     justifyContent: "center",
                //     alignItems: "center",
                //     marginTop: "250px",
                //     marginBottom: "250px",
                //   }}
                // >
                <Lists />
                // </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Details;
