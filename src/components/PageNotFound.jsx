import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PageNotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex h-[80vh] w-full justify-center items-center flex-col">
      <h2
        className={`text-center font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
      >
        Error 404
      </h2>
      <p
        className={` mt-2 text-white-100 text-center text-[#0B192C] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"`}
      >{` "${location.pathname}" page not found`}</p>
      <button
        className="w-[200px] h-[50px] sm:w-[240px] sm:h-[60px] font-medium text-white bg-[#915eff] flex items-center justify-center border-none border-white mt-5 rounded-3xl  transition duration-300 ease-in-out hover:bg-[#915ed0] hover:text-white text-[20px]  mx-auto"
        onClick={handleClick}
      >
        Go Back to home
      </button>
    </div>
  );
}

export default PageNotFound;
