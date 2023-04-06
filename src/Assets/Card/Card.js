import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Card({img,ball,bgcolor,ganr,filmName}) {
  let navigate=useNavigate()
  const cardOfFilm=(item)=>{
    navigate("/films/" + item.id)
  }
  return (
    <Box
      position={"relative"}
      sx={{
        width: {
          sm: 210,
          md: "202px",
          lg: "260px",
          xl: "339px",
        },
        height: {
          sm: 323,
          md: "311px",
          lg: "430px",
          xl: "520px",
        },
      }}
    >
      <Box
        width={"100%"}
        height={"70%"}
        sx={[{ "&:hover div": { display: "flex" } }]}
      >
        <Box
          width={"90%"}
          height={"70%"}
          bgcolor={"rgba(54, 87, 203, 0.65)"}
          borderRadius={"10px"}
          position={"absolute"}
          display={"none"}
          zIndex="3"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to={"/film"} style={{ textDecoration: "none", color: "blue" }}>
            <Box
              sx={{
                width: {
                  sm: 166,
                  md: "160px",
                  lg: "180px",
                  xl: "224px",
                },
                height: {
                  sm: 50,
                  md: "49px",
                  lg: "60px",
                  xl: "71px",
                },
              }}
              bgcolor={"#fff"}
              borderRadius={"10px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button onClick={() =>cardOfFilm}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: {
                      sm: 14,
                      md: "14px",
                      lg: "15px",
                      xl: "18px",
                    },
                  }}
                >
                  Карточка фильма
                </Typography>
              </Button>
            </Box>
          </Link>
        </Box>
        <img
          width={"90%"}
          height={"100%"}
          style={{ borderRadius: "10px" }}
          src={img}
          alt="img"
        />
      </Box>
      <Box
        sx={{
          width: {
            sm: 45,
            md: "44px",
            lg: "62px",
            xl: "62px",
          },
          height: {
            sm: 24,
            md: "24px",
            lg: "33px",
            xl: "33px",
          },
        }}
        bgcolor={bgcolor}
        position={"absolute"}
        top={"5px"}
        right={"35px"}
        borderRadius={"5px"}
      >
        <Typography
          variant="p"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontFamily={"Qanales"}
          sx={{
            fontSize: {
              sm: 12,
              md: "15px",
              lg: "18px",
              xl: "18px",
            },
            lineHeight: {
              sm: "25px",
              md: "20px",
              lg: "33px",
              xl: "33px",
            },
          }}
          fontWeight={"700"}
          color={"#fff"}
        >
          {ball}
        </Typography>
      </Box>
      <Box
        width={"100%"}
        height={"10%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: {
              sm: 15,
              md: "15px",
              lg: "15px",
              xl: "18px",
            },
          }}
          fontFamily={"Qanales"}
          fontWeight={"700"}
          color={"#fff"}
        >
          {filmName}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: {
              sm: 12,
              md: "12px",
              lg: "13px",
              xl: "15px",
            },
          }}
          fontFamily={"Qanales"}
          fontWeight={"700"}
          color={"#F2F60F"}
        >
          {ganr}
        </Typography>
      </Box>
    </Box>
  );
}
