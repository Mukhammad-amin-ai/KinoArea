import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import videoPlayer from "../../../Images/videoPlayer 1.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export default class HomeTrailer extends Component {
  render() {
    return (
      <Box width={"100%"} height={"150vh"}>
        <Box width={"80%"} height={"100%"} marginLeft={"10%"}>
          <Box
            width={"100%"}
            height={"300px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="h3"
              fontSize={"65px"}
              fontFamily={"Qanales"}
              fontWeight={"900"}
              color={"#fff"}
            >
              Новые трейлеры
            </Typography>
            <Typography
              variant="p"
              fontSize={"22px"}
              fontFamily={"Qanales"}
              fontWeight={"900"}
              color={"#fff"}
            >
              Все трейлеры
            </Typography>
          </Box>
          <Box width={"100%"} height={"848px"}>
            <Box width={"100%"} height={"80%"} position={"relative"}>
              <img
                width={"100%"}
                style={{ borderRadius: "10px" }}
                src={videoPlayer}
                alt="#"
              />
              <Button
                sx={{
                  position: "absolute",
                  top: "42%",
                  left: "46%",
                  borderRadius: "50%",
                  ":hover": { backgroundColor: "rgba( 255,255,255, 0.2)" },
                }}
              >
                <PlayArrowIcon
                  sx={{
                    fontSize: "80px",
                    color: "white",
                  }}
                />
              </Button>
            </Box>
            <Box width={"100%"} height={"20%"} >
               <Box width={"40%"} height={"20%"}>
               <Typography variant="p">
                  Форсаж 9
                </Typography>
               </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
