import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../backbutton/BackButton";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import FilterIcon from "../../assets/svg/filterIcon.svg";
import SearchIcon from "../searchIcon/SearchIcon";

const Header = ({ label,level, searchIcon, filterIcon, backBTNCLR, backBTN }) => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  return (
    <View style={styles.header}>
      {backBTN == false ? (
        <View style={{ width: 20 }} />
      ) : (
        <BackButton level={level} color={backBTNCLR} />
      )}

      <Text style={[globalStyles.headingOne, styles.label]}>{label}</Text>
      {/* Conditionally render search icon */}
      {searchIcon && (
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <SearchIcon />
        </TouchableOpacity>
      )}
      {/* Conditionally render filter icon */}
      {filterIcon && (
        <TouchableOpacity onPress={() => navigation.navigate("filterscreen")}>
          <FilterIcon />
        </TouchableOpacity>
      )}

{level==1 && (
        <TouchableOpacity onPress={() => navigation.navigate("notifications")}>
        </TouchableOpacity>
      )}

      {/* Render free space when neither searchIcon nor filterIcon is true */}
      {!searchIcon && !filterIcon && <View style={{ width: 20 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  label: {
    textAlign: "center",
  },
});

export default Header;
