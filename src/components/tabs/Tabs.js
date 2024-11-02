import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import Tabs from "../tabs"
import { notificationDataToday } from "../../utils/mockData";
import ThemeContext from "../../components/Theme/ThemeContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notifications = () => {
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const [userLevel, setUserLevel] = useState(null);
  const [activeTab, setActiveTab] = useState("Home"); // Track the active tab

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await AsyncStorage.getItem('userDetails');
        if (userDetails) {
          const parsedDetails = JSON.parse(userDetails);
          setUserLevel(parsedDetails.level);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleNotificationPress = (item) => {
    if (item.id === 4) {
      navigation.navigate("NotificationsDetails");
    } else if (item.id === 1) {
      navigation.navigate("mycourses");
    }
  };

  const handleTabSelect = (tabTitle) => {
    setActiveTab(tabTitle);
    // Navigate based on selected tab (example)
    if (tabTitle === "Home") {
      navigation.navigate("Home");
    } else if (tabTitle === "My courses") {
      navigation.navigate("MyCourses");
    } else if (tabTitle === "Message") {
      navigation.navigate("Messages");
    }
  };

  return (
    <View style={globalStyles.colorBG}>
      <ScrollView style={globalStyles.container}>
        <Header label="Your Chess Journey" />
        <View style={globalStyles.contents}>
          {notificationDataToday.map((item) => {
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
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Tabs onSelectTab={handleTabSelect} activeTab={activeTab} />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notifications: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f1f1f1",
    marginBottom: "10%",
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
