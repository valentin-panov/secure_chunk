import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

interface MainProps {
  children?: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main>
      <Box
        sx={{
          display: "block",
          "& > :not(style)": {
            m: "1rem auto",
            p: 1,
            width: "80%",
            height: "100%",
          },
        }}
      >
        {children}
      </Box>
    </main>
  );
};

export default Main;
