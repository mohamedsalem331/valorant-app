import { create } from "zustand";

interface AbilityState {
  selected: number;
  updateSelected: (by: number) => void;
}

const useAbilityStore = create<AbilityState>()((set) => ({
  selected: 0,
  updateSelected: (idx) => set(() => ({ selected: idx })),
}));

export default useAbilityStore;
