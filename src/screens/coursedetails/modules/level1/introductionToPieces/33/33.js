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

  return (
    <View style={[styles.mainContain, { backgroundColor: theme.background }]}>
      <ScrollView style={globalStyles.colorBG}>
        <View style={styles.mediaContainer}>
          
           
            <WebView
              source={{ uri: "https://www.youtube.com/embed/yJST7JjEdL8" }}
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
          2.3 Understanding the King
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
  Understanding the pieces—Now, let us delve into the details of each piece and understand their unique features and movements. This will help you grasp how each piece contributes to the overall strategy of the game.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontSize: 16 }}>
    <Text style={{ fontWeight: 'bold' }}>King:</Text> The king is undoubtedly the most crucial piece in chess; losing it means losing the game. It moves only one square in any direction. Protecting your king through castling and attacking your opponent's king are essential strategies. In the endgame, the king's role becomes even more pivotal. If you are curious about endgames or castling, do not worry—these concepts will become clear as we advance through our journey.
  </Text>
</Text>

<Text style={globalStyles.paragraph}>
  The king moves one square in any direction.
</Text>

<Text style={globalStyles.paragraph}>
  The goal is to avoid checkmate while trying to checkmate the opponent at the same time.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={{ fontWeight: 'bold' }}>Castling:</Text> The king can castle with a rook to move to safety.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={{ fontWeight: 'bold' }}>Endgame Importance:</Text> The king becomes more active in the endgame.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={{ fontWeight: 'bold' }}>Safety:</Text> Keep the king safe by castling early.
</Text>

<Text style={globalStyles.paragraph}>
  In this position, the squares highlighted on the board indicate where the King can move. However, it is important to remember that for any piece to move to a square, it must not be blocked by one of its own pieces.
</Text>

<Text style={globalStyles.paragraph}>
  Additionally, if an opponent's piece occupies a square, your piece can move to that square only by capturing the opponent's piece.
</Text>

<Text style={globalStyles.paragraph}>
  For example, the King cannot move to E5 because it is already occupied by its own pawn. Similarly, the King can move to E3 only after capturing the opponent’s Knight.
</Text>

          

         </>
)}
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: theme.background }]}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.goBack("coursedetails/modules/level1/introductionToPieces/32")} // Replace with your actual logic for Previous
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.navigate("coursedetails/modules/level1/introductionToPieces/34")} // Replace with your next screen name
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
