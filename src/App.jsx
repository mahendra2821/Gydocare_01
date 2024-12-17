import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KeyInfo from "./components/KeyInfo";
import SuccessStories from "./components/SuccessStories";
import Servides from "./components/Servides";
import Offers from "./components/Offers";
import Pricing from "./components/Pricing";
import Client from "./components/Clients";
import Footer from "./components/Footer";
// import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <KeyInfo/>
      <SuccessStories/>
      <Servides/>
      <Offers/>
      <Pricing/>
      {/* <About/> */}
      <Client/>
      <Footer/>
    </>

    
  );
}

export default App;
