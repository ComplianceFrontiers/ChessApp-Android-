import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import {
  homeSliderData,
  homeTabCategories,
  hometabPorfileHeader,
  mentorsData,
  popularCategoriesTab,
  popularCoursesAllTab,
  processCarousalTab,
} from "../../utils/mockData";
import SnapCarousel from "../../components/slider/SnapCarousel";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import CategoryCarousel from "../../components/categorycarousal/CategoryCarousal";
import PopularCourseAllTabCarousal from "../../components/popularcoursesAllTabCarousal/PopularCourseAllTabCarousal";
import ProcessCarousal from "../../components/processcarousal/ProcessCarousal";
import { useNavigation } from "@react-navigation/native";
import MentorCarousal from "../../components/mentorcarousal/MentorCarousal";

const HomeTab = () => {
  const [popularCourseTab, setPopularCourseTab] = useState("All");
  const [userDetails, setUserDetails] = useState(null); // Add state for userDetails
  const globalStyles = useGlobalStyles();

  const navigation = useNavigation();

  // Function to fetch and log AsyncStorage data
  const logAsyncStorageData = async () => {
    try {
      console.log("localllll", AsyncStorage);
      const email = await AsyncStorage.getItem("email");
      const userDetailsString = await AsyncStorage.getItem("userDetails");

      // Parse the userDetails string to JSON
      const parsedUserDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

      console.log("Email from AsyncStorage:", email);
      console.log("User Details from AsyncStorage:", parsedUserDetails);

      // Set the parsed userDetails in state
      setUserDetails(parsedUserDetails);
    } catch (error) {
      console.error("Error fetching data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    logAsyncStorageData(); // Call the function when component mounts
  }, []);

  const handleTab = (item) => {
    setPopularCourseTab(item);
  };

  const renderPopularCourseTabs = () => {
    switch (popularCourseTab) {
      case "All":
        return <PopularCourseAllTabCarousal data={popularCoursesAllTab} />;
    }
  };
  return (
    <>
      <View style={styles.profileHeader}>
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Image source={require("../../assets/images/profileIcon.png")} />
          </TouchableOpacity>
          <View style={{ gap: 10 }}>
            <Text style={globalStyles.headingFour}>{userDetails?.child_name?.first || "Guest"}</Text>
            <Text style={[globalStyles.miniButton, { width: "70%" }]}>
              Learner
            </Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          {hometabPorfileHeader.map((item) => (
            <TouchableOpacity key={item.id}>{item.icon}</TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={{ marginBottom: "18%" }}>
        <View>
          <SnapCarousel data={homeSliderData} />
        </View>
        <View style={styles.headAndBTN}>
          <Text style={globalStyles.headingFour}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate("categories")}>
            <Text style={globalStyles.miniButton}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: "5%", marginBottom: "7%" }}>
          <CategoryCarousel data={homeTabCategories} />
        </View>
        <View style={styles.headAndBTN}>
          <Text style={globalStyles.headingFour}>Popular Courses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("popularcourses")}
          >
            <Text style={globalStyles.miniButton}>View all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignSelf: "center",
            marginVertical: "5%",
          }}
        >
          {popularCategoriesTab.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleTab(item.title)}
            >
              <Text
                style={
                  popularCourseTab === item.title
                    ? styles.actveTab
                    : styles.inactiveTab
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderPopularCourseTabs()}
        <View style={[styles.headAndBTN, { marginTop: "5%" }]}>
          <Text style={globalStyles.headingFour}>In process</Text>
          <TouchableOpacity>
            <Text style={globalStyles.miniButton}>View all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ProcessCarousal data={processCarousalTab} />
        </View>
        <View>
          <ProcessCarousal data={processCarousalTab} />
        </View>
        <View>
          <ProcessCarousal data={processCarousalTab} />
        </View>
        <View style={[styles.headAndBTN, { marginTop: "5%" }]}>
          <Text style={globalStyles.headingFour}>Top Mentors</Text>
          <TouchableOpacity onPress={() => navigation.navigate("topmentors")}>
            <Text style={globalStyles.miniButton}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: "5%", marginBottom: "7%" }}>
          <MentorCarousal data={mentorsData} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "6%",
    paddingVertical: "2%",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headAndBTN: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actveTab: {
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
  inactiveTab: {
    backgroundColor: "#f1f1f1",
    color: "black",
    fontWeight: "500",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
});

export default HomeTab;
