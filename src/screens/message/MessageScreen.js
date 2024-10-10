import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import ChatTab from "../chattab/ChatTab";
import CallScreen from "../callScreen/CallScreen";

const MessageScreen = () => {
  const tabs = [
    { id: 1, tab: "Chat" },
    { id: 2, tab: "Calls" },
  ];
  const globalStyles = useGlobalStyles();

  const [activeTab, setActiveTab] = useState("Chat");

  const handleTabs = (item) => {
    setActiveTab(item);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case "Chat":
        return <ChatTab />;
      case "Calls":
        return <CallScreen />;
      default:
        return <ChatTab />;
    }
  };

  return (
    <ScrollView style={globalStyles.colorBG}>
      <Header label="Messages" backBTN={false} />
      <View style={globalStyles.contents}>
        <View style={styles.tabContainer}>
          {tabs.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleTabs(item.tab)}
            >
              <Text
                style={
                  activeTab === item.tab ? styles.activetab : styles.inactivetab
                }
              >
                {item.tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderTabs()}
      </View>
    </ScrollView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center",
  },
  activetab: {
    backgroundColor: "#FC4F72",
    color: "white",
    fontWeight: "600",
    paddingVertical: "4%",
    paddingHorizontal: "20%",
    borderRadius: 30,
  },
  inactivetab: {
    backgroundColor: "#f1f1f1",
    color: "#000000",
    fontWeight: "600",
    paddingVertical: "4%",
    paddingHorizontal: "20%",
    borderRadius: 30,
  },
  mentors: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
  },
  unreadMSG: {
    color: "white",
    backgroundColor: "#46007C",
    padding: "1%",
    borderRadius: 50,
  },
});
