import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import useGlobalStyles from "../../styles/globalStyles";

const Logo = () => {
  const globalStyles = useGlobalStyles();
  return (
    <View style={globalStyles.mainLogo}>
      <Image
        source={require("../../../assets/appIcon/ll1.png")}
        style={styles.logoImage} // Add this line
      />
      {/* <Text style={globalStyles.headingFour}>ChessChamps</Text> */}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoImage: {
    width: 300, // Set your desired width
    height: 200, // Set your desired height
    resizeMode: "contain", // Optional: keeps the image aspect ratio
  },
});
