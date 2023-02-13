import { Alert, Button, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRIMARY_COLOR_0, PRIMARY_COLOR_1 } from "./constants";
import { axiosInstance } from "./utils/axiosInstance";

export default function SignUp(props) {
  const [user, setUser] = useState({});
  const [error, setError] = useState({
    status: false,
    msg: "",
  });

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      if (user.password === user.password_confirmation) {
        let url = "/users";
        let response = await axiosInstance.post(url, { user: user });
        let data = await response.data;
        if (data.success) {
          localStorage.setItem("user", user.email);
          props.setAuth(true);
          navigate("/");
        } else {
          setError({ status: true, msg: data.error });
        }
        console.log(data);
      } else {
        setError({ status: true, msg: "Passowrds do not match!" });
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
              type={"email"}
              name='email'
              sx={{ marginTop: "20px" }}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' name='password' type={"password"} onChange={handleChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Confirm Password'
              name='password_confirmation'
              type={"password"}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={handleSignUp}
              disableRipple
              sx={{
                backgroundColor: PRIMARY_COLOR_0,
                color: "#fff",
                "&.MuiButtonBase-root:hover": {
                  backgroundColor: PRIMARY_COLOR_1,
                  color: "#fff",
                },
              }}
            >
              SignUp
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Already Registered? <Link to='/login'>Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}
