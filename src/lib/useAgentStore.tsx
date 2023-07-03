import { create } from "zustand";
import { AgentDto, ValorantAgentsKeys } from "@/app/types";
import { AGENT_TYPE, valorantAgents } from "../../constant";

interface AgentState {
  agentSelected: AgentDto;
  updateSelected: (by: AgentDto) => void;
}

const useAgentStore = create<AgentState>()((set) => ({
  agentSelected: {
    agent: "omen",
    biography: "",
    ...valorantAgents["omen"],
  },
  updateSelected: (agentObj: AgentDto) =>
    set(() => ({ agentSelected: agentObj })),
}));

export default useAgentStore;
