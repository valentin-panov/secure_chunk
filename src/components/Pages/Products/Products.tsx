import * as React from "react";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Alert,
  CircularProgress,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { setAppState } from "../../../reducers/appState";
import Box from "@mui/material/Box";

interface IPhoto {
  description: string;
  id: number;
  title: string;
  url: string;
  user: number;
}

export default function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector((store: RootState) => store.appState);

  const [products, setProducts] = useState<IPhoto[]>([]);
  useEffect(() => {
    dispatch(setAppState("pending"));

    fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20"
    )
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.photos);
        dispatch(setAppState("success"));
      })
      .catch(() => dispatch(setAppState("error")));
  }, [dispatch]);
  return (
    <>
      <Typography mt={1}>PRODUCTS</Typography>

      {(status === "pending" || status === "idle") && (
        <Box>
          <CircularProgress color="inherit" />
        </Box>
      )}
      {status === "success" && (
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {products.map((item) => (
            <ImageListItem key={item.id}>
              <img src={`${item.url}`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      {status === "error" && (
        <Alert severity="error">No data came. Try another time.</Alert>
      )}
    </>
  );
}
