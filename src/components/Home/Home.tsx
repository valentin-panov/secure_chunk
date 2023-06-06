import * as React from "react";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Home() {
  const token = useSelector((store: RootState) => store.token);

  return (
    <Stack spacing={1}>
      <Typography mt={2}>
        Try the top right corner menu for switching the role.
      </Typography>
      <Divider />
      <Typography mt={2}>Your role now is [{token}]</Typography>
      <Divider />
      <Typography mt={2}>
        For users are available only PRODUCTS page. However for admins there is
        USERS page also.
      </Typography>
    </Stack>
  );
}
