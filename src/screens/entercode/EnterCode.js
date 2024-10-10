import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import OtpTextInput from "react-native-text-input-otp";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";

const EnterCode = () => {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(59);
  const globalStyles = useGlobalStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  return (
    <View style={globalStyles.container}>
      <Header label="Enter 4 Digit Code" />
      <View style={globalStyles.contents}>
        <Text style={globalStyles.paragraph}>
          Code has been Send to fel*****d@example.com
        </Text>
        <View style={{ marginVertical: "10%" }}>
          <OtpTextInput
            otp={otp}
            setOtp={setOtp}
            digits={4}
            style={styles.otpInput}
            borderColor="#FFB322"
            fontStyle={{ fontSize: 45, fontWeight: "bold", color: "#FC4F72" }}
            focusedStyle={{ borderColor: "#FFB322" }}
          />
        </View>
        <Text style={{ color: theme.color }}>
          Resend Code in <Text style={globalStyles.redText}>{countdown}</Text>s
        </Text>
      </View>
      <View
        style={[globalStyles.absoluteContents, { width: "90%", bottom: 30 }]}
      >
        <CommonButton
          label="Continue"
          onPress={() => navigation.navigate("newpassword")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpInput: {
    marginBottom: "8%",
    borderRadius: 50,
    height: 80,
    borderColor: "#FFB322",
  },
});

export default EnterCode;
