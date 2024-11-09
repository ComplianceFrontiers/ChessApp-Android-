import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { notificationDataToday } from "../../utils/mockData";
import ThemeContext from "../../components/Theme/ThemeContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notifications = () => {
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const [userLevel, setUserLevel] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await AsyncStorage.getItem('userDetails');
        if (userDetails) {
          const parsedDetails = JSON.parse(userDetails);
          setUserLevel(parsedDetails.level);
          console.log('Fetched user level:', parsedDetails); // Debugging statement
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleNotificationPress = async (item) => {
    if (item.id === 4) {
      navigation.navigate("NotificationsDetails");
      return;
    } else if (item.id === 1) {
      const email = await AsyncStorage.getItem("email");
      if (!email) {
        console.error("Email not found in AsyncStorage");
        return;
      }
  
      try {
        const response = await fetch(
          "https://backend-chess-tau.vercel.app/update_registered_courses_inschool",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              course_title: "thechessboard",
              status: "In Progress",
            }),
          }
        );
  
        const data = await response.json();
        if (data.success) {
          // Navigate to "mycourses"
          navigation.navigate("mycourses");
  
          // Fetch and update user details in local storage
          try {
            const userDetailsResponse = await fetch(
              `https://backend-chess-tau.vercel.app/getinschooldetails?email=${email}`
            );
            const userDetailsData = await userDetailsResponse.json();
  
            if (userDetailsData.success) {
              // Update local storage and component state with new user details
              const newUserDetails = userDetailsData.data;
              await AsyncStorage.setItem("userDetails", JSON.stringify(newUserDetails));
             } else {
              console.error("User not found");
            }
          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        } else {
          console.error("Failed to update course status:", data.message);
        }
      } catch (error) {
        console.error("Error updating course status:", error);
      }
    }
  };
  
  
  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Your Chess Journey" />
        <View style={globalStyles.contents}>
         
          {notificationDataToday.map((item) => {
            console.log('Current item ID:', item.id); // Debugging statement
            console.log('Current item level:', item.level); // Debugging statement
            console.log('Current user level:', userLevel); // Debugging statement

            // Check for highlighting: userLevel must match item.level
            const isHighlighted = userLevel === item.level;

            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.notifications,
                  isHighlighted ? styles.highlighted : null
                ]}
                onPress={() => handleNotificationPress(item)}
              >
                <Image source={item.icon} style={styles.icon} />
                <View>
                  <Text
                    style={[globalStyles.headingFive, { color: theme.black }]}
                  >
                    {item.title}
                  </Text>
                  {/* <Text>{item.para}</Text> */}
                </View>
              </TouchableOpacity>
              
            );
          })}
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  highlighted: {
    backgroundColor: "#f26722", // Highlight color for the current level
  },
  icon: {
    width: "12%",
    height: "100%",
  },
});

export default Notifications;
