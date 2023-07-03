"use client";

import AgentCard from "./AgentCard";
import { useDragControls, motion } from "framer-motion";
import Title from "./Title";
import { AbilityDto, AgentDto, ValorantAgentsKeys } from "../types";
import { valorantAgents } from "../../../constant";
import useAgentStore from "@/lib/useAgentStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const valorantAgentsList: typeof valorantAgents = valorantAgents;

interface IAgentCardSliderProps {
  // agentAbilities: Array<AbilityDto>;
  agentDetails: AgentDto;
}

const AgentCardSlider: React.FC<IAgentCardSliderProps> = ({
  // agentAbilities = [],
  agentDetails,
}) => {
  const [dragging, setDragging] = useState(false);
  const router = useRouter();

  const controls = useDragControls();
  const setActiveHandler = useAgentStore((state) => state.updateSelected);

  console.log(dragging);
  const startDrag = (event: any) => {
    console.log("dragging");
    controls.start(event);
  };

  const agentCardHandler = (data: AgentDto) => {
    if (!dragging) {
      setActiveHandler(data);
      router.push(`/agents/${data.agent}`);
      router.refresh();
    }
  };

  return (
    <>
      <div className="relative h-full w-full flex flex-col  overflow-x-hidden">
        <div className="flex justify-center items-center h-full">
          <motion.div
            className="flex flex-row gap-32 "
            onPointerDown={startDrag}
            drag="x"
            dragConstraints={{ left: -4000, right: 4000 }}
            dragControls={controls}
            dragElastic={0.2}
            style={{ touchAction: "none" }}
            dragListener={false}
            onDragStart={() => setDragging(true)}
            onDragEnd={(event, info) =>
              setTimeout(() => setDragging(false), 1000)
            }
          >
            {Object.keys(valorantAgentsList).map((key, idx) => (
              <div
                onClick={() =>
                  agentCardHandler({ agent: key, ...valorantAgentsList[key] })
                }
                key={idx}
              >
                <div className="group/card">
                  <motion.div className="absolute bg-transparent w-[20rem] h-[35rem]  z-50 cursor-pointer"></motion.div>
                  <AgentCard
                    agent={key}
                    theme={valorantAgentsList[key].theme}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className={`text-[${agentDetails.theme}]`}>
          <Title
            description={agentDetails.biography}
            title="About Agent"
            {...agentDetails}
          />
        </div>
      </div>
    </>
  );
};

export default AgentCardSlider;
