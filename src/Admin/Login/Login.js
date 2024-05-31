import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import loginBackground from '../../assets/login_background.png'
import logo from '../../assets/logo.png'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLogin } from '../Slices/adminSlice'
import { useNavigate } from 'react-router-dom'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const loginDetail = useSelector((state) => state.admin.adminLogin)
  // console.log('loginDetail is', loginDetail)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    // console.log('name and value', name, value)
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // console.log("cdjhsbnkm", loginData);

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await dispatch(getUserLogin(loginData))
      setLoginData({ email: '', password: '' })
      if (response && Object.keys(response).length !== 0) {
        localStorage.setItem(
          'loginUser',
          JSON.stringify(response?.payload?.data),
        )
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `url(${loginBackground})`,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{ width: '80%', height: '100%' }}
        display={'flex'}
        justifyContent={'end'}
        alignItems={'center'}
      >
        <Box
          sx={{
            height: '80%',
            background: '#fff',
            padding: '24px',
          }}
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={'5%'}
        >
          <img src={logo} height={'auto'} width={'60%'} />
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            <InputLabel htmlFor="email">Email</InputLabel>

            <FormControl variant="outlined" size="small">
              <OutlinedInput
                name="email"
                fullWidth
                id="outlined-adornment-email"
                placeholder="username@gmail.com"
                size="small"
                value={loginData?.email}
                onChange={handleOnChange}
              />
            </FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                size="small"
                name="password"
                value={loginData?.password}
                onChange={handleOnChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Stack direction={'row'} alignContent={'center'} spacing={1}>
              <Stack direction={'row'} alignItems={'center'}>
                <Checkbox {...label} size="small" />
                <Typography sx={{ fontSize: '12px' }}> Remember me</Typography>
              </Stack>
              <Stack justifyContent={'center'}>
                <Typography
                  sx={{ fontSize: '12px', color: '#219EB9', cursor: 'pointer' }}
                >
                  Forgot password
                </Typography>
              </Stack>
            </Stack>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Log in
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
