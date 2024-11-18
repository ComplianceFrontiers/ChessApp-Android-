import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, Modal, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
import CustomDropdown from "../../components/customdropdown/CustomDropdown";
import { fillProfileData } from "../../utils/mockData";
import useGlobalStyles from "../../styles/globalStyles"; // Assuming this is how you import global styles
import Header from "../../components/header/Header";
import { useNavigation } from "@react-navigation/native";
 
const FillProfile = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  // Field states and validation
   const closeAvatarModal = () => setShowAvatarOptions(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: ""
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      fetch("https://backend-chess-tau.vercel.app/signup_app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (response.status === 201) {
          setIsModalVisible(true); // Show success modal
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data?.error) {
          alert(`Error: ${data.error}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit the form. Please try again.");
      });
    }
  }
   
  return (
    <View style={globalStyles.container}>
      <Header label="Fill Your Profile" />
      {/* <View style={styles.profileContainer}>
        <Image source={selectedAvatar} style={styles.profileImage} />
        <TouchableOpacity onPress={openAvatarModal} style={styles.editProfile}>
          <EditProfile />
        </TouchableOpacity>
      </View> */}
      <Modal visible={isModalVisible} transparent animationType="slide">
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Signup Successful!</Text>
      <Text>Your account has been created. Redirecting to Sign In...</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          setIsModalVisible(false);
          navigation.navigate("signin"); // Redirect to SignIn
        }}
      >
        <Text style={styles.closeButtonText}>OK</Text>
      </TouchableOpacity>
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
          <CommonButton label="Send Request To Admin" onPress={handleContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default FillProfile;

const styles = StyleSheet.create({
   
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
