import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { gradeData } from "../../utils/mockData";
import OpenDropdown from "../../assets/svg/dropdownClosed.svg";
import CloseDropdown from "../../assets/svg/dropdownOpened.svg";

const CustomDropdown = () => {
  const [selectedGrade, setSelectedGrade] = useState("Select Grade");
  const [isClicked, setIsClicked] = useState(false);

  const globalStyles = useGlobalStyles();

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[globalStyles.input, styles.InputDetail]}
          onPress={() => setIsClicked(!isClicked)}
        >
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Text>{selectedGrade}</Text>
          </View>

          {isClicked ? <CloseDropdown /> : <OpenDropdown />}
        </TouchableOpacity>
        {isClicked ? (
          <View style={styles.dropdownitems}>
            {gradeData.map((item, i) => (
              <TouchableOpacity
                key={i + 1}
                onPress={() => (
                  setSelectedGrade(item.grade), setIsClicked(false)
                )}
              >
                <Text>{item.grade}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          ""
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownitems: {
    width: "90%",
    backgroundColor: "white",
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 7,
    marginBottom: 15,
    alignSelf: "center",
    padding: "5%",
    gap: 25,
    marginTop: "2%",
  },
  grade: {
    padding: 20,
  },
  InputDetail: {
    padding: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default CustomDropdown;
