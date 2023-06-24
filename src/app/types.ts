import { StaticImageData } from "next/image";

export type AbilityDto = {
  name: string;
  artwork: StaticImageData;
  duration: string;
  cost: number;
  cooldown: string;
  description: string;
  keymap: string;
};
