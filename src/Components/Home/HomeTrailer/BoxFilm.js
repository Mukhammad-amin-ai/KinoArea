import React from "react";
import { Box, Typography } from "@mui/material";
export default function BoxFilm({ boxfilm }) {
  return (
    <>
      
         {boxfilm.map((item, index) => (
            <Box key={index}
              sx={{
                width: "344px",
                height: "276px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "100%", height: "245px" }}>
                <img style={{ borderRadius: "10px" }} src={item.image} alt="" />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 900,
                    color: "#fff",
                    fontFamily: "Qanales",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          ))
        }
    </>
  );
}
