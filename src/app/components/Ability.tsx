"use client";

import React from "react";
import Image from "next/image";
import { AbilityDto, AgentDto } from "../types";
import cooldownImg from "../../../public/Assets/cooldown.png";
import costImg from "../../../public/Assets/credits.png";
import durationImg from "../../../public/Assets/duration.png";
import { motion } from "framer-motion";
import AbilityDetail from "./AbilityDetails";

interface AbilityProps extends AbilityDto, AgentDto {
  // activeHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const bgOverlay = {
  initial: { width: 0, transition: { duration: 0.2 } },
  animate: { width: 100, transition: { duration: 0.2 } },
};

const imgOverlay = {
  initial: {
    filter: "brightness(0.7)",
    scale: 1,
    transition: { duration: 0.2 },
  },
  animate: {
    filter: "brightness(1)",
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const Ability: React.FC<AbilityProps> = ({
  name,
  keybind,
  description,
  imageUrl,
  videoUrl,
  theme,
  type,
}) => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="initial"
        whileHover="animate"
        className=" relative w-[80px] h-[80px] flex items-center justify-center  overflow-hidden bg-secondary border-white border-2 cursor-pointer"
      >
        <motion.div className="image_overlay bg-primary" variants={bgOverlay} />
        <motion.div
          className="w-[50px] h-[50px] z-10 ability-img "
          variants={imgOverlay}
        >
          <Image src={imageUrl} alt="ability-img" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Ability;
