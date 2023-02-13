import { Alert, Button, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRIMARY_COLOR_0, PRIMARY_COLOR_1 } from "./constants";
import { axiosInstance } from "./utils/axiosInstance";

export default function Login(props) {
  const [user, setUser] = useState({});
  const [error, setError] = useState({
    status: false,
    msg: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let url = "users/sign_in";
      let response = await axiosInstance.post(url, { user: user });
      let data = await response.data;
      if (data.success) {
        localStorage.setItem("user", user.email);
        props.setAuth(true);
        navigate("/");
      } else {
        setError({ status: true, msg: data.error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Stack flexDirection={"row"} justifyContent={"center"} padding={"20px"}>
      <Card sx={{ width: "300px", minHeight: "300px" }} raised>
        <Grid container spacing={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
          {error.status && (
            <Grid item sx={{ marginTop: "20px" }}>
              <Alert severity='error'>{error.msg}</Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              label='Email'
              name='email'
              type={"email"}
              sx={{ marginTop: "20px" }}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' name='password' onChange={handleChange} type={"password"}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              disableRipple
              sx={{
                backgroundColor: PRIMARY_COLOR_0,
                color: "#fff",
                "&.MuiButtonBase-root:hover": {
                  backgroundColor: PRIMARY_COLOR_1,
                  color: "#fff",
                },
              }}
              fullWidth
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              New User? <Link to='/signup'>Sign Up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}
