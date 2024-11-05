import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { StyleSheet } from "react-native";
import { tabsData } from "../../utils/mockData";
import HomeTabIcon from "../hometabIcon/HomeTabIcon";
import CoursesTabIcon from "../coursetabIcon/CourseTabIcon";
import MessageTabIcon from "../messagetabIcon/MessageTabIcon";
import ThemeContext from "../Theme/ThemeContext";

const Tabs = ({ onSelectTab, activeTab }) => {
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  const renderIcon = (title) => {
    switch (title) {
      case "Home":
        return (
          <HomeTabIcon
            color={activeTab === title ? theme.roseOrBlue : theme.whiteOrBlack}
          />
        );
      case "My courses":
        return (
          <CoursesTabIcon
            color={activeTab === title ? theme.roseOrBlue : theme.whiteOrBlack}
          />
        );
      case "Message":
        return (
          <MessageTabIcon
            color={activeTab === title ? theme.roseOrBlue : theme.whiteOrBlack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View
      style={[
        globalStyles.absoluteContents,
        styles.tabs,
        { backgroundColor: theme.background },
      ]}
    >
      {tabsData.map((item) => (
        <TouchableOpacity
          key={item.title}
          style={styles.individualTabs}
          onPress={() => onSelectTab(item.title)}
        >
          {renderIcon(item.title)}
          <Text
            style={{
              color:
                activeTab === item.title
                  ? theme.roseOrBlue
                  : theme.whiteOrBlack,
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "5%",
    paddingHorizontal: "10%",
    flexDirection: "row",
    elevation: 20,
  },
  individualTabs: {
    alignItems: "center",
    gap: 10,
  },
});

export default Tabs;
