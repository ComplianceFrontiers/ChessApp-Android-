import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import useGlobalStyles from "../../../../../../styles/globalStyles";
import Header from "../../../../../../components/header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import RatingIcon from "../../../../../../assets/svg/ratingIcon.svg";
import AboutTab from "../../../../../abouttab/AboutTab";
import CurriculumTab from "../../../../../curriculumtab/CurriculumTab";
import CommonButton from "../../../../../../components/commonbutton/CommonButton";
import ThemeContext from "../../../../../../components/Theme/ThemeContext";
import ClassIcon from "../../../../../../components/classicon/ClassIcon";
import TimeIcon from "../../../../../../components/timeicon/TimeIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";

const T11 = () => {
  const route = useRoute();
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  const tabs = [
    { id: 1, tab: "About" },
    { id: 2, tab: "Curriculum" },
  ];

  const [activeTab, setActiveTab] = useState("About");
  const [showVideo, setShowVideo] = useState(false); // State to toggle video display

  const handleTabs = (item) => {
    setActiveTab(item);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case "Curriculum":
        return <CurriculumTab />;
      default:
        return null;
    }
  };
  const handleNextButtonPress = async () => {
    try {
      // Retrieve user details from AsyncStorage
      const userDetailsString = await AsyncStorage.getItem("userDetails");
      const storedUserDetails = userDetailsString ? JSON.parse(userDetailsString) : null;
  
      if (storedUserDetails) {
        const requestData = {
          email: storedUserDetails.email,
          course_title: "theChessboard",
          completed: 100, // Update the completion percentage here
        };
  
        // First, update course completion using fetch
        const response = await fetch("https://backend-chess-tau.vercel.app/update-course-completion-inschool", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
  
        const data = await response.json();
  
        if (data.success) {
          // After course completion is updated, update the course status for "theChessboard" to "Completed"
          const updateCourseResponse = await fetch("https://backend-chess-tau.vercel.app/update_registered_courses_inschool", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: storedUserDetails.email,
              course_title: "theChessboard",
              status: "Completed",
            }),
          });
  
          const updateCourseData = await updateCourseResponse.json();
  
          if (updateCourseData.success) {
            // Update status for next course "introductionToPieces" to "In Progress"
            const updateNextCourseResponse = await fetch("https://backend-chess-tau.vercel.app/update_registered_courses_inschool", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: storedUserDetails.email,
                course_title: "introductionToPieces",
                status: "In Progress",
              }),
            });
  
            const updateNextCourseData = await updateNextCourseResponse.json();
  
            if (updateNextCourseData.success) {
              // Navigate to the next screen if everything is successful
              navigation.navigate("coursedetails/modules/level1/introductionToPieces/31");
            } else {
              console.error("Failed to update next course status:", updateNextCourseData.message);
            }
          } else {
            console.error("Failed to update course status:", updateCourseData.message);
          }
        } else {
          console.error("Failed to update course completion:", data.message);
        }
      } else {
        console.error("User details not found in AsyncStorage");
      }
    } catch (error) {
      console.error("Error calling API or navigating:", error);
    }
  };
  


  return (
    <View style={[styles.mainContain, { backgroundColor: theme.background }]}>
      <ScrollView style={globalStyles.colorBG}>
        <View style={styles.mediaContainer}>
          
            <WebView
              source={{ uri: "https://www.youtube.com/embed/oTuFjXndtjY" }}
              style={{ width: "100%", height: 300 }}
              allowsFullscreenVideo
            />
           </View>
        <View style={globalStyles.container}>
          <View style={styles.absoluteIMG}>
            <Header level = "1" label="" backBTNCLR="white" />
          </View>
        </View>
        <View
          style={[
            globalStyles.contents,
            styles.parallaxContainer,
            { backgroundColor: theme.background },
          ]}
        >
           
          <Text style={globalStyles.headingFour}>
          1.7 Name of the Squares
          </Text>
           {/* <View style={styles.classDetailsAndPrice}>
            <View style={styles.classDetails}>
              <ClassIcon />
              <Text style={{ color: theme.color }}>21 Classes</Text>
              <Text style={{ color: theme.color }}>|</Text>
              <TimeIcon />
              <Text style={{ color: theme.color }}>42 Hours</Text>
            </View>
          </View> */}
          <View style={styles.tabContainer}>
            {tabs.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleTabs(item.tab)}
              >
                <Text
                  style={
                    activeTab === item.tab
                      ? styles.activeTab
                      : styles.inactiveTab
                  }
                >
                  {item.tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {renderTabs()}
          {activeTab === "About" && (
  <>
          <Text style={globalStyles.paragraph}>
          As discussed earlier, every square on the board has a unique "first name" and "last name."
  The first name corresponds to the letter of the File (the vertical column), and the last name
  corresponds to the number of the Rank (the horizontal row).
          </Text>
          <Text style={globalStyles.paragraph}>
          For example, take the square highlighted in the image: D4. The first name is "D," which is
  the File the square is on, and the last name is "4," representing the 4th Rank. Together, they
  form the square's unique identifier: D4.
          </Text>
         </>
)}
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: theme.background }]}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.goBack("coursedetails/modules/level1/theChessboard/25")} // Replace with your actual logic for Previous
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navigationButton}
            onPress={handleNextButtonPress}
          >
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "50%",
    height: 320,
    marginTop: "8%",
  },
  absoluteIMG: {
    position: "absolute",
    top: -270,
    width: "100%",
  },
  parallaxContainer: {
    marginTop: -100,
    width: "100%",
    alignItems: "center",
    paddingTop: "0%",
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  classDetailsAndPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  classDetails: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "3%",
    gap: 10,
  },
  tabContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "5%",
  },
  activeTab: {
    paddingHorizontal: "17%",
    paddingVertical: "5%",
    borderRadius: 35,
    backgroundColor: "#FC4F72",
    color: "white",
    fontWeight: "600",
  },
  inactiveTab: {
    paddingHorizontal: "17%",
    paddingVertical: "5%",
    borderRadius: 35,
    backgroundColor: "#F1F1F1",
    color: "black",
    fontWeight: "600",
  },
 buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white", // Adjust if necessary
  },
  navigationButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: "#FC4F72", // Change to your desired color
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  mainContain: {
    flex: 1,
  },
  mediaContainer: {
    marginVertical: 40,
  },
});

export default T11;
