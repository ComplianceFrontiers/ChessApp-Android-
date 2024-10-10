import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { popularCoursesDetail } from "../../utils/mockData";
import SaveIcon from "../../assets/svg/saveIcon.svg";
import RatingIcon from "../../assets/svg/ratingIcon.svg";
import { useNavigation } from "@react-navigation/native";

const AllCourseTab = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  return (
    <View style={{ paddingHorizontal: "10%", paddingVertical: "10%" }}>
      {popularCoursesDetail.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.courses}
          onPress={() =>
            navigation.navigate("coursedetails", {
              data: {
                title: item.title,
                category: item.category,
                price: item.price,
                rating: item.rating,
              },
            })
          }
        >
          <Image source={item.image} style={styles.image} />
          <View style={{ gap: 10, paddingVertical: 10 }}>
            <Text style={[globalStyles.redTextwithWeight]}>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>{item.std}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "77%",
              }}
            >
              <Text style={globalStyles.violetText}>${item.price}/-</Text>
              <View style={styles.absoluteRating}>
                <RatingIcon />
                <Text>{item.rating}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.saveIcon}>
            <SaveIcon />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 133,
  },
  courses: {
    elevation: 3,
    backgroundColor: "white",
    width: "100%",
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    gap: 20,
  },
  saveIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  absoluteRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default AllCourseTab;
