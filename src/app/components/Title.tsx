import React from "react";
import controllerImg from "../../../public/Assets/controller.png";
import Image from "next/image";
import { AbilityDto, AgentDto } from "../types";

interface TitleProps extends Partial<AgentDto> {
  title: string;
  description?: string;
  icon?: boolean;
}

const Title: React.FC<TitleProps> = ({
  description = "",
  title,
  agent,
  theme,
  type,
  icon = true,
}) => {
  return (
    <>
      <div className="flex flex-col gap-7 container mb-16 w-full">
        <h2 className="flex flex-row  items-center">
          <span className="text-2xl text-white">{title} &nbsp;</span>
          <span
            className={`text-4xl font-semibold`}
            style={{ color: `${theme}` }}
          >
            - {agent}
          </span>
        </h2>
        <div className="flex flex-row items-center gap-4">
          {icon && (
            <div
              className={`p-3 flex justify-center items-center rounded-[50%] border-[3px]  border-y-slate-950 bg-transparent`}
              style={{
                borderLeftColor: `${theme}`,
                borderRightColor: `${theme}`,
              }}
            >
              <Image
                src={`/Assets/${type?.toLowerCase()}.png`}
                className="w-10"
                alt="type-icon"
                width={500}
                height={500}
              />
            </div>
          )}
          <span className="text-[20px] text-gray-400">{description}</span>
        </div>
      </div>
    </>
  );
};

export default Title;
