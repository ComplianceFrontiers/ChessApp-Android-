import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { forgotPassData } from "../../utils/mockData";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);

  return (
    <View style={globalStyles.container}>
      <Header label="Forgot password" />
      <View style={globalStyles.contents}>
        <Text style={globalStyles.paragraph}>
          Select which contact details should we use to Reset Your Password
        </Text>
        <View style={{ gap: 15, width: "100%", marginTop: "7%" }}>
          {forgotPassData.map((item) => (
            <TouchableOpacity style={styles.contact}>
              {item.icon}
              <View>
                <Text style={{ fontWeight: "500" }}>{item.title}</Text>
                <Text>{item.para}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View
        style={[
          globalStyles.absoluteContents,
          { width: "90%", bottom: 30, gap: 20 },
        ]}
      >
        <CommonButton
          label="Continue"
          onPress={() => navigation.navigate("entercode")}
        />
        <Text style={{ textAlign: "center", color: theme.color }}>
          By continuing, you agree to ChessChamps{" "}
          <Text style={globalStyles.yellowTextWithUnderline}>
            Terms and Conditions of Use
          </Text>{" "}
          and
          <Text style={globalStyles.yellowTextWithUnderline}>
            {" "}
            Privacy Policy.
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    backgroundColor: "#FFE7EC",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 20,
  },
});

export default ForgotPassword;
