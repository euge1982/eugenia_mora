//ThemeStore: debe contener una constante useThemeStore usando defineStore, que implemente el modelo ThemeState
//y un metodo para cambiar el tema. El estado inicial debe setearse en isDark: false, y  mode: 'Light Mode'.
//El metodo unicamente debe cambiar el isDark a !isDark y el string de mode a 'Dark / Light Mode' segun corresponda.

import type { ThemeState } from "@/models/ThemeState";
import { defineStore } from "pinia";

export const useThemeStore = defineStore({
  id: "theme",
  state: (): ThemeState => ({
    isDark: false,
    mode: "Light Mode",
  }),
  actions: {
    toggleDarkMode(): void {
      this.isDark = !this.isDark;
      this.mode = this.isDark ? "Dark Mode" : "Light Mode";
    },
  },
});
