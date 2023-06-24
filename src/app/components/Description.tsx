import React from "react";
import controllerImg from "../../../public/Assets/controller.png";
import Image from "next/image";

const Description = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <h2 className="flex flex-row  items-center">
          <span className="text-3xl text-white">About Agent &nbsp;</span>
          <span className="text-5xl text-primary"> - Omen</span>
        </h2>
        <div className="flex flex-row items-center gap-7">
          <div className="w-[50px] h-[50px] bg-primary flex justify-center items-center rounded-[50%]">
            <Image
              src={controllerImg}
              className="w-[25px] h-auto"
              alt="controller-icon"
            />
          </div>
          <span className="text-[24px] text-gray-500">
            Omen is a flanker who is able to get behind enemy lines with
            teleports and strike from sneaky angles.
          </span>
        </div>
      </div>
    </>
  );
};

export default Description;
