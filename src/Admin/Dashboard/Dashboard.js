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
} from '@mui/material'
import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import frontendCms from '../../assets/frontend_cms.png'
import helpSupport from '../../assets/help_support.png'
import hospitalManagement from '../../assets/hospital_management.png'
import hrManagement from '../../assets/hr_mangement.png'
import leadManagement from '../../assets/lead_management.png'
import marketing from '../../assets/marketing.png'
import settings from '../../assets/settings.png'
import taskCalenderManagement from '../../assets/task_and_calendar_mangement.png'
import accountingFinance from '../../assets/accounting_finance.png'
import customerManagement from '../../assets/customer_management.png'
import dashboardIcon from '../../assets/dashboard.png'
import products from '../../assets/products.png'
import { useTheme } from '@emotion/react'
import dashboardBackGround from '../../assets/dasboard_background.png'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter, stringAvatar } from '../../globalFunctions'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const iconArray = [
    {
      title_text1: 'Dashboard',
      title_text2: '',
      value: 'dashboard',
      icon: dashboardIcon,
    },
    {
      title_text1: 'Frontend CMS',
      title_text2: '',
      value: 'frontend_cms',
      icon: frontendCms,
    },
    {
      title_text1: 'Lead',
      title_text2: 'Management',
      value: 'lead_management',
      icon: leadManagement,
    },
    {
      title_text1: 'Task & Calendar ',
      title_text2: 'Management',
      value: 'task_&_calender_management',
      icon: taskCalenderManagement,
    },
    {
      title_text1: 'Customer',
      title_text2: 'Management',
      value: 'customer_management',
      icon: customerManagement,
    },
    {
      title_text1: 'Products',
      title_text2: '',
      value: 'products',
      icon: products,
    },
    {
      title_text1: 'Hospital ',
      title_text2: 'Management',
      value: 'hospital_management',
      icon: hospitalManagement,
    },
    {
      title_text1: 'Accounting ',
      title_text2: 'Finance',
      value: 'accounting_finance',
      icon: accountingFinance,
    },
    {
      title_text1: 'HR ',
      title_text2: 'Management',
      value: 'hr_management',
      icon: hrManagement,
    },
    {
      title_text1: 'Help/Support',
      title_text2: '',
      value: 'help/support',
      icon: helpSupport,
    },
    {
      title_text1: 'Marketing',
      title_text2: '',
      value: 'marketing',
      icon: marketing,
    },
    {
      title_text1: 'Settings',
      title_text2: '',
      value: 'settings',
      icon: settings,
    },
  ]

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const loginUserDetails = localStorage.getItem('loginUser')
  const data = JSON.parse(loginUserDetails)
  const { firstName, lastName } = data

  // console.log("dkjhcksdghljh  slice", data);

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    navigate('/')
    localStorage.clear()
    setAnchorEl(null)
  }

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        backgroundImage: `url(${dashboardBackGround})`,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Box
        width={'100%'}
        height={'40px'}
        sx={{
          background: '#fff',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2px 12px',
          zIndex: 100,
          position: 'fixed',
          top: 0,
        }}
      >
        <img
          src={logo}
          height={isMobile ? '24px' : '30px'}
          width={'auto'}
          alt="Logo"
        />
        <Stack direction="row" spacing={1} alignItems={'center'}>
          <NotificationsIcon
            sx={{
              height: isMobile ? '18px' : '16px',
              width: isMobile ? '18px' : '16px',
            }}
          />
          <ChatBubbleIcon
            sx={{
              height: isMobile ? '18px' : '16px',
              width: isMobile ? '18px' : '16px',
            }}
          />
          <Avatar
            {...stringAvatar(`${firstName} ${lastName}`)}
            sx={{
              width: isMobile ? 18 : 24,
              height: isMobile ? 18 : 24,
              fontSize: isMobile ? '10px' : '12px',
            }}
          />
          <Typography variant="subtitle1" fontSize={isMobile ? '10px' : '12px'}>
            {capitalizeFirstLetter(firstName, lastName)}
          </Typography>
          <KeyboardArrowDownIcon
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
            fontSize={isMobile ? 'small' : 'medium'}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Stack>
      </Box>

      <Box
        width={{ xs: '100%', md: '40%' }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        padding={2}
        marginTop={'60px'} // Add margin to push down content below the fixed header
        sx={{
          overflow: 'auto',
          height: 'calc(100vh - 60px)', // Adjust height to account for header height
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
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                sx={{
                  width: isMobile ? '60px' : '80px',
                  height: isMobile ? '70px' : '90px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (item.value == 'hospital_management') {
                    navigate('/mainPage/hospitals')
                  }
                }}
                spacing={1}
              >
                <Stack
                  sx={{
                    height: isMobile ? '40px' : '50px',
                    width: isMobile ? '40px' : '50px',
                    borderRadius: '50%',
                    background: '#fff',
                  }}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <img
                    src={item.icon}
                    height={'auto'}
                    width={isMobile ? '24px' : '32px'}
                    alt={item.title_text1}
                  />
                </Stack>
                <Stack direction={'column'} spacing={0} alignItems={'center'}>
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '8px' : '10px'}
                  >
                    {item.title_text1}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '8px' : '10px'}
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
  )
}

export default Dashboard
