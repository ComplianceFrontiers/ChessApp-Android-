import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { notificationDataToday } from "../../utils/mockData";
import ThemeContext from "../../components/Theme/ThemeContext";

const Notifications = () => {
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation(); // Use useNavigation
  const theme = useContext(ThemeContext);

  const handleNotificationPress = (item) => {
    if (item.id === 4) {
      // Navigate to the notifications screen or detail screen
      navigation.navigate("NotificationsDetails"); // Change this to the desired screen
    }
    // Add other navigation logic for other items if needed
  };

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Notifications" />
        <View style={globalStyles.contents}>
          <Text
            style={[
              globalStyles.headingFive,
              { alignSelf: "flex-start", marginBottom: "5%" },
            ]}
          >
            Today
          </Text>
          {notificationDataToday.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.notifications}
              onPress={() => handleNotificationPress(item)} // Handle press
            >
              <Image source={item.icon} style={styles.icon} />
              <View>
                <Text
                  style={[globalStyles.headingFive, { color: theme.black }]}
                >
                  {item.title}
                </Text>
                <Text>{item.para}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;

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
  icon: {
    width: "15%",
    height: "100%", // Adjust height as needed
    // resizeMode: "contain", // Maintain aspect ratio
  },
});
