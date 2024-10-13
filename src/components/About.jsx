import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutphoto from "../assets/aboutus.jpg";
import { useNavigate } from "react-router-dom";
import bgimage from "../assets/image.png";

function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const myStyle = {
    backgroundImage: `url(${bgimage})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div>
      <Navbar />
      <section className="py-20 mt-19 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src={aboutphoto}
                alt="photo os the founders"
                className="max-lg:mx-auto object-cover"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-[#05073C] mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-[#05073C]-400 max-lg:text-center max-w-2xl mx-auto">
                  We specialize in providing unforgettable experiences in
                  Ethiopia, from breathtaking landscapes to rich cultural
                  heritage.
                </p>
                <button
                  onClick={handleClick}
                  className="w-[200px] h-[50px] sm:w-[240px] sm:h-[60px] font-medium text-white bg-[#915eff] flex items-center justify-center border-none border-white mt-5 rounded-3xl  transition duration-300 ease-in-out hover:bg-[#915ed0] hover:text-white text-[20px] lg:mx-0 mx-auto"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-[#05073C] capitalize font-bold mb-14">
            our company in Numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-[#05073C] font-semibold mb-2">
                    Tourism Growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Ethiopia’s tourism sector has seen a 240% growth, making it
                    a top destination for adventure, culture, and history.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-[#05073C] font-semibold mb-2">
                    Destinations Covered
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We cover over 175 destinations across Ethiopia, offering
                    unique experiences in every corner of the country.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-[#05073C] font-semibold mb-2">
                    Tours Organized
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have successfully organized over 625 tours, providing
                    unforgettable travel experiences across Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 bg-gray-50" style={myStyle}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-4 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-[#05073C] text-center">
              What our travelers say!
            </h2>
          </div>

          <section className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium ">
                    "Our trip to Ethiopia was beyond incredible. The landscapes,
                    the culture, and the people made this an unforgettable
                    experience. Thank you for organizing such a perfect
                    itinerary!"
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500">
                    <div className="pr-3 font-medium ">Emily Johnson</div>
                    <div className="pl-3 text-[#05073C]">
                      Traveler from the USA
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
