import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import useGlobalStyles from "../../styles/globalStyles";

const Logo = () => {
  const globalStyles = useGlobalStyles();
  return (
    <View style={globalStyles.mainLogo}>
      <Image
        source={require("../../../assets/appIcon/icon4.png")}
        style={globalStyles.logoImage} // Adjust the style for the image
      />
      <Text style={globalStyles.headingFour}>Smartup</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
