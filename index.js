import { createStore } from "zustand/esm";

export const useUserStore = createStore((set, get) => {
  return {
    user: {},
    setUser(obj) {
      set(state => state.user = obj)
    }
  }
})