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
                completed: registeredCourse && typeof registeredCourse.completed === "number"
                  ? registeredCourse.completed
                  : 0, // Default to 0 if invalid
                status: registeredCourse ? registeredCourse.status : "default",
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

  const getCourseColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4CAF50"; // Green
      case "In Progress":
        return "#FFEB3B"; // Yellow
      default:
        return "#FFA500"; // Orange
    }
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
                        <View style={styles.progressBarContainer}>
                          <View
                            style={[
                              styles.progressBar,
                              {
                                backgroundColor: getCourseColor(item.status),
                                width: `${Math.max(0, Math.min(100, item.completed))}%`,
                              },
                            ]}
                          />
                        </View>
                        <Text>{item.completed}%</Text>
                      </View>
                    </View>
                    <PlayBTN onPress={() => toggleExpand(item.id)} />
                  </TouchableOpacity>

                  {expandedItemId === item.id &&
                    item.submodules?.map((submodule) => (
                      <TouchableOpacity
                        key={submodule.id}
                        style={styles.submoduleItem}
                        onPress={() => navigation.navigate(submodule.url)}
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
    paddingLeft: 70,
    alignSelf: "flex-start", // Align submodules to the right
    marginRight: 20, // Space from the right edge
  },
  submoduleText: {
    color: "#555",
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#ccc", // Default light gray background
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 5,
    width: 180, // Fixed width for all progress bars
    alignSelf: "flex-start", // Align properly within the container
  },
  

  progressBar: {
    height: "100%",
  },
  absoluteBtn: {
    position: "absolute",
    bottom: 5,
    width: "95%",
    alignSelf: "center",
  },
});

 