import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Enter from "../../Assets/Enter/Enter";
import Afisha from "../Afisha/Afisha";
import Aktyori from "../Aktyori/Aktyori";
import Film from "../Film/Film";
import Kategotii from "../Kategorii/Kategotii";
import Novosti from "../Novosti/Novosti";
import Podborka from "../Podborka/Podborka";
import SignUp from "../../Assets/Enter/SignUp";
import Recover from "../../Assets/Enter/Recover";
import RecoverPassword from "../../Assets/Enter/RecoverPassword";
import NotFound from "../../Assets/NotFound/NotFound";
import img1 from "../../Images/image 1.png";
import img2 from "../../Images/image 2.png";
import img3 from "../../Images/image 3.png";
import img4 from "../../Images/image 4.png";
import img5 from "../../Images/image 5.png";
import img6 from "../../Images/image 6.png";
import img7 from "../../Images/image 7.png";
import img8 from "../../Images/image 9.png";
import bgimage2 from '../../Images/bgsvg.svg'
import bgimage1 from '../../Images/bg2.svg'

import HomeCards from "./HomeCards/HomeCards";
import CardOf from "./CardOf/CardOf";
export default function Home() {

  let [cards, setCards] = useState([
    {
      id:1,
      img: img1,
      ball: "6.70",
      filmName: "Побег из Претории",
      filmLat:'Escape from Pretoria',
      ganr: "Триллер",
      bgcolor: " #89CB36",
      bgImage:bgimage1,
    },
    {
      id:2,
      img: img2,
      ball: "8.50",
      filmName: "Джокер",
      ganr: "Триллер, драма, криминалр",
      bgcolor: " #4BCB36",
      bgImage:bgimage2,

    },
    {
      id:3,
      img: img3,
      ball: "6.70",
      filmName: "Звёздные войны: Скайуокер...",
      ganr: "Фантастика, фэнтези, боевик...",
      bgcolor: "#89CB36",
    },
    {
      id:4,
      img: img4,
      ball: "8.00",
      filmName: "Джентльмены",
      ganr: "Боевик, комедия, криминал",
      bgcolor: "#4BCB36",
    },
    {
      id:5,
      img: img5,
      ball: "8.10",
      filmName: "Ford против Ferrari",
      ganr: "Биография, спорт, драма, боевик",
      bgcolor: " #4BCB36",
    },
    {
      id:6,
      img: img6,
      ball: "4.90",
      filmName: "3022",
      ganr: "Триллер",
      bgcolor: "#CB3F36",
    },
    {
      id:7,
      img: img7,
      ball: "6.20",
      filmName: "Хищные птицы: Потрясающая история Харли Квинн",
      ganr: "Боевик, криминал, комедия",
      bgcolor: "#89CB36",
    },
    {
      id:8,
      img: img8,
      ball: "6.90",
      filmName: "Плохие парни навсегда",
      ganr: "Боевик, комедия, криминал",
      bgcolor: "#89CB36",
    },
  ]);

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeCards cards={cards} />} />
      <Route path="/afisha" element={<Afisha />} />
      <Route path="/film" element={<Film />} />
      <Route path="/film/:card" element={<CardOf  cards={cards}  />} />
      <Route path="/aktyori" element={<Aktyori />} />
      <Route path="/novosti" element={<Novosti />} />
      <Route path="/podborka" element={<Podborka />} />
      <Route path="/kategorii" element={<Kategotii />} />
      <Route path="/enter" element={<Enter />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/recover" element={<Recover/>}/>
      <Route path="/recoverPassword" element={<RecoverPassword/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
     
  </>
  )
}
