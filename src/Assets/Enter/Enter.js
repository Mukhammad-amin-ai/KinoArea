import { Box, Button, Input, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link, Route, Routes, } from "react-router-dom";
import SignUp from "./SignUp";

export default class Enter extends Component {
  render() {
    return (
      <>
      
      <Box
        width={"100%"}
        height={"100vh"}
        bgcolor={"#191E2E"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box width={"200px"} height={"50px"}>
          <Link
            to={"/"}
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
        </Box>

        <Box
          width={"100%"}
          height={"100px"}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Box
            width={"100px"}
            height={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Link style={{textDecoration:'none'}} to={'/'} >
              <Button>
                <Typography fontSize={"30px"} color={"#fff"}>
                  ✖
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          width={"815px"}
          height={"562px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"strech"}
        >
          <Typography fontSize={"40px"} color={"#fff"} paddingRight={"45px"}>
            Войти
          </Typography>
          <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"14px"}
            justifyContent={"center"}
            marginRight={"45px"}
          >
            <Input
              sx={{
                borderRadius: "10px",
                padding: "10px 200px 10px 70px",
                bgcolor: "#1E2538",
              }}
              placeholder="Логин, почта или телефон"
              size="lg"
              variant="solid"
            />
            <Input
              sx={{
                borderRadius: "10px",
                padding: "10px 200px 10px 70px",
                bgcolor: "#1E2538",
              }}
              placeholder="Ваш пароль"
              size="lg"
              variant="solid"
            />
            <Button
              sx={{
                width: 464,
                height: 55,
                bgcolor: "#F2F60F",
                borderRadius: "10px",
                ":hover": {
                  bgcolor: "#F2F60F",
                },
              }}
              variant="soft"
            >
              <Typography>Войти</Typography>
            </Button>
            <Link to='/SignUp'style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: 464,
                height: 55,
                bgcolor: "#1E2538",
                borderRadius: "10px",
              }}
              variant="soft"
              >
              <Typography color={"#fff"}>Зарегистрироваться</Typography>
            </Button>
              </Link>

            <Box width={"176px"} height={"28px"}>
              <Link style={{ color: "#3657CB", }} to='/recover' >
                <Typography fontSize={"17px"}>Восстановить пароль</Typography>
              </Link>
            </Box>
            <Box
              width={"100%"}
              height={"100px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
            >
              <Button
                sx={{
                  width: 41,
                  height: 41,
                  fontSize: "20px",
                  color: "#fff",
                  bgcolor: "#1E2538",
                  ":hover": {
                    bgcolor: "#3657CB",
                  },
                }}
              >
                <i class="bx bxl-vk"></i>
              </Button>
              <Button
                sx={{
                  width: 41,
                  height: 41,
                  fontSize: "20px",
                  color: "#fff",
                  bgcolor: "#1E2538",
                  ":hover": {
                    bgcolor: "#3657CB",
                  },
                }}
              >
                <i class="bx bxl-facebook"></i>
              </Button>
              <Button
                sx={{
                  width: 41,
                  height: 41,
                  fontSize: "20px",
                  color: "#fff",
                  bgcolor: "#1E2538",
                  ":hover": {
                    bgcolor: "#3657CB",
                  },
                }}
              >
                <i class="bx bxl-google"></i>
              </Button>
              <Button
                sx={{
                  width: 41,
                  height: 41,
                  fontSize: "20px",
                  color: "#fff",
                  bgcolor: "#1E2538",
                  ":hover": {
                    bgcolor: "#3657CB",
                  },
                }}
              >
                <i class="bx bxl-twitter"></i>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      </>
    );
  }
}
