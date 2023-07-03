"use client";

import React, { useState } from "react";
import { AbilityDto, AgentDto } from "../types";
import useAbilityStore from "@/lib/useAbilityStore";
import AbilityList from "./AbilityList";
import AbilityVideo from "./AbilityVideo";

interface IAbilityDetailsProps {
  agentAbilities: Array<AbilityDto>;
  agentDetails: AgentDto;
}

const AbilityDetails: React.FC<IAbilityDetailsProps> = ({
  agentDetails,
  agentAbilities,
}) => {
  const active = useAbilityStore((state) => state.selected);
  const { description, name, keybind, imageUrl, videoUrl } =
    agentAbilities[active];
  return (
    <>
      <section id="ability-view" className="mb-28">
        <div className=" flex flex-row w-[90%] min-w-[60rem] items-center mt-10 ">
          <AbilityList
            agentAbilities={agentAbilities}
            agentDetails={agentDetails}
          />
          <AbilityVideo videoUrl={videoUrl} />
        </div>
        <div className="w-[35rem]  mb-72 text-white">
          <h3 className="mb-10 text-2xl  tracking-widest">{`${keybind} - ${name}`}</h3>
          <p className="  text-[#BEBEBE] text-[14px] block tracking-widest leading-9">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};

export default AbilityDetails;
