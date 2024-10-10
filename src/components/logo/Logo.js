import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoIcon from "../../assets/svg/logo.svg";
import useGlobalStyles from "../../styles/globalStyles";

const Logo = () => {
  const globalStyles = useGlobalStyles();
  return (
    <View style={globalStyles.mainLogo}>
      <LogoIcon />
      <Text style={globalStyles.headingFour}>Smartup</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
