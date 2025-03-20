import { createDrawerNavigator } from "@react-navigation/drawer";
import AdminHomeScreen from "../screens/admin/HomeScreen";
import SettingsScreen from "../screens/Settings";

const Drawer = createDrawerNavigator();

const AdminNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Inicio" component={AdminHomeScreen} />
    <Drawer.Screen name="Configuraciones" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default AdminNavigator;
