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
        const email = await AsyncStorage.getItem("email");

        if (email) {
          const userDetailsResponse = await fetch(
            `https://backend-chess-tau.vercel.app/getinschooldetails?email=${email}`
          );
          const userDetailsData = await userDetailsResponse.json();

          if (userDetailsData.success) {
            const newUserDetails = userDetailsData.data;

            // Update local storage with the latest user details
            await AsyncStorage.setItem("userDetails", JSON.stringify(newUserDetails));

            // Update courses with completion percentage from user details
            const updatedCourses = myCoursesData1.map(course => {
              const registeredCourse = newUserDetails.registered_inschool_courses.find(
                regCourse => regCourse.course_title === course.title
              );

              return {
                ...course,
                completed: registeredCourse ? registeredCourse.completed : 0,
                status: registeredCourse ? registeredCourse.status : 'default', // add status from API response
              };
            });

            setCourses(updatedCourses);
          } else {
            console.error("User details fetch failed:", userDetailsData.message);
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserData();
  }, []);

  const toggleExpand = (itemId) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  // Function to determine the background color based on course status
  const getCourseColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4CAF50"; // Green for completed courses
      case "In Progress":
        return "#FFEB3B"; // Yellow for in-progress courses
      default:
        return "#FFA500"; // Orange for default or missing course status
    }
  };

  // Function to check if the course is clickable
  const isCourseClickable = (status) => status !== "default"; // Only clickable if not "default"

  // Function to check if the submodule should be clickable
  const isSubmoduleClickable = (status) => status !== "default"; // Only clickable if course is not "default"

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
                    style={[
                      styles.videoContainer,
                    ]}
                    onPress={isCourseClickable(item.status) ? () => navigation.navigate(item.url) : null} // Disable onPress if course is "default"
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                      <Text
                        style={[
                          styles.id,
                          globalStyles.headingFive,
                          { backgroundColor: getCourseColor(item.status) },
                        ]}
                      >
                        {item.id}
                      </Text>
                      <View>
                        <Text style={globalStyles.headingFive}>{item.showntitle}</Text>
                        <Text style={{ color: theme.color }}>
                          Completed Percentage: {item.completed}%
                        </Text>
                      </View>
                    </View>
                    <PlayBTN onPress={() => toggleExpand(item.id)} />
                  </TouchableOpacity>

                  {expandedItemId === item.id &&
                    item.submodules?.map((submodule) => (
                      <TouchableOpacity
                        key={submodule.id}
                        style={styles.submoduleItem}
                        onPress={isSubmoduleClickable(item.status) ? () => navigation.navigate(submodule.url) : null} // Disable onPress if course is "default"
                      >
                        <Text style={[styles.submoduleText, globalStyles.text]}>
                          {submodule.title}
                        </Text>
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
    alignSelf: "flex-end",  // Aligns the submodules to the right
    marginRight: 20,  // Adds some space from the right edge
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
