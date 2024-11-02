import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AllCourseTab from "../allCourseTab/AllCourseTab";
import { popularCategoriesTab } from "../../utils/mockData";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";

const PopularCourses = () => {
  const [popularCourseTab, setPopularCourseTab] = useState("All");

  const handleTab = (item) => {
    setPopularCourseTab(item);
  };

  const renderPopularCourseTabs = () => {
    switch (popularCourseTab) {
      case "All":
        return <AllCourseTab />;
    }
  };

  const globalStyles = useGlobalStyles();

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View >
        {/* <Header label="Popular Courses" searchIcon={true} backBTN={false} /> */}
        <View style={globalStyles.contents}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignSelf: "center",
            }}
          >
            {popularCategoriesTab.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleTab(item.title)}
              >
                 
              </TouchableOpacity>
            ))}
          </View>
          {renderPopularCourseTabs()}
        </View>
      </View>
    </ScrollView>
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
});

export default PopularCourses;
