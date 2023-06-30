"use client";

import AgentCard from "./AgentCard";
import { useDragControls, motion } from "framer-motion";
import Title from "./Title";

const AgentCardSlider = () => {
  let data = [];

  const controls = useDragControls();

  const startDrag = (event: any) => controls.start(event);

  return (
    <>
      <div className="relative h-full w-full flex flex-col  overflow-x-hidden">
        <div className="flex justify-center items-center h-full">
          <motion.div
            className="flex flex-row gap-32 "
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            dragControls={controls}
            onPointerDown={startDrag}
          >
            {data.map((abilityData, idx) => (
              <AgentCard
                {...abilityData}
                {...agentDetails}
                agent={agentName}
                key={idx}
              />
            ))}
          </motion.div>
        </div>
        <div className="">
          <Title
            description="Omen is a flanker who is able to get behind enemy lines with teleports and strike from sneaky angles."
            title="About Agent"
          />
        </div>
      </div>
    </>
  );
};

export default AgentCardSlider;
