import React from "react";
import Refer from "./components/refer/Refer";
import ReferHero from "./components/refer/ReferHero";
import ReferBenefits from "./components/benefits/ReferBenefits";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import FooterComp from "./components/footer/FooterComp";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/refer' element={<Refer />} />
        <Route path='/refer-benefits' element={<ReferBenefits />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App;
