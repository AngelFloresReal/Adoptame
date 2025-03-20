import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ color: theme.textColor, fontSize: 18, marginBottom: 20 }}>
        Tema actual: {theme.background === "#121212" ? "Oscuro" : "Claro"}
      </Text>

      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          backgroundColor: theme.buttonBackground,
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          width: 200,
        }}
      >
        <Text style={{ color: theme.buttonText, fontSize: 16 }}>Cambiar Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#FF6347",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: 200,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Settings;
