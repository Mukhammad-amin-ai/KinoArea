import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import footerBack from "../../Images/FooterBackgroundpng.png";
export default class Footer extends Component {
  render() {
    return (
      <Box width={"100%"} height={"150vh"} bgcolor={"#151A26"}>
        <Box
          width={"80%"}
          height={"100%"}
          marginLeft={"10%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"100px"}
          justifyContent={"center"}
        >
          <Box width={"100%"} sx={{
            md:396,
            lg:548,
            xl:548,
          }} position={"relative"}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"10px"}
              position={"absolute"}
              bgcolor={"rgba(54, 87, 203, 0.65)"}
            >
              <Box
                width={"200px"}
                height={"50px"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Typography fontSize={"25px"} color={"#fff"}>
                  <i class="bx bxs-film"></i>
                </Typography>
                <Typography fontSize={"25px"} color={"#fff"}>
                  Kino area
                </Typography>
              </Box>

              <Typography
                color={"#fff"}
                fontFamily={"Qanales"}
                fontWeight={"700"}
                sx={{
                  fontSize:{

                    md:35,
                    lg:50,
                    xl:50
                  }
                }}
              >
                Подпишитесь на E-mail рассылку
              </Typography>
              <Typography
                color={"#fff"}
                fontFamily={"Qanales"}
                fontWeight={"500"}
                textAlign={"center"}
                sx={{
                  fontSize:{
                    md:17,
                    lg:22,
                    xl:22,
                  }
                }}
              >
                Если хотиет быть в курсе последних новостей и новинок кино -{" "}
                <br />
                заполните форму ниже и оформите бесплатную E-mail рассылку!
              </Typography>

              <Box
                width={"615px"}
                height={"70px"}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <TextField
                  variant="filled"
                  label="Введите свой E-mail адрес"
                  sx={{
                    fontSize:{
                      md:15,
                      lg:18,
                      xl:18
                    },
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "10px",
                    width: {
                      md:378,
                      lg:415,
                      xl:415
                    },
                    height: {
                      md:62,
                      lg:70,
                      xl:70,
                    },
                    padding: {
                      md:'0 8px 0 8px',
                      lg:'0 10px 0 10px',
                      xl:'0 10px 0 10px'
                    },
                    backgroundColor: "#fff",
                  }}
                />
                <Button
                  sx={{
                    width: {
                      md:164,
                      lg:181,
                      xl:181,
                    },
                    height: {
                      md:62,
                      lg:70,
                      xl:70
                    },
                    bgcolor: "#F2F60F",
                    borderRadius: "10px",
                    ":hover": { bgcolor: "#F2F60F" },
                  }}
                >
                  <Typography
                    color={"#000"}
                    fontSize={"18px"}
                    fontFamily={"Qanales"}
                    fontWeight={"700"}
                    sx={{
                      md:15,
                      lg:18,
                      xl:18,
                    }}
                  >
                    Подписаться
                  </Typography>
                </Button>
              </Box>
              <Box
                width={"100%"}
                height={"20px"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Checkbox defaultChecked color="success" />
                <Typography
                  color={"#fff"}
                  fontSize={"18px"}
                  fontFamily={"Qanales"}
                  fontWeight={"500"}
                  sx={{
                    fontSize:{
                      md:15,
                      lg:18,
                      xl:18
                    }
                  }}
                >
                  Соглашаюсь на условия
                  <span
                    style={{ textDecoration: "underline", color: "#F2F60F" }}
                  >
                    политики конфиденциальности
                  </span>
                </Typography>
              </Box>
            </Box>
            <img
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "10px" }}
              src={footerBack}
              alt="img"
            />
          </Box>
          <Box
            width={"100%"}
            height={"30%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box
              width={"100%"}
              height={"10%"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Link style={{ textDecoration: "none" }}>
                <Button>
                  <Typography fontSize={"30px"}>
                    <i class="bx bxl-vk"></i>
                  </Typography>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Button>
                  <Typography fontSize={"30px"}>
                    <i class="bx bxl-instagram"></i>
                  </Typography>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Button>
                  <Typography fontSize={"30px"}>
                    <i class="bx bxl-facebook"></i>
                  </Typography>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Button>
                  <Typography fontSize={"30px"}>
                    <i class="bx bxl-twitter"></i>
                  </Typography>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Button>
                  <Typography fontSize={"30px"}>
                    <i class="bx bxl-youtube"></i>
                  </Typography>
                </Button>
              </Link>
            </Box>
            <Box
              width={"100%"}
              height={"40%"}
              display={"flex"}
              justifyContent={"center"}
            >
              <List sx={{ display: "flex", color: "#fff" }}>
                <ListItem>
                  <Link
                    to={"/afisha"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemButton
                      onClick={this.afishaClick}
                    >
                      <Typography
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                        sx={{
                          fontSize:{
                            md:13,
                            lg:17,
                            xl:17
                          }
                        }}
                      >
                        Афиша
                      </Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to={"/film"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemButton
                      onClick={this.filmClick}
                    >
                      <Typography
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                        sx={{
                          fontSize:{
                            md:13,
                            lg:17,
                            xl:17
                          }
                        }}
                      >
                        Фильмы
                      </Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to={"/aktyori"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemButton
                      onClick={this.aktyorClick}
                    >
                      <Typography
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                        sx={{
                          fontSize:{
                            md:13,
                            lg:17,
                            xl:17
                          }
                        }}
                      >
                        Актёры
                      </Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to={"/novosti"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemButton
                      onClick={this.novostiClick}
                    >
                      <Typography
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                        sx={{
                          fontSize:{
                            md:13,
                            lg:17,
                            xl:17
                          }
                        }}
                      >
                        Новости
                      </Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to={"/podborka"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemButton
                      onClick={this.podborkaClick}
                    >
                      <Typography
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                        sx={{
                          fontSize:{
                            md:13,
                            lg:17,
                            xl:17
                          }
                        }}
                      >
                        Подборки
                      </Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to={"/kategorii"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemButton
                      onClick={this.kategoriiClick}
                    >
                      <Typography
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                        sx={{
                          fontSize:{
                            md:13,
                            lg:17,
                            xl:17
                          }
                        }}
                      >
                        Категории
                      </Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box
              width={"100%"}
              height={"30%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Typography
                  sx={{
                    fontSize:{
                      md:13,
                      lg:17,
                      xl:17
                    }
                  }}
                color={" rgba(227, 230, 240, 0.72)"}
                fontFamily={"Qanales"}
              >
                2020 © Kinoarea. Все права защищены
              </Typography>
              <Typography
                color={" rgba(227, 230, 240, 0.72)"}
                fontFamily={"Qanales"}
                sx={{textDecoration:'underline',fontSize:{
                  md:13,
                  lg:17,
                  xl:17
                }}}
              >
                Политика конфиденциальности
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
