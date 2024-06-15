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
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";

const inputLableStyle = {
  color: "black",
  fontSize: "14px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
};

const InvoiceView = () => {
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
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
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
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
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
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
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
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
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
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
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
                        sx={{ fontSize: "14px", marginRight: "30px" }}
                      >
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
          </CardContent>
        </Card>
        <Card>
          <CardContent sx={{ width: "550px" }}>
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
              <Grid item container spacing={1} xs>
                {[...Array(4)].map((_, index) => (
                  <Grid item key={index}>
                    <TextField variant="outlined" style={{ width: "50px" }} />
                  </Grid>
                ))}
              </Grid>
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
      </Stack>
    </Container>
  );
};

export default InvoiceView;
