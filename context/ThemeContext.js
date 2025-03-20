import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definimos los temas
const lightTheme = {
  background: "#ffffff",
  textColor: "#000000",
  buttonBackground: "#ff0051",
  buttonText: "#ffffff",
};

const darkTheme = {
  background: "#121212",
  textColor: "#ffffff",
  buttonBackground: "#444",
  buttonText: "#ffffff",
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("appTheme");

      if (savedTheme) {
        setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
      } else {
        setTheme(Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const listener = async ({ colorScheme }) => {
      const savedTheme = await AsyncStorage.getItem("appTheme");

      if (!savedTheme) {
        setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
      }
    };

    const subscription = Appearance.addChangeListener(listener);
    return () => subscription.remove();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    await AsyncStorage.setItem("appTheme", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
