import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface IAgentCardProps {
  agent: string;
  theme: string;
}
//
const AgentCard: React.FC<IAgentCardProps> = ({ agent, theme }) => {
  return (
    <>
      <div
        className={`bg-slate-200 overflow-hidden flex group-hover/card:scale-110 group-hover/card:p-0  p-2 cursor-pointer justify-center items-center w-[20rem] h-[35rem] bg-opacity-0 border-4 rounded-xl duration-500`}
        style={{ borderColor: `${theme}` }}
      >
        {/* bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 */}
        <div
          className="relative w-full h-full group-hover/card:border-0 border-[1px] rounded-lg border-gray-300 "
          style={{
            backgroundImage: `linear-gradient(to top, #2c2c2c  20%, ${theme} 70%)`,
          }}
        >
          <Image
            src={`/Assets/Artworks/${agent}.png`}
            width={500}
            height={500}
            alt="agent-img"
            className="w-full  -translate-y-5"
          />
          <div className="absolute bottom-[5%] left-[31%] text-white text-[28px] font-bold">
            {agent.toUpperCase()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCard;
