import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import Carousel from "react-native-snap-carousel";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import * as Progress from "react-native-progress";
import LessonIcon from "../../assets/svg/lessonIcon.svg";
import ThemeContext from "../Theme/ThemeContext";

const ProcessCarousal = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth - 50;

  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.slide}>
      <View style={{ padding: "5%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "70%",
            gap: 15,
          }}
        >
          {item.icon}
          <Text style={[globalStyles.paragraph, { color: theme.black }]}>
            {item.title}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Progress.Bar
          progress={0.5}
          width={200}
          height={8}
          color="#FFB322"
          animated={true}
          unfilledColor="#FFEAC2"
          borderColor="transparent"
        />
        <Text style={styles.percentage}>30%</Text>
      </View>
      <View style={styles.dottedLine} />
      <View style={styles.lesson}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <LessonIcon />
          <Text>{item.lesson}</Text>
        </View>
        <Text style={styles.learnNow}>Learn now</Text>
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
    elevation: 5,
    backgroundColor: "white",
    marginBottom: "5%",
    height: 230,
    marginRight: "10%",
    marginTop: "5%",
    borderRadius: 15,
  },
  dottedLine: {
    borderWidth: 2,
    marginVertical: "5%",
    borderColor: "#A4A4A4",
    borderStyle: "dashed",
    borderRadius: 1,
    width: "100%",
  },
  percentage: {
    backgroundColor: "#FFB322",
    color: "white",
    paddingVertical: "1%",
    paddingHorizontal: "3%",
    borderRadius: 10,
  },
  lesson: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  learnNow: {
    backgroundColor: "#46007C",
    color: "white",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    borderRadius: 15,
  },
});

export default ProcessCarousal;
