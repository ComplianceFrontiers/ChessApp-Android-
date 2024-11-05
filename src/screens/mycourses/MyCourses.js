import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import PlayBTN from "../../assets/svg/playButton.svg";
import { myCoursesData1 } from "../../utils/mockData";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";

const MyCourses = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  // State to track the expanded item
  const [expandedItemId, setExpandedItemId] = useState(null);

  // Toggle the expanded state of an item
  const toggleExpand = (itemId) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <View style={[styles.mainContainer, { backgroundColor: theme.background }]}>
      <ScrollView style={[globalStyles.colorBG, { marginBottom: "10%" }]}>
        <View style={globalStyles.container}>
          <Header label="Level 1 (Pawn)" />
          <View style={globalStyles.contents}>
            <View style={{ gap: 20, paddingVertical: "0%" }}>
              {myCoursesData1.map((item) => (
                <View key={item.id}>
                  <TouchableOpacity
                    style={styles.videoContainer}
                    onPress={() => toggleExpand(item.id)} // Toggle expand state
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                      <Text style={[styles.id, globalStyles.headingFive]}>{item.id}</Text>
                      <View>
                        <Text style={globalStyles.headingFive}>{item.title}</Text>
                        <Text style={{ color: theme.color }}>Completion Percentage</Text>
                      </View>
                    </View>
                    <PlayBTN />
                  </TouchableOpacity>

                  {/* Render submodules if this item is expanded and has submodules */}
                  {expandedItemId === item.id && item.submodules?.map((submodule) => (
                    <TouchableOpacity
                      key={submodule.id}
                      style={styles.submoduleItem}
                      onPress={() => navigation.navigate(submodule.url)}
                    >
                      <Text style={[styles.submoduleText, globalStyles.text]}>{submodule.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.absoluteBtn}>
        <CommonButton
          label="Start the course"
          onPress={() => navigation.navigate("certificate")}
        />
      </View>
    </View>
  );
};

export default MyCourses;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  id: {
    backgroundColor: "#FFC8D3",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    borderRadius: 30,
  },
  videoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  submoduleItem: {
    paddingVertical: 5,
    paddingLeft: 40,
  },
  submoduleText: {
    color: "#555", // Adjust color as needed
  },
  absoluteBtn: {
    position: "absolute",
    bottom: 20,
    width: "95%",
    alignSelf: "center",
  },
});
