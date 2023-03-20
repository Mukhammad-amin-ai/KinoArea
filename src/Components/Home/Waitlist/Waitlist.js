import {
  Box,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { Component } from "react";
import Card from "../../../Assets/Card/Card";
import waiTimg1 from "../../../Images/wait image 1.png";
import waiTimg2 from "../../../Images/wait image 2.png";
import waiTimg3 from "../../../Images/wait image 3.png";
import waiTimg4 from "../../../Images/wait image 4.png";



export default class Waitlist extends Component {
  state = {
    waitData: [
      {
        img: waiTimg4,
        filmName: "Побег из Претории",
        ganr: "14 мая 2020 в России",
        bgcolor: "transparent",
      },
      {
        img: waiTimg1,
        filmName: "Прощай",
        ganr: "14 мая 2020 в России",
        bgcolor: "transparent",
      },
      {
        img: waiTimg2,
        filmName: "Дружить по-русски!",
        ganr: "21 мая 2020 в России",
        bgcolor: "transparent",
      },
      {
        img: waiTimg3,
        filmName: "Приди ко мне",
        ganr: "21 мая 2020 в России",
        bgcolor: "transparent",
      },
    ],
  };
  render() {
    return (
      <Box width={"100%"} height={"100vh"} bgcolor={"#151A26"}>
        <Box width={"80%"} height={"100%"} marginLeft={"10%"}>
          <Box
            width={"100%"}
            height={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="h1"
              fontSize={"65px"}
              color={"#fff"}
              fontFamily={"Qanelas"}
            >
              Ожидаемые новинки
            </Typography>
            <Box width={"30%"} display={"flex"} justifyContent={"end"}>
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
          <Box
            width={"100%"}
            height={"80%"}
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            {this.state.waitData.length !== 0
              ? this.state.waitData.map((item) => (
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
        </Box>
      </Box>
    );
  }
}
