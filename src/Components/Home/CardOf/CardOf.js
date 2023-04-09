import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../Assets/Navbar/Navbar";

export default function CardOf({ cards }) {
  let { card } = useParams();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${cards[card - 1].bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "fixed",
          backgroundColor: "#202434",
        }}
      >
        <Navbar />
        <Box
          sx={{
            width: "100%",
            height: "1150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "70%",
              height: "700px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "395px", height: "539px" }}>
              <img style={{borderRadius:"15px"}}  src={cards[card - 1].img} alt="#" />
            </Box>
            <Box
              sx={{
                width: "705px",
                height: "465px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 60,
                  fontWeight: 900,
                  fontFamily: "Qanales",
                }}
              >
                {cards[card - 1].filmName}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 25,
                  fontWeight: 500,
                  fontFamily: "Qanales",
                }}
              >
                {cards[card - 1].filmLat}
              </Typography>
              
              {/* Ball */}

              <Box sx={{width:'150px',height:'71px'}}>
                <Box sx={{ width:'150px',height:'71px' }}></Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "70%", height: "331px" }}></Box>
        </Box>
      </Box>
    </>
  );
}
