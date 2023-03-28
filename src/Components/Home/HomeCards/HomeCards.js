import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import Card from "../../../Assets/Card/Card";
import img1 from "../../../Images/image 1.png";
import img2 from "../../../Images/image 2.png";
import img3 from "../../../Images/image 3.png";
import img4 from "../../../Images/image 4.png";
import img5 from "../../../Images/image 5.png";
import img6 from "../../../Images/image 6.png";
import img7 from "../../../Images/image 7.png";
import img8 from "../../../Images/image 9.png";

export default class HomeCards extends Component {
  state = {
    data: [
      {
        // id:
        img: img1,
        ball: "6.70",
        filmName: "Побег из Претории",
        ganr: "Триллер",
        bgcolor: " #89CB36",
      },
      {
        img: img2,
        ball: "8.50",
        filmName: "Джокер",
        ganr: "Триллер, драма, криминалр",
        bgcolor: " #4BCB36",
      },
      {
        img: img3,
        ball: "6.70",
        filmName: "Звёздные войны: Скайуокер...",
        ganr: "Фантастика, фэнтези, боевик...",
        bgcolor: "#89CB36",
      },
      {
        img: img4,
        ball: "8.00",
        filmName: "Джентльмены",
        ganr: "Боевик, комедия, криминал",
        bgcolor: "#4BCB36",
      },
      {
        img: img5,
        ball: "8.10",
        filmName: "Ford против Ferrari",
        ganr: "Биография, спорт, драма, боевик",
        bgcolor: " #4BCB36",
      },
      {
        img: img6,
        ball: "4.90",
        filmName: "3022",
        ganr: "Триллер",
        bgcolor: "#CB3F36",
      },
      {
        img: img7,
        ball: "6.20",
        filmName: "Хищные птицы: Потрясающая история Харли Квинн",
        ganr: "Боевик, криминал, комедия",
        bgcolor: "#89CB36",
      },
      {
        img: img8,
        ball: "6.90",
        filmName: "Плохие парни навсегда",
        ganr: "Боевик, комедия, криминал",
        bgcolor: "#89CB36",
      },
      {
        img: img8,
        ball: "6.90",
        filmName: "Плохие парни навсегда",
        ganr: "Боевик, комедия, криминал",
        bgcolor: "#89CB36",
      },
    ],
    btnHide: "none",
    // newData:[]
  };

  showHideFunc = () => {
    
    if (this.state.data.length <= 10) {
      let { btnHide } = this.state;
      btnHide = "flex";
      this.setState({
        btnHide,
      });
    }
  };
  render() {
    const { btnHide } = this.state 
    return (
      <>
        <Box
          width={"90%"}
          height={"100%"}
          marginLeft={"8%"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          {this.state.data.length !== 0
            ? this.state.data.map((item) => (
                <Card
                  ball={item.ball}
                  img={item.img}
                  filmName={item.filmName}
                  ganr={item.ganr}
                  bgcolor={item.bgcolor}
                />
              ))
            : ""}
          <Box
            width={"100%"}
            height="200px"
            display={btnHide}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              
              sx={{
                width: {
                  md: "164px",
                  lg: "200px",
                  xl: "200px",
                },
                height: {
                  md: "54px",
                  lg: "71px",
                  xl: "71px",
                },
                border: "1px solid white",
                color: "white",
              }}
            >
              <Typography variant="p">Все новинки</Typography>
            </Button>
          </Box>
        </Box>
      </>
    );
  }
}
