import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { cardDetails } from "../../utils/mockData";
import { TextInput } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";

const AddNewCard = () => {
  const globalStyles = useGlobalStyles();
  return (
    <>
      <ScrollView style={globalStyles.colorBG}>
        <View style={globalStyles.container}>
          <Header label="Card Details" />
          <View style={globalStyles.contents}>
            <Image
              source={require("../../assets/images/debitCardIMG.png")}
              style={styles.debitCard}
            />
            <View style={styles.inputContainer}>
              {cardDetails.slice(0, 2).map((item) => (
                <View key={item.id}>
                  <Text style={globalStyles.headingFive}>{item.title}</Text>
                  <TextInput
                    placeholder={item.placeholder}
                    style={styles.input}
                    underlineColor="transparent"
                    theme={{
                      colors: {
                        primary: "transparent",
                        underlineColor: "transparent",
                      },
                    }}
                  />
                </View>
              ))}
              <View style={styles.row}>
                {cardDetails.slice(2).map((item) => (
                  <View key={item.id} style={styles.halfWidth}>
                    <Text style={globalStyles.headingFive}>{item.title}</Text>
                    <TextInput
                      placeholder={item.placeholder}
                      style={styles.input}
                      underlineColor="transparent"
                      theme={{
                        colors: {
                          primary: "transparent",
                          underlineColor: "transparent",
                        },
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={globalStyles.absoluteBTN}>
        <CommonButton label="Add New Card" />
      </View>
    </>
  );
};

export default AddNewCard;

const styles = StyleSheet.create({
  debitCard: {
    width: 353,
    height: 200,
  },
  inputContainer: {
    marginVertical: "5%",
    width: "100%",
    gap: 20,
  },
  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },
});
