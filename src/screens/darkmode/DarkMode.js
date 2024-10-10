import {
  StyleSheet,
  Text,
  View,
  Switch,
  ActivityIndicator,
  AppState,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EventRegister } from "react-native-event-listeners";

const DarkMode = () => {
  const globalStyles = useGlobalStyles();

  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkMode");
        if (darkModeState !== null) {
          const parsedState = JSON.parse(darkModeState);
          setDarkMode(parsedState);
          EventRegister.emit("ChangeTheme", parsedState); // Emit event to apply theme
        }
      } catch (error) {
        console.error("Error loading dark mode state:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDarkModeState();
  }, []);

  useEffect(() => {
    const saveDarkModeState = async () => {
      try {
        await AsyncStorage.setItem("darkMode", JSON.stringify(darkMode));
      } catch (error) {
        console.error("Error saving dark mode state:", error);
      }
    };

    if (!isLoading) {
      saveDarkModeState();
    }
  }, [darkMode, isLoading]);

  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // App has come to the foreground
      } else if (nextAppState === "background") {
        // App is going to the background
        try {
          await AsyncStorage.removeItem("darkMode");
          setDarkMode(false);
          EventRegister.emit("ChangeTheme", false);
        } catch (error) {
          console.error("Error clearing dark mode state:", error);
        }
      }
      appState.current = nextAppState;
    };

    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  if (isLoading) {
    return (
      <View style={[globalStyles.container, globalStyles.center]}>
        <ActivityIndicator size="large" color="#FC4F72" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Header label="Dark Mode" />
      <View style={globalStyles.contents}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={globalStyles.headingFive}>Switch to Dark Mode</Text>
          <Switch
            trackColor={{ false: "grey", true: "#FC4F72" }}
            thumbColor={darkMode ? "white" : "white"}
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit("ChangeTheme", value);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DarkMode;

const styles = StyleSheet.create({});
