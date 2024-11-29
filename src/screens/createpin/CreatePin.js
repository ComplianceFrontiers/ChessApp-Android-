import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import OtpTextInput from "react-native-text-input-otp";
import CommonButton from "../../components/commonbutton/CommonButton";
import CongratulationsPopup from "../congratulations/CongratulationsPopup";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../../components/logo/Logo";

const CreatePin = () => {
  const [otp, setOtp] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  const getDeviceType = () => {
    const userAgent = navigator.userAgent;
    return /android|iPhone|iPod|Windows Phone/i.test(userAgent)
      ? 'Mobile'
      : /iPad/i.test(userAgent)
      ? 'Tablet'
      : 'Desktop';
  };

  const fetchWithDeviceType = async (url, email) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, device_name: getDeviceType() }),
    });
    return response.json();
  };

  const handleLogoutFromPreviousDevice = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      if (!email) return;

      const deleteResponse = await fetchWithDeviceType(
        "https://backend-chess-tau.vercel.app/delete_session_inschool",
        email
      );
      if (deleteResponse.success) await fetchWithDeviceType("https://backend-chess-tau.vercel.app/signin_inschool", email);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const logAsyncStorageData = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      if (!email) return;

      // Check if email is "test@gmail.com" and navigate to popularcourses directly
      if (email === "test@gmail.com") {
        navigation.navigate("home");
        return;
      }
      
      const loginResponse = await fetchWithDeviceType("https://backend-chess-tau.vercel.app/signin_inschool", email);
       if("data" in loginResponse){
        await handleLogoutFromPreviousDevice();
       }


      if (loginResponse.success && loginResponse.device) {
        await handleLogoutFromPreviousDevice();
      }
    } catch (error) {
      console.error("AsyncStorage fetch error:", error);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      const email = await AsyncStorage.getItem("email");
      const response = await fetch("https://backend-chess-tau.vercel.app/verify_otp_inschool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (data.success) {
        await AsyncStorage.setItem("email",email);
        setIsModalVisible(true);
        navigation.navigate("home");
      } else {
        Alert.alert("Invalid OTP", "Please check your OTP and try again.");
      }
    } catch (error) {
      Alert.alert("Error", "OTP verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    logAsyncStorageData();
  }, []);

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        setIsModalVisible(false);
        navigation.navigate("home");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isModalVisible, navigation]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headingOne}>Enter OTP</Text>
      <Logo />

      <View style={globalStyles.contents}>
        <Text style={globalStyles.paragraph}>Enter OTP to Make Your Account more Secure</Text>
        <View style={{ marginVertical: "5%" }}>
          <OtpTextInput otp={otp} setOtp={setOtp} digits={6} style={styles.otpInput} borderColor="#FFB322" />
        </View>
      </View>
      <View style={[globalStyles.absoluteContents, { width: "90%", bottom: 30 }]}>
        <CommonButton label={loading ? "Verifying..." : "Continue"} onPress={verifyOtp} disabled={loading} />
        <CongratulationsPopup isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpInput: {
    marginBottom: "8%",
    borderRadius: 50,
    height: 40,
    borderColor: "#FFB322",
  },
});

export default CreatePin;
