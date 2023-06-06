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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setAppState } from "../../reducers/appState";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

interface IUser {
  email: string;
  id: { name: string; value: string };
  name: { title: string; first: string; last: string };
  picture: { large: string; medium: string; thumbnail: string };
}

export default function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector((store: RootState) => store.appState);

  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    dispatch(setAppState("pending"));

    fetch("https://randomuser.me/api/?inc=id,name,picture,email&results=10")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.results);
        console.log(json.results);
        dispatch(setAppState("success"));
      })
      .catch(() => dispatch(setAppState("error")));
  }, [dispatch]);
  return (
    <>
      <Typography mt={1}>USERS</Typography>
      {(status === "pending" || status === "idle") && (
        <Box>
          <CircularProgress color="inherit" />
        </Box>
      )}
      {status === "success" && (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {users.map((item) => (
            <ListItem key={item.id.value}>
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
      {status === "error" && (
        <Alert severity="error">No data came. Try another time.</Alert>
      )}
    </>
  );
}