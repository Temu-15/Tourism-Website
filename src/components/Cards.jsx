import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ title, location, travellers }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="relative w-[300px] h-96 rounded-lg overflow-hidden m-4 group">
      <img
        src="src/assets/Lalibela church.jpg"
        alt="image"
        className="w-full h-full object-cover"
      />
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
      >
        {liked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"
            />
          </svg>
        )}
      </button>

      <div className="absolute bottom-0 flex flex-col items-center left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
        <button
          type="button"
          onClick={handleClick}
          className="w-[140px] h-[50px] sm:w-[140px] sm:h-[50px] font-medium text-white bg-[#915eff] group-hover:flex flex items-center justify-center border-none border-white mt-5 rounded-xl  transition duration-500 ease-in-out hover:bg-[#915ed0] hover:text-white hidden text-[16px]"
        >
          Register Now
        </button>
        <h2 className="mb-2 text-[38px] font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600">{location}</p>
        <p className="text-white-500 text-[18px] mt-2">
          {travellers}wants to travel here
        </p>
      </div>
    </div>
  );
}

export default Cards;
