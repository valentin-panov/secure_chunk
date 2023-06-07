import * as React from "react";
import { useEffect, useState } from "react";
import {
  Alert,
  CircularProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

interface IUser {
  email: string;
  name: { title: string; first: string; last: string };
  picture: { large: string; medium: string; thumbnail: string };
}

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");

  useEffect(() => {
    setStatus("pending");
    fetch("https://randomuser.me/api/?inc=name,picture,email&results=10")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.results);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <>
      <Typography mt={1}>USERS</Typography>
      {status === "success" && (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {users.map((item) => (
            <ListItem key={item.email}>
              <ListItemAvatar>
                <Avatar
                  alt={`${item.name.first} ${item.name.last}`}
                  src={item.picture.thumbnail}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.name.title} ${item.name.first} ${item.name.last}`}
                secondary={
                  <Link href={`mailto:${item.email}`} color="inherit">
                    {item.email}
                  </Link>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
      {(status === "pending" || status === "idle") && (
        <Box>
          <CircularProgress color="inherit" />
        </Box>
      )}{" "}
      {status === "error" && (
        <Alert severity="error">No data came. Try another time.</Alert>
      )}
    </>
  );
}
