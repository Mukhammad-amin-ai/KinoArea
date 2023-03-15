import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <Box width={"23%"} height={"60vh"} position={"relative"}>
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
            <Box
              width={"224px"}
              height={"60px"}
              bgcolor={"#fff"}
              borderRadius={"10px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography variant="p">Карточка фильма</Typography>
            </Box>
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
          width={"62px"}
          height={"33px"}
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
            fontSize={"18px"}
            lineHeight={"33px"}
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
            fontSize={"18px"}
            fontFamily={"Qanales"}
            fontWeight={"700"}
            color={"#fff"}
          >
            {this.props.filmName}
          </Typography>
          <Typography
            variant="p"
            fontSize={"15px"}
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
