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
              source={{ uri: "https://www.youtube.com/embed/V5DDauWqJqY" }}
              style={{ width: "100%", height: 300 }}
              allowsFullscreenVideo
            />
           </View>
        <View style={globalStyles.container}>
          <View style={styles.absoluteIMG}>
            <Header label="" backBTNCLR="white" />
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
          2.5 Understanding the Rook
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
  The rook moves straightforwardly—up, down, left, and right—covering any number of squares along those lines. Valued at 5 points, it plays a key role in castling and becomes especially powerful in the endgame, particularly when positioned on the seventh rank. Its ability to control open files and ranks makes it an asset in both offense and defense.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={[globalStyles.paragraph, { fontWeight: 'bold' }]}>Movement:</Text> The rook can move any number of squares vertically or horizontally.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={[globalStyles.paragraph, { fontWeight: 'bold' }]}>Open/ Semi-Open Files:</Text> Rooks are strong on open or semi-open files with no blocking pieces.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={[globalStyles.paragraph, { fontWeight: 'bold' }]}>Castling:</Text> The rook helps in castling, which protects the king.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={[globalStyles.paragraph, { fontWeight: 'bold' }]}>Coordination:</Text> Two rooks work well together on the same file or rank.
</Text>

<Text style={globalStyles.paragraph}>
  <Text style={[globalStyles.paragraph, { fontWeight: 'bold' }]}>Endgame Power:</Text> Rooks are very powerful in the endgame, especially on the 7th and 8th ranks.
</Text>

<Text style={globalStyles.paragraph}>
  The rook always moves in a straight path—up, down, left, and right—covering any number of squares along those lines.
</Text>


         </>
)}
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: theme.background }]}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.goBack("coursedetails/modules/level1/introductionToPieces/34")} // Replace with your actual logic for Previous
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => navigation.navigate("coursedetails/modules/level1/introductionToPieces/36")} // Replace with your next screen name
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
    paddingTop: "5%",
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
