export enum AGENT_TYPE {
  CONTROLLER = "Controller",
  SENTINEL = "Sentinel",
  INITIATOR = "Initiator",
  DUELIST = "Duelist",
}

interface AgentObjectAbstract {
  [key: string]: {
    theme: string;
    type: string;
  };
}

export const valorantAgents: AgentObjectAbstract = {
  brimstone: {
    theme: "#c8641a",
    type: AGENT_TYPE.CONTROLLER,
  },
  viper: {
    theme: "#07a645",
    type: AGENT_TYPE.CONTROLLER,
  },
  omen: {
    theme: "#6869F8",
    type: AGENT_TYPE.CONTROLLER,
  },
  killjoy: {
    theme: "#f8db30",
    type: AGENT_TYPE.SENTINEL,
  },
  cypher: {
    theme: "#e6e6e6",
    type: AGENT_TYPE.SENTINEL,
  },
  sova: {
    theme: "#233d78",
    type: AGENT_TYPE.INITIATOR,
  },
  sage: {
    theme: "#25f9d1",
    type: AGENT_TYPE.SENTINEL,
  },
  phoenix: {
    theme: "#fcd887",
    type: AGENT_TYPE.DUELIST,
  },
  jett: {
    theme: "#7afaf5",
    type: AGENT_TYPE.DUELIST,
  },
  reyna: {
    theme: "#b32895",
    type: AGENT_TYPE.DUELIST,
  },
  raze: {
    theme: "#c24b15",
    type: AGENT_TYPE.DUELIST,
  },
  breach: {
    theme: "#b64e22",
    type: AGENT_TYPE.INITIATOR,
  },
  skye: {
    theme: "#61d6b6",
    type: AGENT_TYPE.INITIATOR,
  },
  yoru: {
    theme: "#2324a0",
    type: AGENT_TYPE.DUELIST,
  },
  astra: {
    theme: "#5220b6",
    type: AGENT_TYPE.CONTROLLER,
  },
  kayo: {
    theme: "#2b4ed4",
    type: AGENT_TYPE.INITIATOR,
  },
  chamber: {
    theme: "#be935b",
    type: AGENT_TYPE.SENTINEL,
  },
  neon: {
    theme: "#3a61ba",
    type: AGENT_TYPE.DUELIST,
  },
  fade: {
    theme: "#315986",
    type: AGENT_TYPE.INITIATOR,
  },
  harbor: {
    theme: "#387966",
    type: AGENT_TYPE.CONTROLLER,
  },
  gekko: {
    theme: "#3e902d",
    type: AGENT_TYPE.INITIATOR,
  },
};
