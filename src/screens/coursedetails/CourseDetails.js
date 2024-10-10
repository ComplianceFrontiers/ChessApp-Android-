import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import RatingIcon from "../../assets/svg/ratingIcon.svg";
import AboutTab from "../abouttab/AboutTab";
import CurriculumTab from "../curriculumtab/CurriculumTab";
import CommonButton from "../../components/commonbutton/CommonButton";
import ThemeContext from "../../components/Theme/ThemeContext";
import ClassIcon from "../../components/classicon/ClassIcon";
import TimeIcon from "../../components/timeicon/TimeIcon";

const CourseDetails = () => {
  const route = useRoute();
  const { data } = route.params;

  const globalStyles = useGlobalStyles();

  const tabs = [
    { id: 1, tab: "About" },
    { id: 2, tab: "Curriculum" },
  ];

  const [activeTab, setActiveTab] = useState("About");

  const handleTabs = (item) => {
    setActiveTab(item);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case "About":
        return <AboutTab />;
      case "Curriculum":
        return <CurriculumTab />;
    }
  };

  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.mainContain, { backgroundColor: theme.background }]}>
      <ScrollView style={globalStyles.colorBG}>
        <Image
          source={require("../../assets/images/courseDetailIMG.png")}
          style={styles.image}
        />
        <View style={globalStyles.container}>
          <View style={styles.absoluteIMG}>
            <Header label="" backBTNCLR="white" />
          </View>
        </View>
        <View
          style={[
            globalStyles.contents,
            styles.parallaxContainer,
            { backgroundColor: theme.background },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingBottom: "3%",
            }}
          >
            <Text style={globalStyles.redTextwithWeight}>{data.category}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <RatingIcon />
              <Text style={{ fontWeight: "600", color: theme.color }}>
                {data.rating}
              </Text>
            </View>
          </View>
          <Text style={globalStyles.headingFour}>
            Design Principles: Organizing...
          </Text>
          <View style={styles.classDetailsAndPrice}>
            <View style={styles.classDetails}>
              <ClassIcon />
              <Text style={{ color: theme.color }}>21 Classes</Text>
              <Text style={{ color: theme.color }}>|</Text>
              <TimeIcon />
              <Text style={{ color: theme.color }}>42 Hours</Text>
            </View>
            <Text style={globalStyles.violetText}>${data.price}/-</Text>
          </View>
          <View style={styles.tabContainer}>
            {tabs.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleTabs(item.tab)}
              >
                <Text
                  style={
                    activeTab === item.tab
                      ? styles.activeTab
                      : styles.inactiveTab
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
      <View style={[styles.absoluteBTN, { backgroundColor: theme.background }]}>
        <CommonButton
          label="Buy Now"
          onPress={() => navigation.navigate("checkout")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 320,
    marginTop: "8%",
  },
  absoluteIMG: {
    position: "absolute",
    top: -270,
    width: "100%",
    // height: 320,
  },
  parallaxContainer: {
    marginTop: -120,
    width: "100%",
    alignItems: "flex-start",
    paddingTop: "5%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  classDetailsAndPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  classDetails: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "3%",
    gap: 10,
  },
  tabContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "5%",
  },
  activeTab: {
    paddingHorizontal: "17%",
    paddingVertical: "5%",
    borderRadius: 35,
    backgroundColor: "#FC4F72",
    color: "white",
    fontWeight: "600",
  },
  inactiveTab: {
    paddingHorizontal: "17%",
    paddingVertical: "5%",
    borderRadius: 35,
    backgroundColor: "#F1F1F1",
    color: "black",
    fontWeight: "600",
  },
  absoluteBTN: {
    bottom: 20,
    width: "95%",
    alignSelf: "center",
  },
  mainContain: {
    flex: 1,
  },
});

export default CourseDetails;
