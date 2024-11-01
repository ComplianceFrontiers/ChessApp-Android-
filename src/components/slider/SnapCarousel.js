import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
// import Carousel from "react-native-snap-carousel";
import ThemeContext from "../Theme/ThemeContext";

const SnapCarousel = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth * 0.8;

  const theme = useContext(ThemeContext);
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.slide,
        { width: itemWidth, backgroundColor: theme.roseOrBlue },
      ]}
    >
      <Image source={item.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
        layout="default"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginVertical: "10%",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#46007C",
    padding: 25,
    borderRadius: 30,
  },
});

export default SnapCarousel;
