import React, { useState } from "react";
import img1 from "../../../Images/image 1.png";
import img2 from "../../../Images/image 2.png";
import img3 from "../../../Images/image 3.png";
import img4 from "../../../Images/image 4.png";
import img5 from "../../../Images/image 5.png";
import img6 from "../../../Images/image 6.png";
import img7 from "../../../Images/image 7.png";
import img8 from "../../../Images/image 9.png";
import HomeCards from "../HomeCards/HomeCards";
import Home from "../Home";
import HomeHead from "../HomeHead/HomeHead";
import HomeTrailer from "../HomeTrailer/HomeTrailer";
import Popular from "../Popular/Popular";
import PopularActers from "../PopularActers/PopularActers";
import LatestNews from "../LatestNews/LatestNews";
import Waitlist from "../Waitlist/Waitlist";
import MostPopular from "../MostPopular/MostPopular";
import Footer from "../../../Assets/Footer/Footer";
import { CssBaseline } from "@mui/material";
export default function Data() {
  let [cards, setCards] = useState([
    {
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
  ]);
  // setCards(cards)
  return (
    <>

      {/* <Home/> */}
      {/* <HomeHead/> */}
      <HomeCards cards={cards} />
      <HomeTrailer/>
      <Popular/>
      <PopularActers/>
      <LatestNews/>
      <Waitlist/>
      <MostPopular/>
      <Footer/>
    </>
  );
}
