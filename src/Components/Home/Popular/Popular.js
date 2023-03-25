import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Stack } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "../../../Assets/Card/Card";
import img1 from "../../../Images/image 2.png";
import img2 from "../../../Images/image 10.png";
import img3 from "../../../Images/image 11.png";
import img4 from "../../../Images/image 12.png";

export default class Popular extends Component {
  state = {
    dataPaginationCard: [
      {
        img: img1,
        ball: "8.50",
        filmName: "Джокер",
        ganr: "Триллер, драма, криминал",
        bgcolor: "#4BCB36",
      },
      {
        img: img2,
        ball: "7.80",
        filmName: "История игрушек 4",
        ganr: "Мультфильм, фэнтези, комедия...",
        bgcolor: " #4BCB36",
      },
      {
        img: img3,
        ball: "7.70",
        filmName: "Однажды в… Голливуде",
        ganr: "Драма, комедия",
        bgcolor: " #4BCB36",
      },
      {
        img: img4,
        ball: "7.10",
        filmName: "Солнцестояние",
        ganr: "Ужасы, триллер, драма",
        bgcolor: " #4BCB36",
      },
    ],
    listItemMassive: [
      {
        Typography: "2020",
      },
      {
        Typography: "2019",
      },
      {
        Typography: "2018",
      },
      {
        Typography: "2017",
      },
      {
        Typography: "2016",
      },
      {
        Typography: "2015",
      },
    ],
  };
  render() {
    return (
      <Box width={"100%"} height={"800px"} bgcolor={"#1E2538"}>
        <Box
          width={"80%"}
          height={"100%"}
          marginLeft={"10%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box
            width={"100%"}
            height={"100px"}
            display={"flex"}
            gap={"10px"}
            sx={{
              flexDirection: {
                md: "column",
                lg: "unset",
                xl: "unset",
              },
            }}
          >
            <Box
              width={"40%"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
            >
              <Typography
                variant="p"
                color={"#fff"}
                fontFamily={"Qanelas"}
                fontSize={"45px"}
                fontWeight={"900"}
                sx={{
                  fontSize: {
                    md: "32px",
                    lg: "45px",
                    xl: "45px",
                  },
                }}
              >
                Популярные фильмы
              </Typography>
            </Box>
            <Box width={"50%"} height={"100%"}>
              <List
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "rgba(255, 255, 255, 0.35)",
                }}
              >
                <ListItem>
                  <ListItemButton sx={{ width: "120px" }}>
                    <Typography
                      variant="h2"
                      fontFamily={"Qanelas"}
                      fontWeight={"700"}
                      sx={{
                        fontSize: {
                          md: "15px",
                          lg: "18px",
                          xl: "18px",
                        },
                      }}
                    >
                      Всё время
                    </Typography>
                  </ListItemButton>
                </ListItem>

                {this.state.listItemMassive.length !== 0
                  ? this.state.listItemMassive.map((item) => (
                      <ListItem>
                        <ListItemButton>
                          <Typography
                            variant="h2"
                            sx={{
                              fontSize: {
                                md: "15px",
                                lg: "18px",
                                xl: "18px",
                              },
                            }}
                            fontFamily={"Qanelas"}
                            fontWeight={"700"}
                          >
                            {item.Typography}
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))
                  : ""}
              </List>
            </Box>
          </Box>
          <Box
            width={"100%"}
            height={"600px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box
              width={"100%"}
              sx={{
                height:{
                  md:"50%",
                  lg:'90%',
                  xl:'90%'
                }
              }}
              height={"90%"}
              display={"flex"}
              alignItems={"end"}
              justifyContent={"space-evenly"}
            >
              {this.state.dataPaginationCard.length !== 0
                ? this.state.dataPaginationCard.map((item) => (
                    <Card
                      ball={item.ball}
                      img={item.img}
                      filmName={item.filmName}
                      ganr={item.ganr}
                      bgcolor={item.bgcolor}
                    />
                  ))
                : ""}
            </Box>

            <Box
              width={"100%"}
              height={"100px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"end"}
            >
              <Stack spacing={2}>
                <Pagination
                  count={5}
                  color={"primary"}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
