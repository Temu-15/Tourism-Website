import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Hero = ({ style }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <section
      className={`relative w-full h-screen mx-auto flex flex-row align-center`}
      style={style}
    >
      <div
        className={`absolute inset-0 top-[120px]max-w-7xl mx-auto  flex flex-col items-center justify-center sm:justify-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h1
            className={` text-white text-center font-black text-white lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
          >
            Travel and Explore <span className="text-[#915EFF]">Ethiopia</span>
          </h1>
          <p
            className={` mt-2 text-white-100 text-center text-[#0B192C] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"`}
          >
            Discover the rich cultural heritage and stunning landscapes of
            Ethiopia
          </p>
          <button
            className="w-[200px] h-[50px] sm:w-[240px] sm:h-[60px] font-medium text-white bg-[#915eff] flex items-center justify-center border-none border-white mt-5 rounded-3xl  transition duration-300 ease-in-out hover:bg-[#915ed0] hover:text-white text-[20px]"
            onClick={handleClick}
            role="link"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
