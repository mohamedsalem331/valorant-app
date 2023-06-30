import React from "react";
import controllerImg from "../../../public/Assets/controller.png";
import Image from "next/image";
import { AbilityDto } from "../types";

interface TitleProps extends Partial<AbilityDto> {
  title: string;
  description?: string;
  icon?: boolean;
}

const Title: React.FC<TitleProps> = ({ description, title, icon = true }) => {
  return (
    <>
      <div className="flex flex-col gap-7 container mb-16 w-full">
        <h2 className="flex flex-row  items-center">
          <span className="text-2xl text-white">{title} &nbsp;</span>
          <span className="text-4xl font-semibold text-primary"> - Omen</span>
        </h2>
        <div className="flex flex-row items-center gap-4">
          {icon && (
            <div className="w-[32px] h-[32px] bg-primary flex justify-center items-center rounded-[50%]">
              <Image
                src={controllerImg}
                className="w-[18px] h-auto"
                alt="controller-icon"
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
