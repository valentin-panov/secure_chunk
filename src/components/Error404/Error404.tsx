import React, { ReactElement } from "react";
import { Alert } from "@mui/material";

export default function Error404(): ReactElement {
  return (
    <section>
      <Alert severity="error">Nothing here now. Try another time.</Alert>
    </section>
  );
}
