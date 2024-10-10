import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { checkoutCourse, popularCoursesAllTab } from "../../utils/mockData";
import SaveIcon from "../../assets/svg/saveIcon.svg";
import RatingIcon from "../../assets/svg/ratingIcon.svg";
import VisaIcon from "../../assets/svg/visaIcon.svg";
import AddIcon from "../../assets/svg/addIcon.svg";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";

const CheckOut = () => {
  const globalStyles = useGlobalStyles();
  const paymentData = [
    { id: 1, number: "76  3054", name: "first" },
    { id: 2, number: "85  0602", name: "second" },
  ];

  const [method, setMethod] = useState("first");

  const handleMethod = (data) => {
    setMethod(data);
  };

  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={globalStyles.colorBG}>
        <View style={globalStyles.container}>
          <Header label="Checkout" />
          <View style={globalStyles.contents}>
            <View style={{ paddingHorizontal: "10%" }}>
              {checkoutCourse.map((item) => (
                <TouchableOpacity key={item.id} style={styles.courses}>
                  <Image source={item.image} style={styles.image} />
                  <View style={{ gap: 10, paddingVertical: 10 }}>
                    <Text style={[globalStyles.redTextwithWeight]}>
                      {item.title}
                    </Text>
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
                      <Text style={globalStyles.violetText}>
                        ${item.price}/-
                      </Text>
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
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              marginLeft: "5%",
              marginVertical: "5%",
              gap: 15,
            }}
          >
            <Text style={globalStyles.paragraph}>
              Select the Payment Methods you Want to Use
            </Text>
            <Text style={globalStyles.headingFive}>Payment method</Text>
          </View>
          <View style={styles.paymentContainer}>
            {paymentData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.paymentMethod}
                onPress={() => handleMethod(item.name)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  {method === item.name ? (
                    //   <PaymentActiveIcon />
                    <View style={styles.activeIcon}>
                      <View style={styles.innerRound} />
                    </View>
                  ) : (
                    <View style={styles.activeIcon} />
                  )}
                  <Text style={globalStyles.headingFive}>
                    **** **** **{item.number}
                  </Text>
                </View>
                <VisaIcon />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.absoluteAddIcon}>
        <AddIcon />
      </TouchableOpacity>
      <View style={styles.absoluteBTN}>
        <CommonButton
          label="Buy Now"
          onPress={() => navigation.navigate("confirmation")}
        />
      </View>
    </>
  );
};

export default CheckOut;

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
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#f1f1f1",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
  },
  paymentContainer: {
    gap: 25,
    width: "90%",
  },
  activeIcon: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "#FC4F72",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerRound: {
    width: 14,
    height: 14,
    backgroundColor: "#FC4F72",
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 1,
  },
  absoluteAddIcon: {
    position: "absolute",
    right: 20,
    bottom: 100,
  },
  absoluteBTN: {
    width: "95%",
    position: "absolute",
    bottom: 25,
    alignSelf: "center",
  },
});
