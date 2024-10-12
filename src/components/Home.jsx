import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import image from "../assets/mesut_kaya.jpg";
import Package from "./Package";
import Cards from "./Cards";
import Feature from "./Feature";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import Popular from "./Popular.jsx";
function Home() {
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div style={myStyle}>
      <Navbar />
      <Hero />
      <Package />
      <Feature />
      <CallToAction />
      <Popular />
      <Footer />
    </div>
  );
}

export default Home;
