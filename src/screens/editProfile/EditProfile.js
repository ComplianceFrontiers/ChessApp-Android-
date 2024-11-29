import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { Picker } from '@react-native-picker/picker'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from "../../components/header/Header";
import Loading from "../loading/Loading"; // Import Loading component

export default function EditProfile() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [level, setLevel] = useState("");
  const [childFirstName, setChildFirstName] = useState("");
  const [childLastName, setChildLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [parentName, setParentName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // Loading state

  useEffect(() => {
    const fetchUserDetails = async () => {
      setIsLoading(true); // Start loading
      try {
        const email = await AsyncStorage.getItem("email");
        if (email) {
          const response = await fetch(
            `https://backend-chess-tau.vercel.app/getinschooldetails?email=${email}`
          );
          const result = await response.json();
          console.log("Fetched user details:", result);
  
          if (result.success && result.data) {
            const userData = result.data;
            setEmail(userData.email || "");
            setSchoolName(userData.SchoolName || "");
            setGrade(userData.child_grade || "");
            setLevel(userData.level || "");
            setChildFirstName(userData.child_name?.first || "");
            setChildLastName(userData.child_name?.last || "");
            setPhone(userData.phone || "");
            setParentName(userData.parent_name?.first || "");
            setProfileImage(userData.image || null);
          } else {
            console.error("Failed to fetch valid user details.");
          }
        } else {
          console.warn("No email found in AsyncStorage.");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };
  
    fetchUserDetails();
  }, []);
  

  const handleUpdate = async () => {
    setIsLoading(true);  // Start loading indicator

    // Create the updated user data
    const updatedData = {
      child_name: {
        first: childFirstName,
        last: childLastName,
      },
      child_grade: grade,
      email: email,
      SchoolName: schoolName,
      level: level,
      phone,phone,
    };
 
    try {
      const response = await fetch('https://backend-chess-tau.vercel.app/update_student_records', {
        method: 'PUT', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Specify JSON content
        },
        body: JSON.stringify(updatedData), // Send the data as JSON
      });
  
      const result = await response.json(); // Parse JSON response
   
      if (result.message == "Document updated successfully") {
        // Handle successful response
        console.log('Profile updated successfully');
        alert('Profile updated successfully!');
        const userDetailsResponse = await fetch(
          `https://backend-chess-tau.vercel.app/getinschooldetails?email=${email}`
        );
        const userDetailsData = await userDetailsResponse.json();
  
        if (userDetailsData.success) {
          const newUserDetails = userDetailsData.data;
  
          // Update local storage with the latest user details
          await AsyncStorage.setItem("userDetails", JSON.stringify(newUserDetails));
  
          // Navigate to the profile page after successful update
          navigation.navigate("home");
        }
      } else {
        // Handle API failure
        console.error('Failed to update profile:', result.message);
        alert('Failed to update profile. Please try again.');
      }
    } catch (error) {
      // Handle error during the API call
      console.error('Error updating profile:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading indicator
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
  {/* Back Button */}
  <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.navigate("profile")} // Replace with your actual route
  >
    {/* Add your back button icon or text here */}
  </TouchableOpacity>

  <Header label="Edit Profile" />

  {/* Conditionally render loading component */}
  {isLoading ? (
    <Loading />
  ) : (
    <>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        {profileImage ? (
          <Image
            source={imageMap[profileImage] || require("../../assets/images/portal/b6.png")}
            style={styles.profileImage}
          />
        ) : (
          <Text style={styles.noImageText}>No Image Available</Text>
        )}
      </View>

      {/* Child's First Name */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Child's First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter child's first name"
          value={childFirstName}
          onChangeText={setChildFirstName}
        />
      </View>

      {/* Child's Last Name */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Child's Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter child's last name"
          value={childLastName}
          onChangeText={setChildLastName}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Contact Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Contact Number<"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Email */}
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

      {/* School Name */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>School Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your school name"
          value={schoolName}
          onChangeText={setSchoolName}
        />
      </View>

      {/* Grade */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Grade</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={grade}
            onValueChange={(itemValue) => setGrade(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select your grade" value="" />
            <Picker.Item label="K" value="K" />
            <Picker.Item label="Grade 1" value="1" />
            <Picker.Item label="Grade 2" value="2" />
            <Picker.Item label="Grade 3" value="3" />
            <Picker.Item label="Grade 4" value="4" />
            <Picker.Item label="Grade 5" value="5" />
          </Picker>
        </View>
      </View>

<View style={styles.formGroup}>
  <Text style={styles.label}>Level</Text>
  <View style={styles.pickerContainer}>
    {/* Display selected level as text if it is disabled */}
    {level ? (
      <Text style={styles.input}>{level}</Text>
    ) : (
      <Picker
        selectedValue={level}
        onValueChange={(itemValue) => setLevel(itemValue)}
        style={styles.input}
        enabled={false} // Disable Picker (no interaction)
      >
        <Picker.Item label="Level 1" value="Level 1" />
        <Picker.Item label="Level 2" value="Level 2" />
        <Picker.Item label="Level 3" value="Level 3" />
        <Picker.Item label="Level 4" value="Level 4" />
        <Picker.Item label="Level 5" value="Level 5" />
        <Picker.Item label="Level 6" value="Level 6" />
      </Picker>
    )}
  </View>
</View>


      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update Profile Details</Text>
      </TouchableOpacity>
    </>
  )}
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  backButtonText: {
    fontSize: 16,
    marginLeft: 5,
    color: "#007BFF",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  noImageText: {
    fontSize: 14,
    color: "#aaa",
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
