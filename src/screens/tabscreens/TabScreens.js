import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useGlobalStyles from "../../styles/globalStyles"; // Assuming you have global styles
import { tabsData } from "../../utils/mockData"; // Assuming this is the tab data
import HomeTabIcon from "../../components/hometabIcon/HomeTabIcon";
import CoursesTabIcon from "../../components/coursetabIcon/CourseTabIcon";
import MessageTabIcon from "../../components/messagetabIcon/MessageTabIcon";
import ThemeContext from "../../components/Theme/ThemeContext"; // Assuming you have a Theme context

// Main Tabs Component
const Tabs = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const { whiteOrBlack } = useContext(ThemeContext); // Get theme from context
  const globalStyles = useGlobalStyles(); // Global styles

  // Update the selected tab and handle navigation
  const onSelectTab = (tab) => {
    setSelectedTab(tab);
    if (tab === "Support") {
      navigation.navigate("message");
    } else if (tab === "Home") {
      navigation.navigate("popularcourses");
    }
  };

  // Render icon based on the selected tab
  const renderIcon = (title) => {
    switch (title) {
      case "Home":
        return <HomeTabIcon color={whiteOrBlack} />;
      case "My courses":
        return <CoursesTabIcon color={whiteOrBlack} />;
      case "Support":
        return <MessageTabIcon color={whiteOrBlack} />;
      default:
        return null;
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.tabs}>
        {tabsData.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.individualTabs}
            onPress={() => onSelectTab(item.title)}
          >
            {renderIcon(item.title)}
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 15,
    flexDirection: "row",
    elevation: 20,
  },
  individualTabs: {
    alignItems: "center",
    gap: 10,
  },
});

export default Tabs;
