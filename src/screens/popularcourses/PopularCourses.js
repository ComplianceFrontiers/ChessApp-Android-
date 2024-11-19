import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AllCourseTab from "../allCourseTab/AllCourseTab";
import { popularCategoriesTab } from "../../utils/mockData";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import Tabs from "../../components/tabs/Tabs";
import HomeTab from "../hometab/HomeTab";
import CoursesTab from "../coursestab/CoursesTab";
import MessagesTab from "../messagestab/MessagesTab";
import MessageScreen from "../message/MessageScreen";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


const PopularCourses = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [popularCourseTab, setPopularCourseTab] = useState("All");
  const navigation = useNavigation(); // Initialize the navigation object

  

  const handleTab = (item) => {
    setPopularCourseTab(item);
  };

  // Render the appropriate tab screen based on the selectedTab state
  const renderTabScreen = () => {
    switch (selectedTab) {
      case "Message":
        navigation.navigate('message'); // Navigate to MessageScreen
        return null;      default:
        return <HomeTab />;
    }
  };

  const globalStyles = useGlobalStyles();

  return (
    <View style={[globalStyles.colorBG, { flex: 1 }]}>
      <ScrollView style={{ flex: 1 }}>
        <View style={globalStyles.contents}>
          <View>
            <AllCourseTab />
          </View>
        </View>
      </ScrollView>
      {/* Render Tab Screen Based on Selected Tab */}
      {renderTabScreen()}

      {/* Fixed Tabs at Bottom */}
      <View style={styles.fixedTab}>
        <Tabs
          activeTab={selectedTab}
          onSelectTab={(tab) => setSelectedTab(tab)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 133,
  },
  courses: {
    elevation: 3,
    backgroundColor: "white",
    width: "100%",
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    gap: 20,
  },
  saveIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  activeTab: {
    backgroundColor: "#FC4F72",
    color: "white",
    fontWeight: "500",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
  inActiveTab: {
    borderWidth: 0.5,
    fontWeight: "500",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 15,
    backgroundColor: "#f1f1f1",
  },

  fixedTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    elevation: 10,
    zIndex: 1,
  },
});

export default PopularCourses;
