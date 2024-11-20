import React from "react";
import { ScrollView, Text, View } from "react-native";
import PopularCourses from "../home/Home";

const CoursesTab = () => {
  return (
    <View style={{ marginTop: "-20%" }}>
      <PopularCourses />
    </View>
  );
};

export default CoursesTab;
