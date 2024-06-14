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
  Typography,
} from "@mui/material";
import React from "react";
import InvoiceColumns from "./invoice/InvoiceTableColumn";
import CommonDataTable from "../../GlobalComponents/CommonDataTable";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const headingStyle = {
  fontSize: "18px",
  fontWeight: 500,
};

const CustomerDetails = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      customerName: "john doe",
      DateTime: "2023-01-01 - 12:56 PM",
      crnNo: "123456",
      planAmount: "25000",
      status: "Paid",
    },
  ];
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
                    sx={{
                      fontSize: "24px",
                      fontWeight: 500,
                      paddingTop: "8px",
                    }}
                    variant="h5"
                  >
                    View Customer
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      backgroundColor: "#f0f0f0",
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                    color="primary"
                  >
                    001 Customer
                  </Typography>
                </Stack>
              </Box>
              <Divider sx={{ mt: 3, mb: 3 }} />
              <Card variant="outlined" sx={{ marginTop: "30px" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Typography variant="h5" sx={headingStyle}>
                    GENERAL INFORMATION
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Stack spacing={2} marginLeft={"10px"}>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            minWidth: "80px",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          First Name :
                        </Typography>{" "}
                        <Typography variant="subtitle2"></Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            minWidth: "80px",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Last Name :
                        </Typography>{" "}
                        <Typography variant="subtitle2"></Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            minWidth: "80px",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Email Address :
                        </Typography>{" "}
                        <Typography variant="subtitle2"></Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            minWidth: "80px",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Phone Number :
                        </Typography>{" "}
                        <Typography variant="subtitle2"></Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            minWidth: "80px",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          CRN Number :
                        </Typography>{" "}
                        <Typography variant="subtitle2"></Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Avatar
                        sx={{ width: 200, height: 200, marginRight: 2 }}
                      />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Stack
                direction={"row"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Card variant="outlined" sx={{ padding: "20px" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography variant="h5" sx={headingStyle}>
                      CUSTOMER ADDRESS
                    </Typography>
                    <Stack
                      direction={"row"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Stack spacing={2}>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Address :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            Hyderabad
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            City :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            Hyderabad
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            State :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            Telangana
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Country :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            India
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Pincode :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            500001
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
                <Card variant="outlined" sx={{ padding: "20px" }}>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography variant="h5" sx={headingStyle}>
                      CUSTOMER PLAN
                    </Typography>
                    <Stack
                      direction={"row"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Stack spacing={2}>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Customer Plan :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            Genral Delivary
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Customer Date :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            25/04/2024
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
                <Card variant="outlined" sx={{ padding: "20px" }}>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography variant="h5" sx={headingStyle}>
                      PAYMENT
                    </Typography>
                    <Stack
                      direction={"row"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Stack spacing={2}>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Amount :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            250000
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Payment Status :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            Paid
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Transaction ID:
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            123456789
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Payment Mode :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            Card Payment
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Transaction Date & Time :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            25/04/2024 - 11:46 PM
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
              <Card variant="outlined" sx={{ marginTop: "30px" }}>
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <Typography variant="h5" sx={headingStyle}>
                    INVOICE
                  </Typography>
                  <CommonDataTable
                    rows={dummyData || []}
                    columns={InvoiceColumns()}
                  />
                  <Box sx={{ display: "flex", flexDirection: "end" }}>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      sx={{ marginTop: "10px", marginLeft: "900px" }}
                    >
                      Download Invoice
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CustomerDetails;
