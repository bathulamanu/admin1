import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  MenuList,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTheme } from "@emotion/react";
import logo from "../../assets/logo.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  capitalizeFirstLetter,
  getStatusIdList,
  stringAvatar,
} from "../../service/globalFunctions";
import {
  getCityList,
  getCountryList,
  getEmploymentType,
  getExperienceList,
  getGenderList,
  getQualification,
  getSpecialization,
  getStateList,
  getStatus,
} from "../../redux/Slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addHospitals,
  getHospitalDetails,
  getHospitalsList,
  editHospitals,
  deleteHospitals,
} from "../../redux/Slices/hospitalSlice";
import {
  getDoctorList,
  getDoctorDetail,
  addDoctors,
  editDoctors,
  deleteDoctors,
} from "../../redux/Slices/doctorSlice";
import SingleSelect from "../../components/GlobalComponents/SingleSelect";
import api from "../../utils/api/httpRequest";
import HospitalAddForm from "../../pages/hospitalManagement/Hospitals/HospitalAddForm";
import DoctorAddForm from "../../pages/hospitalManagement/Doctors/DoctorAddForm";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const inputLableStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const redStarStyle = {
  color: "red",
  marginLeft: "4px",
};

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

  const editHospitalData = useSelector(
    (state) => state.hospitals.hospitalEditPostData
  );
  const hospitalDetails = useSelector(
    (state) => state.hospitals.hospitalDetail
  );

  const editDoctorData = useSelector(
    (state) => state.doctor.doctorEditPostData
  );
  const doctorDetail = useSelector((state) => state.doctor.doctorDetail);

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
  const hospitalAddFormRef = useRef();
  const hospitalEditFormRef = useRef();
  const doctorAddFormRef = useRef();
  const doctorEditFormRef = useRef();
  const handleAddHospitalFormSubmit = () => {
    if (hospitalAddFormRef.current) {
      hospitalAddFormRef.current.hospitalAddFormData();
    }
  };

  const handleEditHospitalFormSubmit = () => {
    if (!editHospitalData.hospitalName.trim()) {
      toast.warning("Hospital Name is required");
      return;
    } else if (
      !editHospitalData.specialist ||
      editHospitalData.specialist.length === 0
    ) {
      toast.warning("At least one Specialist is required");
      return;
    } else if (!editHospitalData.LicenseNumber.trim()) {
      toast.warning("License Number is required");
      return;
    } else if (!editHospitalData.validity.from) {
      toast.warning("Validity start date is required");
      return;
    } else if (!editHospitalData.validity.to) {
      toast.warning("Validity end date is required");
      return;
    } else if (!editHospitalData.email.trim()) {
      toast.warning("Email is required");
      return;
      // } else if (!addHospitalData.HospitalAddress.addressLine1.trim()) {
      //   toast.warning("Address Line 1 is required");
      //   return;
      // } else if (!editHospitalData.HospitalAddress.addressLine2.trim()) {
      //   toast.warning("Address Line 2 is required");
      //   return;
      // } else if (
      //   !editHospitalData.HospitalAddress.country ||
      //   editHospitalData.HospitalAddress.country === 0
      // ) {
      //   toast.warning("Country is required");
      //   return;
      // } else if (
      //   !editHospitalData.HospitalAddress.state ||
      //   editHospitalData.HospitalAddress.state === 0
      // ) {
      //   toast.warning("State is required");
      //   return;
      // } else if (
      //   !editHospitalData.HospitalAddress.city ||
      //   editHospitalData.HospitalAddress.city === 0
      // ) {
      //   toast.warning("City is required");
      //   return;
      // } else if (!editHospitalData.HospitalAddress.nearLandMark.trim()) {
      //   toast.warning("Near LandMark is required");
      //   return;
      // } else if (!editHospitalData.HospitalAddress.pincode.trim()) {
      //   toast.warning("Pincode is required");
      //   return;
      // } else if (!editHospitalData.contact.phoneNumber.trim()) {
      //   toast.warning("Phone Number is required");
      //   return;
    }
    navigate("/mainPage/hospitals");
    console.log("cehck edit ", editHospitalData);
    const HospitalID = editHospitalData.HospitalID;
    dispatch(editHospitals({ HospitalID, editHospitalData }));
  };

  const handleDeleteHospitalFormSubmit = () => {
    const HospitalID = hospitalDetails?.HospitalID;
    console.log("hospients id", HospitalID);
    dispatch(deleteHospitals({ HospitalID }));
    navigate("/mainPage/hospitals");
  };

  const handleAddDoctorFormSubmit = () => {
    if (doctorAddFormRef.current) {
      doctorAddFormRef.current.getDoctorAddFormData();
    }
    // if (!addDoctorData.doctorFirstName) {
    //   toast.warning("Doctor's Name is required");
    //   return;
    // } else if (!addDoctorData.doctorID.trim()) {
    //   toast.warning("Doctor's ID is required");
    //   return;
    // } else if (
    //   !addDoctorData.qualification ||
    //   addDoctorData.qualification.length === 0
    // ) {
    //   toast.warning("At least one qualification is required");
    //   return;
    // } else if (
    //   !addDoctorData.specialist ||
    //   addDoctorData.specialist.length === 0
    // ) {
    //   toast.warning("At least one specialist is required");
    //   return;
    // } else if (
    //   !addDoctorData.experience ||
    //   addDoctorData.experience.length === 0
    // ) {
    //   toast.warning("At least one experience is required");
    //   return;
    // }
    // navigate("/mainPage/doctors");
    // dispatch(addDoctors(addDoctorData));
  };

  const handleEditDoctorFormSubmit = () => {
    navigate("/mainPage/doctors");

    console.log("cehck edit ", editDoctorData);
    const DoctorID = editDoctorData.doctorDetailsID;
    dispatch(editDoctors({ DoctorID, editDoctorData }));
  };

  const handleDeleteDoctorFormSubmit = () => {
    const DoctorID = doctorDetail.doctorDetailsID;
    console.log("Doctor id", DoctorID);
    dispatch(deleteDoctors({ DoctorID }));
    navigate("/mainPage/doctors");
  };
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  // console.log('pathname', pathname)
  const { activeTitle, activeButton } = useSelector(
    (state) => state.settinglayout
  );

  const getStatusList = useSelector((state) => state.global.statusList);
  useEffect(() => {
    dispatch(getStatus(null));
  }, [dispatch]);
  const statuses = getStatusIdList(getStatusList);
  // console.log("getStatusList", statuses);

  const [openSpecialization, setOpenSpecialization] = useState(false);

  const [formValues, setFormValues] = useState({
    title: activeTitle,
    value: "",
    IsActive: "",
  });

  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      title: activeTitle,
    }));
  }, [activeTitle]);

  const handleOnChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSave = async () => {
    console.log("formvalues", formValues);
    try {
      const response = await api.post("/addMasterConfiguration", formValues);
      // console.log("Posted successfully", response.data);
      toast.success(response.data.message);
      dispatch(getSpecialization(searchQuery));
      dispatch(getQualification(searchQuery));
      dispatch(getExperienceList(null));
      dispatch(getGenderList(null));
      dispatch(getEmploymentType(null));
      setOpenSpecialization(!openSpecialization);
      setFormValues({
        title: activeItem,
        value: "",
        IsActive: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          padding: "25px 12px",
          zIndex: 100,
          position: "sticky",
          top: 0,
        }}
      >
        <img
          src={logo}
          height={isMobile ? "24px" : "40px"}
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
              background: isMobile ? "#3333ff" : "#3333ff",
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
                <KeyboardBackspaceIcon sx={{ marginLeft: "15px" }} />
              </Box>
              <Box sx={{ marginLeft: "12px" }}>Back to Menu</Box>
            </Typography>
            <Box sx={{ background: "#327CF3", color: "white" }}>
              <Typography
                sx={{
                  marginLeft: "52px",
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
            sx={{ marginLeft: "42px", fontWeight: 500 }}
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
                  // flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
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
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <HospitalAddForm ref={hospitalAddFormRef} />
                </Box>
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
                  <Button
                    variant="contained"
                    sx={{
                      background: "#f0f0f0",
                      color: "black",
                      "&:hover": {
                        background: "#f0f0f0",
                      },
                    }}
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteHospitalFormSubmit();
                      // setFormOpen(null);
                      // setActiveItem("Hospitals");
                      dispatch(getHospitalsList(searchQuery));
                      // navigate("/mainPage/hospitals");
                    }}
                  >
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
                      // setFormOpen(null);
                      // setActiveItem("Hospitals");
                      // dispatch(getHospitalsList(searchQuery));
                      // navigate("/mainPage/hospitals");
                    }}
                  >
                    Update
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
                  // flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
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
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <DoctorAddForm ref={doctorAddFormRef} />
                </Box>
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
                      // setFormOpen("Hospitals");
                      dispatch(getDoctorDetail(searchQuery));
                      navigate("/mainPage/doctors/edit");
                    }}
                  >
                    <EditIcon fontSize="small" /> Edit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#f0f0f0",
                      color: "black",
                      "&:hover": {
                        background: "#f0f0f0",
                      },
                    }}
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteDoctorFormSubmit();
                      // setFormOpen(null);
                      // setActiveItem("Hospitals");
                      dispatch(getDoctorList(searchQuery));
                      // navigate("/mainPage/doctors");
                    }}
                  >
                    <DeleteIcon fontSize="small" /> Delete
                  </Button>
                </Stack>
              </Stack>
            )}
            {pathname && pathname === "/mainPage/doctors/edit" && (
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
                      handleEditDoctorFormSubmit();
                      // setFormOpen(null);
                      // setActiveItem("Hospitals");
                      dispatch(getDoctorList(searchQuery));
                      // navigate("/mainPage/doctors");
                    }}
                  >
                    Update
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
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   // navigate("doctorForm");
                  //   // setFormOpen("Doctors");
                  // }}
                  onClick={() => setOpenSpecialization(true)}
                >
                  <AddIcon fontSize="small" /> Add {activeTitle}
                </Button>
                <Dialog open={openSpecialization}>
                  <DialogContent sx={{ width: "500px" }}>
                    <CloseIcon
                      sx={{
                        marginLeft: "400px",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpenSpecialization(!openSpecialization)}
                    />
                    <Box sx={{}}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Add {activeTitle}
                      </Typography>
                      <Box>
                        <Grid container spacing={2} pt={3} pb={2}>
                          <Grid item style={{ width: "100%" }}>
                            <InputLabel sx={inputLableStyle}>
                              Title <span style={redStarStyle}>*</span>
                            </InputLabel>
                            <FormControl
                              variant="outlined"
                              fullWidth
                              size="small"
                            >
                              <OutlinedInput
                                fullWidth
                                id="outlined-adornment-password"
                                placeholder="Input Text"
                                size="small"
                                value={formValues?.value}
                                onChange={(e) =>
                                  handleOnChange(e.target.value, "value")
                                }
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2} pt={3} pb={2}>
                          <Grid item style={{ width: "100%" }}>
                            <InputLabel sx={inputLableStyle}>
                              Status <span style={redStarStyle}>*</span>
                            </InputLabel>
                            <SingleSelect
                              placeholder={"Select"}
                              width={"100%"}
                              value={formValues?.IsActive}
                              data={statuses}
                              onChange={(e) => handleOnChange(e, "IsActive")}
                            />
                          </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", marginLeft: "115px" }}>
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: "200px" }}
                            onClick={handleSave}
                          >
                            Save
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </DialogContent>
                </Dialog>
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
