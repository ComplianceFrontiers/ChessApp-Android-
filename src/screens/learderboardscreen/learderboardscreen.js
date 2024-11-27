import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";

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

const LeaderBoardScreen = () => {
  const [students, setStudents] = useState([]);
  const group = "In School Program"; // Dynamic group parameter

  // Fetch data from the updated API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `https://backend-chess-tau.vercel.app/get_forms_group?group=${encodeURIComponent(
            group
          )}`
        );
        setStudents(response.data); // Assuming API returns an array of students
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [group]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.length > 0 ? (
        students.map((student, index) => {
          // Use the imageMap to find the image or default to "/images/portal/g1.png"
          const studentImage =
            imageMap[student.image] || imageMap["/images/portal/b4.png"];

          return (
            <View key={index} style={styles.card}>
              <Image source={studentImage} style={styles.image} />
              <Text style={styles.name}>
                Profile ID: {student.profile_id}
              </Text>
              <Text style={styles.name}>
                Name: {student.child_name?.first} {student.child_name?.last}
              </Text>
              <Text style={styles.email}>Email: {student.email}</Text>
            </View>
          );
        })
      ) : (
        <Text style={styles.loadingText}>Loading students...</Text>
      )}
    </ScrollView>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "90%",
    marginVertical: "10%",
    alignSelf: "center",
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  loadingText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});
