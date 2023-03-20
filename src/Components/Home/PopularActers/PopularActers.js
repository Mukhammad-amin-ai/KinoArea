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
      >
        <Box
          width={"80%"}
          height={"83px"}
          marginLeft={"8%"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Box
            width={"45%"}
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            <Typography
              variant="h3"
              fontSize={"50px"}
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
          >
            <List
              sx={{
                width: "150px",
                display: "fex",
                color: "#6D717D",
              }}
            >
              <ListItem sx={{ ":hover div": { color: "#fff" } }}>
                <ListItemButton>
                  <Typography>За год</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ ":hover div": { color: "#fff" } }}>
                <ListItemButton>
                  <Typography>За месяц</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ ":hover div": { color: "#fff" } }}>
                <ListItemButton>
                  <Typography>За неделю</Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          width={"100%"}
          height={"444px"}
          display={"flex"}
          justifyContent={"space-evenly"}
          // gap={'20px'}
        >
          <Box width={"400px"} height={"444px"}>
            <Card sx={{ width: 444, position: "relative" }}>
              <CardMedia
                component="img"
                sx={{ height: 444 }}
                image={popular1}
              />
              <Typography
                variant="h4"
                fontSize={"15px"}
                sx={{ cursor: "default" }}
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
                bottom={"0"}
                left={"40px"}
              >
                <Typography
                  variant="h2"
                  fontSize={"27px"}
                  fontFamily={"Qanales"}
                  fontWeight={"700"}
                  color={"#fff"}
                  sx={{ cursor: "default" }}
                >
                  Квентин Тарантино
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"20px"}
                  fontFamily={"Qanales"}
                  fontWeight={"600"}
                  color={"rgba(255, 255, 255, 0.35);"}
                  sx={{ cursor: "default" }}
                >
                  Quentin Tarantino
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{ cursor: "default" }}
                  color={"#F2F60F"}
                >
                  57 лет
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box width={"400px"} height={"444px"}>
            <Card sx={{ width: 444, position: "relative" }}>
              <CardMedia
                component="img"
                sx={{ height: 444 }}
                image={popular2}
              />
              <Typography
                variant="h4"
                fontSize={"15px"}
                sx={{ cursor: "default" }}
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
                bottom={"0"}
                left={"40px"}
              >
                <Typography
                  variant="h2"
                  fontSize={"27px"}
                  fontFamily={"Qanales"}
                  fontWeight={"700"}
                  color={"#fff"}
                  sx={{ cursor: "default" }}
                >
                  Джейсон Стейтем
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"20px"}
                  fontFamily={"Qanales"}
                  fontWeight={"600"}
                  color={"rgba(255, 255, 255, 0.35);"}
                  sx={{ cursor: "default" }}
                >
                  Jason Statham
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{ cursor: "default" }}
                  color={"#F2F60F"}
                >
                  52 года
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box
            width={"496px"}
            height={"444px"}
            borderRadius={'10px'}
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
                  fontSize={"20px"}
                  fontWeight={"600"}
                >
                  Тинто Брасс
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                >
                  Tinto Brass
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{ cursor: "default" }}
                  color={"#F2F60F"}
                >
                  87 лет
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                fontSize={"15px"}
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
                  fontSize={"20px"}
                  fontWeight={"600"}
                >
                 Джеки Чан
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                >
                  Jackie Chan
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{ cursor: "default" }}
                  color={"#F2F60F"}
                >
                 66 лет
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                fontSize={"15px"}
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
                  fontSize={"20px"}
                  fontWeight={"600"}
                >
                 Том Харди
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                >
                  Tom Hardy
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{ cursor: "default" }}
                  color={"#F2F60F"}
                >
                 42 года
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                fontSize={"15px"}
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
                  fontSize={"20px"}
                  fontWeight={"600"}
                >
                 Акшай Кумар
                </Typography>
                <Typography
                  variant="h4"
                  color={"#3B486B"}
                  fontFamily={"Qanelas"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                >
                 Akshay Kumar
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={"15px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{ cursor: "default" }}
                  color={"#F2F60F"}
                >
                  52 года
                </Typography>
              </Box>
              <Typography
                variant="h4"
                color={"#F2F60F"}
                fontFamily={"Qanelas"}
                fontSize={"15px"}
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
