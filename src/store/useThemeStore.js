import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  darkMode: false, 

  initializeTheme: () => {
    const stored = localStorage.getItem('darkMode');
    const isDark = stored === 'true';
    set({ darkMode: isDark });
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  toggleDarkMode: () =>
    set((state) => {
      const newTheme = !state.darkMode;
      localStorage.setItem('darkMode', newTheme.toString());
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { darkMode: newTheme };
    }),
}));
