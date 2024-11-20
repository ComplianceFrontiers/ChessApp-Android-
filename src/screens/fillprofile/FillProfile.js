import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Modal } from "react-native";
import { TextInput } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
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
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
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
  };

  return (
    <View style={globalStyles.container}>
      <Header label="Fill Your Profile" />

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
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your name"
            style={globalStyles.input}
            left={<TextInput.Icon icon="account" />}
            value={formData.name}
            onChangeText={(value) => handleInputChange("name", value)}
            underlineColor="transparent"
            theme={{
              colors: {
                primary: "transparent",
                underlineColor: "transparent",
              },
            }}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            style={globalStyles.input}
            left={<TextInput.Icon icon="email" />}
            value={formData.email}
            onChangeText={(value) => handleInputChange("email", value)}
            underlineColor="transparent"
            theme={{
              colors: {
                primary: "transparent",
                underlineColor: "transparent",
              },
            }}
          />
        </View>

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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
