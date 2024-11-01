import type { ThemeModel } from "@/models/themeModel";
import { defineStore } from "pinia";

export const useThemeStore = defineStore({
  id: "theme",
  state: (): ThemeModel => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode(): void {
      this.darkMode = !this.darkMode;
    },
  },
});
