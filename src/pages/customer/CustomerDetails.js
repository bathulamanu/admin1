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
import React, { useEffect } from "react";
import InvoiceColumns from "./invoice/InvoiceTableColumn";
import CommonDataTable from "../../components/GlobalComponents/CommonDataTable";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerDetails } from "../../redux/Slices/customerSlice";
import { formatDate } from "../../service/globalFunctions";

const headingStyle = {
  fontSize: "18px",
  fontWeight: 500,
};

const CustomerDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customerDetail = useSelector((state) => state.customers.customerDetail);

  useEffect(() => {
    const customerID = localStorage.getItem("selectedCustomerId");
    dispatch(getCustomerDetails(customerID));
  }, []);
  console.log("customerDetail", customerDetail);

  const customerID = localStorage.getItem("selectedCustomerId"); //customerDetail?.customerID;
  const firstName = customerDetail?.firstName;
  const lastName = customerDetail?.lastName;
  const email = customerDetail?.email;
  const phoneNumber = customerDetail?.phoneNumber;
  const registrationCRNid = customerDetail?.registrationCRNid;
  const profilePhoto = customerDetail?.profilePhoto;
  const address = customerDetail?.address;
  const addressLine1 = customerDetail?.addressLine1;
  const addressLine2 = customerDetail?.addressLine2;
  const cityName = customerDetail?.LocationInfo?.cityName;
  const stateName = customerDetail?.LocationInfo?.stateName;
  const countryName = customerDetail?.LocationInfo?.countryName;
  const pincode = customerDetail?.pincode;
  const PlanTitle = customerDetail?.PlanTitle;
  const createdTime = formatDate(customerDetail?.createdTime);
  const totalAmount = customerDetail?.totalAmount;
  const paymentStatus = customerDetail?.paymentStatus;
  const PaymentID = customerDetail?.PaymentID;
  const PaymentMode = customerDetail?.PaymentMode;
  const invoiceFile = customerDetail?.invoiceFile;

  const handleDownload = () => {
    if (customerDetail && customerDetail.invoiceFile.length != 0) {
      const invoiceFileDownload = customerDetail.invoiceFile[0].invoiceFile;
      const link = document.createElement("a");
      link.href = invoiceFileDownload;
      link.download = invoiceFileDownload;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
      <Box>
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
                    {customerID} Customer
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
                        <Typography variant="subtitle2">{firstName}</Typography>
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
                        <Typography variant="subtitle2">{lastName}</Typography>
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
                        <Typography variant="subtitle2">{email}</Typography>
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
                        <Typography variant="subtitle2">
                          {phoneNumber}
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
                          CRN Number :
                        </Typography>{" "}
                        <Typography variant="subtitle2">
                          {registrationCRNid}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Avatar
                        src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${profilePhoto}`}
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
                            {addressLine1}, {addressLine2}, {address}
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
                            {cityName}
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
                            {stateName}
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
                            {countryName}
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
                            {pincode}
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
                            {PlanTitle}
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
                            Plan Date :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              minWidth: "80px",
                              fontSize: "14px",
                            }}
                          >
                            {createdTime}
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
                            {totalAmount}
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
                            {paymentStatus}
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
                            {PaymentID}
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
                            {PaymentMode}
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
                            {createdTime}
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
                    rows={invoiceFile || []}
                    columns={InvoiceColumns()}
                  />
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Stack></Stack>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      sx={{ marginTop: "10px" }}
                      onClick={handleDownload}
                    >
                      Download Invoice
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>{" "}
            *
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CustomerDetails;
