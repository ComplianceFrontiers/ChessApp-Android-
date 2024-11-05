import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
// import Carousel from "react-native-snap-carousel";
import SaveIcon from "../../assets/svg/saveIcon.svg";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import RatingIcon from "../../assets/svg/ratingIcon.svg";
import ThemeContext from "../Theme/ThemeContext";

const PopularCourseAllTabCarousal = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth - 50;
  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            paddingTop: "5%",
          }}
        >
          <Text style={globalStyles.redTextwithWeight}>{item.category}</Text>
          <SaveIcon />
        </View>

        <Text
          style={[
            globalStyles.headingFive,
            { fontWeight: "500", color: theme.black },
          ]}
        >
          {item.title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={globalStyles.violetText}>${item.price}/-</Text>
          <Text> | </Text>
          {/* <RatingIcon /> */}
          {/* <Text style={{ fontWeight: "500" }}>{item.rating}</Text> */}
          <Text> | </Text>
          <Text>{item.std} Std</Text>
        </View>
      </View>
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

export default PopularCourseAllTabCarousal;
