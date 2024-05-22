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
import DoctorAddForm from "../Admin/Doctors/DoctorAddForm";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { stringAvatar } from "../globalFunctions";
import { getCountryList } from "../Admin/Slices/globalSlice";
import { useDispatch } from "react-redux";
import DoctorView from "../Admin/Doctors/DoctorView";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState("Hospitals");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getCountryList());
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {...stringAvatar("Kent Dodds")}
            sx={{
              width: isMobile ? 18 : 24,
              height: isMobile ? 18 : 24,
              fontSize: isMobile ? "10px" : "12px",
            }}
          />
          <Typography variant="subtitle1" fontSize={isMobile ? "10px" : "12px"}>
            {" "}
            sarah{" "}
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
        <Box sx={{ height: "100%" }}>
          <Stack spacing={0} sx={{ width: "200px" }}>
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
              Hospital Management
            </Button>
          </Stack>
          <MenuList variant="selectedMenu">
            <MenuItem
              onClick={() => {
                setActiveItem("Dashboard");
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
                setActiveItem("Hospitals");
                navigate("/mainPage/hospitals");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Hospitals" ? "#f0f0f0" : "inherit",
              }}
            >
              Hospitals
            </MenuItem>

            <MenuItem
              onClick={() => {
                setActiveItem("Doctors");
                navigate("/mainPage/doctors");
              }}
              sx={{
                backgroundColor:
                  activeItem === "Doctors" ? "#f0f0f0" : "inherit",
              }}
            >
              Doctors
            </MenuItem>
            <StyledLink to="/mainPage/settings">
              <MenuItem
                onClick={() => {
                  setActiveItem("Settings");
                  navigate("/mainPage/settings");
                }}
                sx={{
                  backgroundColor:
                    activeItem === "Settings" ? "#f0f0f0" : "inherit",
                }}
              >
                Settings
              </MenuItem>
            </StyledLink>
          </MenuList>
        </Box>
        <Box
          sx={{
            background: "#F4F5F9",
            padding: "8px",
            width: activeItem == "Hospitals" ? "85%" : "90%",
          }}
        >
          <Box
            height={"80px"}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <ArrowBackIosIcon sx={{ height: 18, width: 18 }} />
              <Typography>Back</Typography>
            </Stack>
            <Stack>
              <Button
                size="small"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => {
                  if (activeItem === "Hospitals") {
                    navigate("hospitalFrom");
                  } else if (activeItem === "Doctors") {
                    navigate("doctorForm");
                  }
                }}
              >
                Add {activeItem}
              </Button>
            </Stack>
          </Box>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography variant="h5">Hospital Management</Typography>{" "}
            <Typography variant="h4">/</Typography>
            <Typography variant="subtitle1">{activeItem}</Typography>
          </Stack>

          {/* {doctorFormOpen ? <DoctorAddForm /> : <DoctorsPage />} */}
          <Outlet />
          {/* <DoctorView/> */}
        </Box>
      </Container>
    </Container>
  );
};
