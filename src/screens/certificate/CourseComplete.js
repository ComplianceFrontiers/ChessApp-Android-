import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";

const CourseComplete = () => {
  const navigation = useNavigation();

  const globalStyles = useGlobalStyles();

  return (
    <>
      <View style={globalStyles.container}>
        <Header label="Certificate" />
        <View style={[globalStyles.contents, { marginTop: "15%" }]}>
          <Image
            source={require("../../assets/images/certificateIMG.png")}
            style={styles.image}
          />
          <View style={styles.headAndPara}>
            <Text style={globalStyles.headingOne}>Course Completed</Text>
            <Text style={globalStyles.paragraph}>
              "Congratulations on your graduation!"
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.absoluteBTN}>
        <CommonButton
          label="Get Your Certificate"
          onPress={() => navigation.navigate("certificatedownload")}
        />
      </View>
    </>
  );
};

export default CourseComplete;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 357,
  },
  headAndPara: {
    alignItems: "center",
    marginVertical: "5%",
    gap: 10,
  },
});
