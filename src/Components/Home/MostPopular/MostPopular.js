import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import most1 from "../../../Images/most 1.png";
import most2 from "../../../Images/most 2.png";
import most3 from "../../../Images/most 3.png";
import most4 from "../../../Images/most 4.png";
import most5 from "../../../Images/most 5.png";

export default class MostPopular extends Component {
  state = {
    mostPopular: [
      {
        img: most1,
        name1: "1. Бладшот",
        money: "$13 млн",
        month: " $15.1 млн за 4 недели",
      },
      {
        img: most2,
        name1: "2. Вперёд",
        money: "$6.8 млн ",
        month: " $41.4 млн за 4 недели",
      },
      {
        img: most3,
        name1: "3. Человек-невидимка",
        money: "$6.2 млн",
        month: " $58.3 млн за 3 недели",
      },
      {
        img: most4,
        name1: "4. Соник в кино",
        money: "$2.9 млн",
        month: "$15.1 млн за 4 недели",
      },
      {
        img: most5,
        name1: "5. Джентльмены",
        money: "$1.8 млн",
        month: "$78.7 млн за 11 недель",
      },
    ],
  };
  render() {
    return (
      <Box
        width={"100%"}
        height={"300px"}
        sx={{
          height: {
            sm: 800,
            md: 600,
            lg: 500,
            xl: 300,
          },
        }}
        bgcolor={"#151A26"}
      >
        <Box width={"80%"} height={"100%"} marginLeft={"10%"}>
          {/* for large size */}
          <Box
            width={"100%"}
            height={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              display: {
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <Box
              width={"60%"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              color={"#fff"}
            >
              <Typography
                variant="h1"
                fontFamily={"Qanales"}
                fontWeight={"900"}
                sx={{
                  fontSize: {
                    sm: 35,
                    md: 40,
                    lg: 50,
                    xl: 65,
                  },
                }}
              >
                Кассовые сборы
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    sm: 15,
                    md: 15,
                    lg: 18,
                    xl: 20,
                  },
                }}
              >
                13 марта — 15 марта
              </Typography>
            </Box>
            <Box
              width={"40%"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Button
                sx={{
                  width: "160px",
                  height: "50px",
                }}
              >
                <Typography
                  variant="p"
                  color={"#6D717D"}
                  sx={{
                    fontSize: {
                      sm: 13,
                      md: 13,
                      lg: 15,
                      xl: 18,
                    },
                    ":hover": { color: "#fff" },
                  }}
                >
                  Россия
                </Typography>
              </Button>
              <Button
                sx={{
                  width: {
                    md: 200,
                    lg: 160,
                    xl: 160,
                  },
                  height: "50px",
                }}
              >
                <Typography
                  variant="p"
                  color={"#6D717D"}
                  sx={{
                    fontSize: {
                      sm: 13,
                      md: 13,
                      lg: 15,
                      xl: 18,
                    },
                    ":hover": { color: "#fff" },
                  }}
                >
                  Весь мир
                </Typography>
              </Button>
              <Button
                sx={{
                  width: {
                    md: 260,
                    lg: 180,
                    xl: 160,
                  },
                  height: "50px",
                }}
              >
                <Typography
                  variant="p"
                  color={"#6D717D"}
                  sx={{
                    fontSize: {
                      sm: 13,
                      md: 13,
                      lg: 15,
                      xl: 18,
                    },
                    ":hover": { color: "#fff" },
                  }}
                >
                  США и Канада
                </Typography>
              </Button>
            </Box>
          </Box>
          {/* for medium size */}
          <Box
            width={"100%"}
            height={"100px"}
            sx={{
              display: {
                sm: "flex",
                md: "flex",
                lg: "none",
                xl: "none",
              },
            }}
            justifyContent={"space-between"}
          >
            <Box
              width={"535px"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                color={"#fff"}
              >
                <Typography
                  variant="h1"
                  fontSize={"65px"}
                  fontFamily={"Qanales"}
                  fontWeight={"900"}
                  sx={{
                    fontSize: {
                      sm: 35,
                      md: 40,
                      lg: 50,
                      xl: 65,
                    },
                  }}
                >
                  Кассовые сборы
                </Typography>
              </Box>
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
              >
                <Button
                  sx={{
                    width: "160px",
                    height: "50px",
                  }}
                >
                  <Typography
                    variant="p"
                    color={"#6D717D"}
                    sx={{
                      fontSize: {
                        sm: 13,
                        md: 13,
                        lg: 15,
                        xl: 18,
                      },
                      ":hover": { color: "#fff" },
                    }}
                  >
                    Россия
                  </Typography>
                </Button>
                <Button
                  sx={{
                    width: "160px",
                    height: "50px",
                  }}
                >
                  <Typography
                    variant="p"
                    color={"#6D717D"}
                    sx={{
                      fontSize: {
                        sm: 13,
                        md: 13,
                        lg: 15,
                        xl: 18,
                      },
                      ":hover": { color: "#fff" },
                    }}
                  >
                    Весь мир
                  </Typography>
                </Button>
                <Button
                  sx={{
                    width: "160px",
                    height: "50px",
                  }}
                >
                  <Typography
                    variant="p"
                    color={"#6D717D"}
                    sx={{
                      fontSize: {
                        sm: 13,
                        md: 13,
                        lg: 15,
                        xl: 18,
                      },
                      ":hover": { color: "#fff" },
                    }}
                  >
                    США и Канада
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Typography variant="h1" fontSize={"20px"} color={"white"} sx={{
              fontSize:{
                sm:15,
                md:17
              }
            }}>
              13 марта — 15 марта
            </Typography>
          </Box>

          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            sx={{
              height: {
                sm: "90%",
                md: "80%",
                lg: "70%",
                xl: "60%",
              },
              justifyContent: {
                sm: "space-between",
                md: "space-between",
                lg: "unset",
                xl: "unset",
              },
              flexWrap: {
                sm: "wrap",
                md: "wrap",
                lg: "wrap",
                xl: "unset",
              },
            }}
          >
            {this.state.mostPopular.length !== 0
              ? this.state.mostPopular.map((item) => (
                  <Box
                    width={"300px"}
                    height={"141px"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <img src={item.img} alt="most" />
                    <Box>
                      <Typography
                        color={"#fff"}
                        sx={{
                          fontSize: {
                            sm: 13,
                            md: 13,
                            lg: 15,
                            xl: 18,
                          },
                        }}
                      >
                        {item.name1}
                      </Typography>
                      <Typography
                        color={"#F2F60F"}
                        sx={{
                          fontSize: {
                            sm: 11,
                            md: 11,
                            lg: 13,
                            xl: 15,
                          },
                        }}
                      >
                        {item.money}
                      </Typography>
                      <Typography
                        color={" rgba(255, 255, 255, 0.41)"}
                        sx={{
                          fontSize: {
                            sm: 11,
                            md: 11,
                            lg: 12,
                            xl: 14,
                          },
                        }}
                      >
                        {item.month}
                      </Typography>
                    </Box>
                  </Box>
                ))
              : ""}
          </Box>
        </Box>
      </Box>
    );
  }
}
