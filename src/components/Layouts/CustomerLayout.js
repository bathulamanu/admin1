import React, { useEffect, useState, useRef } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  MenuList,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@emotion/react";
import logo from "../../assets/logo.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

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
import { useDispatch, useSelector } from "react-redux";

import {
  getSubscriptionPlanDetails,
  deleteSubscriptionPlan,
  getSubscriptionPlan,
} from "../../redux/Slices/planSlice";
import PlansForm from "../../pages/customer/plans/PlansForm";
import PlansEdit from "../../pages/customer/plans/plansEdit";
import CustomerForm from "../../pages/customer/CustomerForm";
import InvoiceForm from "../../pages/customer/invoice/InvoiceForm";
import { saveBabyDetails } from "../../redux/Slices/customerSlice";
import {
  deleteBabyDetails,
  getAllBabyList,
  getBabyDetails,
} from "../../redux/Slices/babySlice";
import {
  deleteInvoice,
  getAllInvoiceList,
  getInvoiceDetails,
} from "../../redux/Slices/invoiceSlice";
import {
  GetButtonText,
  getPaymentModeList,
  getPaymentStatusList,
  getStatus,
} from "../../redux/Slices/globalSlice";
import SingleSelect from "../GlobalComponents/SingleSelect";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import api from "../../utils/api/httpRequest";
import InvoiceEdit from "../../pages/customer/invoice/InvoiceEdit";
import CustomerEdit from "../../pages/customer/CustomerEdit";

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

export const CustomerLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const selectedTab = useSelector((state) => state.tab.selectedTab);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState("Customers");
  const [pathname, setPathname] = useState(location.pathname);
  // const [formOpen, setFormOpen] = useState(null);
  const loginUserDetails = localStorage.getItem("loginUser");
  const data = loginUserDetails ? JSON.parse(loginUserDetails) : null;

  const subscriptionPanDetails = useSelector(
    (state) => state.plan.subscriptionPanDetails
  );
  const subscriptionID = subscriptionPanDetails?.subscriptionID;
  const babyId = localStorage.getItem("selectedbabyId");
  const customerPaymentSubId = localStorage.getItem("customerPaymentSubId");

  const formRef = useRef();
  const formEditRef = useRef();
  const addCustomerForm = useRef();
  const editCustomerForm = useRef();
  const addInvoiceRef = useRef();
  const editInvoiceRef = useRef();
  const handleCustomerAddForm = () => {
    if (addCustomerForm.current) {
      addCustomerForm.current.validateCustomerAddForm();
    }
  };
  const handleCustomerEditForm = () => {
    if (editCustomerForm.current) {
      editCustomerForm.current.validateCustomerEditForm();
    }
  };
  const handleBabyClick = () => {
    dispatch(saveBabyDetails(true));
  };
  const handleInvoiceAddForm = () => {
    if (addInvoiceRef.current) {
      addInvoiceRef.current.validateInvoiceAddForm();
    }
  };
  const handleInvoiceEditForm = () => {
    if (editInvoiceRef.current) {
      editInvoiceRef.current.validateInvoiceEditForm();
    }
  };
  const handlePlanAddForm = () => {
    if (formRef.current) {
      formRef.current.validateForm();
    }
  };
  const handlePlanEditForm = () => {
    if (formEditRef.current) {
      formEditRef.current.validateEditForm();
    }
  };

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const { activeTitle } = useSelector((state) => state.settingCutomerLayout);

  const getStatusList = useSelector((state) => state.global.statusList);
  useEffect(() => {
    dispatch(getStatus(null));
  }, [dispatch]);
  const statuses = getStatusIdList(getStatusList);
  // console.log("getStatusList", statuses);

  const [openAdd, setOpenAdd] = useState(false);

  const [formValues, setFormValues] = useState({
    title: activeTitle,
    value: "",
    IsActive: "",
  });
  const [errors, setErrors] = useState({});

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
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const validateForm = () => {
    let tempErrors = {};
    if (!formValues.value) tempErrors.value = "Value is required";
    if (!formValues.IsActive) tempErrors.IsActive = "Status is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const response = await api.post("/addMasterConfiguration", formValues);
      // console.log("Posted successfully", response.data);
      toast.success(response.data.message);
      dispatch(getPaymentModeList(null));
      dispatch(getPaymentStatusList(null));
      dispatch(GetButtonText(null));
      setOpenAdd(!openAdd);
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

  const open = Boolean(anchorEl);

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
    // setFormOpen(null);
  };

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
        <Link to="/dashboard">
          <img
            src={logo}
            height={isMobile ? "24px" : "40px"}
            width={"170px"}
            alt="Logo"
          />
        </Link>
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
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
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
                CUSTOMER MANAGEMENT
              </Typography>
            </Box>
          </Stack>
          <MenuList
            variant="selectedMenu"
            sx={{ marginLeft: "42px", fontWeight: 500 }}
          >
            <MenuItem
              onClick={() => {
                handleMenuSideBar("Dashboard");
                navigate("/customerPage/customerDashboard");
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
                handleMenuSideBar("Customers");
                navigate("/customerPage/customers");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Customers" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Customers"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Customers"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Customers" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
              }}
            >
              Customers
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleMenuSideBar("Baby Details");
                navigate("/customerPage/baby_details");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Baby Details" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Baby Details"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Baby Details"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Baby Details" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
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
                  activeItem === "Finance" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Finance"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Finance"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Finance" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
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
                  activeItem === "Invoices" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Invoices"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Invoices"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Invoices" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
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
                backgroundColor: activeItem === "Plans" ? "#cce0ff" : "inherit",
                color:
                  activeItem === "Plans"
                    ? theme.palette.primary.main
                    : "inherit",
                borderRight:
                  activeItem === "Plans"
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
                fontWeight: activeItem === "Plans" ? "bold" : "normal",
                "&:hover": {
                  backgroundColor: "#cce0ff",
                },
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
            {pathname && pathname === "/customerPage/customerDashboard" && (
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
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    marginLeft={2}
                  >
                    <Typography variant="h2">Customer Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Stack></Stack>
              </Box>
            )}
            {pathname && pathname === "/customerPage/customers" && (
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
                    <Typography variant="h2">Customer Management</Typography>{" "}
                    <Typography variant="subtitle1" sx={{}}>
                      /
                    </Typography>
                    <Typography variant="subtitle1" sx={{}}>
                      {activeItem}
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    padding: 1,
                    marginRight: "50px",
                  }}
                  startIcon={<AddIcon />}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/customerPage/customerForm");
                  }}
                >
                  Add Customer
                </Button>
              </Box>
            )}
            {pathname && pathname === "/customerPage/customerForm" && (
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
                        navigate("/customerPage/customers");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<SaveAltIcon />}
                      onClick={handleCustomerAddForm}
                    >
                      Save
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<CloseIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/customers");
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <CustomerForm ref={addCustomerForm} />
                </Box>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/customers/customerEdit" && (
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
                        navigate("/customerPage/customers");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<SaveAltIcon />}
                      onClick={handleCustomerEditForm}
                    >
                      Update
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<CloseIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/customers");
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <CustomerEdit ref={editCustomerForm} />
                </Box>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/customers/allDetails" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {selectedTab === 0 ? (
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
                        size="small"
                        sx={{
                          background: "inherit",
                          color: "black",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/customerPage/customers");
                        }}
                      >
                        <ArrowBackIosIcon
                          sx={{ height: 16, width: 16 }}
                          fontSize="small"
                        />{" "}
                        Back
                      </Button>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <Typography variant="h2">
                          Customer Management
                        </Typography>{" "}
                        <Typography variant="subtitle1">/</Typography>
                        <Typography variant="subtitle1">
                          {activeItem}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        padding: 1,
                        marginRight: "50px",
                      }}
                      startIcon={<EditIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/customers/customerEdit");
                      }}
                    >
                      Edit
                    </Button>
                  </Stack>
                ) : selectedTab === 1 ? (
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
                          navigate("/customerPage/customers");
                        }}
                      >
                        <ArrowBackIosIcon
                          sx={{ height: 16, width: 16 }}
                          fontSize="small"
                        />{" "}
                        Back
                      </Button>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                        marginLeft={2}
                      >
                        <Typography variant="h2">
                          Customer Management
                        </Typography>{" "}
                        <Typography variant="subtitle1">/</Typography>
                        <Typography variant="subtitle1">
                          {activeItem}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      sx={{ justifyContent: "end", marginRight: "50px" }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<SaveAltIcon />}
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
                  </Stack>
                ) : selectedTab === 2 ? (
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
                            navigate("/customerPage/customers");
                          }}
                        >
                          <ArrowBackIosIcon
                            sx={{ height: 16, width: 16 }}
                            fontSize="small"
                          />{" "}
                          Back
                        </Button>

                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <Typography variant="h2">
                            Customer Management
                          </Typography>{" "}
                          <Typography variant="subtitle1">/</Typography>
                          <Typography variant="subtitle1">
                            {activeItem}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{ justifyContent: "end", marginRight: "50px" }}
                      >
                        <Button
                          size="small"
                          variant="contained"
                          startIcon={<SaveAltIcon />}
                          onClick={handleBabyClick}
                        >
                          {isEditing ? "Update" : "Save"}
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<CloseIcon />}
                        >
                          Cancel
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                ) : selectedTab === 3 ? (
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
                          navigate("/customerPage/customers");
                        }}
                      >
                        <ArrowBackIosIcon
                          sx={{ height: 16, width: 16 }}
                          fontSize="small"
                        />{" "}
                        Back
                      </Button>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <Typography variant="h2">
                          Customer Management
                        </Typography>{" "}
                        <Typography variant="subtitle1">/</Typography>
                        <Typography variant="subtitle1">
                          {activeItem}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack></Stack>
                  </Stack>
                ) : null}
              </Box>
            )}
            {pathname && pathname === "/customerPage/baby_details" && (
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                marginLeft={2}
              >
                <Typography variant="h2">Customer Management</Typography>{" "}
                <Typography variant="subtitle1">/</Typography>
                <Typography variant="subtitle1">{activeItem}</Typography>
              </Stack>
            )}
            {pathname &&
              pathname === "/customerPage/baby_details/babyDetailsView" && (
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Stack sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      size="small"
                      sx={{
                        background: "inherit",
                        color: "black",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/baby_details");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      marginLeft={2}
                    >
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(getBabyDetails(babyId));
                        setIsEditing(true);
                        navigate("/customerPage/customers/allDetails");
                      }}
                    >
                      Edit
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
                      startIcon={<DeleteIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(deleteBabyDetails(babyId));
                        dispatch(getAllBabyList());
                        navigate("/customerPage/baby_details");
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              )}
            {pathname && pathname === "/customerPage/finance" && (
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                marginLeft={2}
              >
                <Typography variant="h2">Customer Management</Typography>{" "}
                <Typography variant="subtitle1">/</Typography>
                <Typography variant="subtitle1">{activeItem}</Typography>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/invoices" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  marginLeft={2}
                >
                  <Typography variant="h2">Customer Management</Typography>{" "}
                  <Typography variant="subtitle1">/</Typography>
                  <Typography variant="subtitle1">{activeItem}</Typography>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    padding: 1,
                    marginRight: "50px",
                  }}
                  startIcon={<AddIcon />}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/customerPage/invoices/invoiceForm");
                  }}
                >
                  Create Invoice
                </Button>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/invoices/invoiceForm" && (
              <Stack
                sx={{
                  display: "flex",
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
                  <Stack sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      size="small"
                      sx={{
                        background: "inherit",
                        color: "black",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/invoices");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      onClick={handleInvoiceAddForm}
                      startIcon={<SaveAltIcon />}
                    >
                      Save
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/invoices");
                      }}
                      startIcon={<CloseIcon />}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <InvoiceForm ref={addInvoiceRef} />
                </Box>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/invoices/invoiceView" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Button
                    // variant="contained"
                    size="small"
                    sx={{
                      background: "inherit",
                      color: "black",
                      // marginRight: "880px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/customerPage/invoices");
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{ height: 16, width: 16 }}
                      fontSize="small"
                    />{" "}
                    Back
                  </Button>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    marginLeft={2}
                  >
                    <Typography variant="h2">Customer Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={2}
                  sx={{ justifyContent: "end", marginRight: "50px" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(getInvoiceDetails(customerPaymentSubId));
                      navigate("/customerPage/invoices/invoiceEdit");
                    }}
                  >
                    Edit
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
                    startIcon={<DeleteIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteInvoice(customerPaymentSubId));
                      dispatch(getAllInvoiceList());
                      navigate("/customerPage/invoices");
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/invoices/invoiceEdit" && (
              <Stack
                sx={{
                  display: "flex",
                  //  flexDirection: "row",
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
                  <Stack sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      // variant="contained"
                      size="small"
                      sx={{
                        background: "inherit",
                        color: "black",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/invoices");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      onClick={handleInvoiceEditForm}
                      startIcon={<SaveAltIcon />}
                    >
                      update
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/invoices");
                      }}
                      startIcon={<CloseIcon />}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <InvoiceEdit ref={editInvoiceRef} />
                </Box>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/plans" && (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    marginLeft={2}
                  >
                    <Typography variant="h2">Customer Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    padding: 1,
                    marginRight: "50px",
                  }}
                  startIcon={<AddIcon />}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/customerPage/plans/plansForm");
                  }}
                >
                  Create Plan
                </Button>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/plans/plansForm" && (
              <Stack
                sx={{
                  display: "flex",
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
                  <Stack sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      // variant="contained"
                      size="small"
                      sx={{
                        background: "inherit",
                        color: "black",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/plans");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      marginLeft={2}
                    >
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<SaveAltIcon />}
                      onClick={handlePlanAddForm}
                    >
                      Save
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<CloseIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/plans");
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <PlansForm ref={formRef} />
                </Box>
              </Stack>
            )}
            {pathname &&
              pathname === "/customerPage/plans/plansDetailsPreview" && (
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Stack sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      // variant="contained"
                      size="small"
                      sx={{
                        background: "inherit",
                        color: "black",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/plans");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      marginLeft={2}
                    >
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(getSubscriptionPlanDetails(subscriptionID));
                        navigate(`/customerPage/plans/Edit`);
                      }}
                    >
                      Edit
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
                      startIcon={<DeleteIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(deleteSubscriptionPlan({ subscriptionID }));
                        dispatch(getSubscriptionPlan(null));
                        navigate(`/customerPage/plans`);
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              )}
            {pathname && pathname === "/customerPage/plans/Edit" && (
              <Stack
                sx={{
                  display: "flex",
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
                  <Stack sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      size="small"
                      sx={{
                        background: "inherit",
                        color: "black",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/plans");
                      }}
                    >
                      <ArrowBackIosIcon
                        sx={{ height: 16, width: 16 }}
                        fontSize="small"
                      />{" "}
                      Back
                    </Button>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      marginLeft={2}
                    >
                      <Typography variant="h2">Customer Management</Typography>{" "}
                      <Typography variant="subtitle1">/</Typography>
                      <Typography variant="subtitle1">{activeItem}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{ justifyContent: "end", marginRight: "50px" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<SaveAltIcon />}
                      onClick={handlePlanEditForm}
                    >
                      Update
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<CloseIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customerPage/plans");
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
                <Box sx={{ marginTop: "32px", marginBottom: "30px" }}>
                  <PlansEdit ref={formEditRef} />
                </Box>
              </Stack>
            )}
            {pathname && pathname === "/customerPage/settings" && (
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
                    <Typography variant="h2">Customer Management</Typography>{" "}
                    <Typography variant="subtitle1">/</Typography>
                    <Typography variant="subtitle1">{activeItem}</Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<AddIcon />}
                  sx={{
                    padding: 1,
                    marginRight: "50px",
                  }}
                  onClick={() => setOpenAdd(true)}
                >
                  Add {activeTitle}
                </Button>
                <Dialog open={openAdd}>
                  <DialogContent sx={{ width: "500px" }}>
                    <CloseIcon
                      sx={{
                        marginLeft: "400px",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpenAdd(!openAdd)}
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
                              error={!!errors.value}
                            >
                              <OutlinedInput
                                error={!!errors.value}
                                fullWidth
                                id="outlined-adornment-password"
                                placeholder="Input Text"
                                size="small"
                                value={formValues?.value}
                                onChange={(e) =>
                                  handleOnChange(e.target.value, "value")
                                }
                              />
                              {errors.value && (
                                <FormHelperText error>
                                  {errors.value}
                                </FormHelperText>
                              )}
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2} pt={3} pb={2}>
                          <Grid item style={{ width: "100%" }}>
                            <InputLabel sx={inputLableStyle}>
                              Status <span style={redStarStyle}>*</span>
                            </InputLabel>
                            <FormControl
                              variant="outlined"
                              fullWidth
                              size="small"
                              error={!!errors.IsActive}
                            >
                              <SingleSelect
                                error={!!errors.IsActive}
                                placeholder={"Select"}
                                width={"100%"}
                                value={formValues?.IsActive}
                                data={statuses}
                                onChange={(e) => handleOnChange(e, "IsActive")}
                              />
                              {errors.IsActive && (
                                <FormHelperText error>
                                  {errors.IsActive}
                                </FormHelperText>
                              )}
                            </FormControl>
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
          <Outlet />
        </Box>
      </Container>
    </Container>
  );
};
