import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";import AllCourseTab from "../allCourseTab/AllCourseTab";
import Tabs from "../tabscreens/TabScreens";
import useGlobalStyles from "../../styles/globalStyles";


const PopularCourses = ({ navigation }) => {
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

      {/* Render the Tabs component for this screen */}
      <Tabs navigation={navigation} />
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
    backgroundColor: "#FFFFFF", // Optional: Background color for the tab bar
    elevation: 10, // Optional: Shadow effect for Android
    zIndex: 1,
  },
});

export default PopularCourses;
