export const data = [
  {
    name: "Omen",
    artwork: "/Assets/omen",
    abilities: [
      {
        abilityName: "shrouded step",
        artwork: "/Assets/omen/ability1",
        description:
          "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
        key: "",
        credits: null,
        cooldown: null,
        duration: null,
      },
      {
        abilityName: "paranoia",
        artwork: "/Assets/omen/ability2",
      },
      {
        abilityName: "dark cover",
        artwork: "/Assets/omen/ability3",
      },
      {
        abilityName: "from the shadows",
        artwork: "/Assets/omen/ability4",
      },
    ],
  },
];

enum Type {
  CONTROLLER = "Controller",
  SENTINEL = "Sentinel",
  INITIATOR = "Initiator",
  DUELIST = "Duelist",
}

const agents = {
  Brimstone: {
    theme: "#c8641a",
    type: Type.CONTROLLER,
  },
  Viper: {
    theme: "#07a645",
    type: Type.CONTROLLER,
  },
  Omen: {
    theme: "#6869F8",
    type: Type.CONTROLLER,
  },
  Killjoy: {
    theme: "#f8db30",
    type: Type.SENTINEL,
  },
  Cypher: {
    theme: "#e6e6e6",
    type: Type.SENTINEL,
  },
  Sova: {
    theme: "#233d78",
    type: Type.INITIATOR,
  },
  Sage: {
    theme: "#25f9d1",
    type: Type.SENTINEL,
  },
  Phoenix: {
    theme: "#fcd887",
    type: Type.DUELIST,
  },
  Jett: {
    theme: "#7afaf5",
    type: Type.DUELIST,
  },
  Reyna: {
    theme: "#b32895",
    type: Type.DUELIST,
  },
  Raze: {
    theme: "#c24b15",
    type: Type.DUELIST,
  },
  Breach: {
    theme: "#b64e22",
    type: Type.INITIATOR,
  },
  Skye: {
    theme: "#61d6b6",
    type: Type.INITIATOR,
  },
  Yoru: {
    theme: "#2324a0",
    type: Type.DUELIST,
  },
  Astra: {
    theme: "#5220b6",
    type: Type.CONTROLLER,
  },
  "KAY/O": {
    theme: "#2b4ed4",
    type: Type.INITIATOR,
  },
  Chamber: {
    theme: "#be935b",
    type: Type.SENTINEL,
  },
  Neon: {
    theme: "#3a61ba",
    type: Type.DUELIST,
  },
  Fade: {
    theme: "#315986",
    type: Type.INITIATOR,
  },
  Harbor: {
    theme: "#387966",
    type: Type.CONTROLLER,
  },
  Gekko: {
    theme: "#3e902d",
    type: Type.INITIATOR,
  },
};
