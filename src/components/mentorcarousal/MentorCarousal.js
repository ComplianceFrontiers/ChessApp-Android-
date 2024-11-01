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
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

const MentorCarousal = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / 4;

  const globalStyles = useGlobalStyles();

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.slide}
      onPress={() =>
        navigation.navigate("mentordetails", {
          data: {
            name: item.title,
            image: item.image,
            designation: item.designation,
          },
        })
      }
    >
      <Image source={item.image} style={styles.image} />
      <Text style={[globalStyles.headingFive, { textAlign: "center" }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
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
    borderRadius: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});

export default MentorCarousal;
