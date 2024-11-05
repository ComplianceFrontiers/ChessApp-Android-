import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  homeSliderData,
  homeTabCategories,
  hometabPorfileHeader,
  mentorsData,
  popularCategoriesTab,
  popularCoursesAllTab,
  processCarousalTab,
  imageMap,
} from "../../utils/mockData";
import SnapCarousel from "../../components/slider/SnapCarousel";
import useGlobalStyles from "../../styles/globalStyles";
import CategoryCarousel from "../../components/categorycarousal/CategoryCarousal";
import PopularCourseAllTabCarousal from "../../components/popularcoursesAllTabCarousal/PopularCourseAllTabCarousal";
import ProcessCarousal from "../../components/processcarousal/ProcessCarousal";
import { useNavigation } from "@react-navigation/native";
import MentorCarousal from "../../components/mentorcarousal/MentorCarousal";

const HomeTab = () => {
  const [popularCourseTab, setPopularCourseTab] = useState("All");
  const [userDetails, setUserDetails] = useState(null);
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();

  // Image mapping for user profile images
  const imageMap = {
    "/images/portal/g1.png": require("../../assets/images/portal/g1.png"),
    "/images/portal/g2.png": require("../../assets/images/portal/g2.png"),
    "/images/portal/g3.png": require("../../assets/images/portal/g3.png"),
    "/images/portal/g4.png": require("../../assets/images/portal/g4.png"),
    "/images/portal/g5.png": require("../../assets/images/portal/g5.png"),
    "/images/portal/g6.png": require("../../assets/images/portal/g6.png"),
    // "/images/portal/g7.png": require("../../assets/images/portal/g7.png"),
    "/images/portal/g8.png": require("../../assets/images/portal/g8.png"),
    "/images/portal/g9.png": require("../../assets/images/portal/g9.png"),
    "/images/portal/b1.png": require("../../assets/images/portal/b1.png"),
    "/images/portal/b2.png": require("../../assets/images/portal/b2.png"),
    "/images/portal/b3.png": require("../../assets/images/portal/b3.png"),
    "/images/portal/b4.png": require("../../assets/images/portal/b4.png"),
    "/images/portal/b5.png": require("../../assets/images/portal/b5.png"),
    "/images/portal/b6.png": require("../../assets/images/portal/b6.png"),
    "/images/portal/b7.png": require("../../assets/images/portal/b7.png"),
    // "/images/portal/b8.png": require("../../assets/images/portal/b8.png"),
    "/images/portal/b9.png": require("../../assets/images/portal/b9.png"),
  };

  // Function to fetch user details from AsyncStorage
  const logAsyncStorageData = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      const userDetailsString = await AsyncStorage.getItem("userDetails");
      const parsedUserDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

      console.log("Email from AsyncStorage:", email);
      console.log("User Details from AsyncStorage:", parsedUserDetails);

      setUserDetails(parsedUserDetails);
    } catch (error) {
      console.error("Error fetching data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    logAsyncStorageData(); // Fetch user details on component mount
  }, []);

  const handleTab = (item) => {
    setPopularCourseTab(item);
  };

  const renderPopularCourseTabs = () => {
    switch (popularCourseTab) {
      case "All":
        return <PopularCourseAllTabCarousal data={popularCoursesAllTab} />;
      default:
        return null; // Handle other cases if needed
    }
  };

  return (
    <>
      <View style={styles.profileHeader}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Image
              source={
                userDetails?.image && imageMap[userDetails.image]
                  ? imageMap[userDetails.image]|| require('../../assets/images/portal/b1.png') // Fallback
                  : require("../../assets/images/profileIcon.png") // Default icon
              }
              style={styles.profileIcon}
            />
          </TouchableOpacity>
          <View style={{ gap: 10 }}>
            <Text style={globalStyles.headingFour}>
              {userDetails?.child_name?.first || "Guest"}
            </Text>
            <Text style={[globalStyles.miniButton, { width: "100%" }]}>
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

      {/* <ScrollView style={{ marginBottom: "18%" }}>
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
          <TouchableOpacity onPress={() => navigation.navigate("popularcourses")}>
            <Text style={globalStyles.miniButton}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          {popularCategoriesTab.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleTab(item.title)}
            >
              <Text
                style={
                  popularCourseTab === item.title
                    ? styles.activeTab
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
      </ScrollView> */}
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
  profileIcon: {
    width: 40, // Set your desired width
    height: 40, // Set your desired height
    borderRadius: 20, // Optional: for rounded corners
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginVertical: "5%",
  },
  activeTab: {
    backgroundColor: "#FC4F72",
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
  inactiveTab: {
    backgroundColor: "#f1f1f1",
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
});

export default HomeTab;
