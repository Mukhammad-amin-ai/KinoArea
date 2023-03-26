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
                },
              }}
            >
              <Box
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: {
                    md: "310px",
                    lg: "433px",
                    xl: "433px",
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
                    sm: "100%",
                    md: "100%",
                    lg: "765px",
                    xl: "765px",
                  },
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#838D97",
                    flexWrap: {
                      sm: "wrap",
                      md:'wrap',
                      lg:'unset',
                      xl:'unset'
                    },
                  }}
                >
                  <ListItem
                    sx={{
                      width: {
                        sm: 100,
                      },
                    }}
                  >
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Все</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  sx={{
                      width: {
                        sm: 130,
                      },
                    }}>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Боевики </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  sx={{
                      width: {
                        sm: 180,
                      },
                    }}>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Приключения </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  sx={{
                      width: {
                        sm: 150,
                      },
                    }}>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Комедии</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  sx={{
                      width: {
                        sm: 150,
                      },
                    }}>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Фантастика </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  sx={{
                      width: {
                        sm: 100,
                        
                      },
                    }}>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography >Триллеры </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  sx={{
                      width: {
                        sm: 100,
                      },
                    }}>
                    <ListItemButton
                      sx={{
                        ":hover": { color: "#fff", background: "transparent" },
                      }}
                    >
                      <Typography>Драма </Typography>
                    </ListItemButton>
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
