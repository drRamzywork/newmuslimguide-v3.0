import { create } from "zustand";

const useAppStore = create((set, get) => ({
  locale: "en",
  setLocale: (newLocale) => set({ locale: newLocale }),

  messages: {},
  fetchMessages: async (locale) => {
    const res = await fetch(`https://api.example.com/locales/${locale}`);
    const data = await res.json();
    set({ messages: data });
  },

  // مثال على API آخر
  user: null,
  fetchUser: async () => {
    const res = await fetch("/api/user");
    const data = await res.json();
    set({ user: data });
  },
}));

export default useAppStore;
