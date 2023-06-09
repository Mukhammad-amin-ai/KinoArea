import {
  Box,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import popular1 from "../../../Images/popular 1.png";
import popular2 from "../../../Images/Popular 2.png";

export default class PopularActers extends Component {
  render() {
    return (
      <Box
        width={"100%"}
        height={"800px"}
        bgcolor={"#1E2538"}
        display={"flex"}
        flexDirection="column"
        gap={"40px"}
        sx={{
          height: {
            md: 500,
            lg: 650,
            xl: 800,
          },
        }}
      >
        <Box
          width={"80%"}
          height={"83px"}
          marginLeft={"8%"}
          display={"flex"}
          justifyContent={"space-evenly"}
          sx={{
            flexDirection: {
              sm: "column",
              md: "column",
              lg: "unset",
              xl: "unset",
            },
          }}
        >
          <Box
            width={"45%"}
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontSize: {
                  sm: 29,
                  md: "35px",
                  lg: "45px",
                  xl: "50px",
                },
              }}
              variant="h3"
              fontFamily={"Qanelas"}
              color={"#fff"}
            >
              Популярные персоны
            </Typography>
          </Box>
          <Box
            width={"45%"}
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              justifyContent: {
                sm: "start",
                md: "start",
                lg: "center",
                xl: "center",
              },
            }}
          >
            <List
              sx={{
                width: "200px",
                display: "flex",
                color: "#6D717D",
              }}
            >
              <ListItem sx={{ ":hover div": { color: "#fff" } }}>
                <ListItemButton
                  sx={{
                    width: "80px",
                  }}
                >
                  <Typography>За год</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ ":hover div": { color: "#fff" } }}>
                <ListItemButton
                  sx={{
                    width: "110px",
                  }}
                >
                  <Typography>За месяц</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ ":hover div": { color: "#fff" } }}>
                <ListItemButton
                  sx={{
                    width: "120px",
                  }}
                >
                  <Typography>За неделю</Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            height: {
              md: 266,
              lg: 380,
              xl: 444,
            },
            flexDirection: {
              sm: "column",
              md: "unset",
              lg: "unset",
              xl: "unset",
            },
            gap: {
              sm: 5,
              md: 0,
              lg: 0,
              xl: 0,
            },
            alignItems: {
              sm: "center",
              md: "unset",
              lg: "unset",
              xl: "unset",
            },
          }}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            <Box
              sx={{
                width: {
                  xs: 179,
                  sm:280,
                  md: 266,
                  lg: 380,
                  xl: 444,
                },
                height: {
                  xs: 179,
                  sm: 280,
                  md: 266,
                  lg: 380,
                  xl: 444,
                },
              }}
            >
              <Card
                sx={{
                  width: {
                    xs: 179,
                    sm: 280,
                    md: 266,
                    lg: 380,
                    xl: 444,
                  },
                  height: {
                    xs: 179,
                    sm: 280,
                    md: 266,
                    lg: 380,
                    xl: 444,
                  },
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: {
                      xs: 179,
                      sm: 280,
                      md: 266,
                      lg: 380,
                      xl: 444,
                    },
                    height: {
                      xs: 179,
                      sm: 280,
                      md: 266,
                      lg: 380,
                      xl: 444,
                    },
                  }}
                  image={popular1}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      sm: 12,
                      md: 12,
                      lg: 15,
                      xl: 15,
                    },
                  }}
                  fontFamily={"Qanelas"}
                  color={"#F2F60F;"}
                  position={"absolute"}
                  top={"20px"}
                  left={"20px"}
                >
                  1-е место
                </Typography>
                <Box
                  width={"300px"}
                  height={"100px"}
                  position={"absolute"}
                  left={"40px"}
                  sx={{
                    bottom: {
                      sm: -20,
                      md: -20,
                      lg: 0,
                      xl: 0,
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    fontSize={"27px"}
                    fontFamily={"Qanales"}
                    fontWeight={"700"}
                    color={"#fff"}
                    sx={{
                      fontSize: {
                        sm: 20,
                        md: 20,
                        lg: 27,
                        xl: 27,
                      },
                    }}
                  >
                    Квентин Тарантино
                  </Typography>
                  <Typography
                    variant="h2"
                    fontSize={"20px"}
                    fontFamily={"Qanales"}
                    fontWeight={"600"}
                    color={"rgba(255, 255, 255, 0.35);"}
                    sx={{
                      fontSize: {
                        sm: 15,
                        md: 15,
                        lg: 20,
                        xl: 20,
                      },
                    }}
                  >
                    Quentin Tarantino
                  </Typography>
                  <Typography
                    variant="h2"
                    fontSize={"15px"}
                    fontFamily={"Qanales"}
                    fontWeight={"500"}
                    sx={{
                      fontSize: {
                        sm: 12,
                        md: 12,
                        lg: 15,
                        xl: 15,
                      },
                    }}
                    color={"#F2F60F"}
                  >
                    57 лет
                  </Typography>
                </Box>
              </Card>
            </Box>
            <Box
              sx={{
                width: {
                  xs: 179,
                  sm: 280,
                  md: 266,
                  lg: 380,
                  xl: 444,
                },
                height: {
                  xs: 179,
                  sm: 280,
                  md: 266,
                  lg: 380,
                  xl: 444,
                },
              }}
            >
              <Card
                sx={{
                  width: {
                    xs: 179,
                    sm: 280,
                    md: 266,
                    lg: 380,
                    xl: 444,
                  },
                  height: {
                    xs: 179,
                    sm: 280,
                    md: 266,
                    lg: 380,
                    xl: 444,
                  },
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: {
                      xs: 179,
                      sm: 280,
                      md: 266,
                      lg: 380,
                      xl: 444,
                    },
                    height: {
                      xs: 179,
                      sm: 280,
                      md: 266,
                      lg: 380,
                      xl: 444,
                    },
                  }}
                  image={popular2}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      sm: 12,
                      md: 12,
                      lg: 15,
                      xl: 15,
                    },
                  }}
                  fontFamily={"Qanelas"}
                  color={"#F2F60F;"}
                  position={"absolute"}
                  top={"20px"}
                  left={"20px"}
                >
                  2-е место
                </Typography>
                <Box
                  width={"300px"}
                  height={"100px"}
                  position={"absolute"}
                  sx={{
                    bottom: {
                      sm: -20,
                      md: -20,
                      lg: 0,
                      xl: 0,
                    },
                  }}
                  left={"40px"}
                >
                  <Typography
                    variant="h2"
                    fontFamily={"Qanales"}
                    fontWeight={"700"}
                    color={"#fff"}
                    sx={{
                      fontSize: {
                        sm: 20,
                        md: 20,
                        lg: 27,
                        xl: 27,
                      },
                    }}
                  >
                    Джейсон Стейтем
                  </Typography>
                  <Typography
                    variant="h2"
                    fontFamily={"Qanales"}
                    fontWeight={"600"}
                    color={"rgba(255, 255, 255, 0.35);"}
                    sx={{
                      fontSize: {
                        sm: 15,
                        md: 15,
                        lg: 20,
                        xl: 20,
                      },
                    }}
                  >
                    Jason Statham
                  </Typography>
                  <Typography
                    variant="h2"
                    fontSize={"15px"}
                    fontFamily={"Qanales"}
                    fontWeight={"500"}
                    sx={{
                      fontSize: {
                        sm: 12,
                        md: 12,
                        lg: 15,
                        xl: 15,
                      },
                    }}
                    color={"#F2F60F"}
                  >
                    52 года
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                sm: 560,
                md: 296,
                lg: 496,
                xl: 496,
              },
              height: {
                sm: 321,
                md: 266,
                lg: 380,
                xl: 444,
              },
            }}
            borderRadius={"10px"}
            bgcolor={"#1B2133"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              width={"90%"}
              height={"111px"}
              marginLeft={"5%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={"1px solid"}
            >
              <Box width={"40%"} height={"50%"}>
                <Typography
                  variant="h4"
                  color={"#fff"}
                  fontFamily={"Qanelas"}
                  fontWeight={"600"}
                  sx={{
                    fontSize: {
                      sm: 15,
                      md: 13,
                      lg: 18,
                      xl: 20,
                    },
                  }}
                >
                  Тинто Брасс
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  fontWeight={"600"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                >
                  Tinto Brass
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                  color={"#F2F60F"}
                >
                  87 лет
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                sx={{
                  fontSize: {
                    sm: 15,
                    md: 15,
                    lg: 18,
                    xl: 20,
                  },
                }}
                fontWeight={"600"}
              >
                3-е место
              </Typography>
            </Box>
            <Box
              width={"90%"}
              height={"111px"}
              marginLeft={"5%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={"1px solid"}
            >
              <Box width={"40%"} height={"50%"}>
                <Typography
                  variant="h4"
                  color={"#fff"}
                  fontFamily={"Qanelas"}
                  fontWeight={"600"}
                  sx={{
                    fontSize: {
                      sm: 15,
                      md: 13,
                      lg: 18,
                      xl: 20,
                    },
                  }}
                >
                  Джеки Чан
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  fontWeight={"600"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                >
                  Jackie Chan
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                  color={"#F2F60F"}
                >
                  66 лет
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                sx={{
                  fontSize: {
                    sm: 15,
                    md: 15,
                    lg: 18,
                    xl: 20,
                  },
                }}
                fontWeight={"600"}
              >
                4-е место
              </Typography>
            </Box>
            <Box
              width={"90%"}
              height={"111px"}
              marginLeft={"5%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={"1px solid"}
            >
              <Box width={"40%"} height={"50%"}>
                <Typography
                  variant="h4"
                  color={"#fff"}
                  fontFamily={"Qanelas"}
                  sx={{
                    fontSize: {
                      sm: 15,
                      md: 13,
                      lg: 18,
                      xl: 20,
                    },
                  }}
                  fontWeight={"600"}
                >
                  Том Харди
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                  fontWeight={"600"}
                >
                  Tom Hardy
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                  color={"#F2F60F"}
                >
                  42 года
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                sx={{
                  fontSize: {
                    sm: 15,
                    md: 15,
                    lg: 18,
                    xl: 20,
                  },
                }}
                fontWeight={"600"}
              >
                5-е место
              </Typography>
            </Box>
            <Box
              width={"90%"}
              height={"111px"}
              marginLeft={"5%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box width={"40%"} height={"50%"}>
                <Typography
                  variant="h4"
                  color={"#fff"}
                  fontFamily={"Qanelas"}
                  sx={{
                    fontSize: {
                      sm: 15,
                      md: 12,
                      lg: 18,
                      xl: 20,
                    },
                  }}
                  fontWeight={"600"}
                >
                  Акшай Кумар
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                  fontWeight={"600"}
                >
                  Akshay Kumar
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{
                    fontSize: {
                      sm: 11,
                      md: 11,
                      lg: 13,
                      xl: 15,
                    },
                  }}
                  color={"#F2F60F"}
                >
                  52 года
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                sx={{
                  fontSize: {
                    sm: 15,
                    md: 15,
                    lg: 18,
                    xl: 20,
                  },
                }}
                fontWeight={"600"}
              >
                6-е место
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
