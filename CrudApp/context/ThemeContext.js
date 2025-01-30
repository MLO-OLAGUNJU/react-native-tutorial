import { Colors } from "@/constants/Colors";
import { createContext, useState } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
