import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Recover() {
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
          justifyContent: "strech",
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
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Button>
                <Typography fontSize={"30px"} color={"#fff"}>
                  ✖
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: 40,
            fontFamily: "Qanales",
            color: "#fff",
            fontWeight: 800,
          }}
        >
          Восстановить пароль
        </Typography>
        <Box
          sx={{
            width: "60vw",
            height: 500,
            // bgcolor: "aqua",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <Input
            sx={{
              borderRadius: "10px",
              padding: "10px 200px 10px 70px",
              bgcolor: "#1E2538",
            }}
            placeholder="Почта или номер телефона"
            size="lg"
            variant="solid"
          />
          <Box display={"flex"} gap={"20px"}>
            <Button
              sx={{
                width: 203,
                height: 60,
                bgcolor: "#3657CB",
                borderRadius: "10px",
              }}
            >
              <Typography sx={{ color: "#fff", fontSize: 17 }}>
                Отправить
              </Typography>
            </Button>
            <Input
              sx={{
                borderRadius: "10px",
                padding: "15px 20px 15px 20px",
                bgcolor: "#1E2538",
              }}
              placeholder="Полученный код"
              size="lg"
              variant="solid"
            />
          </Box>
          <Link to="/recoverPassword" style={{textDecoration:'none'}}>
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
              <Typography>Далее</Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
