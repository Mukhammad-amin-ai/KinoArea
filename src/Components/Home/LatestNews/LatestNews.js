import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import news1 from "../../../Images/news image 1.png";
import news2 from "../../../Images/news image 2.png";
import news3 from "../../../Images/news image 3.png";
import news4 from "../../../Images/news image 4.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default class LatestNews extends Component {
  state = {
    newsData: [
      {
        img: news2,
        time: "15 Апр 2020",
        news: "Как изменили Соника с последнего анонса ",
      },
      {
        img: news1,
        time: "15 Апр 2020",
        news: "Не время умирать. Перенос релиза фильма  ",
      },
      {
        img: news3,
        time: "15 Апр 2020",
        news: "От этой новости вы будете шокированы до завтра",
      },
      {
        img: news4,
        time: "13 Апр 2020",
        news: "Вот это, конечно, да!",
      },
    ],
  };

  render() {
    return (
      <Box width={"100%"} height={"920px"} bgcolor={"#1E2538"}>
        <Box width={"80%"} marginLeft={"10%"} height={"100%"}>
          <Box
            width={"100%"}
            height={"300px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="h3"
              fontSize={"65px"}
              fontFamily={"Qanales"}
              fontWeight={"900"}
              color={"#fff"}
            >
              Последние новости
            </Typography>
            <Link style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                fontSize={"22px"}
                fontFamily={"Qanales"}
                fontWeight={"900"}
                color={"#fff"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
              >
                Все новости
                <box-icon
                  size="sm"
                  color="white"
                  name="right-arrow-alt"
                ></box-icon>
              </Typography>
            </Link>
          </Box>
          <Box
            width={"100%"}
            height={"600px"}
            display={"flex"}
            alignItems={"center"}
            gap={"2.5%"}
          >
            <Box
              width={"75%"}
              height={"100%"}
              position={"relative"}
              borderRadius={"10px"}
              overflow={"hidden"}
            >
              <img width={"100%"} height={"100%"} src={news1} alt="news" />
              <Box
                width={"180px"}
                height={"30px"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                position={"absolute"}
                top={"20px"}
                left={"20px"}
                color={"#fff"}
                fontFamily={"Qanales"}
              >
                15 Апр 2020
                <Typography display={"flex"}>
                  <RemoveRedEyeIcon />1
                </Typography>
                <Typography display={"flex"}>
                  <ChatBubbleIcon />1
                </Typography>
              </Box>
              <Box
                width={"700px"}
                height={"170px"}
                position={"absolute"}
                left={"20px"}
                bottom={"30px"}
              >
                <Typography
                  variant="h3"
                  fontSize={"30px"}
                  fontWeight={"900"}
                  color={"#fff"}
                  fontFamily={"Qanales"}
                >
                  Не время умирать. Перенос релиза фильма
                </Typography>
                <Typography
                  variant="h3"
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  fontWeight={"500"}
                  color={"#fff"}
                  fontFamily={"Qanales"}
                >
                  Но действия представителей оппозиции в равной степени
                  предоставлены сами себе. В рамках спецификации современных
                  стандартов, стремящиеся вытеснить традиционное производство,
                  нанотехнологии указаны как претенденты на роль ключевых
                  факторов.
                </Typography>
              </Box>
            </Box>
            <Box
              width={"22%"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              gap={"13px"}
            >
              {this.state.newsData.length !== 0
                ? this.state.newsData.map((item) => (
                    <Box
                      width={"100%"}
                      height={"182px"}
                      borderRadius={"10px"}
                      overflow={"hidden"}
                      position={"relative"}
                      color={"#fff"}
                      sx={{
                        ":hover div": {
                          display: "flex",
                        },
                        ":hover p": {
                          display: "none",
                        },
                      }}
                    >
                      <Box
                        width={"100%"}
                        height={"100%"}
                        bgcolor={"rgba(54, 87, 203, 0.65)"}
                        display={"none"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        position={"absolute"}
                      >
                        <Box
                          width={"180px"}
                          height={"53px"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          borderRadius={"10px"}
                          bgcolor={"transparent"}
                          border={"3px solid #fff"}
                        >
                          <Typography
                            variant="h5"
                            fontSize={"18px"}
                            fontFamily={"Qanelas"}
                          >
                            Читать новость
                          </Typography>
                        </Box>
                      </Box>
                      <img
                        width={"100%"}
                        height={"100%"}
                        src={item.img}
                        alt=""
                      />
                      <Typography
                        position={"absolute"}
                        top={"10px"}
                        left={"10px"}
                        fontSize={"15px"}
                        fontFamily={"Qanelas"}
                      >
                        {item.time}
                      </Typography>
                      <Typography
                        position={"absolute"}
                        bottom={"10px"}
                        left={"10px"}
                        fontSize={"18px"}
                        fontFamily={"Qanelas"}
                      >
                        {item.news}
                      </Typography>
                    </Box>
                  ))
                : ""}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
