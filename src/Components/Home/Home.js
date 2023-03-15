import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../Assets/Navbar/Navbar";
import Afisha from "../Afisha/Afisha";
import Aktyori from "../Aktyori/Aktyori";
import Film from "../Film/Film";
import Kategotii from "../Kategorii/Kategotii";
import Novosti from "../Novosti/Novosti";
import Podborka from "../Podborka/Podborka";
import "./HomeHead/Home.css";
import HomeHead from "./HomeHead/HomeHead";
export default class Home extends Component {
  render() {
    return (
      <>
        <div className="homeCover">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeHead />} />
            <Route path="/afisha" element={<Afisha />} />
            <Route path="/film" element={<Film />} />
            <Route path="/aktyori" element={<Aktyori />} />
            <Route path="/novosti" element={<Novosti />} />
            <Route path="/podborka" element={<Podborka />} />
            <Route path="/kategorii" element={<Kategotii />} />
          </Routes>
        </div>
        
      </>
    );
  }
}