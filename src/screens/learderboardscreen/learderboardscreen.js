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

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `https://backend-chess-tau.vercel.app/get_forms_group?group=${encodeURIComponent(group)}`
        );
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [group]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.length > 0 ? (
        <>
          {students.map((student, index) => {
            const studentImage = imageMap[student.image] || imageMap["/images/portal/b4.png"];

            return (
              <View key={index} style={styles.card}>
                <Text style={styles.rank}>{index + 1}</Text>
                <Image source={studentImage} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>
                    {student.child_name?.first} {student.child_name?.last}
                  </Text>
                  <Text style={styles.email}>Email: {student.email}</Text>
                </View>
              </View>
            );
          })}
        </>
      ) : (
        <Text style={styles.loadingText}>Loading students...</Text>
      )}
    </ScrollView>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#f7f7f7",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2d2d2d",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    maxWidth: 400,
  },
  rank: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e1e1e",
    marginRight: 20,
    width: 30,
    textAlign: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ddd",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
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
