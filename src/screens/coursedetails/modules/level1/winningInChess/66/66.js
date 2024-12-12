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
          course_title: 'specialMoves',
          completed: 35
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
          navigation.navigate("coursedetails/modules/level1/understandingPieceExchanges/71");
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
              source={{ uri: "https://www.youtube.com/embed/Ze_H4altK2I" }}
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
          5.6 Draw
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
     <Text style={styles.paragraph}>
                A draw in chess occurs when neither player wins, resulting in a tie where each player receives half a point. Common types of draws include stalemate, which happens when a player has no legal moves and their king is not in check, ending the game in a draw. Another type is threefold repetition, where the game is drawn if an identical position occurs three times with the same player to move and the same available moves. Additionally, the fifty-move rule allows a draw to be claimed if fifty consecutive moves are made without any pawn movement or piece capture.
            </Text>
            <Text style={styles.paragraph}>
                A draw in chess can occur in several ways. Insufficient material happens when neither player has enough pieces to checkmate the opponent, such as in a king versus king scenario. Players can also agree to a draw at any point during the game, often in equal or unclear positions. Additionally, a draw can be forced through perpetual check, where one player gives a series of checks that the opponent cannot escape from, leading to an endless cycle of checks.
            </Text>
    </>
)}
</View>

      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: theme.background }]}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.goBack("coursedetails/modules/level1/winningInChess/65")} // Replace with your actual logic for Previous
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
