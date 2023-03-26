import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <Box
        position={"relative"}
        sx={{
          width: {
            md: "202px",
            lg: "260px",
            xl: "339px",
          },
          height: {
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
            <Link style={{ textDecoration: "none", color: "blue" }}>
              <Box
                sx={{
                  width:{
                    md:"160px",
                    lg:'224px',
                    xl:'224px'
                  },
                  height:{
                    md:"49px",
                    lg:'71px',
                    xl:'71px'
                  }
                }}
                bgcolor={"#fff"}
                borderRadius={"10px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography variant="p"sx={{
                  fontSize:{
                    md:'14px',
                    lg:'18px',
                    xl:'18px'
                  }
                }}>Карточка фильма</Typography>
              </Box>
            </Link>
          </Box>
          <img
            width={"90%"}
            height={"100%"}
            style={{ borderRadius: "10px" }}
            src={this.props.img}
            alt="img"
          />
        </Box>
        <Box
          sx={{
            width: {
              md: "44px",
              lg: "62px",
              xl: "62px",
            },
            height: {
              md: "24px",
              lg: "33px",
              xl: "33px",
            },
          }}
          bgcolor={this.props.bgcolor}
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
                md: "15px",
                lg: "18px",
                xl: "18px",
              },
              lineHeight: {
                md: "20px",
                lg: "33px",
                xl: "33px",
              },
            }}
            fontWeight={"700"}
            color={"#fff"}
          >
            {this.props.ball}
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
                md: "15px",
                lg: "18px",
                xl: "18px",
              },
            }}
            fontFamily={"Qanales"}
            fontWeight={"700"}
            color={"#fff"}
          >
            {this.props.filmName}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: {
                md: "12px",
                lg: "15px",
                xl: "15px",
              },
            }}
            fontFamily={"Qanales"}
            fontWeight={"700"}
            color={"#F2F60F"}
          >
            {this.props.ganr}
          </Typography>
        </Box>
      </Box>
    );
  }
}
