import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
  Box,
  Divider,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceDetails } from "../../../redux/Slices/invoiceSlice";
import { formatDate } from "../../../service/globalFunctions";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook_icon.png";
import whatsapp from "../../../assets/whatsapp.png";
import apple from "../../../assets/apple.png";

const inputLableStyle = {
  color: "black",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const InvoiceView = () => {
  const dispatch = useDispatch();
  const invoiceDetail = useSelector((state) => state.invoice.invoiceDetail);
  useEffect(() => {
    const customerPaymentSubId = localStorage.getItem("customerPaymentSubId");
    dispatch(getInvoiceDetails(customerPaymentSubId));
  }, []);
  console.log("invoiceDetail", invoiceDetail);
  const InvoiceID = invoiceDetail?.InvoiceID;
  const CRNno = invoiceDetail?.CRNno;
  const CustomerName = invoiceDetail?.CustomerName;
  const DateOfIssue = formatDate(invoiceDetail?.DateOfIssue);
  const BillFrom = invoiceDetail?.BillFrom;
  const billTo = invoiceDetail?.billTo;
  const Plan = invoiceDetail?.Plan;
  const totalAmount = invoiceDetail?.totalAmount;
  const paymentStatus = invoiceDetail?.paymentStatus;
  const paymentType = invoiceDetail?.paymentType;
  const PaymentGatewayID = invoiceDetail?.PaymentGatewayID;
  const createdTime = formatDate(invoiceDetail?.createdTime);

  const [formValues, setFormValues] = useState({
    fatherName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    occupation: "",
    designation: "",
    orgName: "",
    idProof: "",
    idProofNo: "",
    otherId: "",
    desc: "",
    additionalInfo: "",
  });

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
      }}
    >
      <Box sx={{ background: "#fff" }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 500,
            paddingTop: "18px",
            marginLeft: "10px",
          }}
          variant="h5"
        >
          View Invoice
        </Typography>
        <Divider sx={{ mt: 3 }} />
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "60px",
          padding: "20px",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card>
            <CardContent>
              <Box
                sx={{
                  padding: "10px",
                }}
              >
                <Box sx={{ border: "1px solid #E2E5E9" }}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      background: "#E7F1FE",
                      padding: "10px",
                    }}
                  >
                    <Typography sx={{ marginLeft: "16px", fontWeight: 500 }}>
                      Cryovault
                    </Typography>
                    <Typography>City, Country</Typography>
                  </Stack>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      background: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                        Invoice
                      </Typography>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Invoice ID :
                        </Typography>{" "}
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          {InvoiceID}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          CRN :
                        </Typography>{" "}
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          {CRNno}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Customer Name :
                        </Typography>{" "}
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          {CustomerName}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Date of Issue :
                        </Typography>{" "}
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          {DateOfIssue}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Divider />
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      background: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Box direction={"column"} sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Bill From
                      </Typography>{" "}
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: "14px", fontWeight: 500 }}
                      >
                        {BillFrom}
                      </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box
                      direction={"column"}
                      sx={{ flex: 1, marginLeft: "6px" }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Bill To
                      </Typography>{" "}
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: "14px", fontWeight: 500 }}
                      >
                        {billTo}
                      </Typography>
                    </Box>
                  </Stack>
                  <Divider />
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      background: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Customer Plan :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {Plan}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider />
                  <Stack
                    sx={{
                      display: "flex",
                      background: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      Payment Details
                    </Typography>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Amount :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{ fontSize: "14px" }}
                          >
                            {totalAmount}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Payment Status :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{ fontSize: "14px" }}
                          >
                            {paymentStatus}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Payment Mode :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{ fontSize: "14px" }}
                          >
                            {paymentType}
                          </Typography>
                        </Stack>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Transaction ID :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{ fontSize: "14px" }}
                          >
                            {PaymentGatewayID}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Transaction Date :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{ fontSize: "14px" }}
                          >
                            {createdTime}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            Transaction Time :
                          </Typography>{" "}
                          <Typography
                            variant="subtitle2"
                            sx={{ fontSize: "14px" }}
                          >
                            09:30Am{" "}
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </Stack>
                  <Divider />
                  <Stack
                    sx={{
                      display: "flex",
                      background: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Box sx={{ border: "1px solid #E2E5E9" }}>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          background: "#E7F1FE",
                          padding: "10px",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                          Item Description
                        </Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                          Date & Time
                        </Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                          Payment Status
                        </Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                          Amount
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          background: "#fff",
                          padding: "10px",
                        }}
                      >
                        <Typography sx={{}}>Item Description 1</Typography>
                        <Typography
                          sx={{ fontSize: "14px", marginRight: "75px" }}
                        >
                          {createdTime}
                        </Typography>
                        <Typography sx={{ marginRight: "30px" }}>
                          {paymentStatus}
                        </Typography>
                        <Typography sx={{}}>{totalAmount}</Typography>
                      </Stack>
                    </Box>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        // marginLeft: "350px",
                      }}
                    >
                      <Stack></Stack>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "30%",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                          Total
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            marginRight: "15px",
                          }}
                        >
                          {totalAmount}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Divider />
                  <Stack
                    sx={{
                      display: "flex",
                      background: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Box sx={{ border: "1px solid #E2E5E9" }}>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          background: "#fff",
                          padding: "20px",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>Notes</Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Card>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 500,
                  paddingTop: "8px",
                }}
                variant="h5"
              >
                Invoice Download
              </Typography>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>
                    Email / Phone number
                  </InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.orgName}
                      onChange={(e) => handleChange(e, "orgName")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={1} pb={1}>
                <Grid item style={{ width: "100%" }}>
                  <InputLabel sx={inputLableStyle}>Customer Name</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Input Text"
                      size="small"
                      value={formValues?.orgName}
                      onChange={(e) => handleChange(e, "orgName")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid spacing={2} pt={1} pb={1} alignItems="center">
                <Grid item>
                  <InputLabel sx={inputLableStyle}>Send Via</InputLabel>
                </Grid>
                <Stack
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                  }}
                >
                  <img src={google} alt="google" height="50" width="50" />
                  <img src={facebook} alt="facebook" height="50" width="50" />
                  <img src={whatsapp} alt="whatsapp" height="50" width="50" />
                  <img src={apple} alt="apple" height="50" width="50" />
                </Stack>
              </Grid>
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"end"}
                marginBottom={"10px"}
              >
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<SaveAltIcon />}
                >
                  Download
                </Button>
                <Button size="small" variant="contained">
                  Send
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
};

export default InvoiceView;
