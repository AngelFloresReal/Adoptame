import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";

const DogList = ({navigation}) => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        // Fetch the list of dog breeds
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message);

        // Fetch a random image for each breed
        const dogData = await Promise.all(
          breeds.map(async (breed) => {
            const imageResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            const imageData = await imageResponse.json();
            return { breed, image: imageData.message };
          })
        );

        setDogs(dogData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos de los perros:", error);
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.textColor} />
        <Text style={{ color: theme.textColor }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={dogs}
        keyExtractor={(item) => item.breed}
        renderItem={({ item }) => (
          <View style={[styles.item, { backgroundColor: theme.buttonBackground }]}>
<TouchableOpacity
  style={[styles.item, { backgroundColor: theme.buttonBackground }]}
  onPress={() => navigation.navigate('DogDetails', { dog: item })}
>
  <Image source={{ uri: item.image }} style={styles.image} />
  <Text style={[styles.breedName, { color: theme.textColor }]}>{item.breed}</Text>
</TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  breedName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default DogList;
