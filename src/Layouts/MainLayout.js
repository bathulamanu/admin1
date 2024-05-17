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

export const MainLayout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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
        sx={{ display: "flex", border: "1px solid black", width: "100%" }}
        disableGutters
      >
        <Paper>
          <Button variant="contained">Back to menu</Button>
          <MenuList>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Hospitals</MenuItem>
            <MenuItem>Doctors</MenuItem>
            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Paper>
        <Box sx={{ background: "#F4F5F9" }}>
          <DoctorsPage />
        </Box>
      </Container>
    </Container>
  );
};
