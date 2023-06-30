import React from "react";
import Image from "next/image";
import { AbilityDto, AgentDto } from "../types";

interface IAgentCardProps extends AbilityDto, AgentDto {}

const AgentCard: React.FC<IAgentCardProps> = ({
  name,
  keybind,
  description,
  imageUrl,
  videoUrl,
  theme,
  type,
  agent,
}) => {
  return (
    <>
      <div className="relative overflow-hidden group/card flex hover:scale-110 cursor-pointer justify-center items-center w-[17rem] h-[28rem] bg-opacity-0 border-4 rounded-xl border-primary duration-500">
        <Image
          src={`/Assets/Artworks/${agent}.webp`}
          alt="agent-img"
          className="absolute -translate-y-[2.5rem] scale-110 "
        />
        <div className="relative w-[15.5rem] h-[26.5rem]  border-[1px] rounded-lg border-gray-300 border-opacity-50 animate-gradient">
          <div className="absolute bottom-[12%] left-[33%] text-white text-[28px] font-bold">
            {agent}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCard;
