import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  darkMode: localStorage.getItem('darkMode') === 'false' || true,
  toggleDarkMode: () => set((state) => {
    localStorage.setItem('darkMode', !state.darkMode);
    return { darkMode: !state.darkMode };
  }),
}));