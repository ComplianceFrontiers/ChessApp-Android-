import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert, // Import Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import useGlobalStyles from "../../styles/globalStyles";
import CommonButton from "../../components/commonbutton/CommonButton";
import { signInData, singinTextInput } from "../../utils/mockData";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";
import Logo from "../../components/logo/Logo";

const SignIn = () => {
  const [emailToSignIn, setEmailToSignIn] = useState("");
  const [loading, setLoading] = useState(false); // For button loading state
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  const handleSignIn = async () => {
    if (!emailToSignIn) {
      Alert.alert("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      // Set email in AsyncStorage
      await AsyncStorage.setItem("email", emailToSignIn);

      // Call the API to get user details using fetch
      const response = await fetch(
        `https://backend-chess-tau.vercel.app/getinschooldetails?email=${emailToSignIn}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if response status is 200
      if (response.ok) {
        const userDetailsResponse = await response.json();
        await AsyncStorage.setItem("userDetails", JSON.stringify(userDetailsResponse.data));
        // Navigate to tabscreens on success
        navigation.navigate("tabscreens");
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
    <ScrollView style={globalStyles.scrollView}>
      <View style={styles.contents}>
        <Logo />
        <View style={styles.childContents}>
          <Text style={globalStyles.headingOne}>Let's Sign In</Text>
          <Text style={globalStyles.paragraph}>
            Login to Your Account to Continue your Courses
          </Text>

          <View style={{ paddingTop: "8%", gap: 20, paddingBottom: "5%" }}>
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
                onChangeText={(text) => setEmailToSignIn(text)} // Update email state
              />
            ))}
            <CommonButton
              label={loading ? "Signing In..." : "Sign In"}
              onPress={handleSignIn}
              disabled={loading} // Disable button during loading
            />
          </View>

          <View style={styles.continueWith}>
            <Text style={{ color: theme.color }}>Or Continue With</Text>
            <View style={styles.icons}>
              {signInData.map((item) => (
                <TouchableOpacity key={item.id} style={styles.socialIcons}>
                  {item.icon}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={[styles.register, globalStyles.absoluteContents]}>
            <Text style={{ textAlign: "center", color: theme.color }}>
              Don’t have an Account?{" "}
            </Text>
            <TouchableOpacity>
              <Text style={[globalStyles.yellowText, { fontWeight: "500" }]}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
    paddingBottom: 60,
  },
  childContents: {
    paddingTop: "20%",
    height: "80%",
  },
  continueWith: {
    paddingTop: "8%",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: "12%",
  },
  socialIcons: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 50,
  },
  register: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default SignIn;
