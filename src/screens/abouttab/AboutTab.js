import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { reviewsData, whatYouGetData } from "../../utils/mockData";
import RatingIcon from "../../assets/svg/ratingIcon.svg";
import HeartIcon from "../../assets/svg/heartIcon.svg";
import ThemeContext from "../../components/Theme/ThemeContext";

const AboutTab = () => {
  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);

  return (
    <ScrollView
      style={[globalStyles.colorBG, { width: "100%", marginBottom: "10%" }]}
    >
      <View>
        <Text style={globalStyles.paragraph}>
          Graphic Design now a popular profession graphic design by off your
          carrer about tantas regiones barbarorum pedibus obiit Graphic
        </Text>
        <Text style={[{ marginVertical: "3%" }, globalStyles.paragraph]}>
          Design n a popular profession l Cur tantas regiones barbarorum pedibus
          obiit, maria transmi Et ne nimium beatus est; Addidisti ad extremum
          etiam{" "}
          <Text style={globalStyles.violetTextWithUnderline}>Read More</Text>
        </Text>

        <Text style={globalStyles.headingFive}>Instructor</Text>
        <View style={styles.instructorContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image
              source={require("../../assets/images/mentor1.png")}
              style={styles.image}
            />
            <View>
              <Text style={globalStyles.headingFive}>Jenny Wilson</Text>
              <Text style={{ color: theme.color }}>Graphic designer</Text>
            </View>
          </View>
          <Text style={styles.follow}>Follow</Text>
        </View>
        <Text style={globalStyles.headingFive}>What You’ll Get</Text>
        <View style={{ gap: 20, paddingVertical: "5%" }}>
          {whatYouGetData.map((item) => (
            <View key={item.id} style={styles.iconAndTitle}>
              {item.icon}
              <Text style={globalStyles.paragraph}>{item.title}</Text>
            </View>
          ))}
        </View>
        <Text style={globalStyles.headingFive}>Reviews</Text>
        <View style={{ gap: 30, paddingVertical: "5%" }}>
          {reviewsData.map((item) => (
            <View key={item.id} style={styles.reviews}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image source={item.image} style={styles.image} />
                <View style={{ width: "75%" }}>
                  <View style={styles.absoluteRtaing}>
                    <RatingIcon />
                    <Text style={{ color: theme.color }}>{item.rating}</Text>
                  </View>
                  <Text style={globalStyles.headingFive}>{item.name}</Text>
                  <Text style={globalStyles.paragraph}>{item.review}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        paddingVertical: "5%",
                      }}
                    >
                      <HeartIcon />
                      <Text style={{ color: theme.color }}>{item.likes}</Text>
                    </View>
                    <View>
                      <Text style={{ color: theme.color }}>{item.posted}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  instructorContainer: {
    width: "100%",
    paddingVertical: "2%",
    marginTop: "2%",
    marginBottom: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  follow: {
    backgroundColor: "#FC4F72",
    color: "white",
    paddingVertical: "4%",
    paddingHorizontal: "8%",
    borderRadius: 15,
  },
  iconAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  reviews: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
  },
  absoluteRtaing: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    right: 0,
    top: 5,
  },
});

export default AboutTab;
