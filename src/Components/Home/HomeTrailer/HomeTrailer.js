import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";
import videoPlayer from "../../../Images/videoPlayer 1.png";
import pagImg1 from "../../../Images/pagination image 1.png";
import pagImg4 from "../../../Images/pagination image 3.png";
import pagImg3 from "../../../Images/pagination  image 4.png";
import pagImg2 from "../../../Images/pagination  image 5.png";

export default class HomeTrailer extends Component {
  state = {
    dataScroll: [
      {
        img: pagImg1,
      },
      {
        img: pagImg2,
      },
      {
        img: pagImg4,
      },
      {
        img: pagImg3,
      },
    ],
  };

  render() {
    return (
      <Box width={"100%"} height={"200vh"} bgcolor={"#1E2538"}>
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
            <Link style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                fontSize={"22px"}
                fontFamily={"Qanales"}
                fontWeight={"900"}
                color={"#fff"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
              >
                Все трейлеры
                <box-icon
                  size="sm"
                  color="white"
                  name="right-arrow-alt"
                ></box-icon>
              </Typography>
            </Link>
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
            <Box
              width={"100%"}
              height={"20%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                width={"50%"}
                height={"20%"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Box
                  width={"40%"}
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="hp"
                    fontSize={"45px"}
                    fontFamily={"Qaneles"}
                    fontWeight={"900"}
                    color={"#fff"}
                  >
                    Форсаж 9
                  </Typography>
                </Box>
                <Box
                  width={"60%"}
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Link>
                    <Button>
                      <box-icon
                        color="#6D7792"
                        type="logo"
                        name="vk"
                      ></box-icon>
                    </Button>
                  </Link>
                  <Link>
                    <Button>
                      <box-icon
                        color="#6D7792"
                        type="logo"
                        name="instagram"
                      ></box-icon>
                    </Button>
                  </Link>
                  <Link>
                    <Button>
                      <box-icon
                        color="#6D7792"
                        type="logo"
                        name="facebook"
                      ></box-icon>
                    </Button>
                  </Link>
                  <Link>
                    <Button>
                      <box-icon
                        color="#6D7792"
                        type="logo"
                        name="twitter"
                      ></box-icon>
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Box
                width={"20%"}
                height={"85px"}
                display={"flex"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <Button
                  sx={{
                    width: "58.87px",
                    height: "58.87px",
                    borderRadius: "10px",
                    bgcolor: "#1B2133",
                  }}
                >
                  <box-icon color="#fff" type="solid" name="like"></box-icon>
                </Button>
                <Button
                  sx={{
                    width: "58.87px",
                    height: "58.87px",
                    borderRadius: "10px",
                    bgcolor: "#1B2133",
                  }}
                >
                  <box-icon color="#fff" type="solid" name="dislike"></box-icon>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box width={"100%"} height={"300px"}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              gap={"20px"}
              overflow={" scroll hidden"}
              sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch", }}
            >
              {this.state.dataScroll.length !== 0
                ? this.state.dataScroll.map((item) => (
                    <Box
                      width={"449px"}
                      height={"252px"}
                      position={"relative"}
                      
                      sx={{
                        borderRadius: "10px",
                        "&:hover div":{display:'flex'}
                      }}
                    >
                      <Box
                        width={"100%"}
                        height={"245px"}
                        borderRadius={'10px'}
                        position={"absolute"}
                        bgcolor={"rgba(54, 87, 203, 0.65)"}
                        zIndex={2}
                        display={'none'}
                      >
                        <Typography
                          position={"absolute"}
                          top={"35%"}
                          left={"35%"}
                        >
                          <Button sx={{borderRadius:'50%'}}>
                          <PlayArrowIcon
                            sx={{
                              fontSize: "80px",
                              color: "#fff",
                            }}
                          />
                          </Button>
                        </Typography>
                      </Box>
                      <img
                        style={{ borderRadius: "10px" }}
                        src={item.img}
                        alt="#"
                      />
                    </Box>
                  ))
                : ""}
            </Box>

            
          </Box>
        </Box>
      </Box>
    );
  }
}
