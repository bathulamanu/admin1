import React, { useState } from "react";
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
} from "@mui/material";
import SingleSelect from "../../../GlobalComponents/SingleSelect";
import AddIcon from "@mui/icons-material/Add";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

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

const InvoiceForm = () => {
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
                <InputLabel sx={inputLableStyle}>
                  Customer Name<span style={redStarStyle}>*</span>
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
                <InputLabel sx={inputLableStyle}>
                  Invoice ID<span style={redStarStyle}>*</span>
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
                <InputLabel sx={inputLableStyle}>
                  Date of Issue<span style={redStarStyle}>*</span>
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
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  value={formValues?.idProof}
                  onChange={(e) => handleChange(e, "idProof")}
                />
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
                <FormControl variant="outlined" size="small" fullWidth>
                  <OutlinedInput
                    fullWidth
                    type="number"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.HospitalAddress?.pincode}
                    onChange={(e) => handleChange(e.target.value, "pincode")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Payment Status <span style={redStarStyle}>*</span>
                </InputLabel>
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  // data={stateList}
                  value={formValues?.HospitalAddress?.state}
                  onChange={(e) => {
                    // dispatch(getCityList(e))
                    handleChange(e, "state");
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Trasaction ID <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" size="small" fullWidth>
                  <OutlinedInput
                    fullWidth
                    type="number"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.HospitalAddress?.pincode}
                    onChange={(e) => handleChange(e.target.value, "pincode")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Payment Mode <span style={redStarStyle}>*</span>
                </InputLabel>
                <SingleSelect
                  Placeholder={"Select"}
                  width={"100%"}
                  // data={stateList}
                  value={formValues?.HospitalAddress?.state}
                  onChange={(e) => {
                    // dispatch(getCityList(e))
                    handleChange(e, "state");
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel sx={inputLableStyle}>
                  Trasaction Date <span style={redStarStyle}>*</span>
                </InputLabel>
                <FormControl variant="outlined" size="small" fullWidth>
                  <OutlinedInput
                    fullWidth
                    type="number"
                    id="pincode"
                    placeholder="Input Text"
                    size="small"
                    value={formValues?.HospitalAddress?.pincode}
                    onChange={(e) => handleChange(e.target.value, "pincode")}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button color="primary" sx={{ padding: "8px", fontWeight: "bold" }}>
              {" "}
              <AddIcon fontSize="small" /> Add Items
            </Button>
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
                sx={{ marginLeft: "550px", marginTop: "10px", width: "100px" }}
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
                    marginLeft: "350px",
                  }}
                >
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    Total
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      marginLeft: "85px",
                    }}
                  >
                    2456
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
                <Grid container spacing={2} pt={1} pb={1} alignItems="center">
                  <Grid item>
                    <InputLabel sx={inputLableStyle}>Send Via</InputLabel>
                  </Grid>
                  <Grid item container spacing={1} xs>
                    {[...Array(4)].map((_, index) => (
                      <Grid item key={index}>
                        <TextField
                          variant="outlined"
                          style={{ width: "50px" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<SaveAltIcon />}
                    >
                      Download
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default InvoiceForm;
