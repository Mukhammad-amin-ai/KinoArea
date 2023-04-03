import { Box, Button, Checkbox, Input, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
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
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
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
          height={"50px"}
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
            <Link style={{ textDecoration: "none" }} to={"/enter"}>
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
              placeholder="Имя"
              size="lg"
              variant="solid"
            />
            <Input
              sx={{
                borderRadius: "10px",
                padding: "10px 200px 10px 70px",
                bgcolor: "#1E2538",
              }}
              placeholder="Фамилия"
              size="lg"
              variant="solid"
            />
            <Input
              sx={{
                borderRadius: "10px",
                padding: "10px 200px 10px 70px",
                bgcolor: "#1E2538",
              }}
              placeholder="Придумайте логин"
              size="lg"
              variant="solid"
            />
            <Input
              sx={{
                borderRadius: "10px",
                padding: "10px 200px 10px 70px",
                bgcolor: "#1E2538",
              }}
              placeholder="Придумайте пароль"
              size="lg"
              variant="solid"
            />
            <Input
              sx={{
                borderRadius: "10px",
                padding: "10px 200px 10px 70px",
                bgcolor: "#1E2538",
              }}
              placeholder="Повторите пароль"
              size="lg"
              variant="solid"
            />
            <Input
              sx={{
                borderRadius: "10px",
                padding: "10px 200px 10px 70px",
                bgcolor: "#1E2538",
              }}
              placeholder="Номер телефона или e-mail"
              size="lg"
              variant="solid"
            />
            <Box
              width={"70%"}
              height={"50px"}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <Checkbox color='success' defaultChecked />
                </Box>
                <Typography sx={{fontSize:15,fontFamily:'Qanales',color:'#fff'}}>
                  Соглашаюсь на условия <span style={{ color:'#F2F60F',textDecoration:'underline'}}>политики конфиденциальности</span> 
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <Checkbox color='success'  defaultChecked />
                </Box>
                <Typography sx={{fontSize:15,fontFamily:'Qanales',color:'#fff'}}>
                  Соглашаюсь на обработку персональных данных
                </Typography>
              </Box>
            </Box>
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
              <Typography>Зарегистрироваться</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
