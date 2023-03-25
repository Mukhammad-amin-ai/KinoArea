import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import news1 from "../../../Images/news image 1.png";
import news2 from "../../../Images/news image 2.png";
import news3 from "../../../Images/news image 3.png";
import news4 from "../../../Images/news image 4.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default class LatestNews extends Component {
  state = {
    newsData: [
      {
        img: news2,
        time: "15 Апр 2020",
        news: "Как изменили Соника с последнего анонса ",
      },
      {
        img: news1,
        time: "15 Апр 2020",
        news: "Не время умирать. Перенос релиза фильма  ",
      },
      {
        img: news3,
        time: "15 Апр 2020",
        news: "От этой новости вы будете шокированы до завтра",
      },
      {
        img: news4,
        time: "13 Апр 2020",
        news: "Вот это, конечно, да!",
      },
    ],
  };

  render() {
    return (
      <Box width={"100%"} height={"1200px"} bgcolor={"#1E2538"}>
        <Box width={"90%"} marginLeft={"5%"} height={"100%"}>
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
                  md: 40,
                  lg: 65,
                  xl: 65,
                },
              }}
            >
              Последние новости
            </Typography>
            <Link style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                fontFamily={"Qanales"}
                fontWeight={"900"}
                color={"#fff"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                sx={{
                  fontSize: {
                    md: 18,
                    lg: 22,
                    xl: 22,
                  },
                }}
              >
                Все новости
                <box-icon
                  size="sm"
                  color="white"
                  name="right-arrow-alt"
                ></box-icon>
              </Typography>
            </Link>
          </Box>
          <Box
            width={"100%"}
            height={"1200px"}
            display={"flex"}
            alignItems={"stretch"}
            gap={"20px"}
            sx={{
              flexDirection:{
                md:'column',
                lg:'unset',
                xl:'unset'
              }
            }}
          >
            <Box
              height={"100%"}
              position={"relative"}
              borderRadius={"10px"}
              overflow={"hidden"}
              sx={{
                width: {
                  md: 850,
                  lg: 1159,
                  xl: 1159,
                },
                height: {
                  md: 566,
                  lg: 772,
                  xl: 772,
                },
              }}
            >
              <img width={"100%"} height={"100%"} src={news1} alt="news" />
              <Box
                width={"180px"}
                height={"30px"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                position={"absolute"}
                top={"20px"}
                left={"20px"}
                color={"#fff"}
                fontFamily={"Qanales"}
                sx={{
                  fontSize:{
                    md:15,
                    lg:15,
                    xl:15
                  }
                }}
              >
                15 Апр 2020
                <Typography display={"flex"}>
                  <RemoveRedEyeIcon />1
                </Typography>
                <Typography display={"flex"}>
                  <ChatBubbleIcon />1
                </Typography>
              </Box>
              <Box
                width={"700px"}
                height={"170px"}
                position={"absolute"}
                left={"20px"}
                bottom={"30px"}
              >
                <Typography
                  variant="h3"
                  fontWeight={"900"}
                  color={"#fff"}
                  fontFamily={"Qanales"}
                  sx={{
                    fontSize:{
                      md:25,
                      lg:30,
                      xl:30
                    }
                  }}
                >
                  Не время умирать. Перенос релиза фильма
                </Typography>
                <Typography
                  variant="h3"
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  fontWeight={"500"}
                  color={"#fff"}
                  fontFamily={"Qanales"}
                  sx={{
                    fontSize:{
                      md:15,
                      lg:18,
                      xl:18
                    }
                  }}
                >
                  Но действия представителей оппозиции в равной степени
                  предоставлены сами себе. В рамках спецификации современных
                  стандартов, стремящиеся вытеснить традиционное производство,
                  нанотехнологии указаны как претенденты на роль ключевых
                  факторов.
                </Typography>
              </Box>
            </Box>
            <Box
              height={"100%"}
              display={"flex"}
              gap={"13px"}
              sx={{
                width: {
                  md: 850,
                  lg: 254,
                  xl: 254,
                },
                height:{
                  md:'auto',
                  lg:'100%',
                  xl:'100%'
                },
                flexDirection:{
                  md:'unset',
                  lg:'column',
                  xl:'column'
                }
              }}
            >
              {this.state.newsData.length !== 0
                ? this.state.newsData.map((item) => (
                    <Box
                      borderRadius={"10px"}
                      overflow={"hidden"}
                      position={"relative"}
                      color={"#fff"}
                      sx={{
                        width: {
                          md: 205,
                          lg: 254,
                          xl: 254,
                        },
                        height: {
                          md: 147,
                          lg: 182,
                          xl: 182,
                        },

                        ":hover div": {
                          display: "flex",
                        },
                        ":hover p": {
                          display: "none",
                        },
                      }}
                    >
                      <Box
                        width={"100%"}
                        height={"100%"}
                        bgcolor={"rgba(54, 87, 203, 0.65)"}
                        display={"none"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        position={"absolute"}
                      >
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          borderRadius={"10px"}
                          bgcolor={"transparent"}
                          border={"3px solid #fff"}
                          sx={{
                            width:{
                              md:150,
                              lg:180,
                              xl:180
                            },
                            height:{
                              md:49,
                              lg:53,
                              xl:53
                            }
                          }}
                        >
                          <Typography
                            variant="h5"
                            fontFamily={"Qanelas"}
                            sx={{
                              fontSize:{
                                md:15,
                                lg:18,
                                xl:18
                              }
                            }}
                          >
                            Читать новость
                          </Typography>
                        </Box>
                      </Box>
                      <img
                        width={"100%"}
                        height={"100%"}
                        src={item.img}
                        alt=""
                      />
                      <Typography
                        position={"absolute"}
                        top={"10px"}
                        left={"10px"}
                        fontFamily={"Qanelas"}
                        sx={{
                          fontSize:{
                            md:13,
                            lg:15,
                            xl:15
                          }
                        }}
                      >
                        {item.time}
                      </Typography>
                      <Typography
                        position={"absolute"}
                        bottom={"10px"}
                        left={"10px"}
                        fontSize={"18px"}
                        fontFamily={"Qanelas"}
                        sx={{
                          fontSize:{
                            md:15,
                            lg:18,
                            xl:18
                          }
                        }}
                      >
                        {item.news}
                      </Typography>
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
