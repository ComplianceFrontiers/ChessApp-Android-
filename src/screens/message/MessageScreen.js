import React from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import Header from "../../components/header/Header";
import useGlobalStyles from "../../styles/globalStyles";
import HomeTab from "../hometab/HomeTab";
import ChatTab from "../chattab/ChatTab"; // Assuming this is the content for the 'Message' tab
import Tabs from "../tabscreens/TabScreens";

const MessageScreen = ({ navigation }) => {
  const globalStyles = useGlobalStyles();
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
        <View style={{ marginTop: 80 }}>
        <Header label="Messages" backBTN={false} />
          <View contentContainerStyle={styles.contents}>
          <ChatTab />
          </View>
        </View>
      </ScrollView>

      <Tabs navigation={navigation} />
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
    paddingHorizontal: 5, // Adjust as needed
    paddingVertical: 1,
  },
  contents: {
    paddingTop: "12%",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 1,
  },
  scrollContent: {
    paddingBottom: 10,
  },
});
