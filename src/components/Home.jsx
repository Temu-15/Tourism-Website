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
import Map from "./Map.jsx";
function Home() {
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div>
      <Hero style={myStyle} />
      <Package />
      <Feature />
      <CallToAction />
      <Popular />
      <Map />
    </div>
  );
}

export default Home;
