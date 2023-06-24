import Image from "next/image";
import heroImg from "../../public/Assets/background.png";
import AgentImg from "../../public/Assets/omen/main.png";
import Logo from "./components/Logo";
import AgentCard from "./components/AgentCard";
import Description from "./components/Description";
import Ability from "./components/Ability";

import Ability1Img from "../../public/Assets/omen/ability1.png";
import Ability2Img from "../../public/Assets/omen/ability2.png";
import Ability3Img from "../../public/Assets/omen/ability3.png";
import Ability4Img from "../../public/Assets/omen/ability4.png";

let data = [
  {
    name: "SHROUDED STEP",
    artwork: Ability1Img,
    duration: "15 s",
    cost: "150",
    cooldown: "30 s",
    description:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location",
    keymap: "C",
  },
  {
    name: "SHROUDED STEP",
    artwork: Ability2Img,
    duration: "15 s",
    cost: "150",
    cooldown: "30 s",
    description:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location",
    keymap: "C",
  },
  {
    name: "SHROUDED STEP",
    artwork: Ability3Img,
    duration: "15 s",
    cost: "150",
    cooldown: "30 s",
    description:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location",
    keymap: "C",
  },
  {
    name: "SHROUDED STEP",
    artwork: Ability4Img,
    duration: "15 s",
    cost: "150",
    cooldown: "30 s",
    description:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location",
    keymap: "C",
  },
];

export default function Home() {
  return (
    <>
      <Logo />
      <div className="relative flex items-center justify-center h-full">
        <div className="absolute top-0 left-0 opacity-5 bg-secondary w-full h-full">
          <Image className="block w-screen " src={heroImg} alt="heroimg" />
        </div>
        <div className="flex flex-row gap-40">
          {[...Array(5)].map((_, idx) => (
            <AgentCard key={idx} />
          ))}
        </div>
      </div>
      <div className="ml-72 -translate-y-12">
        <Description />
      </div>
      <div className="flex flex-row  w-full justify-center items-center">
        <div className="basis-[70%] ml-36">
          {data.map((data, idx) => (
            <Ability {...data} key={idx} />
          ))}
        </div>
        <div className="w-full h-full flex justify-center">
          <Image className="w-[60rem] h-auto" src={AgentImg} alt="AgentImg" />
        </div>
      </div>
    </>
  );
}
