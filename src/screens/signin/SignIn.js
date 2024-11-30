import React, { useContext, useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Linking,
  Keyboard, // Import Keyboard API
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGlobalStyles from "../../styles/globalStyles";
import CommonButton from "../../components/commonbutton/CommonButton";
import { signInData, singinTextInput } from "../../utils/mockData";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";
import Logo from "../../components/logo/Logo";
import { FontAwesome } from "@expo/vector-icons"; // Importing FontAwesome for icons 

const SignIn = () => {
  const [emailToSignIn, setEmailToSignIn] = useState("");
  const [loading, setLoading] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); // State to track keyboard visibility
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  const handleEmailPress = () => {
    const emailUrl = "mailto:connect@chesschamps.us?subject=Request From Chess Champs App &body=Hello, I need assistance...";
    Linking.openURL(emailUrl).catch((err) =>
      console.error("Failed to open email client", err)
    );
  };

  useEffect(() => {
    // Add listeners for keyboard events
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardVisible(false)
    );

    return () => {
      // Cleanup listeners
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSignIn = async () => {
    if (!emailToSignIn) {
      Alert.alert("Please enter your email.");
      return;
    }
    try {
      setLoading(true);
      await AsyncStorage.setItem("email", emailToSignIn);

      const response = await fetch(
        `https://backend-chess-tau.vercel.app/getinschooldetails?email=${emailToSignIn}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const userDetailsResponse = await response.json();

        if (!userDetailsResponse.data) {
          Alert.alert("User details not found.");
          return;
        }
        const userDetails = userDetailsResponse.data;

        await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
        navigation.navigate("createpin");
      } else {
        Alert.alert("Failed to sign in. Please try again.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      Alert.alert("An error occurred. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={globalStyles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.contents}>
            <Logo />
            <View style={styles.childContents}>
              <Text style={globalStyles.headingOne}>Let's Sign In</Text>
              <Text style={globalStyles.paragraph}>
                Login to Your Account to Continue your Courses
              </Text>

              <View style={{ paddingTop: "1%", gap: 20, paddingBottom: "1%" }}>
                {singinTextInput.map((item) => (
                  <TextInput
                    key={item.id}
                    placeholder={item.placeholder}
                    style={globalStyles.input}
                    left={<TextInput.Icon icon={item.icon} />}
                    right={<TextInput.Icon icon={item.rightIcon} />}
                    underlineColor="transparent"
                    theme={{
                      colors: {
                        primary: "transparent",
                        underlineColor: "transparent",
                      },
                    }}
                    secureTextEntry={item.securetext}
                    value={item.placeholder.trim() === "Email" ? emailToSignIn : undefined}
                    onChangeText={(text) => {
                      if (item.placeholder.trim() === "Email") {
                        setEmailToSignIn(text);
                      }
                    }}
                    onFocus={() => {
                      if (scrollViewRef.current) {
                        scrollViewRef.current.scrollTo({
                          y: 100, // Adjust based on where the email field is located
                          animated: true,
                        });
                      }
                    }}
                  />
                ))}
                <CommonButton
                  label={loading ? "Signing In..." : "Sign In"}
                  onPress={handleSignIn}
                  disabled={loading}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Support View - Conditional Rendering */}
      {!isKeyboardVisible && (
        <View style={styles.supportContainer}>
          <TouchableOpacity 
            style={styles.supportIcon} 
            onPress={handleEmailPress}
          >
            <FontAwesome name="headphones" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.supportText}>Having issues? Please connect With Email</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    flex: 1,
    paddingTop: "5%", 
    alignItems: "center",
    paddingBottom: 30, 
  },
  childContents: {
    paddingTop: "1%", 
    height: "auto",
  },
  supportContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "flex-end",
    zIndex: 10, // Ensure it is above other elements
    elevation: 5, // Add shadow for better visibility
  },
  supportIcon: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    padding: 10,
  },
  supportText: {
    color: "black",
    textAlign: "right",
    marginTop: 5,
    fontSize: 14,
    maxWidth: 180,
    lineHeight: 18,
  },
});

export default SignIn;
