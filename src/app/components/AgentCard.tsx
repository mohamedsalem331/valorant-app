import React from "react";
import Image from "next/image";
import imageAgent from "../../../public/Assets/omen/main.png";

const AgentCard = () => {
  return (
    <>
      <div className="relative overflow-hidden group/card flex hover:scale-110 cursor-pointer justify-center items-center w-[22rem] h-[40rem] bg-opacity-0 border-4 rounded-xl border-primary duration-500">
        <Image
          src={imageAgent}
          alt="agent-img"
          className="absolute -translate-y-[4rem] scale-110 "
        />
        <div className="relative w-[20.5rem] h-[38.5rem]  border-[1px] rounded-lg border-gray-300 border-opacity-50 animate-gradient">
          <div className="absolute bottom-14 left-[37%] text-white text-[28px] font-bold">
            OMEN
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCard;
