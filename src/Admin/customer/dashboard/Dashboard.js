import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  TextField,
  IconButton,
  Stack,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import StorageIcon from "@mui/icons-material/Storage";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomerDashboard = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexGrow: 1, border: "1px solid #CFD4DB" }}>
        <AppBar position="static" sx={{ background: "#F3F8FF" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControl
                variant="outlined"
                size="small"
                sx={{
                  width: 300,
                  background: "#fff",
                  border: "1px solid #CFD4DB",
                  borderRadius: "10px",
                }}
              >
                <OutlinedInput
                  type={"text"}
                  placeholder="Search for customer, plans..."
                  size="small"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <IconButton>
              <AccountCircleIcon sx={{ fontSize: 30, color: "#D9D9D9" }} />
            </IconButton>
            <Stack sx={{ marginTop: 1 }}>
              <Typography variant="body1" sx={{ color: "black" }}>
                Name here
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "10px", color: "black" }}
              >
                Admin
              </Typography>
            </Stack>
            <KeyboardArrowDownIcon sx={{ color: "black" }} />
          </Toolbar>
        </AppBar>
        <Stack
          sx={{
            background: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              padding: "20px",
            }}
          >
            <Card variant="outlined" sx={{ width: "23%" }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "50px",
                  }}
                >
                  <PeopleIcon
                    sx={{
                      fontSize: 40,
                      marginRight: 2,
                      color: "#327CF3",
                      border: "1px solid, #327CF3",
                      borderRadius: "100%",
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "24px", fontWeight: 500 }}
                  >
                    Total Users
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: "23%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StorageIcon
                    sx={{
                      fontSize: 40,
                      marginRight: 2,
                      color: "#327CF3",
                      border: "1px solid, #327CF3",
                      borderRadius: "100%",
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "24px", fontWeight: 500 }}
                  >
                    Total Storages
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: "23%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PeopleIcon
                    sx={{
                      fontSize: 40,
                      marginRight: 2,
                      color: "#327CF3",
                      border: "1px solid, #327CF3",
                      borderRadius: "100%",
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "24px", fontWeight: 500 }}
                  >
                    Total Delivery's
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: "23%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountBalanceWalletIcon
                    sx={{
                      fontSize: 40,
                      marginRight: 2,
                      color: "#327CF3",
                      border: "1px solid, #327CF3",
                      borderRadius: "100%",
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "24px", fontWeight: 500 }}
                  >
                    Total Revenue
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ padding: "20px", marginBottom: "60px" }}>
            <Card variant="outlined" sx={{ width: "550px" }}>
              <CardContent sx={{ padding: 0 }}>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "6px",
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PeopleIcon
                      sx={{
                        fontSize: 40,
                        marginRight: 2,
                        color: "#327CF3",
                        border: "1px solid #327CF3",
                        borderRadius: "100%",
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "24px", fontWeight: 500 }}
                    >
                      Total Users
                    </Typography>
                  </Box>
                  <TextField
                    id="date"
                    type="date"
                    defaultValue="24 - May"
                    sx={{ width: 150 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
                <Divider sx={{ margin: 0 }} />
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Tabs
                    value={tabIndex}
                    onChange={handleTabChange}
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
                      sx={{
                        fontWeight: "bold",
                        flex: 1,
                        borderRight: 1,
                        borderColor: "divider",
                      }}
                      label="Users"
                    />
                    <Tab
                      sx={{
                        fontWeight: "bold",
                        flex: 1,
                        borderRight: 1,
                        borderColor: "divider",
                      }}
                      label="Delivery's"
                    />
                    <Tab
                      sx={{
                        fontWeight: "bold",
                        flex: 1,
                        borderRight: 1,
                        borderColor: "divider",
                      }}
                      label="Payments"
                    />
                  </Tabs>
                  <Divider sx={{ mb: 3, width: "100%" }} />
                  <Box sx={{ height: "200px" }}></Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default CustomerDashboard;
