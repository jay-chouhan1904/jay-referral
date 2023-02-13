import { Button, Card, CardHeader, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { PRIMARY_COLOR_0, PRIMARY_COLOR_1 } from "./constants";
import { axiosInstance } from "./utils/axiosInstance";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInvite = async () => {
    try {
      let url = "send_referral";
      let response = await axiosInstance.post(url, { email: email });
      let data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack flexDirection={"row"} justifyContent={"center"} padding={"20px"}>
      <Card sx={{ width: "300px", minHeight: "300px" }} raised>
        <CardHeader title={"Invite Your Friends"} sx={{ marginLeft: "30px" }} />
        <Grid container spacing={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12}>
            <TextField label='Email' type={"email"} sx={{ marginTop: "30px" }} onChange={handleChange}></TextField>
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
              onClick={handleInvite}
            >
              Invite
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}
