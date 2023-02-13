import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_COLOR_0, SECONDARY_COLOR_0 } from "./constants";
import { axiosInstance } from "./utils/axiosInstance";
import { checkForAuth } from "./utils/checkForAuth";

const linkStyle = { color: SECONDARY_COLOR_0 };

export default function Navigation({ auth }) {
  // const auth = checkForAuth(user);

  const logout = async () => {
    try {
      let url = "/users/sign_out";
      let response = await axiosInstance.delete(url);
      let data = await response.data;
      if (data.success) {
        localStorage.removeItem("user");
        window.location.reload();
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        component={"nav"}
        sx={{ backgroundColor: PRIMARY_COLOR_0, lineHeight: "24px", height: "48px" }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          component={"div"}
          padding={"20px"}
          width={"80%"}
          alignItems={"center"}
        >
          <Link to={"/"} style={linkStyle}>
            Home
          </Link>
          <Stack flexDirection={"row"} component={"div"} padding={"20px"} gap={5} alignItems='center'>
            {auth && (
              <Button sx={{ color: SECONDARY_COLOR_0 }} onClick={logout}>
                Logout
              </Button>
            )}
            {!auth && !location.pathname.includes("/login") && (
              <Link style={linkStyle} to='/login'>
                Login
              </Link>
            )}
            {!auth && !location.pathname.includes("/signup") && (
              <Link style={linkStyle} to='/signup'>
                Sign Up
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
