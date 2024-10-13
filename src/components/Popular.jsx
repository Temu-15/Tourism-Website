import React from "react";
import { Link } from "react-router-dom";
import CardSmall from "./CardSmall";
import irrecha from "../assets/irrecha.jpg";
import ashenda from "../assets/ashenda.jpg";
import ethiopianRun from "../assets/ethiopianRun.jpg";
import harare from "../assets/harare.jpg";
import meskel from "../assets/meskel.jpg";
import Timket from "../assets/Timket.jpg";
import "animate.css"; // Import animate.css for extra effects
import { Slide, Fade, Zoom } from "react-awesome-reveal";

function Popular() {
  return (
    <div className="lg:px-12 mt-20 px-4 sm:px-8 mb-12 ">
      <Slide duration={800}>
        <div className="h-[50px] flex items-center justify-between mb-10">
          <h2 className="font-bold text-[24px] md:text-[30px] leading-[36px] md:leading-[45px] text-[#05073C]">
            Popular events
          </h2>
          <Link
            to="/"
            className="leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#05073C]"
          >
            See all
          </Link>
        </div>
      </Slide>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        style={{ gridAutoRows: "minmax(200px, auto)" }}
      >
        <Fade duration={600}>
          <CardSmall img={meskel} title="Meskel" />
        </Fade>

        <Zoom duration={800} className="lg:col-span-2">
          <CardSmall img={ashenda} title="Ashenda" />
        </Zoom>

        <Slide direction="left" duration={500}>
          <CardSmall img={irrecha} title="Irrecha" />
        </Slide>

        <Fade duration={700} className="lg:col-span-2">
          <CardSmall img={Timket} title="Timket" />
        </Fade>

        <Zoom delay={200}>
          <CardSmall img={harare} title="Harare" />
        </Zoom>

        <Slide direction="right" duration={500}>
          <CardSmall img={ethiopianRun} title="Great Ethiopian Run" />
        </Slide>
      </div>
    </div>
  );
}

export default Popular;
