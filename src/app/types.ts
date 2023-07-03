import { valorantAgents } from "../../constant";

export interface AbilityDto {
  name: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  keybind: string;
}

export interface AgentDto {
  agent: string;
  theme: string;
  type: string;
  biography?: string;
}

export type ValorantAgentsKeys = keyof typeof valorantAgents;

// duration: string;
// cost: number;
// cooldown: string;
