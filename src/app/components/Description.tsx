import React from "react";
import controllerImg from "../../../public/Assets/controller.png";
import Image from "next/image";

const Description = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <h2 className="flex flex-row  items-center">
          <span className="text-2xl text-white">About Agent &nbsp;</span>
          <span className="text-4xl font-semibold text-primary"> - Omen</span>
        </h2>
        <div className="flex flex-row items-center gap-4">
          <div className="w-[32px] h-[32px] bg-primary flex justify-center items-center rounded-[50%]">
            <Image
              src={controllerImg}
              className="w-[18px] h-auto"
              alt="controller-icon"
            />
          </div>
          <span className="text-[20px] text-gray-400">
            Omen is a flanker who is able to get behind enemy lines with
            teleports and strike from sneaky angles.
          </span>
        </div>
      </div>
    </>
  );
};

export default Description;
