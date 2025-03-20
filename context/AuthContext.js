import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    const formattedUsername = username.toLowerCase().trim();

    // Base de datos simulada con credenciales válidas
    const validUsers = {
      admin: "admin123",
      user: "user123"
    };

    // 1️Verificar si el usuario y contraseña son correctos
    if (!validUsers[formattedUsername] || validUsers[formattedUsername] !== password) {
      console.log("Usuario o contraseña incorrectos");
      return;
    }

    try {
      // 2️⃣ Si las credenciales son correctas, hacemos la petición a ReqRes
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "eve.holt@reqres.in", password: "cityslicka" }) // Usuario de prueba ReqRes
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login exitoso en ReqRes. Token:", data.token);
        setToken(data.token);
        await AsyncStorage.setItem("userToken", data.token);

        // 3️⃣ Asignar el rol basado en el usuario ingresado
        setUser({ role: formattedUsername });
        await AsyncStorage.setItem("userRole", formattedUsername);
      } else {
        console.log("Error en login con ReqRes:", data.error);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  // Cargar token y usuario al abrir la app
  useEffect(() => {
    const loadSession = async () => {
      const storedToken = await AsyncStorage.getItem("userToken");
      const storedRole = await AsyncStorage.getItem("userRole");

      if (storedToken && storedRole) {
        setToken(storedToken);
        setUser({ role: storedRole });
      }
    };

    loadSession();
  }, []);

  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userRole");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
