import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../Assets/Navbar/Navbar";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
              <img
                style={{ borderRadius: "15px" }}
                src={cards[card - 1].img}
                alt="#"
              />
            </Box>
            <Box
              sx={{
                width: "705px",
                height: "465px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Главная      Фильмы      Побег из Претории */}
              {/* <Typography sx={{
                  color: "#fff",

               }}>
                Главная    Фильмы    
               </Typography> */}
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

              <Box sx={{ width: "150px", height: "71px" }}>
                <Box
                  sx={{
                    width: "71px",
                    height: "71px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    {cards[card - 1].ball}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Kinoarea
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: 500,
                  fontFamily: "Qanales",
                }}
              >
                {cards[card - 1].textOF}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  gap:'37px'
                }}
              >
                <Button
                  sx={{
                    width: "260px",
                    height: "71px",
                    border: "2px solid white",
                    borderRadius: "10px",
                  }}
                >
                  <Typography sx={{color:'#fff' , display: "flex",
                  alignItems: "center", gap:'10px',fontSize:'17px'}}> <PlayArrowIcon/>  Смотреть трейлер</Typography>
                </Button>
                <Box
                
                display={"flex"}
              >
                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-vk"></i>
                </Button>

                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-instagram"></i>
                </Button>
                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-facebook"></i>
                </Button>
                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-twitter"></i>
                </Button>
              </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "70%", height: "331px" }}></Box>
        </Box>
      </Box>
    </>
  );
}
