import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    borderBottom: "",
    borderFilm: "",
    borderAktyor: "",
    borderNovosti: "",
    borderPodborka: "",
    borderKategotii: "",
  };
  afishaClick = () => {
    let {
      borderBottom,
      borderFilm,
      borderAktyor,
      borderNovosti,
      borderPodborka,
      borderKategotii,
    } = this.state;
    borderBottom = "1px solid blue";
    borderFilm = "";
    borderAktyor = "";
    borderPodborka = "";
    borderNovosti = "";
    borderKategotii = "";
    this.setState({
      borderBottom,
      borderFilm,
      borderAktyor,
      borderPodborka,
      borderNovosti,
      borderKategotii,
    });
  };
  filmClick = () => {
    let {
      borderBottom,
      borderKategotii,
      borderFilm,
      borderAktyor,
      borderNovosti,
      borderPodborka,
    } = this.state;
    borderKategotii = "";
    borderBottom = "";
    borderNovosti = "";
    borderPodborka = "";
    borderAktyor = "";
    borderFilm = "1px solid blue";
    this.setState({
      borderBottom,
      borderFilm,
      borderAktyor,
      borderKategotii,
      borderNovosti,
      borderPodborka,
    });
  };
  aktyorClick = () => {
    let {
      borderBottom,
      borderFilm,
      borderAktyor,
      borderKategotii,
      borderNovosti,
      borderPodborka,
    } = this.state;
    borderBottom = "";
    borderKategotii = "";
    borderNovosti = "";
    borderPodborka = "";
    borderAktyor = "1px solid blue";
    borderFilm = "";

    this.setState({
      borderNovosti,
      borderBottom,
      borderFilm,
      borderKategotii,
      borderPodborka,
      borderAktyor,
    });
  };
  novostiClick = () => {
    let {
      borderBottom,
      borderKategotii,
      borderFilm,
      borderAktyor,
      borderNovosti,
      borderPodborka,
    } = this.state;
    borderNovosti = "1px solid blue";
    borderBottom = "";
    borderAktyor = "";
    borderKategotii = "";
    borderFilm = "";
    borderPodborka = "";

    this.setState({
      borderNovosti,
      borderPodborka,
      borderKategotii,
      borderBottom,
      borderFilm,
      borderAktyor,
    });
  };
  podborkaClick = () => {
    let {
      borderBottom,
      borderKategotii,
      borderFilm,
      borderAktyor,
      borderNovosti,
      borderPodborka,
    } = this.state;
    borderNovosti = "";
    borderBottom = "";
    borderAktyor = "";
    borderKategotii = "";
    borderFilm = "";
    borderPodborka = "1px solid blue";

    this.setState({
      borderNovosti,
      borderKategotii,
      borderPodborka,
      borderBottom,
      borderFilm,
      borderAktyor,
    });
  };
  kategoriiClick = () => {
    let {
      borderBottom,
      borderKategotii,
      borderFilm,
      borderAktyor,
      borderNovosti,
      borderPodborka,
    } = this.state;
    borderNovosti = "";
    borderBottom = "";
    borderAktyor = "";
    borderKategotii = "1px solid blue";
    borderFilm = "";
    borderPodborka = "";

    this.setState({
      borderNovosti,
      borderKategotii,
      borderPodborka,
      borderBottom,
      borderFilm,
      borderAktyor,
    });
  };
  logoClick = () => {
    let {
      borderBottom,
      borderKategotii,
      borderFilm,
      borderAktyor,
      borderNovosti,
      borderPodborka,
    } = this.state;
    borderNovosti = "";
    borderBottom = "";
    borderAktyor = "";
    borderKategotii = "";
    borderFilm = "";
    borderPodborka = "";

    this.setState({
      borderNovosti,
      borderKategotii,
      borderPodborka,
      borderBottom,
      borderFilm,
      borderAktyor,
    });
  };
  render() {
    return (
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
            },
          }}
          width={"80%"}
          height={"10%"}
          marginLeft={"10%"}
          display={"flex"}
          alignItems={"center"}
          gap={"100px"}
        >
          <Box width={"130px"} height={"100%"}>
            <Link
              to={"./"}
              onClick={this.logoClick}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                width={"200px"}
                height={"50px"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Typography fontSize={"25px"}>
                  <i class="bx bxs-film"></i>
                </Typography>
                <Typography fontSize={"25px"} color={"blue"}>
                  Kino <span style={{ color: "white" }}>area</span>
                </Typography>
              </Box>
            </Link>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-around"}
            >
              <Button
                sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
              >
                <i class="bx bxl-vk"></i>
              </Button>

              <Button
                sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
              >
                <i class="bx bxl-instagram"></i>
              </Button>
              <Button
                sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
              >
                <i class="bx bxl-facebook"></i>
              </Button>
              <Button
                sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
              >
                <i class="bx bxl-twitter"></i>
              </Button>
            </Box>
          </Box>
          <Box
            width={"760px"}
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            <List sx={{ display: "flex", color: "#fff" }}>
              <ListItem>
                <Link
                  to={"/afisha"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItemButton
                    onClick={this.afishaClick}
                    sx={{ borderBottom: this.state.borderBottom }}
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
                    sx={{ borderBottom: this.state.borderFilm }}
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
                    sx={{ borderBottom: this.state.borderAktyor }}
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
                    sx={{ borderBottom: this.state.borderNovosti }}
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
                    sx={{ borderBottom: this.state.borderPodborka }}
                  >
                    <Typography
                      fontSize={"17px"}
                      fontFamily={"Qanelas"}
                      fontWeight={"700"}
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
                    sx={{ borderBottom: this.state.borderKategotii }}
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
          <Box width={"180px"} height={"53px"} display={"flex"} gap={"10px"}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "black",
                fontSize: "30px",
              }}
            >
              <i class="bx bx-search"></i>
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "138px",
                height: "53px",
                bgcolor: "#3657CB",
              }}
            >
              <Typography
                fontSize={"17px"}
                fontFamily={"Qanelas"}
                fontWeight={"700"}
              >
                Войти
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "none",
            },
          }}
          width={"100%"}
          height={"10%"}
          // marginLeft={"10%"}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          gap={"100px"}
        >
          <Box width={"100px"} height={"50px"} position={'absolute'} top={30} left={30} >
          <Button
            variant="contained"
            sx={{
              width: {
                md: "44px",
                lg: "53px",
                xl: "53px",
              },
              height: {
                md: "44px",
                lg: "53px",
                xl: "53px",
              },
              bgcolor: "white",
              color: "black",
              fontSize: "30px",
            }}
          >
            <i class="bx bx-search"></i>
          </Button>

          </Box>
          <Box
            width={"523px"}
            height={"200px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box width={"130px"} height={"100%"}>
              <Link
                to={"./"}
                onClick={this.logoClick}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  width={"200px"}
                  height={"50px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                >
                  <Typography fontSize={"25px"}>
                    <i class="bx bxs-film"></i>
                  </Typography>
                  <Typography fontSize={"25px"} color={"blue"}>
                    Kino <span style={{ color: "white" }}>area</span>
                  </Typography>
                </Box>
              </Link>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-vk"></i>
                </Button>

                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-instagram"></i>
                </Button>
                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-facebook"></i>
                </Button>
                <Button
                  sx={{ maxWidth: "auto", fontSize: "20px", color: "#686868" }}
                >
                  <i class="bx bxl-twitter"></i>
                </Button>
              </Box>
            </Box>

            <Box
              width={"760px"}
              height={"100%"}
              display={"flex"}
              justifyContent={'center'}
              alignItems={"center"}
              sx={{
                width:{
                  sm:500
                }
              }}
            >
              <List sx={{ display: "flex", color: "#fff" }}>
                <ListItem>
                  <Link
                    to={"/afisha"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemButton
                      onClick={this.afishaClick}
                      sx={{ borderBottom: this.state.borderBottom }}
                    >
                      <Typography
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
                        sx={{
                          fontSize: {
                            sm: 12,
                            md: 15,
                            lg: 17,
                            xl: 17,
                          },
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
                      sx={{ borderBottom: this.state.borderFilm }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            sm: 12,
                            md: 15,
                            lg: 17,
                            xl: 17,
                          },
                        }}
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
                      sx={{ borderBottom: this.state.borderAktyor }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            sm: 12,
                            md: 15,
                            lg: 17,
                            xl: 17,
                          },
                        }}
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
                      sx={{ borderBottom: this.state.borderNovosti }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            sm: 12,
                            md: 15,
                            lg: 17,
                            xl: 17,
                          },
                        }}
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
                      sx={{ borderBottom: this.state.borderPodborka }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            sm: 12,
                            md: 15,
                            lg: 17,
                            xl: 17,
                          },
                        }}
                        fontFamily={"Qanelas"}
                        fontWeight={"700"}
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
                      sx={{ borderBottom: this.state.borderKategotii }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            sm: 12,
                            md: 15,
                            lg: 17,
                            xl: 17,
                          },
                        }}
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
          </Box>
          <Box width={"100px"} height={"50px"} position={'absolute'} top={30} right={50}>

          <Button
            variant="contained"
            sx={{
              width: {
                sm: 93,
                md: "100px",
                lg: "138px",
                xl: "138px",
              },
              height: {
                sm: 38,
                md: "42px",
                lg: "53px",
                xl: "53px",
              },
              bgcolor: "#3657CB",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  md: "14px",
                  lg: "17px",
                  xl: "17px",
                },
              }}
              fontFamily={"Qanelas"}
              fontWeight={"700"}
            >
              Войти
            </Typography>
          </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}
