"use client";

import React from "react";
import useAbilityStore from "@/lib/useAbilityStore";

interface IAbilityListProps {
  data: any;
  agentDetails: any;
}

const AbilityList: React.FC<IAbilityListProps> = ({ data, agentDetails }) => {
  const setActiveHandler = useAbilityStore((state) => state.updateSelected);

  return (
    <>
      <div className=" relative h-[100px] w-full">
        <div className="flex overflow-hidden gap-14 ability-list z-10 ">
          {data.map((abilityData, idx) => (
            <div onClick={() => setActiveHandler(idx)} key={idx}>
              <Ability {...abilityData} {...agentDetails} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AbilityList;
