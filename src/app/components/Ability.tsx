import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useAbilityStore from "@/lib/useAbilityStore";
import AbilityList from "./AbilityList";
import { AbilityDto } from "../types";

interface IAbilityProps {
  imageUrl: string;
  theme: string;
  agentAbilities: Array<AbilityDto>;
  name: string;
}

const bgOverlay = {
  initial: { width: 0, transition: { duration: 0.2 } },
  animate: { width: 120, transition: { duration: 0.2 } },
};

const imgOverlay = {
  initial: {
    filter: "brightness(0.7)",
    scale: 1,
    transition: { duration: 0.2 },
  },
  animate: {
    filter: "brightness(1)",
    scale: 1.2,
    transition: { duration: 0.2 },
  },
};

const Ability: React.FC<IAbilityProps> = ({
  imageUrl,
  theme,
  agentAbilities,
  name,
}) => {
  const active = useAbilityStore((state) => state.selected);
  const activeBg = name === agentAbilities[active].name ? theme : "#1E2031";

  return (
    <>
      <motion.div
        initial="initial"
        animate="initial"
        whileHover="animate"
        className=" relative w-[80px] h-[80px] flex items-center justify-center overflow-hidden bg-secondary border-white border-2 cursor-pointer"
        style={{ backgroundColor: activeBg }}
      >
        <motion.div
          className="image_overlay"
          variants={bgOverlay}
          style={{ background: `${theme}` }}
        />
        <motion.div
          className="w-[50px] h-[50px] z-10 ability-img "
          variants={imgOverlay}
        >
          <Image src={imageUrl} alt="ability-img" width={500} height={500} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Ability;
