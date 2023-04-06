import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Enter from "../../Assets/Enter/Enter";
import Afisha from "../Afisha/Afisha";
import Aktyori from "../Aktyori/Aktyori";
import Film from "../Film/Film";
import Kategotii from "../Kategorii/Kategotii";
import Novosti from "../Novosti/Novosti";
import Podborka from "../Podborka/Podborka";
import HomeHead from "./HomeHead/HomeHead";
import SignUp from "../../Assets/Enter/SignUp";
import Recover from "../../Assets/Enter/Recover";
import RecoverPassword from "../../Assets/Enter/RecoverPassword";
import NotFound from "../../Assets/NotFound/NotFound";
import CardOfFilm from "../CardOfFilm/CardOfFilm";
import Data from "./Data/Data";
import HomeCards from "./HomeCards/HomeCards";

export default function Home() {

  

  return (
    <>
    <Routes>
      <Route path="/" element={<Data />} />
      <Route path="/afisha" element={<Afisha />} />
      <Route path="/film" element={<Film />} />
      {/* <Route path="/film/:filmid" element={<CardOfFilm data={data}  />} /> */}
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
    {/* <Data/> */}
  </>
  )
}
