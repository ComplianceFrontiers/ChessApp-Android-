import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Linking } from "react-native";
import useGlobalStyles from "../../styles/globalStyles";
import { signInData } from "../../utils/mockData";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";
import Logo from "../../components/logo/Logo";
import { FontAwesome } from "@expo/vector-icons"; // Importing FontAwesome for icons

const SignUpScreen = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  // Function to handle email link
  const handleEmailPress = () => {
    const emailUrl = "mailto:connect@chesschamps.us?subject=Request From Chess Champs App &body=Hello, I need assistance...";
    Linking.openURL(emailUrl).catch((err) =>
      console.error("Failed to open email client", err)
    );
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.contents}>
        <Logo />
        <View style={styles.childContents}>
          <View style={{ paddingVertical: "8%", gap: 20 }}>
            {signInData.map((item) => (
              <TouchableOpacity
                style={styles.signinBTNS}
                key={item.id}
                onPress={() => {
                  if (item.title === "Continue with Google") {
                    navigation.navigate("signin");
                  } else if (item.title === "Continue with Apple") {
                    navigation.navigate("signin");
                  }
                }}
              >
                {item.icon}
                <Text style={{ color: theme.color }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={[
              globalStyles.headingFour,
              { textAlign: "center", marginBottom: "10%" },
            ]}
          >
            (Or)
          </Text>
          <CommonButton
            label="Sign In with Your Account"
            onPress={() => navigation.navigate("signin")}
          />
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

      {/* Support Icon and Text at the bottom right */}
      <View style={styles.supportContainer}>
        <TouchableOpacity 
          style={styles.supportIcon} 
          onPress={handleEmailPress}
        >
          <FontAwesome name="headphones" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.supportText}>Having issues? Please connect to Customer Support</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    paddingTop: "10%",
    alignItems: "center",
  },
  childContents: {
    paddingTop: "10%",
    height: "54%",
  },
  signinBTNS: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "lightgrey",
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "100%",
  },
  register: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    gap: 5,
  },
  supportContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  supportIcon: {
    backgroundColor: "#4CAF50", // Background color for the icon
    borderRadius: 50,
    padding: 10,
    elevation: 5, // Add shadow for better visibility
  },
  supportText: {
    color: "white",
    marginLeft: 10,
    fontSize: 14,
    maxWidth: 180, // Prevent the text from going too far
    lineHeight: 18,
  },
});

export default SignUpScreen;
