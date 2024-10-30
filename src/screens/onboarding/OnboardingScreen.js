import React, { useContext } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CommonButton from "../../components/commonbutton/CommonButton";
import { OnBoardingData } from "../../utils/mockData";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import ThemeContext from "../../components/Theme/ThemeContext";

const slideWidth = Dimensions.get("window").width;

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  const ref = React.useRef(null);

  const Slide = ({ item }) => {
    return (
      <View
        style={[styles.slideContainer, { backgroundColor: theme.background }]}
      >
        <Image source={item.image} style={styles.onboardingImage} />
        <View
          style={[styles.blueContainer, { backgroundColor: theme.reverseBG }]}
        >
          <Text
            style={[
              globalStyles.headingFour,
              { textAlign: "center", color: theme.reversewhiteOrBlack },
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              globalStyles.paragraph,
              { textAlign: "center", color: theme.reversewhiteOrBlack },
            ]}
          >
            {item.para}
          </Text>
        </View>
      </View>
    );
  };

  const handleNext = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const offset = nextSlideIndex * slideWidth;
    if (nextSlideIndex < OnBoardingData.length) {
      ref?.current?.scrollToOffset({ offset });
    } else {
      setCurrentSlideIndex(nextSlideIndex - 1);
    }
  };

  const renderDotNotifier = (index) => {
    return (
      <View
        style={[
          styles.dot,
          {
            backgroundColor:
              currentSlideIndex === index ? "#FFB322" : "#f1f1f1",
          },
        ]}
      />
    );
  };

  return (
    <>
      <FlatList
        ref={ref}
        data={OnBoardingData}
        contentContainerStyle={styles.flatListContainer}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Slide item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0) {
            setCurrentSlideIndex(viewableItems[0].index || 0);
          }
        }}
        getItemLayout={(data, index) => ({
          length: slideWidth,
          offset: slideWidth * index,
          index,
        })}
        style={{ zIndex: 2 }}
      />
      <View style={[styles.btns, { zIndex: 2 }]}>
        {currentSlideIndex === OnBoardingData.length - 1 ? (
          <CommonButton
            label="Get Started"
            style={styles.buttonCls}
            onPress={() => navigation.navigate("signup")}
          />
        ) : (
          <CommonButton
            label="Next"
            style={styles.buttonCls}
            onPress={handleNext}
          />
        )}
      </View>
      <View style={styles.dotContainer}>
        {OnBoardingData.map((_, index) => (
          <View key={index} style={styles.dot}>
            {renderDotNotifier(index)}
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: slideWidth,
    paddingBottom: 60,
  },
  blueContainer: {
    backgroundColor: "#46007C",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 35,
    paddingHorizontal: 30,
    gap: 10,
    paddingBottom: "38%",
  },
  onboardingImage: {
    width: slideWidth * 1.0,
    height:700,
    resizeMode: "contain",
  },
  flatListContainer: {
    flexGrow: 1,
  },
  btns: {
    position: "absolute",
    bottom: "2%",
    right: 15,
    width: "40%",
    alignSelf: "flex-end",
  },
  buttonCls: {
    marginTop: 100,
  },
  dotContainer: {
    position: "absolute",
    bottom: "5%",
    left: 15,
    zIndex: 100,
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default OnboardingScreen;
