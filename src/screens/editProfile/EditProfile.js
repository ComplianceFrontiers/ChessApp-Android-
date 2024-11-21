import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Ionicons } from '@expo/vector-icons'; // Use Ionicons for back arrow

export default function EditProfile() {
  const navigation = useNavigation(); // Initialize navigation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [level, setLevel] = useState("");
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const email = await AsyncStorage.getItem("email");
        if (email) {
          const userDetailsResponse = await fetch(
            `https://backend-chess-tau.vercel.app/getinschooldetails?email=${email}`
          );
          const userDetailsData = await userDetailsResponse.json();
          
          setEmail(userDetailsData.email);
          setSchoolName(userDetailsData.SchoolName);
          setGrade(userDetailsData.child_grade);
          setLevel(userDetailsData.level);
          setChildName(userDetailsData.child_name ? userDetailsData.child_name.first : "");
          setParentName(userDetailsData.parent_name ? userDetailsData.parent_name.first : "");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleUpdate = () => {
    // Handle update logic here
    console.log("Profile updated:", { name, email, schoolName, grade, level });
    // Example: Send data to API
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("profile")} // Replace "Profile" with your actual profile page route
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          editable={false} // Make email non-editable
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>School Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your school name"
          value={schoolName}
          onChangeText={setSchoolName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Grade</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={grade}
            onValueChange={(itemValue) => setGrade(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select your grade" value="" />
            <Picker.Item label="Grade 1" value="1" />
            <Picker.Item label="Grade 2" value="2" />
            <Picker.Item label="Grade 3" value="3" />
            <Picker.Item label="Grade 4" value="4" />
            <Picker.Item label="Grade 5" value="5" />
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Level</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={level}
            onValueChange={(itemValue) => setLevel(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select your level" value="" />
            <Picker.Item label="Beginner" value="beginner" />
            <Picker.Item label="Intermediate" value="intermediate" />
            <Picker.Item label="Advanced" value="advanced" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update Profile Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    flexDirection: "row", // Align icon and text side by side
    alignItems: "center", // Center vertically
    marginBottom: 15, // Space below the button
    padding: 10, // Add padding for better click area
    backgroundColor: "#f9f9f9", // Light background for contrast
    borderRadius: 8, // Rounded corners
    shadowColor: "#000", // Shadow effect for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  backButtonText: {
    fontSize: 16, // Text size
    marginLeft: 5, // Space between icon and text
    color: "#007BFF", // Blue color for visibility
    fontWeight: "bold", // Bold for emphasis
  },
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
  },
  picker: {
    width: "100%",
    height: 50,
  },
  updateButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
