import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import most1 from "../../../Images/most 1.png";
import most2 from "../../../Images/most 2.png";
import most3 from "../../../Images/most 3.png";
import most4 from "../../../Images/most 4.png";
import most5 from "../../../Images/most 5.png";


export default class MostPopular extends Component {
  state = {
    mostPopular: [
    
      {
        img: most1,
        name1: "1. Бладшот",
        money: "$13 млн",
        month: " $15.1 млн за 4 недели",
      },
      {
        img: most2,
        name1: "2. Вперёд",
        money: "$6.8 млн ",
        month: " $41.4 млн за 4 недели",
      },
      {
        img: most3,
        name1: "3. Человек-невидимка",
        money: "$6.2 млн",
        month: " $58.3 млн за 3 недели",
      },
      {
        img: most4,
        name1: "4. Соник в кино",
        money: "$2.9 млн",
        month: "$15.1 млн за 4 недели",
      },
      {
        img: most5,
        name1: "5. Джентльмены",
        money: "$1.8 млн",
        month: "$78.7 млн за 11 недель",
      },
      
    ],
  };
  render() {
    return (
      <Box width={"100%"} height={"300px"} bgcolor={"#151A26"}>
        <Box width={"80%"} height={"100%"} marginLeft={"10%"}>
          <Box
            width={"100%"}
            height={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              width={"60%"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              color={"#fff"}
            >
              <Typography
                variant="h1"
                fontSize={"65px"}
                fontFamily={"Qanales"}
                fontWeight={"900"}
              >
                Кассовые сборы
              </Typography>
              <Typography variant="h1" fontSize={"20px"}>
                13 марта — 15 марта
              </Typography>
            </Box>
            <Box
              width={"40%"}
              height={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Button
                sx={{
                  width: "160px",
                  height: "50px",
                }}
              >
                <Typography
                  variant="p"
                  fontSize={"18px"}
                  color={"#6D717D"}
                  sx={{ ":hover": { color: "#fff" } }}
                >
                  Россия
                </Typography>
              </Button>
              <Button
                sx={{
                  width: "160px",
                  height: "50px",
                }}
              >
                <Typography
                  variant="p"
                  fontSize={"18px"}
                  color={"#6D717D"}
                  sx={{ ":hover": { color: "#fff" } }}
                >
                  Весь мир
                </Typography>
              </Button>
              <Button
                sx={{
                  width: "160px",
                  height: "50px",
                }}
              >
                <Typography
                  variant="p"
                  fontSize={"18px"}
                  color={"#6D717D"}
                  sx={{ ":hover": { color: "#fff" } }}
                >
                  США и Канада
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box width={"100%"} height={"60%"} display={'flex'} alignItems={'center'} >
            {this.state.mostPopular.length !== 0
              ? this.state.mostPopular.map((item) => (
                  <Box
                    width={"300px"}
                    height={"141px"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <img src={item.img} alt="most" />
                    <Box>
                      <Typography color={"#fff"}>{item.name1}</Typography>
                      <Typography color={"#F2F60F"}>{item.money}</Typography>
                      <Typography color={" rgba(255, 255, 255, 0.41)"}>
                        {item.month}
                      </Typography>
                    </Box>
                  </Box>
                ))
              : ""}
          </Box>
        </Box>
      </Box>
    );
  }
}
