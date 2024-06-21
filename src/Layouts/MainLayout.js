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
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
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
  editHospitals,
} from "../Admin/Slices/hospitalSlice";
import {
  getDoctorList,
  getDoctorDetail,
  addDoctors,
} from "../Admin/Slices/doctorSlice";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState("Hospitals");
  const [pathname, setPathname] = useState(location.pathname);
  const [formOpen, setFormOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const loginUserDetails = localStorage.getItem("loginUser");
  const data = loginUserDetails ? JSON.parse(loginUserDetails) : null;

  const addHospitalData = useSelector(
    (state) => state.hospitals.hospitalPostData
  );

  const editHospitalData = useSelector(
    (state) => state.hospitals.hospitalEditPostData
  );

  const addDoctorData = useSelector((state) => state.doctor.doctorPostData);

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

  const handleEditHospitalFormSubmit = () => {
    dispatch(editHospitals(editHospitalData));
  };

  const handleAddDoctorFormSubmit = () => {
    dispatch(addDoctors(addDoctorData));
  };

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  // console.log('pathname', pathname)

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data, navigate]);

  if (!data) {
    return null;
  }

  const { firstName, lastName } = data;

  return (
    <Container
      maxWidth="xxl"
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
            // onClose={handleClose}
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
        maxWidth="xxl"
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
        disableGutters
      >
        <Box sx={{ height: "100%", width: "20%" }}>
          <Stack spacing={0}>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: 0,
                background: "#cce0ff",
                padding: 1,
                color: "black",
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/dashboard")}
            >
              <Box>
                <KeyboardBackspaceIcon sx={{ marginLeft: "35px" }} />
              </Box>
              <Box sx={{ marginLeft: "12px" }}>Back to Menu</Box>
            </Typography>
            <Box sx={{ background: "#327CF3", color: "white" }}>
              <Typography
                sx={{
                  marginLeft: "71px",
                  padding: "7px",
                }}
              >
                HOSPITAL MANAGEMENT
              </Typography>
            </Box>
            {/* <Button
              variant="contained"
              fullWidth
              size="small"
              sx={{
                borderRadius: 0,
                padding: 1,
                fontSize: "18px",
              }}
            >
              HOSPITAL MANAGEMENT
            </Button> */}
          </Stack>
          <MenuList
            variant="selectedMenu"
            sx={{ marginLeft: "60px", fontWeight: 500 }}
          >
            <MenuItem
              onClick={() => {
                handleMenuSideBar("Dashboard");
                navigate("/dashboard");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Dashboard" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Dashboard"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Dashboard"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Dashboard" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
              }}
            >
              Dashboard
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuSideBar("Hospitals");
                navigate("/mainPage/hospitals");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Hospitals" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Hospitals"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Hospitals"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Hospitals" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
              }}
            >
              Hospitals
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuSideBar("Doctors");
                navigate("/mainPage/doctors");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Doctors" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Doctors"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Doctors"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Doctors" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
              }}
            >
              Doctors
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuSideBar("Settings");
                navigate("/mainPage/settings");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Settings" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Settings"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Settings"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Settings" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
              }}
            >
              Settings
            </MenuItem>
          </MenuList>
        </Box>
        <Box
          sx={{
            background: "#F4F5F9",
            padding: "15px",
            width: "80%",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              marginBottom: "30px",
            }}
          >
            {pathname && pathname === "/mainPage/hospitals" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/dashboard");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    padding: 1,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/mainPage/hospitalFrom");
                  }}
                >
                  <AddIcon fontSize="small" /> Add Hospitals
                </Button>
              </Box>
            )}
            {pathname && pathname === "/mainPage/hospitalFrom" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    // variant="contained"
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mainPage/hospitals");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={2} justifyContent={"end"}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<SaveAltIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddHospitalFormSubmit();
                      setFormOpen(null);
                      setActiveItem("Hospitals");
                      dispatch(getHospitalsList(searchQuery));
                      navigate("/mainPage/hospitals");
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<CloseIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      setFormOpen(null);
                      dispatch(getHospitalsList(searchQuery));
                      setActiveItem("Hospitals");
                      navigate("/mainPage/hospitals");
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            )}
            {pathname && pathname === "/mainPage/hospitals/view" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    // variant="contained"
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mainPage/hospitals");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={2} justifyContent={"end"}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      // setFormOpen("Hospitals");
                      dispatch(getHospitalDetails(searchQuery));
                      navigate("/mainPage/hospitals/Edit");
                    }}
                  >
                    <EditIcon fontSize="small" /> Edit
                  </Button>
                  <Button variant="outlined" size="small" disabled>
                    <DeleteIcon fontSize="small" /> Delete
                  </Button>
                </Stack>
              </Stack>
            )}
            {pathname && pathname === "/mainPage/hospitals/Edit" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    // variant="contained"
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mainPage/hospitals");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={2} justifyContent={"end"}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<SaveAltIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditHospitalFormSubmit();
                      setFormOpen(null);
                      setActiveItem("Hospitals");
                      dispatch(getHospitalsList(searchQuery));
                      navigate("/mainPage/hospitals");
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<CloseIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      setFormOpen(null);
                      dispatch(getHospitalsList(searchQuery));
                      setActiveItem("Hospitals");
                      navigate("/mainPage/hospitals");
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            )}
            {pathname && pathname === "/mainPage/doctors" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/dashboard");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    padding: 1,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("doctorForm");
                    setFormOpen("Doctors");
                  }}
                >
                  <AddIcon fontSize="small" /> Add Doctors
                </Button>
              </Box>
            )}
            {pathname && pathname === "/mainPage/doctorForm" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    // variant="contained"
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mainPage/doctors");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={2} justifyContent={"end"}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<SaveAltIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddDoctorFormSubmit();
                      setFormOpen(null);
                      // setActiveItem("Hospitals");
                      dispatch(getDoctorList(searchQuery));
                      navigate("/mainPage/doctors");
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<CloseIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      setFormOpen(null);
                      // setActiveItem("Hospitals");
                      dispatch(getDoctorList(searchQuery));
                      navigate("/mainPage/doctors");
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            )}
            {pathname && pathname === "/mainPage/doctors/view" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    // variant="contained"
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mainPage/doctors");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={2} justifyContent={"end"}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormOpen("Hospitals");
                      dispatch(getDoctorDetail(searchQuery));
                      navigate("/mainPage/doctorForm");
                    }}
                  >
                    <EditIcon fontSize="small" /> Edit
                  </Button>
                  <Button variant="outlined" size="small" disabled>
                    <DeleteIcon fontSize="small" /> Delete
                  </Button>
                </Stack>
              </Stack>
            )}
            {pathname && pathname === "/mainPage/settings" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h2">Hospital Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    padding: 1,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("doctorForm");
                    setFormOpen("Doctors");
                  }}
                >
                  <AddIcon fontSize="small" /> Add Settings
                </Button>
              </Stack>
            )}
          </Stack>
          {/* <Box
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
              <Stack></Stack>
            )}
            {formOpen == null ? (
              <Stack>
                {pathname && pathname === "/mainPage/hospitals/view" ? (
                  <Stack
                    gap={2}
                    marginRight={"60px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"start"}
                    justifyContent={"start"}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormOpen("Hospitals");
                        dispatch(getHospitalDetails(searchQuery));
                        navigate("hospitalFrom");
                      }}
                    >
                      <EditIcon fontSize="small" /> Edit
                    </Button>
                    <Button variant="outlined" size="small" disabled>
                      <DeleteIcon fontSize="small" /> Delete
                    </Button>
                  </Stack>
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      if (activeItem === "Hospitals") {
                        setFormOpen("Hospitals");
                        navigate("hospitalFrom");
                      } else if (activeItem === "Doctors") {
                        navigate("doctorForm");
                        setFormOpen("Doctors");
                      }
                    }}
                  >
                    Add {activeItem}
                  </Button>
                )}
              </Stack>
            ) : (
              <Stack direction={"row"} spacing={2}>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<SaveAltIcon />}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddHospitalFormSubmit();
                    setFormOpen(null);
                    setActiveItem("Hospitals");
                    dispatch(getHospitalsList(searchQuery));
                    navigate("/mainPage/hospitals");
                  }}
                >
                  Save
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<CloseIcon />}
                  onClick={(e) => {
                    e.preventDefault();
                    setFormOpen(null);
                    dispatch(getHospitalsList(searchQuery));
                    setActiveItem("Hospitals");
                    navigate("/mainPage/hospitals");
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            )}
          </Box> */}
          {/* <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography variant="h5">Hospital Management</Typography>{" "}
            <Typography variant="h4">/</Typography>
            <Typography variant="subtitle1">{activeItem}</Typography>
          </Stack> */}

          {/* {doctorFormOpen ? <DoctorAddForm /> : <DoctorsPage />} */}
          <Outlet />
          {/* <DoctorView/> */}
        </Box>
      </Container>
    </Container>
  );
};
