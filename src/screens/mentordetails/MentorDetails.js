import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { useRoute } from "@react-navigation/native";
import { mentorDetailsData } from "../../utils/mockData";
import AllCourseTab from "../allCourseTab/AllCourseTab";
import ThemeContext from "../../components/Theme/ThemeContext";

const MentorDetails = () => {
  const route = useRoute();
  const { data } = route.params;
  const globalStyles = useGlobalStyles();

  const [follow, setFollow] = useState("Follow");
  const [activeTab, setActiveTab] = useState("Courses");

  const theme = useContext(ThemeContext);

  const handleFollow = () => {
    setFollow(follow === "Follow" ? "Following" : "Follow");
  };

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    if (activeTab === "Courses") {
      return <AllCourseTab />;
    } else {
      return <Text style={globalStyles.headingFive}>Ratings Tab</Text>;
    }
  };

  const tabs = [
    { id: 1, tab: "Courses" },
    { id: 2, tab: "Ratings" },
  ];

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header />
        <Image source={data.image} style={styles.image} />
        <Text style={globalStyles.headingFive}>{data.name}</Text>
        <Text style={{ color: theme.color }}>{data.designation}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
            marginVertical: "5%",
          }}
        >
          {mentorDetailsData.map((item) => (
            <View key={item.id} style={{ alignItems: "center" }}>
              <Text style={globalStyles.headingFive}>{item.number}</Text>
              <Text style={{ color: theme.color }}>{item.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleFollow}>
            <Text style={styles.followBTN}>{follow}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.messageBTN}>Message</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            globalStyles.paragraph,
            { textAlign: "center", width: "89%" },
          ]}
        >
          "But how much, or rather, can it now do as much as it did then? Nor am
          I unaware that there is utility in history, not only pleasure."
        </Text>
        <View style={styles.tabsContainer}>
          {tabs.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleTabs(item.tab)}
            >
              <Text
                style={
                  activeTab === item.tab
                    ? [styles.followBTN, { paddingHorizontal: "17%" }]
                    : styles.inactivetab
                }
              >
                {item.tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ width: "90%", alignItems: "center" }}>
          {renderTabs()}
        </View>
      </View>
    </ScrollView>
  );
};

export default MentorDetails;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "#FC4F72",
    borderRadius: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: "5%",
  },
  followBTN: {
    backgroundColor: "#FC4F72",
    color: "white",
    fontWeight: "600",
    paddingVertical: "4%",
    paddingHorizontal: "16%",
    borderRadius: 30,
  },
  inactivetab: {
    backgroundColor: "#f1f1f1",
    color: "#000000",
    fontWeight: "600",
    paddingVertical: "4%",
    paddingHorizontal: "16%",
    borderRadius: 30,
  },
  messageBTN: {
    backgroundColor: "white",
    color: "#FC4F72",
    fontWeight: "600",
    paddingHorizontal: "16%",
    paddingVertical: "4%",
    borderWidth: 1,
    borderColor: "#FC4F72",
    borderRadius: 30,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10%",
    width: "90%",
    alignSelf: "center",
  },
});
