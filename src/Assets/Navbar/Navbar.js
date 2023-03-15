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
import "boxicons";
import logo from "../../Images/Логотип.png";
// import Afisha from "../../Components/Afisha/Afisha";
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
        width={"80%"}
        height={"10%"}
        marginLeft={"10%"}
        display={"flex"}
        alignItems={"center"}
        gap={"100px"}
      >
        <Box width={"130px"} height={"100%"}>
          <Link to={"./"} onClick={this.logoClick}>
            <img src={logo} alt="#" />
          </Link>
          <Box width={"100%"} display={"flex"} justifyContent={"space-around"}>
            <box-icon type="logo" name="vk"></box-icon>
            <box-icon type="logo" name="instagram"></box-icon>
            <box-icon type="logo" name="facebook"></box-icon>
            <box-icon type="logo" name="twitter"></box-icon>
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
            sx={{ width: "55px", height: "53px", bgcolor: "white" }}
          >
            <box-icon name="search"></box-icon>
          </Button>
          <Button
            variant="contained"
            sx={{ width: "138px", height: "53px", bgcolor: "#3657CB" }}
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
    );
  }
}
