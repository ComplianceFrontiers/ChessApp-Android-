import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
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

  return (
    <View style={[styles.mainContainer, { backgroundColor: theme.background }]}>
      <ScrollView style={[globalStyles.colorBG, { marginBottom: "10%" }]}>
        <View style={globalStyles.container}>
          <Header label="My Courses" />
          <View style={globalStyles.contents}>
            <View style={{ marginBottom: "10%" }}>
              <View style={styles.intro}>
                <Text style={globalStyles.headingFive}>
                  Section 01 -{" "}
                  <Text style={globalStyles.redTextwithWeight}>Introduction</Text>
                </Text>
                <Text style={globalStyles.redText}>25 Mins</Text>
              </View>
              <View style={{ gap: 20, paddingVertical: "5%" }}>
                {myCoursesData1.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.videoContainer}
                    onPress={() => {
                      if (item.id === 1) {
                        navigation.navigate("coursedetails/modules/level1/introduction/11");
                      }
                      // Add more conditions here if needed for other items
                    }}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                      <Text style={[styles.id, globalStyles.headingFive]}>{item.id}</Text>
                      <View>
                        <Text style={globalStyles.headingFive}>{item.title}</Text>
                        <Text style={{ color: theme.color }}>{item.duration}</Text>
                      </View>
                    </View>
                    <PlayBTN />
                  </TouchableOpacity>
                ))}
              </View>
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
  intro: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
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
  absoluteBtn: {
    position: "absolute",
    bottom: 20,
    width: "95%",
    alignSelf: "center",
  },
});
