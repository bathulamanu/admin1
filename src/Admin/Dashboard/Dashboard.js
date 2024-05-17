import {
  Avatar,
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import frontendCms from "../../assets/frontend_cms.png";
import helpSupport from "../../assets/help_support.png";
import hospitalManagement from "../../assets/hospital_management.png";
import hrManagement from "../../assets/hr_mangement.png";
import leadManagement from "../../assets/lead_management.png";
import marketing from "../../assets/marketing.png";
import settings from "../../assets/settings.png";
import taskCalenderManagement from "../../assets/task_and_calendar_mangement.png";
import accountingFinance from "../../assets/accounting_finance.png";
import customerManagement from "../../assets/customer_management.png";
import dashboardIcon from "../../assets/dashboard.png";
import products from "../../assets/products.png";
import { useTheme } from "@emotion/react";
import dashboardBackGround from '../../assets/dasboard_background.png'
import logo from '../../assets/logo.png'

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const iconArray = [
    {
      title_text1: "Dashboard",
      title_text2: "",
      value: "dashboard",
      icon: dashboardIcon,
    },
    {
      title_text1: "Frontend CMS",
      title_text2: "",
      value: "frontend_cms",
      icon: frontendCms,
    },
    {
      title_text1: "Lead",
      title_text2: "Management",
      value: "lead_management",
      icon: leadManagement,
    },
    {
      title_text1: "Task & Calendar ",
      title_text2: "Management",
      value: "task_&_calender_management",
      icon: taskCalenderManagement,
    },
    {
      title_text1: "Customer",
      title_text2: "Management",
      value: "customer_management",
      icon: customerManagement,
    },
    {
      title_text1: "Products",
      title_text2: "",
      value: "products",
      icon: products,
    },
    {
      title_text1: "Hospital ",
      title_text2: "Management",
      value: "hospital_management",
      icon: hospitalManagement,
    },
    {
      title_text1: "Accounting ",
      title_text2: "Finance",
      value: "accounting_finance",
      icon: accountingFinance,
    },
    {
      title_text1: "HR ",
      title_text2: "Management",
      value: "hr_management",
      icon: hrManagement,
    },
    {
      title_text1: "Help/Support",
      title_text2: "",
      value: "help/support",
      icon: helpSupport,
    },
    {
      title_text1: "Marketing",
      title_text2: "",

      value: "marketing",
      icon: marketing,
    },
    {
      title_text1: "Settings",
      title_text2: "",
      value: "settings",
      icon: settings,
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
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
        backgroundImage: `url(${dashboardBackGround})`,
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
          position: "fixed",
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
          <NotificationsIcon fontSize={isMobile ? "small" : "medium"} />
          <ChatBubbleIcon fontSize={isMobile ? "small" : "medium"} />
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

    <Box
      width={{ xs: "100%", md: "40%" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={2}
        marginTop={"60px"} // Add margin to push down content below the fixed header
      sx={{
        overflow: "auto",
          height: "calc(100vh - 60px)", // Adjust height to account for header height
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {iconArray.map((item, index) => (
          <Grid
            item
              xs={4} // 3 columns on extra-small screens
              sm={4} // 3 columns on small screens
              md={4} // 3 columns on medium screens
              lg={3} // 4 columns on large screens and above
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Stack
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              sx={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "70px" : "90px",
              }}
              spacing={1}
            >
              <Stack
                sx={{
                  height: isMobile ? "40px" : "50px",
                  width: isMobile ? "40px" : "50px",
                  borderRadius: "50%",
                  background: "#fff",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={item.icon}
                  height={"auto"}
                  width={isMobile ? "24px" : "32px"}
                  alt={item.title_text1}
                />
              </Stack>
              <Stack direction={"column"} spacing={0} alignItems={"center"}>
                <Typography
                  variant="subtitle1"
                  fontSize={isMobile ? "8px" : "10px"}
                >
                  {item.title_text1}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize={isMobile ? "8px" : "10px"}
                >
                  {item.title_text2}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    // <Container
    //   maxWidth="xl"
    //   disableGutters
    //   sx={{
    //     backgroundImage: `url(${dashboardBackGround})`,
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     flexDirection: "column",
    //   }}
    // >
    //   <Box
    //     width={"98%"}
    //     height={"40px"}
    //     sx={{
    //       background: "#fff",
    //       margin: 0,
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //       padding: "2px 12px",
    //       zIndex: 100,
    //     }}
    //   >
    //     <img src={logo} height={"30px"} width={"auto"} />
    //     <Stack direction="row" spacing={2} alignItems={"center"}>
    //       <NotificationsIcon /> <ChatBubbleIcon />{" "}
    //       <Avatar {...stringAvatar("Kent Dodds")} />{" "}
    //       <Typography variant="subtitle1"> sarah </Typography>
    //       <KeyboardArrowDownIcon
    //         onClick={handleClick}
    //         style={{ cursor: "pointer" }}
    //       />
    //       <Menu
    //         id="basic-menu"
    //         anchorEl={anchorEl}
    //         open={open}
    //         onClose={handleClose}
    //         MenuListProps={{
    //           "aria-labelledby": "basic-button",
    //         }}
    //       >
    //         <MenuItem onClick={handleClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleClose}>My account</MenuItem>
    //         <MenuItem onClick={handleClose}>Logout</MenuItem>
    //       </Menu>{" "}
    //     </Stack>
    //   </Box>

    //   <Box
    //     width={{ xs: "100%", md: "40%" }}
    //     display={"flex"}
    //     alignItems={"center"}
    //     justifyContent={"center"}
    //     padding={2}
    //   >
    //     <Grid container spacing={3} justifyContent="center">
    //       {iconArray.map((item, index) => (
    //         <Grid
    //           item
    //           xs={6} // 2 columns on extra-small screens
    //           md={4} // 3 columns on medium screens
    //           lg={3} // 4 columns on large screens and above
    //           key={index}
    //           display="flex"
    //           justifyContent="center"
    //         >
    //           <Stack
    //             display={"flex"}
    //             justifyContent={"flex-start"}
    //             alignItems={"center"}
    //             sx={{ width: "80px", height: "90px" }}
    //             spacing={1}
    //           >
    //             <Stack
    //               sx={{
    //                 height: "50px",
    //                 width: "50px",
    //                 borderRadius: "50%",
    //                 background: "#fff",
    //               }}
    //               display={"flex"}
    //               justifyContent={"center"}
    //               alignItems={"center"}
    //             >
    //               <img src={item.icon} height={"auto"} width={"32px"} />
    //             </Stack>
    //             <Stack direction={"column"} spacing={0} alignItems={"center"}>
    //               <Typography variant="subtitle1" fontSize={"10px"}>
    //                 {item.title_text1}
    //               </Typography>
    //               <Typography variant="subtitle1" fontSize={"10px"}>
    //                 {item.title_text2}
    //               </Typography>
    //             </Stack>
    //           </Stack>
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Box>

    // </Container>
  );
};

export default Dashboard;

{
  /* <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"50px"}
          width={"40%"}
          padding={"24px"}
        >
          {iconArray.map((item) => {
            return (
              <Stack
                display={"flex"}
                justifyContent={'flex-start'}
                alignItems={"center"}
                sx={{ width: "80px",height:'90px' }}
                spacing={1}
              >
                <Stack
                  sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    background: "#fff",
                    
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img src={item.icon} height={"auto"} width={"32px"} />
                </Stack>
                <Stack direction={'column'} spacing={0} alignItems={'center'} >
                  <Typography variant="subtitle1" fontSize={"10px"}>
                    {item.title_text1}
                  </Typography>
                  <Typography variant="subtitle1" fontSize={"10px"}>
                    {item.title_text2}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
        </Box>
      </Box> */
}
