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
          navigation.navigate("coursedetails/modules/level1/stagesOfTheGame/81");
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
              source={{ uri: "https://www.youtube.com/embed/DNhnqjdAiFE" }}
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
          6.5 Material Down
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
                In chess, being "material down" refers to having fewer or less valuable pieces or pawns than your opponent, resulting in a numerical or positional disadvantage. This can happen in a couple of ways. First, you might lose a piece like a knight, bishop, or even a queen without gaining a piece of equal or greater value in return. Additionally, players sometimes sacrifice material intentionally to gain positional advantages or launch an attack, but if the compensation is not sufficient, this can leave them material down.
            </Text>
            <Text style={styles.paragraph}>
                Being material down presents significant challenges, especially in defense. With fewer pieces, it becomes harder to defend your position, protect your king, and maintain control over key squares on the board.
            </Text>

            <Text style={styles.subheading}>Disadvantages of Being Material Down</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>Limited Offensive Potential:</Text> When you're material down, you have fewer resources for launching effective attacks. This limitation can make it hard to create winning chances and apply pressure on your opponent.
                </Text>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>Endgame Difficulties:</Text> In the endgame, being down in material is particularly problematic. Your opponent's extra pieces or pawns can be used to create decisive threats, such as promoting a pawn, which can be challenging to counter.
                </Text>
            </View>

            <Text style={styles.subheading}>Strategies to Compensate for Material Loss</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>Creating Counterplay:</Text> To offset a material disadvantage, focus on creating active threats and targeting weak points in your opponent’s position. Launching a counterattack can sometimes turn the game in your favor.
                </Text>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>Positional Play:</Text> Strong piece placement, control of key squares, and a solid pawn structure can sometimes compensate for being material down. This approach makes it harder for your opponent to fully capitalize on their material advantage.
                </Text>
                <Text style={styles.listItem}>
                    <Text style={styles.bold}>Avoiding Further Trades:</Text> When material down, it is crucial to avoid unnecessary exchanges of pieces. Such trades can simplify the position and highlight your material deficit, making it even more challenging to recover.
                </Text>
            </View>

            <Text style={styles.subheading}>When to Consider Sacrificing More Material</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold}>Dynamic Compensation:</Text> In certain situations, sacrificing additional material can lead to significant positional advantages, create an unstoppable attack, or force a draw. This dynamic compensation can sometimes turn the tables on your opponent, shifting the balance of power.
            </Text>
    </>
)}
</View>

      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: theme.background }]}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.goBack("coursedetails/modules/level1/understandingPieceExchanges/74")} // Replace with your actual logic for Previous
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
  bold: {
    fontWeight: 'bold',
},
  absoluteIMG: {
    position: "absolute",
    top: -270,
    width: "100%",
  },
  list: {
    marginLeft: 16,
    marginBottom: 16,
},
listItem: {
    fontFamily: 'Montserrat',
    color: 'black',
    fontSize: 16,
    marginBottom: 8,
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
