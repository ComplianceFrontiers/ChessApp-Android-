import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
      />
      <Ionicons name="search" size={24} color="black" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 5,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SearchBar;
