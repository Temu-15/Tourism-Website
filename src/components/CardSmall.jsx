import React from "react";

function CardSmall({ img, title, className }) {
  const myStyle = {
    backgroundImage: `url(${img})`,
    height: "240px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    position: "relative",
  };

  return (
    <div style={myStyle} className={`rounded-lg overflow-hidden ${className}`}>
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
        <h2 className="font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default CardSmall;
