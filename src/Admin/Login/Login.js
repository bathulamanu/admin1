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
} from "@mui/material";
import React, { useState } from "react";
import loginBackground from "../../assets/login_background.png";
import logo from "../../assets/logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `url(${loginBackground})`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ width: "80%", height: "100%" }}
        display={"flex"}
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Box
          sx={{
            height: "80%",
            background: "#fff",
            padding: "24px",
          }}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"5%"}
        >
          <img src={logo} height={"auto"} width={"60%"} />
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <InputLabel htmlFor="email">Email</InputLabel>

            <FormControl variant="outlined" size="small">
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                placeholder="username@gmail.com"
                size="small"
                onChange={handleEmailChange}
              />
            </FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                size="small"
                onChange={handlePasswordChange}
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

            <Stack direction={"row"} alignContent={"center"} spacing={1}>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox {...label} size="small" />
                <Typography sx={{ fontSize: "12px" }}> Remember me</Typography>
              </Stack>
              <Stack justifyContent={"center"}>
                <Typography
                  sx={{ fontSize: "12px", color: "#219EB9", cursor: "pointer" }}
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
  );
};

export default Login;
