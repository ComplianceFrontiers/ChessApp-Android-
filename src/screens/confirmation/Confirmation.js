import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import ConfirmIMG from "../../assets/svg/confirmIMG.svg";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";

const Confirmation = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  return (
    <>
      <View style={globalStyles.container}>
        <Header label="Confirmation" />
        <View style={globalStyles.contents}>
          <ConfirmIMG />
          <View style={styles.paraHead}>
            <Text style={globalStyles.headingFour}>Congratulations </Text>
            <Text style={[globalStyles.paragraph, { textAlign: "center" }]}>
              Your Payment is Successfully. Purchase a New Course
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.absoluteBtns}>
        <CommonButton
          label="Go to Course"
          onPress={() => navigation.navigate("mycourses")}
        />
        <CommonButton label="Invoice Bill" bgColor="white" color="black" />
      </View>
    </>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  confirmIMG: {
    width: 280,
    height: 300,
    backgroundColor: "red",
  },
  paraHead: {
    marginVertical: "5%",
    alignItems: "center",
    gap: 10,
    width: "80%",
  },
  absoluteBtns: {
    position: "absolute",
    bottom: 20,
    width: "95%",
    alignSelf: "center",
    gap: 15,
  },
});
