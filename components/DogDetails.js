import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "../context/ThemeContext";

const DogDetails = ({ route, navigation }) => {
  const { dog } = route.params; // Información del perro pasada desde DogList
  const { theme } = useTheme();

  const handleEdit = () => {
    Alert.alert("Editar mascota", "Función de edición simulada.", [{ text: "OK" }]);
  };

  const handleDelete = () => {
    Alert.alert("Eliminar mascota", "Función de eliminación simulada.", [{ text: "OK" }]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: dog.image }} style={styles.image} />
      <Text style={[styles.breedName, { color: theme.textColor }]}>Raza: {dog.breed}</Text>
      <Text style={[styles.details, { color: theme.textColor }]}>
        Características: Esta raza es conocida por ser amigable y leal.
      </Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground }]} onPress={handleEdit}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Editar Información</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground }]} onPress={handleDelete}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Eliminar Mascota</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  breedName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  details: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DogDetails;
