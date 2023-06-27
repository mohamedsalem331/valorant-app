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
    cost: 150,
    cooldown: "30 s",
    description:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location",
    keymap: "C",
  },
  {
    name: "SHROUDED STEP",
    artwork: Ability2Img,
    duration: "15 s",
    cost: 150,
    cooldown: "30 s",
    description:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location",
    keymap: "C",
  },
  {
    name: "SHROUDED STEP",
    artwork: Ability3Img,
    duration: "15 s",
    cost: 150,
    cooldown: "30 s",
    description:
      "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location",
    keymap: "C",
  },
  {
    name: "SHROUDED STEP",
    artwork: Ability4Img,
    duration: "15 s",
    cost: 150,
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
      <div className="absolute top-0 left-0 opacity-5 bg-secondary w-full h-full ">
        <Image
          className=" block w-screen h-screen"
          src={heroImg}
          alt="heroimg"
        />
      </div>
      <div className="relative h-full w-full flex flex-col justify-end items-center  overflow-x-hidden">
        <div className="flex justify-center items-center h-full">
          {/* /<div className="h-full justify-center justify-self-center items-center"> */}
          <div className="flex flex-row gap-32 ">
            {[...Array(5)].map((_, idx) => (
              <AgentCard key={idx} />
            ))}
          </div>
        </div>
        <div className="container ml-32 mb-16 ">
          <Description />
        </div>
      </div>
      <div className=" flex flex-row w-full">
        <div className=" relative basis-[70%] h-[150px] ml-32 mt-40 ">
          <div className=" flex gap-14 ability-list z-10 ">
            {data.map((data, idx) => (
              <Ability {...data} key={idx} />
            ))}
          </div>
        </div>
        <div className="w-[600px] h-[400]">
          <video preload="true" loop muted>
            <source
              src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* <div className="w-full h-full flex justify-center -translate-y-[15rem]  ">
          <Image className="w-[100rem] h-auto " src={AgentImg} alt="AgentImg" />
        </div> */}
      </div>
    </>
  );
}
