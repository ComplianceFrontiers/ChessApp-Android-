import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGlobalStyles from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import {hometabPorfileHeader} from "../../utils/mockData"
// Image mapping for user profile images
const imageMap = {
  "/images/portal/g1.png": require("../../assets/images/portal/g1.png"),
  "/images/portal/g2.png": require("../../assets/images/portal/g2.png"),
  "/images/portal/g3.png": require("../../assets/images/portal/g3.png"),
  "/images/portal/g4.png": require("../../assets/images/portal/g4.png"),
  "/images/portal/g5.png": require("../../assets/images/portal/g5.png"),
  "/images/portal/g6.png": require("../../assets/images/portal/g6.png"),
  "/images/portal/g8.png": require("../../assets/images/portal/g8.png"),
  "/images/portal/g9.png": require("../../assets/images/portal/g9.png"),
  "/images/portal/b1.png": require("../../assets/images/portal/b1.png"),
  "/images/portal/b2.png": require("../../assets/images/portal/b2.png"),
  "/images/portal/b3.png": require("../../assets/images/portal/b3.png"),
  "/images/portal/b4.png": require("../../assets/images/portal/b4.png"),
  "/images/portal/b5.png": require("../../assets/images/portal/b5.png"),
  "/images/portal/b6.png": require("../../assets/images/portal/b6.png"),
  "/images/portal/b7.png": require("../../assets/images/portal/b7.png"),
  "/images/portal/b9.png": require("../../assets/images/portal/b9.png"),
};

const HomeTab = () => {
  const [userDetails, setUserDetails] = useState(null);
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();

  // Function to fetch user details from AsyncStorage
  const fetchUserDetails = async () => {
    try {
      const userDetailsString = await AsyncStorage.getItem("userDetails");
      const parsedUserDetails = userDetailsString
        ? JSON.parse(userDetailsString)
        : null;

      setUserDetails(parsedUserDetails);
    } catch (error) {
      console.error("Error fetching data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails(); // Fetch user details when component mounts
  }, []); // This will run only once when the component is mounted

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchUserDetails(); // Poll every 1 second to check for changes
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval when the component is unmounted
  }, []);

  return (
    <View style={styles.profileHeader}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Image
            source={
              userDetails?.image && imageMap[userDetails.image]
                ? imageMap[userDetails.image] || require("../../assets/images/portal/b1.png") // Fallback
                : require("../../assets/images/profileIcon.png") // Default icon
            }
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <View style={{ gap: 10 }}>
          <Text style={globalStyles.headingFour}>
            {userDetails?.child_name?.first || "Guest"}
          </Text>
        </View>
      </View>
      <View style={styles.headerIcons}>
          {hometabPorfileHeader.map((item) => (
            <TouchableOpacity key={item.id}>{item.icon}</TouchableOpacity>
          ))}
        </View>
    </View>
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
});

export default HomeTab;
