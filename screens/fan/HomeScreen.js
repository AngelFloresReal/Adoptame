import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const UserHomeScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={[styles.text, { color: theme.textColor }]}>¡Bienvenido fan!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "red", padding: 12, borderRadius: 8, marginTop: 10 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default UserHomeScreen;
