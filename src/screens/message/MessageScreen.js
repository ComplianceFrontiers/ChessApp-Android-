import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import HomeTab from "../hometab/HomeTab";
import ChatTab from "../chattab/ChatTab";

const MessageScreen = () => {
  const globalStyles = useGlobalStyles();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Fixed HomeTab */}
      <View style={styles.fixedContainer}>
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
    </SafeAreaView>
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
