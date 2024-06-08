import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dashboard from "../Admin/Dashboard/Dashboard";
import { useTheme } from "@emotion/react";
import dashboardBackGround from "../assets/dasboard_background.png";
import logo from "../assets/logo.png";
import DoctorsPage from "../Admin/Doctors/DoctorsPage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoctorAddForm from "../Admin/Doctors/DoctorAddForm";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter, stringAvatar } from "../globalFunctions";
import {
  getCityList,
  getCountryList,
  getEmploymentType,
  getExperienceList,
  getGenderList,
  getSpecialization,
  getStateList,
} from "../Admin/Slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import DoctorView from "../Admin/Doctors/DoctorView";
import {
  addHospitals,
  getHospitalDetails,
  getHospitalsList,
} from "../Admin/Slices/hospitalSlice";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CustomerLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const selectedTab = useSelector((state) => state.tab.selectedTab);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState("Customers");
  const [pathname, setPathname] = useState(location.pathname);
  const [formOpen, setFormOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const loginUserDetails = localStorage.getItem("loginUser");
  const data = JSON.parse(loginUserDetails);
  const { firstName, lastName } = data;

  const addHospitalData = useSelector(
    (state) => state.hospitals.hospitalPostData
  );

  const hospitalDetail = useSelector((state) => state.hospitals.hospitalDetail);
  // console.log('hospitalDetail', hospitalDetail)

  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getCountryList());
    dispatch(getGenderList(searchQuery));
    dispatch(getSpecialization(searchQuery));
    dispatch(getExperienceList(searchQuery));
    dispatch(getEmploymentType(searchQuery));
    dispatch(getStateList(352));
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    navigate("/");
    localStorage.clear();
    setAnchorEl(null);
  };

  const handleMenuSideBar = (value) => {
    setActiveItem(value);
    setFormOpen(null);
  };

  const handleAddHospitalFormSubmit = () => {
    dispatch(addHospitals(addHospitalData));
  };

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  // console.log('pathname', pathname)

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        width={"100%"}
        height={"40px"}
        sx={{
          background: "#fff",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 12px",
          zIndex: 100,
          position: "sticky",
          top: 0,
        }}
      >
        <img
          src={logo}
          height={isMobile ? "24px" : "30px"}
          width={"auto"}
          alt="Logo"
        />
        <Stack direction="row" spacing={1} alignItems={"center"}>
          <NotificationsIcon
            sx={{
              height: isMobile ? "18px" : "16px",
              width: isMobile ? "18px" : "16px",
            }}
          />
          <ChatBubbleIcon
            sx={{
              height: isMobile ? "18px" : "16px",
              width: isMobile ? "18px" : "16px",
            }}
          />
          <Avatar
            {...stringAvatar(`${firstName} ${lastName}`)}
            sx={{
              width: isMobile ? 18 : 24,
              height: isMobile ? 18 : 24,
              fontSize: isMobile ? "10px" : "12px",
            }}
          />
          <Typography variant="subtitle1" fontSize={isMobile ? "10px" : "12px"}>
            {capitalizeFirstLetter(firstName, lastName)}
          </Typography>
          <KeyboardArrowDownIcon
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            fontSize={isMobile ? "small" : "medium"}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Stack>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
        disableGutters
      >
        <Box sx={{ height: "100%", width: "15%" }}>
          <Stack spacing={0}>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 0, background: "black" }}
              startIcon={<ArrowBackIosIcon />}
              onClick={() => navigate("/dashboard")}
            >
              Back to menu
            </Button>
            <Button
              variant="contained"
              fullWidth
              size="small"
              sx={{ borderRadius: 0 }}
            >
              Customer Management
            </Button>
          </Stack>
          <MenuList variant="selectedMenu">
            <MenuItem
              onClick={() => {
                handleMenuSideBar("Dashboard");
                navigate("/dashboard");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Dashboard" ? "#f0f0f0" : "inherit",
              }}
            >
              Dashboard
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuSideBar("Customers");
                navigate("/customerPage/customers");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Customers" ? "#f0f0f0" : "inherit",
              }}
            >
              Customers
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuSideBar("Baby Details ");
                navigate("/customerPage/baby_details");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Baby Details" ? "#f0f0f0" : "inherit",
              }}
            >
              Baby Details
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuSideBar("Finance");
                navigate("/customerPage/finance");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Finance" ? "#f0f0f0" : "inherit",
              }}
            >
              Finance
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuSideBar("Invoices");
                navigate("/customerPage/invoices");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Invoices" ? "#f0f0f0" : "inherit",
              }}
            >
              Invoices
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuSideBar("Plans");
                navigate("/customerPage/plans");
              }}
              sx={{
                backgroundColor: activeItem === "Plans" ? "#f0f0f0" : "inherit",
              }}
            >
              Plans
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuSideBar("Settings");
                navigate("/customerPage/settings");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Settings" ? "#f0f0f0" : "inherit",
              }}
            >
              Settings
            </MenuItem>
          </MenuList>
        </Box>
        <Box
          sx={{
            background: "#F4F5F9",
            padding: "8px",
            width: "85%",
          }}
        >
          <Box
            height={"60px"}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {formOpen != null ? (
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <ArrowBackIosIcon sx={{ height: 16, width: 16 }} />
                <Typography variant="subtitle2">Back</Typography>
              </Stack>
            ) : (
              <Stack>
                <Stack>
                  {pathname &&
                    pathname === "/customerPage/customers/allDetails" && (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        {selectedTab === 0 ? (
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ marginLeft: "1200px" }}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/customerPage/customers/customerEdit");
                            }}
                          >
                            <EditIcon fontSize="small" /> Edit
                          </Button>
                        ) : selectedTab === 1 ? (
                          <Stack
                            direction={"row"}
                            spacing={2}
                            justifyContent={"end"}
                            marginBottom={"10px"}
                            sx={{ marginLeft: "1100px" }}
                          >
                            <Button
                              size="small"
                              variant="contained"
                              startIcon={<SaveAltIcon />}
                              //  onClick={(e) => handleSave(e)}  // Define handleSave function
                            >
                              Save
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<CloseIcon />}
                            >
                              Cancel
                            </Button>
                          </Stack>
                        ) : selectedTab === 2 ? (
                          <Stack
                            direction={"row"}
                            spacing={2}
                            justifyContent={"end"}
                            marginBottom={"10px"}
                            sx={{ marginLeft: "1100px" }}
                          >
                            <Button
                              size="small"
                              variant="contained"
                              startIcon={<SaveAltIcon />}
                              //  onClick={(e) => handleSave(e)}  // Define handleSave function
                            >
                              Save
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<CloseIcon />}
                            >
                              Cancel
                            </Button>
                          </Stack>
                        ) : null}
                      </Box>
                    )}
                </Stack>
                <Stack>
                  {pathname && pathname === "/customerPage/customerForm" && (
                    <Stack
                      direction={"row"}
                      spacing={2}
                      justifyContent={"end"}
                      marginBottom={"10px"}
                      sx={{ marginLeft: "1100px" }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<SaveAltIcon />}
                        //  onClick={(e) => handleSave(e)}  // Define handleSave function
                      >
                        Save
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<CloseIcon />}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  )}
                </Stack>
              </Stack>
            )}

            {formOpen == null ? (
              <Stack>
                {pathname && pathname === "/customerPage/customers" && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/customerForm");
                      }}
                    >
                      <AddIcon fontSize="small" /> Add Customer
                    </Button>
                  </Box>
                )}
              </Stack>
            ) : (
              <Stack direction={"row"} spacing={2}></Stack>
            )}
          </Box>

          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography variant="h5">Customer Management</Typography>{" "}
            <Typography variant="h4">/</Typography>
            <Typography variant="subtitle1">{activeItem}</Typography>
          </Stack>
          <Outlet />
        </Box>
      </Container>
    </Container>
  );
};
