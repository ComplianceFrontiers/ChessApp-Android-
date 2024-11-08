import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGlobalStyles from "../../styles/globalStyles";
import CommonButton from "../../components/commonbutton/CommonButton";
import { signInData, singinTextInput } from "../../utils/mockData";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";
import Logo from "../../components/logo/Logo";

const SignIn = () => {
  const [emailToSignIn, setEmailToSignIn] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const email = await AsyncStorage.getItem("email");
        if (email) {
          setEmailToSignIn(email);
        }
      } catch (error) {
        console.error("Failed to fetch email:", error);
      }
    };

    fetchEmail();
  }, []);

  const handleSignIn = async () => {
    console.log("Current emailToSignIn value:", emailToSignIn);
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
      console.log("local5", emailToSignIn, response);

      if (response.ok) {
        console.log("locallll1", AsyncStorage);
        const userDetailsResponse = await response.json();
        console.log("API Response:", userDetailsResponse);

        if (!userDetailsResponse.data) {
          Alert.alert("User details not found.");
          return;
        }
        const userDetails = userDetailsResponse.data;

        await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
        console.log("locallll3", AsyncStorage);
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
                value={item.placeholder.trim() === "Email" ? emailToSignIn : undefined}
                onChangeText={(text) => {
                  if (item.placeholder.trim() === "Email") {
                    setEmailToSignIn(text);
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

          <View style={[styles.register, globalStyles.absoluteContents]}>
            <Text style={{ textAlign: "center", color: theme.color }}>
              Don’t have an Account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("fillprofile")}>
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
    paddingTop: "20%",
    alignItems: "center",
    paddingBottom: 60,
  },
  childContents: {
    paddingTop: "20%",
    height: "70%",
  },
  continueWith: {
    paddingTop: "8%",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: "20%",
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
