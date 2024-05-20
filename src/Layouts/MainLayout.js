import React, { useState } from "react";
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [doctorFormOpen, setDoctorFormOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: "24px",
        height: "24px",
        fontSize: "8px",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const isActive = (path) => {
    return location.pathname === path;
  };

  const open = Boolean(anchorEl);
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
        <Box sx={{ height: "100%", }}>
          <Stack spacing={0} sx={{width:'100%'}}>
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 0, background: "black" }}
              startIcon={<ArrowBackIosIcon />}
            >
              Back to menu
            </Button>
            <Button variant="contained" fullWidth size="small" sx={{ borderRadius: 0 }}>
              Hospital Management
            </Button>
          </Stack>
          <MenuList variant='selectedMenu'   >
            <StyledLink to="/dashboard">
              <MenuItem
              
                sx={{
                  backgroundColor: isActive("/dashboard")
                    ? "#f0f0f0"
                    : "inherit",
                }}
              >
                Dashboard
              </MenuItem>
            </StyledLink>
            <StyledLink to="/mainPage/hospitals">
              <MenuItem
                sx={{
                  backgroundColor: isActive("/mainPage/hospitals")
                    ? "#f0f0f0"
                    : "inherit",
                }}
              >
                Hospitals
              </MenuItem>
            </StyledLink>
            <StyledLink to="/mainPage/doctors">
              <MenuItem
                sx={{
                  backgroundColor: isActive("/mainPage/doctors")
                    ? "#f0f0f0"
                    : "inherit",
                }}
              >
                Doctors
              </MenuItem>
            </StyledLink>
            <StyledLink to="/mainPage/settings">
              <MenuItem
                sx={{
                  backgroundColor: isActive("/mainPage/settings")
                    ? "#f0f0f0"
                    : "inherit",
                }}
              >
                Settings
              </MenuItem>
            </StyledLink>
          </MenuList>
        </Box>
        <Box sx={{ background: "#F4F5F9", padding: "8px" }}>
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
                onClick={() => navigate("hospitalFrom")}
              >
                Add Doctors
              </Button>
            </Stack>
          </Box>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography variant="h5">Hospital Management</Typography>{" "}
            <Typography variant="h4">/</Typography>
            <Typography variant="subtitle1">Doctors</Typography>
          </Stack>

          {/* {doctorFormOpen ? <DoctorAddForm /> : <DoctorsPage />} */}
          <Outlet />
        </Box>
      </Container>
    </Container>
  );
};
