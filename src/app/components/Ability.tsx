import React from "react";
import Image from "next/image";
import { AbilityDto } from "../types";
import cooldownImg from "../../../public/Assets/cooldown.png";
import costImg from "../../../public/Assets/credits.png";
import durationImg from "../../../public/Assets/duration.png";

interface AbilityProps extends AbilityDto {}

const Ability: React.FC<AbilityProps> = ({
  name,
  artwork,
  cooldown,
  cost,
  duration,
  description,
  keymap,
}) => {
  return (
    <>
      <div className="w-full relative h-full">
        <div className="flex flex-col gap-14 ">
          fds
          <div className="flex flex-row gap-3 items-center">
            <div className="relative text-center flex flex-col ">
              <div className="w-[137px] h-[157px] flex items-center justify-center bg-primary rounded-md">
                <Image src={artwork} alt="controller-icon" />
              </div>
              <span className="text-white text-[17px]">{name}</span>
              <div className="flex flex-row divide-x-4 divide-primary gap-2 justify-between">
                <div className="flex flex-col">
                  <Image
                    src={cooldownImg}
                    className="w-[25px] h-auto"
                    alt="controller-icon"
                  />
                  <span className="text-white text-[10px]">{cooldown}</span>
                </div>
                <div className="flex flex-col">
                  <Image
                    src={durationImg}
                    className="w-[25px] h-auto"
                    alt="controller-icon"
                  />
                  <span className="text-white text-[10px]">{duration}</span>
                </div>
                <div className="flex flex-col">
                  <Image
                    src={costImg}
                    className="w-[25px] h-auto"
                    alt="controller-icon"
                  />
                  <span className="text-white text-[10px]">{cost}</span>
                </div>
              </div>
            </div>
            <span className="text-white text-[19px]">{description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ability;
