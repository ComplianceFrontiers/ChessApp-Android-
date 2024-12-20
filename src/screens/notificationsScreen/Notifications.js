import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import HomeTab from "../hometab/HomeTab";

import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { notificationDataToday } from "../../utils/mockData";
import ThemeContext from "../../components/Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../loading/Loading"; // Import Loading component
import Tabs from "../tab/Tab";

const Notifications = () => {
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const [userLevel, setUserLevel] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await AsyncStorage.getItem("userDetails");
        if (userDetails) {
          const parsedDetails = JSON.parse(userDetails);
          setUserLevel(parsedDetails.level);
          console.log("Fetched user level:", parsedDetails); // Debugging statement
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleNotificationPress = async (item) => {
    setLoading(true); // Start loading
    try {
      if (item.id === 4) {
        navigation.navigate("NotificationsDetails");
      } else if (item.id === 1) {
        const email = await AsyncStorage.getItem("email");
        if (!email) {
          console.error("Email not found in AsyncStorage");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://backend-chess-tau.vercel.app/update_registered_courses_inschool",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              course_title: "theChessboard",
              status: "In Progress",
            }),
          }
        );

        const data = await response.json();
        if (data.success) {
          navigation.navigate("mycourses");

          // Fetch and update user details in local storage
          const userDetailsResponse = await fetch(
            `https://backend-chess-tau.vercel.app/getinschooldetails?email=${email}`
          );
          const userDetailsData = await userDetailsResponse.json();

          if (userDetailsData.success) {
            const newUserDetails = userDetailsData.data;
            await AsyncStorage.setItem(
              "userDetails",
              JSON.stringify(newUserDetails)
            );
          } else {
            console.error("User not found");
          }
        } else {
          console.error("Failed to update course status:", data.message);
        }
      }
    } catch (error) {
      console.error("Error handling notification press:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
<View style={styles.container}>
 

 <View contentContainerStyle={styles.scrollContent}>
 <HomeTab />

 <View style={globalStyles.container}>
 <View style={styles.contents}>

 {loading ? ( // Show Loading component if loading is true
 <View style={styles.loading1}>
            <Loading />
            </View>
          ) : (
            notificationDataToday.map((item) => {
              const isHighlighted = userLevel === item.level;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.notifications,
                    isHighlighted ? styles.highlighted : null,
                  ]}
                  onPress={() => handleNotificationPress(item)}
                >
                  <Image source={item.icon} style={styles.icon} />
                  <View>
                    <Text
                      style={[
                        globalStyles.headingFive,
                        { color: theme.black },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
        </View>
 </View>

 <View style={styles.tabsContainer}>
     <Tabs navigation={navigation} />
   </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "14%",
    // paddingBottom: "14%",
    backgroundColor: "white",

  },
  individualTabs: {
    alignItems: "center",
    gap: 10,
  },
  notifications: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f1f1f1",
    marginBottom: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    borderRadius: 15,
    width: "100%",
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
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 1,
  },
  scrollContent: {
    paddingBottom: 10,
  },tabsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  loading1: {
    alignItems: "center",
    width: "100%",
    paddingTop: 250,

    // paddingHorizontal: 1,
  },
  highlighted: {
    backgroundColor: "#f26722", // Highlight color for the current level
  },
  icon: {
    width: "12%",
    height: "100%",
  },
});

export default Notifications;
