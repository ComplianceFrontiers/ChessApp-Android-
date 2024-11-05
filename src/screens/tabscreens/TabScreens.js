import React, { useState } from "react";
import { View } from "react-native";
import Tabs from "../../components/tabs/Tabs";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import HomeTab from "../hometab/HomeTab";
import CoursesTab from "../coursestab/CoursesTab";
import MessagesTab from "../messagestab/MessagesTab";
import MessageScreen from "../message/MessageScreen";

const TabScreens = () => {
  const [selectedTab, setSelectedTab] = useState("mycourses");
  const globalStyles = useGlobalStyles();

  const renderTabScreen = () => {
    switch (selectedTab) {
      case "Home":
        return <HomeTab />;
      case "My courses":
        return <CoursesTab />;
      case "Message":
        return <MessageScreen />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <View style={globalStyles.container}>
      {renderTabScreen()}
      <Tabs
        activeTab={selectedTab}
        onSelectTab={(tab) => setSelectedTab(tab)}
      />
    </View>
  );
};

export default TabScreens;
