// App.js
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import ThemeContext from "./src/components/Theme/ThemeContext";
import theme from "./src/components/Theme/Theme";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [initialRoute, setInitialRoute] = useState('tabscreens');

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
    });

    const checkAsyncStorage = async () => {
      const data = await AsyncStorage.getItem('email'); // Check if email exists
      if (data) {
        setInitialRoute('tabscreens'); // Set to 'tabscreens' if email exists
      } else {
        setInitialRoute('onboarding'); // Set to 'onboarding' otherwise
      }
    };

    checkAsyncStorage();

    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, []);

  return (
    <ThemeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <NavigationContainer
        onStateChange={(state) => {
          const route = state.routes[state.index];
          setInitialRoute(route.name); // Update the current route if needed
        }}
      >
        <StatusBar
          style={darkMode ? "light" : "dark"}
          backgroundColor={darkMode ? "#46007C" : "white"}
          animated={true}
        />
        <AppNavigator initialRoute={initialRoute} />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
