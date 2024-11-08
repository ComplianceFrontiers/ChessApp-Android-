import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  const [expandedItemId, setExpandedItemId] = useState(null);
  const [courses, setCourses] = useState(myCoursesData1);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDetailsString = await AsyncStorage.getItem("userDetails");
        const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

        if (userDetails && userDetails.registered_inschool_courses) {
          const updatedCourses = myCoursesData1.map(course => {
            const registeredCourse = userDetails.registered_inschool_courses.find(
              regCourse => regCourse.course_title === course.title
            );

            return {
              ...course,
              completed: registeredCourse ? registeredCourse.completed : 0,
            };
          });
          setCourses(updatedCourses);
        }
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };

    fetchUserData();
  }, []);

  const toggleExpand = (itemId) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <View style={[styles.mainContainer, { backgroundColor: theme.background }]}>
      <ScrollView style={[globalStyles.colorBG, { marginBottom: "10%" }]}>
        <View style={[globalStyles.container, { marginBottom: "20%" }]}>
          <Header label="Level 1 (Pawn)" />
          <View style={globalStyles.contents}>
            <View style={{ gap: 20, paddingVertical: "0%" }}>
              {courses.map((item) => (
                <View key={item.id}>
                  <TouchableOpacity
                    style={styles.videoContainer}
                    onPress={() => navigation.navigate(item.url)}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                      <Text style={[styles.id, globalStyles.headingFive]}>{item.id}</Text>
                      <View>
                        <Text style={globalStyles.headingFive}>{item.showntitle}</Text>
                        <Text style={{ color: theme.color }}>
                          Completion Percentage: {item.completed}%
                        </Text>
                      </View>
                    </View>
                    <PlayBTN onPress={() => toggleExpand(item.id)} />
                  </TouchableOpacity>

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
          onPress={() => navigation.navigate("coursedetails/modules/level1/introduction/11")}
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
    color: "#555",
  },
  absoluteBtn: {
    position: "absolute",
    bottom: 20,
    width: "95%",
    alignSelf: "center",
  },
});
