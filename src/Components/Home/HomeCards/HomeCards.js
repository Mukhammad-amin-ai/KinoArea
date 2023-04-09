import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "../../../Assets/Card/Card";
import Navbar from "../../../Assets/Navbar/Navbar";
import img from '../../../Images/bgsvg.svg'
import HomeTrailer from "../HomeTrailer/HomeTrailer";
import Popular from "../Popular/Popular";
import PopularActers from "../PopularActers/PopularActers";
import LatestNews from "../LatestNews/LatestNews";
import Waitlist from "../Waitlist/Waitlist";
import MostPopular from "../MostPopular/MostPopular";
import Footer from "../../../Assets/Footer/Footer";

export default function HomeCards({ cards }) {

  


  return (
    <>
    
      <Stack
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor:"#202434",
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize:'fixed',
        }}
      >
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
              alignItems: "center",
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
                justifyContent: {
                  sm: "start",
                  md: "start",
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
        <Box
          width={"90%"}
          height={"100%"}
          marginLeft={"8%"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          {cards.length !== 0 
            ? cards.map((item, index) => (
            <Card
            key={index}
              id={item.id}
              ball={item.ball}
              img={item.img}
              filmName={item.filmName}
              ganr={item.ganr}
              bgcolor={item.bgcolor}
            />
          )):""}
          <Box
            width={"100%"}
            height="200px"
            display='flex'
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              // onClick={btnObject}
              sx={{
                width: {
                  md: "164px",
                  lg: "200px",
                  xl: "200px",
                },
                height: {
                  md: "54px",
                  lg: "71px",
                  xl: "71px",
                },
                border: "1px solid white",
                color: "white",
              }}
            >
              <Typography variant="p">Все новинки</Typography>
            </Button>
          </Box>
        </Box>
      </Stack>
      <HomeTrailer/>
      <Popular/>
      <PopularActers/>
      <LatestNews/>
      <Waitlist/>
      <MostPopular/>
      <Footer/>
    </>
  );
}
