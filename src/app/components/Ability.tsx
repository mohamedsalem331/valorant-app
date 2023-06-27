"use client";

import React from "react";
import Image from "next/image";
import { AbilityDto } from "../types";
import cooldownImg from "../../../public/Assets/cooldown.png";
import costImg from "../../../public/Assets/credits.png";
import durationImg from "../../../public/Assets/duration.png";
import { motion } from "framer-motion";

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
      <motion.div
        className="bg-orange-600"
        initial={{ width: 0 }}
        whileHover={{
          width: "100px",
          transition: { duration: 1 },
        }}
      >
        <motion.div
          className="w-[100px] h-[100px] flex items-center justify-center test bg-primary  border-red-400 border-4 cursor-pointer"
          whileHover={{
            transition: { duration: 1 },
            backgroundColor: "#1E2031",
          }}
        >
          <Image
            className="w-[65px] h-[65px]"
            src={artwork}
            alt="controller-icon"
          />
        </motion.div>
        {/* <span className="text-white text-[19px]">{description}</span> */}
      </motion.div>
    </>
  );
};

export default Ability;
