import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
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
  TextField,
  IconButton,
  FormHelperText,
} from "@mui/material";
import SingleSelect from "../../../components/GlobalComponents/SingleSelect";
import AddIcon from "@mui/icons-material/Add";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook_icon.png";
import whatsapp from "../../../assets/whatsapp.png";
import apple from "../../../assets/apple.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCustomerWhoIsNotWithInvoice } from "../../../redux/Slices/invoiceSlice";
import {
  getCustomerWhoIsNotWithInvoiceListById,
  getPaymentModeListById,
  getPlanListById,
} from "../../../service/globalFunctions";
import { getSubscriptionPlan } from "../../../redux/Slices/planSlice";
import {
  getPaymentModeList,
  getPaymentStatusList,
} from "../../../redux/Slices/globalSlice";

const inputLableStyle = {
  color: "black",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};

const InvoiceForm = forwardRef((props, ref) => {
  const [openView, setOpenView] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customerWhoIsNotWithInvoiceList = useSelector(
    (state) => state.invoice.customerWhoIsNotWithInvoiceList
  );
  const notInvoiceList = getCustomerWhoIsNotWithInvoiceListById(
    customerWhoIsNotWithInvoiceList
  );
  const getAllPlansList = useSelector((state) => state.plan.planList);
  const plansList = getPlanListById(getAllPlansList);
  const getAllPaymentModeList = useSelector(
    (state) => state.global.paymentModeList
  );
  const paymentModeList = getPaymentModeListById(getAllPaymentModeList);
  const getAllPaymentStatusList = useSelector(
    (state) => state.global.paymentStatusList
  );
  const paymentStatusList = getPaymentModeListById(getAllPaymentStatusList);

  useEffect(() => {
    dispatch(getCustomerWhoIsNotWithInvoice());
    dispatch(getSubscriptionPlan());
    dispatch(getPaymentModeList(null));
    dispatch(getPaymentStatusList(null));
  }, []);

  const [formValues, setFormValues] = useState({
    customerPaymentId: null,
    CRNno: "",
    InvoiceID: "",
    DateOfIssue: "",
    subscriptionPlanId: null,
    totalAmount: "",
    paidAmount: "",
    totalPaidAmount: "",
    pendingAmount: "",
    Currency: "INR",
    PaymentGatewayID: "",
    paymentStatus: "",
    notes: "",
    paymentType: "",
    offerValue: "",
    paymentDate: "",
    totalPendingAmount: "",
  });

  const [errors, setErrors] = useState({});
  useImperativeHandle(ref, () => ({
    validateInvoiceAddForm: () => {
      if (!formValues.CRNno) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          CRNno: "CRN Number is required",
        }));
        return;
      } else if (!formValues.customerPaymentId) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          customerPaymentId: "Customer name is required",
        }));
        return;
      } else if (!formValues.InvoiceID) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          InvoiceID: "Invoice ID is required",
        }));
        return;
      } else if (!formValues.DateOfIssue) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          DateOfIssue: "Date Of Issue is required",
        }));
        return;
      } else if (!formValues.subscriptionPlanId) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          subscriptionPlanId: "Customer Plane is required",
        }));
        return;
      } else if (!formValues.totalAmount) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          totalAmount: "Amount is required",
        }));
        return;
      } else if (!formValues.paymentStatus) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          paymentStatus: "Payment Status is required",
        }));
        return;
      } else if (!formValues.PaymentGatewayID) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          PaymentGatewayID: "Trasaction ID is required",
        }));
        return;
      } else if (!formValues.paymentType) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          paymentType: "Payment Mode is required",
        }));
        return;
      } else if (!formValues.paymentDate) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          paymentDate: "Payment Date is required",
        }));
        return;
      }
    },
  }));

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  console.log("formValues", formValues);

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "55%",
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
          Create Invoice
        </Typography>
        <Divider sx={{ mt: 3 }} />
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "60px",
        }}
      >
        <Stack sx={{ background: "#fff", width: "49%" }}>
          <Box sx={{ padding: "20px" }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 500,
              }}
              variant="h5"
            >
              Invoice Details
            </Typography>
            <Grid container spacing={2} pt={1} pb={1}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  CRN<span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.CRNno}
                >
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.CRNno}
                    onChange={(e) => handleChange(e, "CRNno")}
                  />
                  {!!errors.CRNno && (
                    <FormHelperText>{errors.CRNno}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={1} pb={1}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Customer Name<span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.customerPaymentId}
                >
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={notInvoiceList}
                    value={formValues?.customerPaymentId}
                    onChange={(e) => handleChange(e, "customerPaymentId")}
                  />
                  {!!errors.customerPaymentId && (
                    <FormHelperText>{errors.customerPaymentId}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={1} pb={1}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Invoice ID<span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.InvoiceID}
                >
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.InvoiceID}
                    onChange={(e) => handleChange(e, "InvoiceID")}
                  />
                  {!!errors.InvoiceID && (
                    <FormHelperText>{errors.InvoiceID}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={1} pb={1}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Date of Issue<span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.DateOfIssue}
                >
                  <OutlinedInput
                    fullWidth
                    type="date"
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.DateOfIssue}
                    onChange={(e) => handleChange(e, "DateOfIssue")}
                  />
                  {!!errors.DateOfIssue && (
                    <FormHelperText>{errors.DateOfIssue}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 500,
                marginTop: "10px",
              }}
              variant="h5"
            >
              Customer Plan
            </Typography>
            <Grid container spacing={2} pt={1} pb={1}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Customer Plan<span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.subscriptionPlanId}
                >
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={plansList}
                    value={formValues?.subscriptionPlanId}
                    onChange={(e) => handleChange(e, "subscriptionPlanId")}
                  />
                  {!!errors.subscriptionPlanId && (
                    <FormHelperText>{errors.subscriptionPlanId}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 500,
                marginTop: "10px",
              }}
              variant="h5"
            >
              Payment Details
            </Typography>
            <Grid container spacing={2} pt={1} pb={1}>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Amount <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.totalAmount}
                >
                  <OutlinedInput
                    fullWidth
                    type="number"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.totalAmount}
                    onChange={(e) =>
                      handleChange(e.target.value, "totalAmount")
                    }
                  />
                  {!!errors.totalAmount && (
                    <FormHelperText>{errors.totalAmount}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Payment Status <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.paymentStatus}
                >
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={paymentStatusList}
                    value={formValues?.paymentStatus}
                    onChange={(e) => {
                      handleChange(e, "paymentStatus");
                    }}
                  />
                  {!!errors.paymentStatus && (
                    <FormHelperText>{errors.paymentStatus}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Trasaction ID <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.PaymentGatewayID}
                >
                  <OutlinedInput
                    fullWidth
                    type="number"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.PaymentGatewayID}
                    onChange={(e) =>
                      handleChange(e.target.value, "PaymentGatewayID")
                    }
                  />
                  {!!errors.PaymentGatewayID && (
                    <FormHelperText>{errors.PaymentGatewayID}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Payment Mode <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.paymentType}
                >
                  <SingleSelect
                    Placeholder={"Select"}
                    width={"100%"}
                    data={paymentModeList}
                    value={formValues?.paymentType}
                    onChange={(e) => {
                      handleChange(e, "paymentType");
                    }}
                  />
                  {!!errors.paymentType && (
                    <FormHelperText>{errors.paymentType}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Trasaction Date <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.paymentDate}
                >
                  <OutlinedInput
                    fullWidth
                    type="date"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.paymentDate}
                    onChange={(e) =>
                      handleChange(e.target.value, "paymentDate")
                    }
                  />
                  {!!errors.paymentDate && (
                    <FormHelperText>{errors.paymentDate}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Button
              color="primary"
              sx={{ padding: "8px", fontWeight: "bold" }}
              onClick={() => setOpenView(true)}
            >
              {" "}
              <AddIcon fontSize="small" /> Add Items
            </Button>
            <Dialog open={openView} onClose={() => setOpenView(false)}>
              <DialogContent
                sx={{
                  padding: "20px",
                  position: "relative",
                  textAlign: "center",
                  width: "400px",
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                  onClick={() => setOpenView(false)}
                >
                  <CloseIcon />
                </IconButton>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>Add Items</Typography>
                  <Grid container spacing={2} pt={2} pb={1}>
                    <Grid item style={{ width: "100%" }}>
                      <InputLabel sx={inputLableStyle}>Description</InputLabel>
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
                  <Grid container spacing={2} pt={2} pb={1}>
                    <Grid item style={{ width: "100%" }}>
                      <InputLabel sx={inputLableStyle}>Price</InputLabel>
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
                      size="small"
                      variant="contained"
                      sx={{ marginTop: "10px", width: "100px" }}
                    >
                      Add Item
                    </Button>
                  </Stack>
                </Box>
              </DialogContent>
            </Dialog>
            <Grid container spacing={2} pt={2} pb={1}>
              <Grid item style={{ width: "100%" }}>
                <InputLabel sx={inputLableStyle}>
                  Notes<span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" fullWidth size="small">
                  <OutlinedInput
                    fullWidth
                    sx={{ padding: "10px" }}
                    id="outlined-adornment-password"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.orgName}
                    onChange={(e) => handleChange(e, "orgName")}
                  />
                </FormControl>
              </Grid>
            </Grid>
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
                size="small"
                variant="contained"
                startIcon={<SaveAltIcon />}
                sx={{ marginTop: "10px", width: "100px" }}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Stack
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box
            sx={{
              padding: "20px",
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
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      2024-56
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
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      02021
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
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      Raju
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
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      22/06/24
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
                    Cryovault
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box direction={"column"} sx={{ flex: 1, marginLeft: "6px" }}>
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
                    suraj
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
                    Premium Plan{" "}
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
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        2456{" "}
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
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        Paid{" "}
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
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        Card{" "}
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
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        256124889745{" "}
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
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        25/05/2024{" "}
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
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
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
                    <Typography sx={{ fontSize: "14px", marginRight: "30px" }}>
                      22/05/24 - 11:00Am
                    </Typography>
                    <Typography sx={{ marginRight: "30px" }}>Paid</Typography>
                    <Typography sx={{}}>2456</Typography>
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
                      1234
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
          <Box
            sx={{
              padding: "20px",
            }}
          >
            <Card variant="outlined">
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

                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Stack sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      Send Via
                    </Typography>
                    <Stack
                      sx={{
                        marginTop: "10px",
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                      }}
                    >
                      <img src={google} alt="google" height="50" width="50" />
                      <img
                        src={facebook}
                        alt="facebook"
                        height="50"
                        width="50"
                      />
                      <img
                        src={whatsapp}
                        alt="whatsapp"
                        height="50"
                        width="50"
                      />
                      <img src={apple} alt="apple" height="50" width="50" />
                    </Stack>
                  </Stack>
                  <Grid item>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ marginTop: "50px" }}
                      startIcon={<SaveAltIcon />}
                    >
                      Download
                    </Button>
                  </Grid>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
});

export default InvoiceForm;
