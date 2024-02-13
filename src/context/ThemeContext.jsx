"use client";

import { createContext, useState } from "react";
export const ThemeContext = createContext();

const getFromLoaclStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLoaclStorage();
  });
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
