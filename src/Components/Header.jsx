import React from "react";

function Header() {
  return (
    <>
      <div>
        <h1
          className="text-gray-800 text-center text-5xl mt-10"
          style={{
            fontFamily:
              "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
          }}
        >
          <span className="word animate-color-change delay-[0s]">Random</span>{" "}
          <span className="word animate-color-change delay-[1s]">Quote</span>{" "}
          <span className="word animate-color-change delay-[2s]">
            Generator
          </span>
        </h1>
        <p className="text-center text-2xl mt-4">🚀 Stay motivated 🚀</p>
      </div>
    </>
  );
}

export default Header;
