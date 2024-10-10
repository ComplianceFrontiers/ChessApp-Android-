import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CommonButton = ({ bgColor, label, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: bgColor ? bgColor : "#FC4F72" },
      ]}
      onPress={onPress}
    >
      <Text style={[ styles.label, { color: color ? color : "white" }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8D00C5",
    paddingHorizontal: 25,
    paddingVertical: 18,
    alignItems: "center",
    borderRadius: 75,
  },
  label:{
    fontWeight:"700"
  }
});

export default CommonButton;
