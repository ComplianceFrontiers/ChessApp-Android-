import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import HomeTab from "../hometab/HomeTab";
import ChatTab from "../chattab/ChatTab";
import Tabs from "../../components/tabs/Tabs";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


const MessageScreen = () => {
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation(); // Initialize the navigation object

  const [selectedTab, setSelectedTab] = useState("Message");

  const renderTabScreen = () => {
    switch (selectedTab) {
      case "Home":
        navigation.navigate('popularcourses'); // Navigate to MessageScreen
        return null; 
      case "Message":
        navigation.navigate('message'); // Navigate to MessageScreen
        return null;      default:
        return <HomeTab />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
       <View 
  style={{ 
    position: "fixed", 
    zIndex: 7, 
    backgroundColor: "#fff", // White background color
    marginBottom: "0%", 
    paddingHorizontal: "10%", 
    paddingVertical: "0%", 
    paddingLeft: "10%", 
    top: 60, 
    left: 0 
  }}
>
  <HomeTab />
</View>


      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Adding space below HomeTab */}
        <View style={{ marginTop: 70 }}>
          <Header label="Messages" backBTN={false} />
          <View style={globalStyles.contents}>
            <ChatTab />
          </View>
        </View>
      </ScrollView>
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

export default MessageScreen;

const styles = StyleSheet.create({
  fixedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#fff", // Background color to overlay content properly
    paddingHorizontal: 10, // Adjust as needed
    paddingVertical: 5,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
