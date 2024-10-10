import React, { useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import StarIcon1 from "../../assets/svg/starIcon.svg";
import StarIcon2 from "../../assets/svg/starIcon2.svg";
import Line1 from "../../assets/svg/line1.svg";
import Line2 from "../../assets/svg/line2.svg";
import Circle1 from "../../assets/svg/circle1.svg";
import Circle2 from "../../assets/svg/circle2.svg";
import Circle3 from "../../assets/svg/circle3.svg";
import ThemeContext from "../../components/Theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const CongratulationsPopup = ({ isVisible, onClose }) => {
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;
  const animatedValue4 = useRef(new Animated.Value(0)).current;
  const animatedValue5 = useRef(new Animated.Value(0)).current;
  const animatedValue6 = useRef(new Animated.Value(0)).current;
  const spinValue = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  const globalStyles = useGlobalStyles();
  useEffect(() => {
    if (isVisible) {
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: 1200, // Adjust the duration for different speed
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedValue3, {
        toValue: 1,
        duration: 800, // Adjust the duration for different speed
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedValue4, {
        toValue: 1,
        duration: 1500, // Adjust the duration for different speed
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedValue5, {
        toValue: 1,
        duration: 1100, // Adjust the duration for different speed
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedValue6, {
        toValue: 1,
        duration: 1300, // Adjust the duration for different speed
        useNativeDriver: true,
      }).start();
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ).start();
    } else {
      animatedValue1.setValue(0);
      animatedValue2.setValue(0);
      animatedValue3.setValue(0);
      animatedValue4.setValue(0);
      animatedValue5.setValue(0);
      animatedValue6.setValue(0);
      spinValue.setValue(0);
    }
  }, [isVisible]);

  const translateY1 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
    extrapolate: "clamp",
  });
  const translateX1 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
    extrapolate: "clamp",
  });

  const translateY2 = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const translateX2 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
    extrapolate: "clamp",
  });

  const translateY3 = animatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  //   const translateX3= animatedValue1.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [100, 0],
  //     extrapolate: "clamp",
  //   });

  const translateY4 = animatedValue4.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });
  const translateX4 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
    extrapolate: "clamp",
  });

  const translateY5 = animatedValue5.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const translateX5 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
    extrapolate: "clamp",
  });

  const translateY6 = animatedValue6.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const translateX6 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
    extrapolate: "clamp",
  });

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const theme = useContext(ThemeContext);
  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 30,
            borderRadius: 40,
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              onClose(); // Call onClose function to close the modal
              navigation.navigate("tabscreens"); // Navigate to the desired page
            }}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            <Ionicons name="close-circle" size={24} color="#FC4F72" />
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <Animated.View
              style={[
                styles.icon1,
                {
                  transform: [
                    { translateY: translateY1 },
                    { translateX: translateX1 },
                  ],
                },
              ]}
            >
              <StarIcon1 />
            </Animated.View>
            <Animated.View
              style={[
                styles.icon2,
                {
                  transform: [
                    { translateY: translateY2 },
                    { translateX: translateX2 },
                  ],
                },
              ]}
            >
              <StarIcon2 />
            </Animated.View>
            <Animated.View
              style={[
                styles.icon3,
                {
                  transform: [
                    { translateY: translateY3 },
                    //   { translateX: translateX3 },
                  ],
                },
              ]}
            >
              <Line1 />
            </Animated.View>
            <Animated.View
              style={[
                styles.icon4,
                {
                  transform: [
                    { translateY: translateY4 },
                    //   { translateX: translateX4 },
                  ],
                },
              ]}
            >
              <Line2 />
            </Animated.View>
            <Animated.View
              style={[
                styles.icon5,
                {
                  transform: [
                    { translateY: translateY5 },
                    { translateX: translateX5 },
                  ],
                },
              ]}
            >
              <Circle1 />
            </Animated.View>
            <Animated.View
              style={[
                styles.icon6,
                {
                  transform: [
                    { translateY: translateY6 },
                    { translateX: translateX6 },
                  ],
                },
              ]}
            >
              <Circle2 />
            </Animated.View>
            <Animated.View
              style={[
                styles.icon7,
                { transform: [{ translateY: translateY6 }] },
              ]}
            >
              <Circle3 />
            </Animated.View>
          </View>
          <Image source={require("../../assets/svg/capIcon.png")} />
          <View style={styles.headandPara}>
            <Text style={[globalStyles.headingOne, { color: theme.black }]}>
              Congratulations!
            </Text>
            <Text
              style={[
                globalStyles.paragraph,
                { textAlign: "center", color: theme.black },
              ]}
            >
              Your Account is Ready to Use. You will be redirected to the Home
              Page in a Few Seconds.
            </Text>
          </View>
          <Animated.View
            style={{ transform: [{ rotate: spin }], marginTop: 30 }}
          >
            <AntDesign name="loading1" size={24} color="#FFB322" />
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
  },
  icon: {
    marginHorizontal: 10,
  },
  headandPara: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  icon1: {
    position: "absolute",
    top: 110,
    left: -140,
  },
  icon2: {
    position: "absolute",
    top: 30,
  },
  icon3: {
    position: "absolute",
    top: 50,
    left: -40,
  },
  icon4: {
    position: "absolute",
    top: 20,
    left: -80,
  },
  icon5: {
    position: "absolute",
    top: 50,
    right: -80,
  },
  icon6: {
    position: "absolute",
    top: 130,
    right: -120,
  },
  icon7: {
    position: "absolute",
    top: 70,
    left: -100,
  },
});

export default CongratulationsPopup;
