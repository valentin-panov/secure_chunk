import * as React from "react";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Home() {
  const token = useSelector((store: RootState) => store.token);

  return (
    <Stack spacing={1}>
      <Typography mt={1}>HOME PAGE</Typography> <Divider />
      <Typography mt={1}>
        Try the top right corner menu for switching the role.
      </Typography>
      <Typography mt={1}>Your role now is [{token}]</Typography>
      <Typography mt={1}>
        For users are available only PRODUCTS page. However for admins there is
        USERS page also.
      </Typography>
    </Stack>
  );
}
