import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import PlayBTN from "../../assets/svg/playButton.svg";
import { myCoursesData1, myCoursesData2 } from "../../utils/mockData";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import LockIcon from "../../components/lockIcon/LockIcon";
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
                  <Text style={globalStyles.redTextwithWeight}>
                    Introduction
                  </Text>
                </Text>
                <Text style={globalStyles.redText}>25 Mins</Text>
              </View>
              <View style={{ gap: 20, paddingVertical: "5%" }}>
                {myCoursesData1.map((item) => (
                  <View key={item.id} style={styles.videoContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                      }}
                    >
                      <Text style={[styles.id, globalStyles.headingFive]}>
                        {item.id}
                      </Text>
                      <View>
                        <Text style={globalStyles.headingFive}>
                          {item.title}
                        </Text>
                        <Text style={{ color: theme.color }}>
                          {item.duration}
                        </Text>
                      </View>
                    </View>
                    <PlayBTN />
                  </View>
                ))}
              </View>
              <View style={[styles.intro, { marginTop: "5%" }]}>
                <Text style={globalStyles.headingFive}>
                  Section 02 -{" "}
                  <Text style={globalStyles.redTextwithWeight}>
                    Graphic Design
                  </Text>
                </Text>
                <Text style={globalStyles.redText}>2 hours</Text>
              </View>
              <View style={{ gap: 20, paddingVertical: "5%" }}>
                {myCoursesData2.map((item) => (
                  <View key={item.id} style={styles.videoContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                      }}
                    >
                      <Text style={[styles.id, globalStyles.headingFive]}>
                        {item.id}
                      </Text>
                      <View>
                        <Text style={globalStyles.headingFive}>
                          {item.title}
                        </Text>
                        <Text style={{ color: theme.color }}>
                          {item.duration}
                        </Text>
                      </View>
                    </View>
                    <LockIcon />
                  </View>
                ))}
              </View>
              <View style={[styles.intro, { marginTop: "5%" }]}>
                <Text style={globalStyles.headingFive}>
                  Section 03 -{" "}
                  <Text style={globalStyles.redTextwithWeight}>
                    Let’s Practice
                  </Text>
                </Text>
                <Text style={globalStyles.redText}>1 hour</Text>
              </View>
              <View style={{ gap: 20, paddingVertical: "5%" }}>
                {myCoursesData2.map((item) => (
                  <View key={item.id} style={styles.videoContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                      }}
                    >
                      <Text style={[styles.id, globalStyles.headingFive]}>
                        {item.id}
                      </Text>
                      <View>
                        <Text style={globalStyles.headingFive}>
                          {item.title}
                        </Text>
                        <Text style={{ color: theme.color }}>
                          {item.duration}
                        </Text>
                      </View>
                    </View>
                    <LockIcon />
                  </View>
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
    alignItems: "center",
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
