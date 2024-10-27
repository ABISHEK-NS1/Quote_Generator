import React, { useState } from "react";
import utils from "../../utils";

function Hero() {
  const [index, setIndex] = useState(0);

  const displayArray = [
    {
      image: utils("Quote1.jpeg"),
      quote: "Mindset is what seperates the best from the rest",
    },
    {
      image: utils("Quote2.jpg"),
      quote: "Today is your opportunity to build the tomorrow you want",
    },
    {
      image: utils("Quote3.jpg"),
      quote: "The best view comes after the hardest climb",
    },
    {
      image: utils("Quote4.png"),
      quote: "Accept no one's definition of your life; define yourself",
    },
    {
      image: utils("Quote5.png"),
      quote:
        "Don't compare your life to others. There is no comparison between the sun and the moon, they shine when its their time",
    },
    {
      image: utils("Quote6.jpg"),
      quote:
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    },
    {
      image: utils("Quote7.jpg"),
      quote: 'sUccess all depends on the second letter',
    },
  ];

  function handleClick() {
    setIndex(Math.floor(Math.random() * displayArray.length));
  }

  return (
    <>
      <div
        className="h-64 bg-white/50 mx-auto backdrop-blur-lg shadow-xl mt-10 flex rounded-md"
        style={{ width: "550px" }}
      >
        <img
          src={displayArray[index].image}
          alt="something"
          className="rounded-md flex justify-start items-stretch flex-row h-64 w-56 object-cover"
        />
        <p
          className="mx-6 text-2xl text-center flex items-center"
          style={{
            fontFamily: "'Stylish',serif",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          {displayArray[index].quote}
        </p>
      </div>
      <div className="flex justify-center items-center mt-9">
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Want more!
        </button>
      </div>
    </>
  );
}

export default Hero;
