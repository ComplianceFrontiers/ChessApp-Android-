import React from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import Header from "../../components/header/Header";
import useGlobalStyles from "../../styles/globalStyles";
import HomeTab from "../hometab/HomeTab";
import ChatTab from "../chattab/ChatTab"; // Assuming this is the content for the 'Message' tab
import Tabs from "../tab/Tab";
import LearderBoardScreen from "../learderboardscreen/learderboardscreen";


const LearderBoard = ({ navigation }) => {
 
  return (
<View style={styles.container}>
 

      <View contentContainerStyle={styles.scrollContent}>
      <HomeTab />

                 <Header label="LearderBoard" backBTN={false} />
                 <ScrollView>
           <LearderBoardScreen />
           </ScrollView>
      </View>

      <Tabs navigation={navigation} />
    </View>
  );
};

export default LearderBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "14%",
    backgroundColor: "white",

  },
  individualTabs: {
    alignItems: "center",
    gap: 10,
  },
  fixedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#fff", // Background color to overlay content properly
    paddingHorizontal: 1, // Adjust as needed
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
