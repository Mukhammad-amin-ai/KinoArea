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
              fontFamily={"Qanales"}
              fontWeight={"900"}
              color={"#fff"}
              sx={{
                fontSize: {
                  md: "40",
                  lg: "65px",
                  xl: "65px",
                },
              }}
            >
              Новые трейлеры
            </Typography>
            <Link style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    md: "18px",
                    lg: "22px",
                    xl: "22px",
                  },
                }}
                fontFamily={"Qanales"}
                fontWeight={"900"}
                color={"#fff"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
              >
                Все трейлеры
                <i class="bx bx-right-arrow-alt"></i>
              </Typography>
            </Link>
          </Box>
          <Box width={"100%"} height={"848px"}>
            <Box
              width={"100%"}
              height={"80%"}
              sx={{
                height: {
                  mf: "450px",
                  lh: "700px",
                  xl: "700px",
                },
              }}
              position={"relative"}
            >
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
                    sx={{
                      fontSize:{
                        md:"34px",
                        lg:'45px',
                        xl:'45px'
                      }
                    }}
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
                  <Link style={{ textDecoration: "none" }}>
                    <Button>
                      <Typography sx={{color: '#6D7792',fontSize:20}}>
                        <i class="bx bxl-vk"></i>
                      </Typography>
                    </Button>
                  </Link>
                  <Link >
                    <Button>
                      <Typography  sx={{color: '#6D7792',fontSize:20}} >
                        <i class="bx bxl-instagram"></i>
                      </Typography>
                    </Button>
                  </Link>
                  <Link>
                    <Button>
                      <Typography  sx={{color: '#6D7792',fontSize:20}}>
                        <i class="bx bxl-facebook"></i>
                      </Typography>
                    </Button>
                  </Link>
                  <Link>
                    <Button>
                      <Typography  sx={{color: '#6D7792',fontSize:20}}>
                        <i class="bx bxl-twitter"></i>
                      </Typography>
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
                    color:'#fff',
                    fontSize:'20px'
                    
                  }}
                >
                  <i class="bx bx-like"></i>
                </Button>
                <Button
                  sx={{
                    width: "58.87px",
                    height: "58.87px",
                    borderRadius: "10px",
                    bgcolor: "#1B2133",
                    color:'#fff',
                    fontSize:'20px'
                  }}
                >
                  <i class="bx bx-dislike"></i>
                </Button>
              </Box>
            </Box>
          </Box>
          {/* <Box width={"100%"} height={"300px"}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              overflow={"auto"}
              gap={'12px'}
              padding={'10px'}
              sx={{scrollSnapType:'x mandatory',scrollPadding:'10px'}}
            >
              {this.state.dataScroll.length !== 0
                ? this.state.dataScroll.map((item) => (
                    <Box
                      width={"342px"}
                      height={"245px"}
                      position={"relative"}
                      sx={{
                        flex:"0 0 100%",
                        scrollSnapAlign:"start",
                        scrollSnapStop:"always",
                        borderRadius: "10px",
                        "&:hover div": { display: "flex" },
                      }}
                    >
                      <Box
                        width={"100%"}
                        height={"245px"}
                        borderRadius={"10px"}
                        position={"absolute"}
                        bgcolor={"rgba(54, 87, 203, 0.65)"}
                        zIndex={2}
                        display={"none"}
                      >
                        <Typography
                          position={"absolute"}
                          top={"35%"}
                          left={"35%"}
                        >
                          <Button sx={{ borderRadius: "50%" }}>
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
                        
                        style={{borderRadius: "10px" }}
                        src={item.img}
                        alt="#"
                      />
                    </Box>
                  ))
                : ""}
            </Box>
          </Box> */}
        </Box>
      </Box>
    );
  }
}
