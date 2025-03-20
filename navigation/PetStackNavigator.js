import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminHomeScreen from "../screens/admin/HomeScreen";
import DogDetails from "../components/DogDetails";

const Stack = createNativeStackNavigator();

const ProductionStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Films"
      component={AdminHomeScreen}
      options={{headerShown: false }} />
      <Stack.Screen
      name="DogDetails"
      component={DogDetails}
      options={{ headerShown: false}} />
    </Stack.Navigator>
  );
};

export default ProductionStackNavigator;
