import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
// import Carousel from "react-native-snap-carousel";

const InprocessCarousal = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth - 50;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.slide}></TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        loop
        autoplay
        autoplayInterval={3000}
        layout="default"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 300,
    elevation: 3,
    marginHorizontal: 5,
    paddingBottom: "8%",
    overflow: "hidden",
    marginBottom: "5%",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default InprocessCarousal;
