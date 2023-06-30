"use client";

import React, { useState } from "react";
import { AbilityDto, AgentDto } from "../types";
import useAbilityStore from "@/lib/useAbilityStore";

interface IAbilityDetailsProps
  extends Partial<AbilityDto>,
    Partial<AbilityDto> {
  children: React.ReactNode;
  data: any;
}

const AbilityDetails: React.FC<IAbilityDetailsProps> = ({
  // name,
  // keybind,
  // description,
  // imageUrl,
  // videoUrl,
  // theme,
  // type,
  children,
  data,
}) => {
  const active = useAbilityStore((state) => state.selected);
  const { description, name, keybind } = data[active];
  return (
    <>
      <section id="ability-view">
        <div className=" flex flex-row w-[90%] min-w-[60rem] items-center mt-10 ">
          {children}
        </div>
      </section>
      <div className="w-[35rem]  mb-72 text-white">
        <h3 className="mb-10 text-2xl  tracking-widest">{`${keybind} - ${name}`}</h3>
        <p className="  text-[#BEBEBE] text-[14px] block tracking-widest leading-9">
          {description}
        </p>
      </div>
    </>
  );
};

export default AbilityDetails;
