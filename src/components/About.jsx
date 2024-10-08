import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Navbar />
      <section class="py-14 lg:py-28 mt-10 relative z-0 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Control your Finances with our{" "}
            <span class="text-indigo-600">Smart Tool </span>
          </h1>
          <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>
      <section class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div class="img-box">
              <img
                src="src/assets/Lalibela church.jpg"
                alt="About Us tailwind page"
                class="max-lg:mx-auto object-cover"
              />
            </div>
            <div class="lg:pl-[100px] flex items-center">
              <div class="data w-full">
                <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Driven by a passion for seamless user experiences, we've
                  meticulously curated pagedone to empower creators, designers,
                  and developers alike. Our mission is to provide a
                  comprehensive toolkit, enabling you to build intuitive,
                  beautiful interfaces that resonate with users on every
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-20 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div class="flex gap-5">
                <div class="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div class="flex-1">
                  <h4 class="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p class="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class=" py-14 lg:py-24 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div class="mb-4 rounded-full">
            <h2 class="text-4xl font-manrope font-bold text-gray-900 text-center">
              What our happy user says!
            </h2>
          </div>

          <section class="bg-gray-50">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="max-w-screen-md mx-auto">
                <svg
                  class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
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
                  <p class="text-2xl font-medium ">
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <img
                    class="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div class="flex items-center divide-x-2 divide-gray-500 ">
                    <div class="pr-3 font-medium ">Micheal Gough</div>
                    <div class="pl-3 font-light">CEO at Google</div>
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
