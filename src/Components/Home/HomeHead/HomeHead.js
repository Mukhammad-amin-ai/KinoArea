import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React, { Component } from "react";
import Footer from "../../../Assets/Footer/Footer";
import Navbar from "../../../Assets/Navbar/Navbar";
import HomeCards from "../HomeCards/HomeCards";
import HomeTrailer from "../HomeTrailer/HomeTrailer";
import LatestNews from "../LatestNews/LatestNews";
import MostPopular from "../MostPopular/MostPopular";
import Popular from "../Popular/Popular";
import PopularActers from "../PopularActers/PopularActers";
import Waitlist from "../Waitlist/Waitlist";
import "./HomeHead.css";
export default class Home_head extends Component {
  render() {
    return (
      <>
        <div className="HomeHead">
          <Box width={"100%"} height={"30%"}>
            <Navbar />
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              sx={{
                flexDirection: {
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xl: "unset",
                },
                alignItems: {
                  sm: "center",
                  md: "center",
                  lg: "unset",
                  xl: "unset",
                },
              }}
            >
              <Box
                height={100}
                display={"flex"}
                justifyContent={"start"}
                alignItems={"center"}
                sx={{
                  width: {
                    md: "84%",
                    lg: "433px",
                    xl: "400px",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  fontFamily={"Qanelas"}
                  fontWeight={"900"}
                  color={"#fff"}
                  sx={{
                    fontSize: {
                      xs: 38,
                      sm: 40,
                      md: "40px",
                      lg: "45px",
                      xl: "50px",
                    },
                  }}
                >
                  Сейчас в кино
                </Typography>
              </Box>

              <Box
                height={"100%"}
                display={"flex"}
                sx={{
                  width: {
                    sm: "87%",
                    md: "87%",
                    lg: "765px",
                    xl: "765px",
                  },
                  justifyContent:{
                    sm:'start',
                    md:'start'
                  }
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#838D97",
                    flexWrap: {
                      sm: "wrap",
                      md: "wrap",
                      lg: "unset",
                      xl: "unset",
                    },
                  }}
                >
                  <ListItem
                    sx={{
                      width: "auto",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 13,
                          sm: 13,
                          md: 15,
                          lg: 15,
                          xl: 18,
                        },
                      }}
                    >
                      Все
                    </Typography>
                  </ListItem>
                  <ListItem
                      sx={{
                        width: "auto",
                      }}
                   
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 13,
                          sm: 13,
                          md: 15,
                          lg: 15,
                          xl: 18,
                        },
                      }}
                    >
                      Боевики{" "}
                    </Typography>
                  </ListItem>
                  <ListItem
                      sx={{
                        width: "auto",
                      }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 13,
                          sm: 13,
                          md: 15,
                          lg: 15,
                          xl: 18,
                        },
                      }}
                    >
                      Приключения{" "}
                    </Typography>
                  </ListItem>
                  <ListItem
                     sx={{
                      width: "auto",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 13,
                          sm: 13,
                          md: 15,
                          lg: 15,
                          xl: 18,
                        },
                      }}
                    >
                      Комедии
                    </Typography>
                  </ListItem>
                  <ListItem
                      sx={{
                        width: "auto",
                      }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 13,
                          sm: 13,
                          md: 15,
                          lg: 15,
                          xl: 18,
                        },
                      }}
                    >
                      Фантастика{" "}
                    </Typography>
                  </ListItem>
                  <ListItem
                      sx={{
                        width: "auto",
                      }}
                     
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 13,
                          sm: 13,
                          md: 15,
                          lg: 15,
                          xl: 18,
                        },
                      }}
                    >
                      Триллеры{" "}
                    </Typography>
                  </ListItem>
                  <ListItem
                      sx={{
                        width: "auto",
                      }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 13,
                          sm: 13,
                          md: 15,
                          lg: 15,
                          xl: 18,
                        },
                      }}
                    >
                      Драма{" "}
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
          <HomeCards />
          <HomeTrailer />
          <Popular />
          <PopularActers />
          <LatestNews />
          <Waitlist />
          <MostPopular />
          <Footer />
        </div>
      </>
    );
  }
}
