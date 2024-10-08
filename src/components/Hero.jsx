import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <section
      className={`relative w-full h-screen mx-auto flex flex-row align-center`}
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
            className={` mt-2 text-white-100 text-center text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"`}
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

      <div className="absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#000] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
