import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useGlobalStyles from "../../styles/globalStyles";
import { popularCoursesDetail } from "../../utils/mockData";
import SaveIcon from "../../assets/svg/saveIcon.svg";
import RatingIcon from "../../assets/svg/ratingIcon.svg";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../hometab/HomeTab";

const AllCourseTab = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: "fixed", marginBottom: "0%", paddingHorizontal: "10%", paddingVertical: "0%", paddingLeft: "10%", top: 0, left: 0 }}>
        <HomeTab />
      </View>

      <View style={{ paddingHorizontal: "10%", paddingLeft: "10%", paddingRight: "10%", paddingVertical: "10%", marginBottom: "20%" }}>
        {popularCoursesDetail.map((item) => (
          <View key={item.id} style={styles.courses}
          onPress={() => {
            // Check if the item.id is 4 to navigate to notifications
            if (item.id === 3) {
              navigation.navigate("notifcations");
            } else {
              navigation.navigate("coursedetails", {
                data: {
                  title: item.title,
                  category: item.category,
                  price: item.price,
                  rating: item.rating,
                },
              });
            }
          }}
        >
            <Image source={item.image} style={styles.image} />
          <View style={{ gap: 10, paddingVertical: 5 }}>
              <Text style={[globalStyles.redTextwithWeight]}>{item.title}</Text>
              <Text>{item.category}</Text>

              {/* Start Course Button */}
              <TouchableOpacity
                style={styles.startCourseButton}
                onPress={() =>
                  navigation.navigate("notifcations", {
                    data: { title: item.title, category: item.category },
                  })
                }
              >
                <Text style={styles.startCourseText}>Start Course</Text>
              </TouchableOpacity>

              <View style={styles.ratingContainer}>
                <Text style={globalStyles.violetText}></Text>
                <View style={styles.absoluteRating}>

                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.saveIcon}>
              <SaveIcon />
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
    paddingBottom: 10,
  },
  saveIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  textContainer: {
    gap: 10,
    // paddingVertical: 5,
    // flex: 1,
  },
  startCourseButton: {
    backgroundColor: "#4CAF50", // Button color
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    // marginLeft:90,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%", // Limit the button's width to 80% of its container
    alignSelf: "flex-start", // Align the button to the start of the container
  },
  startCourseText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Centers the text in the button
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    // flex: 1,
  },
  absoluteRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default AllCourseTab;
