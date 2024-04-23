import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import { Contact } from "./Pages/Contact/Contact";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contactMe" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
