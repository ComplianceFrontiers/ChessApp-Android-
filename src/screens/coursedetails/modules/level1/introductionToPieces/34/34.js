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
import MyCourses from "../../../../../mycourses/MyCourses";
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
        return <MyCourses showHeader={false} />;
      default:
        return null;
    }
  };
  const handleNextButtonPress = async () => {
    try {
      const userDetailsString = await AsyncStorage.getItem("userDetails");
      const storedUserDetails = userDetailsString ? JSON.parse(userDetailsString) : null;
  
      if (storedUserDetails) {
        const requestData = {
          email: storedUserDetails.email,
            course_title: 'introductionToPieces',
            completed: 56
          };
  
        const response = await fetch("https://backend-chess-tau.vercel.app/update-course-completion-inschool", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
  
        const data = await response.json();
       
        if (data) { 
          navigation.navigate("coursedetails/modules/level1/introductionToPieces/35");
        } else {
          console.error("Failed to update course completion", data); 
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
              source={{ uri: "https://www.youtube.com/embed/_llubTg0G5k" }}
              style={{ width: "90%",
                height: 230,
                alignSelf: "center",
                borderRadius: 10, // Optional: Adds rounded corners
                overflow: "hidden" }}
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
          2.4 Understanding the Bishop
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
          The bishop is a long-range piece that moves diagonally across the board, confined to squares of its color complex, either light or dark. Controlling open diagonals is essential for maintaining the bishop’s activity, as it performs best when unblocked. The bishop pair, with one on each color, offers a significant advantage by covering both light and dark squares, enhancing the player’s control over the board.

          </Text>
          <Text style={globalStyles.paragraph}>
          The squares highlighted on the board indicate where the bishop can move. Again, remember that for any piece to move to a square, it must not be blocked by one of its own pieces.

          </Text>
          <Text style={globalStyles.paragraph}>
          Additionally, if an opponent's piece occupies a square, your piece can move to that square only by capturing the opponent's piece.

          </Text>
          <Text style={globalStyles.paragraph}>
          For example, the Light Squared Bishop cannot move to C6 because it is already occupied by its own pawn. However, the bishop can move to G2, but only after capturing the opponent’s knight.

          </Text>
          <Text style={globalStyles.paragraph}>
          Previously, we looked at an example with the light-squared bishop. Now, let us look at an example with the dark-squared bishop:

          </Text>
          <Text style={globalStyles.paragraph}>
          Similarly, the Dark Squared Bishop cannot move to F6 because it is already occupied by its own pawn. However, the bishop can move to F2, but only after capturing the opponent’s knight.
          </Text>
         </>
)}
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: theme.background }]}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.goBack("coursedetails/modules/level1/introductionToPieces/33")} // Replace with your actual logic for Previous
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
    marginVertical: 50,
  },
});

export default T11;
