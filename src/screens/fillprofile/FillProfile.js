import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, Modal } from "react-native";
import { TextInput } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
import CustomDropdown from "../../components/customdropdown/CustomDropdown";
import { fillProfileData } from "../../utils/mockData";
import useGlobalStyles from "../../styles/globalStyles"; // Assuming this is how you import global styles
import Header from "../../components/header/Header";
import EditProfile from "../../assets/svg/editProfileIcon.svg";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

// Import images
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

const FillProfile = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(require("../../assets/profilepics/b7.png")); 
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Field states and validation
  const openAvatarModal = () => setShowAvatarOptions(true);
  const closeAvatarModal = () => setShowAvatarOptions(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: ""
  });

  const handleInputChange = (id, value) => {
    const field = id === 1 ? "name" : id === 2 ? "email" : id === 3 ? "phone" : id === 4 ? "school" : "grade";
    setFormData({ ...formData, [field]: value });
  };

  const validateRequiredFields = () => {
    if (!formData.name || !formData.email) {
      alert("Name and Email are required fields.");
      return false;
    }
    return true;
  };

  const handleContinue = () => {
    if (validateRequiredFields()) {
      navigation.navigate("createpin");
    }
  };
  const changeProfilePic = (avatar) => {
    setSelectedAvatar(avatar);
    closeAvatarModal();
  };

  return (
    <View style={globalStyles.container}>
      <Header label="Fill Your Profile" />
      <View style={styles.profileContainer}>
        <Image source={selectedAvatar} style={styles.profileImage} />
        <TouchableOpacity onPress={openAvatarModal} style={styles.editProfile}>
          <EditProfile />
        </TouchableOpacity>
      </View>

        {/* Avatar Selection Modal */}
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

      <ScrollView style={styles.inputFields}>
        {fillProfileData.map((item) => (
          <View key={item.id} style={styles.inputContainer}>
            {item.id === 5 ? (
              <CustomDropdown
                label="Grade"
                selectedValue={formData.grade}
                onValueChange={(value) => handleInputChange(item.id, value)}
              />
            ) : (
              <TextInput
                placeholder={item.placeholder}
                style={globalStyles.input}
                left={<TextInput.Icon icon={item.icon} />}
                value={formData[item.id === 1 ? "name" : item.id === 2 ? "email" : item.id === 3 ? "phone" : "school"]}
                onChangeText={(value) => handleInputChange(item.id, value)}
                underlineColor="transparent"
                theme={{
                  colors: {
                    primary: "transparent",
                    underlineColor: "transparent",
                  },
                }}
              />
            )}
          </View>
        ))}

        <View style={styles.button}>
          <CommonButton label="Continue" onPress={handleContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default FillProfile;

const styles = StyleSheet.create({
  profileContainer: { alignItems: "center", justifyContent: "center", marginBottom: 10 },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  editProfile: { position: "absolute", bottom: 0, right: 10 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#ffeb3b",
    borderRadius: 8,
    padding: 20,
    width: "90%",
    height: "80%",
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
  },
  closeButtonText: { fontSize: 24, color: "#555" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  avatarTabs: { flexGrow: 1, width: "100%" },
  avatarTab: { marginVertical: 15 },
  tabTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  avatarList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  avatarOption: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
    borderColor: "#ddd",
    borderWidth: 2,
  },
  inputFields: {
    width: "90%",
    marginTop: "10%",
  },
  inputContainer: {
    marginBottom: 20, // This adds space between input fields
  },
  button: {
    marginTop: "10%",
  },
});
