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
          <Box width={"100%"} height={"548px"} position={"relative"}>
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
                fontSize={"50px"}
                fontFamily={"Qanales"}
                fontWeight={"700"}
              >
                Подпишитесь на E-mail рассылку
              </Typography>
              <Typography
                color={"#fff"}
                fontSize={"22px"}
                fontFamily={"Qanales"}
                fontWeight={"500"}
                textAlign={"center"}
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
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "10px",
                    width: "415px",
                    height: "70px",
                    padding: "0 10px 0 10px",
                    backgroundColor: "#fff",
                  }}
                />
                <Button
                  sx={{
                    width: "181px",
                    heigh: "70px",
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
                  >
                    {" "}
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
                >
                  Соглашаюсь на условия{" "}
                  <span
                    style={{ textDecoration: "underline", color: "#F2F60F" }}
                  >
                    {" "}
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
                      // sx={{ borderBottom: this.state.borderBottom }}
                    >
                      <Typography
                        fontSize={"17px"}
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
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
                      // sx={{ borderBottom: this.state.borderFilm }}
                    >
                      <Typography
                        fontSize={"17px"}
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
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
                      // sx={{ borderBottom: this.state.borderAktyor }}
                    >
                      <Typography
                        fontSize={"17px"}
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
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
                      // sx={{ borderBottom: this.state.borderNovosti }}
                    >
                      <Typography
                        fontSize={"17px"}
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
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
                      // sx={{ borderBottom: this.state.borderPodborka }}
                    >
                      <Typography
                        fontSize={"17px"}
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                      >
                        Подборки
                        {/* Категории */}
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
                      // sx={{ borderBottom: this.state.borderKategotii }}
                    >
                      <Typography
                        fontSize={"17px"}
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
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
                fontSize={"15"}
                color={" rgba(227, 230, 240, 0.72)"}
                fontFamily={"Qanales"}
              >
                2020 © Kinoarea. Все права защищены
              </Typography>
              <Typography
                fontSize={"15"}
                color={" rgba(227, 230, 240, 0.72)"}
                fontFamily={"Qanales"}
                sx={{textDecoration:'underline'}}
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
