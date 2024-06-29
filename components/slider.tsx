"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";

type SliderProp = {
  index: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Slider = ({ index }: SliderProp) => {
  const [activeButton, setActiveButton] = useState<number | string | null>(0); // Default to "Home"

  const handleButtonClick = (index: number | string) => {
    setActiveButton(index);
  };

  return (
    <div className="p-3 w-[160px] h-[490px] bg-default-100 shadow-sm rounded-lg">
      <div className="flex flex-col space-y-8 justify-center">
        {["Home", "Editor", "Profile", "Draft", "Trending"].map(
          (label, index) => (
            <Button
              key={index}
              className={
                activeButton === index
                  ? "bg-blue-500 text-white"
                  : "bg-default-200"
              }
              color="default"
              onClick={() => handleButtonClick(index)}
            >
              {label}
            </Button>
          )
        )}
        {/* Separator */}
        <div className="w-full border-t"></div>
        <Button
          className={
            activeButton === "logout"
              ? "bg-blue-500 text-white"
              : "bg-default-200"
          }
          color="default"
          onClick={() => handleButtonClick("logout")}
        >
          Logout
        </Button>
        {/* <Button
          className={
            activeButton === "report"
              ? "bg-blue-500 text-white"
              : "bg-default-200"
          }
          color="default"
          onClick={() => handleButtonClick("report")}
        >
          Report a Bug
        </Button> */}
      </div>
    </div>
  );
};

export default Slider;
