import React from "react";
import Ashenda from "../assets/ashenda_image.jpg";
import bgimage from "../assets/image.png";

function CallToAction() {
  const myStyle = {
    backgroundImage: `url(${bgimage})`,
    height: "550px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <div
      className="w-full h-auto md:h-[550px] flex flex-col md:flex-row justify-between p-6 md:p-12"
      style={myStyle}
    >
      <div className="flex flex-col justify-center items-start w-full md:w-[40%] mb-6 md:mb-0">
        <h2 className="font-bold text-[#05073C] text-[32px] md:text-[40px] leading-[42px] md:leading-[52px] mb-4">
          Grab up to <span className="text-[#EB6628]">35% off</span> on your
          favorite Destination
        </h2>
        <p className="text-[#05073C] text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] mb-4">
          Limited time offer, don't miss the opportunity
        </p>
        <button className="w-full md:w-[168px] h-[50px] md:h-[64px] bg-[#EB662B] rounded-lg text-white font-medium">
          Book here
        </button>
      </div>

      <div className="w-full md:w-[60%] h-[300px] md:h-full">
        <img
          src={Ashenda}
          alt="ashenda dancing girls"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default CallToAction;
