import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeTab from "../hometab/HomeTab";

import React from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import ChatTab from "../chattab/ChatTab";

const MessageScreen = () => {
  const globalStyles = useGlobalStyles();

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View  >
        <HomeTab />
      </View>
      <Header label="Messages" backBTN={false} />
      <View style={globalStyles.contents}>
      <View style={styles.tabContainer}>
        <ChatTab />
      </View>
        {/* {renderTabs()} */}
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
