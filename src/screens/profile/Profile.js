import React, { useEffect, useContext, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { profileData } from "../../utils/mockData";
import DetailIcon from "../../assets/svg/detailIcon.svg";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";

const Profile = () => {
  const [email, setEmail] = useState(""); // State variable for email
  const [userDetails, setUserDetails] = useState(null); // State for userDetails
  const [showAvatarOptions, setShowAvatarOptions] = useState(false); // State for modal visibility

  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const girlAvatars = [
    require('../../assets/profilepics/g1.png'),
    require('../../assets/profilepics/g2.png'),
    require('../../assets/profilepics/g3.png'),
    require('../../assets/profilepics/g4.png'),
    require('../../assets/profilepics/g5.png'),
    require('../../assets/profilepics/g6.png'),
    // require('../../assets/profilepics/g7.png'),
    require('../../assets/profilepics/g8.png'),
  ];
  
  const boyAvatars = [
    require('../../assets/profilepics/b1.png'),
    require('../../assets/profilepics/b2.png'),
    require('../../assets/profilepics/b3.png'),
    require('../../assets/profilepics/b4.png'),
    require('../../assets/profilepics/b5.png'),
    require('../../assets/profilepics/b6.png'),
    require('../../assets/profilepics/b7.png'),
    // require('../../assets/profilepics/b8.png'),
    require('../../assets/profilepics/b9.png'),
  ];
  

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // Clear AsyncStorage
      navigation.navigate('signup'); // Navigate to sign-in screen
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  const handleNavigate = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else if (item.action === "logout") {
      handleLogout(); // Call logout function
    } else {
      console.log("No respective screen available");
    }
  };

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

  const logAsyncStorageData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      const userDetailsString = await AsyncStorage.getItem("userDetails");
      const parsedUserDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

      if (storedEmail) {
        setEmail(storedEmail); // Set the email in state
        setUserDetails(parsedUserDetails);
      }
    } catch (error) {
      console.error("Error fetching data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    logAsyncStorageData(); // Call the function when component mounts
  }, []);

  const theme = useContext(ThemeContext);

  // Function to open modal
  const openAvatarModal = () => {
    setShowAvatarOptions(true);
  };

  // Function to close modal
  const closeAvatarModal = () => {
    setShowAvatarOptions(false);
  };

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Profile" />
        <View style={[globalStyles.contents, { paddingTop: 0 }]}>
          <View style={styles.mainContain}>
            <View style={styles.absoluteHead}>
              <TouchableOpacity onPress={openAvatarModal} style={styles.round}>
                {userDetails?.image ? (
                  <Image
                    source={
                      userDetails?.image
                        ? imageMap[userDetails.image] || require('../../assets/images/portal/b1.png') // Fallback
                        : require('../../assets/images/portal/b4.png') // Fallback if no image
                    }
                    style={styles.profile}
                  />
                ) : (
                  <Text style={[globalStyles.headingFive, { color: theme.black }]}>
                    No Image Found
                  </Text>
                )}
              </TouchableOpacity>
              <View style={styles.details}>
                <Text style={[globalStyles.headingOne, { color: theme.black }]}>
                  {userDetails?.child_name?.first || "Guest"}
                </Text>
                <Text style={[globalStyles.headingFive, { color: theme.black }]}>
                  {email ? email : "No email found"}
                </Text>
              </View>
            </View>

            {/* Avatar Options Modal */}
            <Modal visible={showAvatarOptions} transparent animationType="slide">
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <TouchableOpacity onPress={closeAvatarModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>X</Text>
                  </TouchableOpacity>
                  <Text style={styles.modalTitle}>Select Profile Picture:</Text>
                  <ScrollView contentContainerStyle={styles.avatarTabs}>
                    <View style={styles.avatarTab}>
                      <Text style={styles.tabTitle}>Girls</Text>
                      <View style={styles.avatarList}>
                        {girlAvatars.map((avatar, index) => (
                          <TouchableOpacity key={index} onPress={() => changeProfilePic(avatar)}>
                            <Image source={avatar} style={styles.avatarOption} />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                    <View style={styles.avatarTab}>
                      <Text style={styles.tabTitle}>Boys</Text>
                      <View style={styles.avatarList}>
                        {boyAvatars.map((avatar, index) => (
                          <TouchableOpacity key={index} onPress={() => changeProfilePic(avatar)}>
                            <Image source={avatar} style={styles.avatarOption} />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Modal>

            <View style={styles.tabsContainer}>
              {profileData.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.individualTab}
                  onPress={() => handleNavigate(item)}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text>{item.icon}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "85%",
                      }}
                    >
                      <Text
                        style={[
                          globalStyles.headingFive,
                          { color: theme.black },
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={[globalStyles.violetText, { fontWeight: "400" }]}
                      >
                        {item.lang}
                      </Text>
                    </View>
                  </View>

                  <DetailIcon />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    width: 80,
    height: 80,
  },
  round: {
    borderWidth: 0,
    borderColor: "#FC4F72",
    borderRadius: 10,
  },
  details: {
    alignItems: "center",
    marginVertical: "3%",
    gap: 10,
  },
  tabsContainer: {
    alignItems: "center",
    width: "100%",
    gap: 20,
    marginVertical: "5%",
  },
  individualTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  mainContain: {
    alignItems: "center",
    borderRadius: 16,
    paddingTop: "30%",
    paddingBottom: "3%",
    width: "100%",
    backgroundColor: "#FFDCE3",
    marginTop: "20%",
  },
  absoluteHead: {
    alignItems: "center",
    position: "absolute",
    top: -50,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  avatarTabs: {
    flexDirection: "column",
  },
  avatarTab: {
    marginBottom: 20,
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatarList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  avatarOption: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FC4F72",
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
