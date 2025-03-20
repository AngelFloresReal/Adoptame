import { createDrawerNavigator } from "@react-navigation/drawer";
import UserHomeScreen from "../screens/fan/HomeScreen";
import ProfileScreen from "../screens/Settings";

const Drawer = createDrawerNavigator();

const FanNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Inicio" component={UserHomeScreen} />
    <Drawer.Screen name="Perfil" component={ProfileScreen} />
  </Drawer.Navigator>
);

export default FanNavigator;
