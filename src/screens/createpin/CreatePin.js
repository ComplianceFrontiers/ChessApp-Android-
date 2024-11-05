import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import OtpTextInput from "react-native-text-input-otp";
import CommonButton from "../../components/commonbutton/CommonButton";
import CongratulationsPopup from "../congratulations/CongratulationsPopup";
import { useNavigation } from "@react-navigation/native";

const CreatePin = () => {
  const [otp, setOtp] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const globalStyles = useGlobalStyles();

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        setIsModalVisible(false);
        navigation.navigate("popularcourses");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isModalVisible, navigation]);

  return (
    <View style={globalStyles.container}>
      <Header label="Create New Pin" />
      <View style={globalStyles.contents}>
        <Text style={globalStyles.paragraph}>
          Add a Pin Number to Make Your Account more Secure
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
      </View>
      <View
        style={[globalStyles.absoluteContents, { width: "90%", bottom: 30 }]}
      >
        <CommonButton
          label="Continue"
          onPress={() => setIsModalVisible(true)}
        />
        <CongratulationsPopup
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
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
export default CreatePin;
