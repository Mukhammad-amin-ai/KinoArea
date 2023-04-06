import { Box, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "350px",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>404</Typography>
        <Typography>Кина не будет:(</Typography>
      </Box>
    </Box>
  );
}
