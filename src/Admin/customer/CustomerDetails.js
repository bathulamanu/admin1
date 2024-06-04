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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import InvoiceColumns from "./InvoiceTableColumn";
import CommonDataTable from "../../GlobalComponents/CommonDataTable";

const headingStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

const CustomerDetails = () => {
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
                    sx={{ fontWeight: "bold", paddingTop: "8px" }}
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
                <MoreVertIcon />
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
                    <Stack spacing={2}>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            minWidth: "80px",
                            fontSize: "18px",
                            fontWeight: "bold",
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
                            fontSize: "18px",
                            fontWeight: "bold",
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
                            fontSize: "18px",
                            fontWeight: "bold",
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
                            fontSize: "18px",
                            fontWeight: "bold",
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
                            fontSize: "18px",
                            fontWeight: "bold",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Address :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            City :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            State :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Country :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Pincode :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Customer Plan :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Customer Date :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Amount :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Payment Status :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Transaction ID:
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Payment Mode :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Transaction Date & Time :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "18px",
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
                  <Box>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      sx={{ marginTop: "10px" }}
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
