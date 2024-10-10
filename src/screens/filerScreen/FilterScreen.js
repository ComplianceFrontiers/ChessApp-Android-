import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import {
  filterSubcategoryData,
  filterSubcategoryLevelsData,
  filterSubcategoryPaymentData,
} from "../../utils/mockData";
import { Checkbox } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
import ThemeContext from "../../components/Theme/ThemeContext";

const FilterScreen = () => {
  const [subcategoryCheckedItems, setSubcategoryCheckedItems] = useState({});
  const [levelsCheckedItems, setLevelsCheckedItems] = useState({});
  const [priceCheckedItems, setPriceCheckedItems] = useState({});

  const globalStyles = useGlobalStyles();

  const handleToggle = (id, category) => {
    switch (category) {
      case "subcategory":
        setSubcategoryCheckedItems((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
        break;
      case "levels":
        setLevelsCheckedItems((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
        break;
      case "price":
        setPriceCheckedItems((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
        break;
      default:
        break;
    }
  };

  const handleClearAll = () => {
    setSubcategoryCheckedItems({});
    setLevelsCheckedItems({});
    setPriceCheckedItems({});
  };

  const theme = useContext(ThemeContext);

  const renderCheckboxes = (data, category) => {
    return data.map((item) => (
      <View style={styles.checkBox} key={item.id}>
        <Checkbox
          status={getCheckedStatus(item.id, category)}
          onPress={() => handleToggle(item.id, category)}
          uncheckedColor="#FFB322"
          color="#FFB322"
          uncheckedIcon="check"
        />
        <Text style={{ color: theme.color }}>{item.title}</Text>
      </View>
    ));
  };

  const getCheckedStatus = (id, category) => {
    switch (category) {
      case "subcategory":
        return subcategoryCheckedItems[id] ? "checked" : "unchecked";
      case "levels":
        return levelsCheckedItems[id] ? "checked" : "unchecked";
      case "price":
        return priceCheckedItems[id] ? "checked" : "unchecked";
      default:
        return "unchecked";
    }
  };

  return (
    <>
      <ScrollView style={globalStyles.colorBG}>
        <View style={globalStyles.container}>
          <Header label="Filter" />
          <View style={[globalStyles.contents, { alignItems: "flex-start" }]}>
            <Text style={globalStyles.headingFive}>SubCategories:</Text>
            <View style={styles.checkboxContainer}>
              {renderCheckboxes(filterSubcategoryData, "subcategory")}
            </View>
            <Text style={globalStyles.headingFive}>Levels:</Text>
            <View style={styles.checkboxContainer}>
              {renderCheckboxes(filterSubcategoryLevelsData, "levels")}
            </View>
            <Text style={globalStyles.headingFive}>Price:</Text>
            <View style={styles.checkboxContainer}>
              {renderCheckboxes(filterSubcategoryPaymentData, "price")}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[globalStyles.absoluteContents, styles.absoluteContent]}>
        <CommonButton
          label="Clear all"
          bgColor="white"
          color="#FC4F72"
          onPress={handleClearAll}
        />
        <CommonButton label="Apply" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  checkboxContainer: {
    gap: 5,
    paddingLeft: "5%",
    paddingVertical: "3%",
  },
  absoluteContent: {
    bottom: 20,
    width: "95%",
    alignSelf: "center",
    gap: 10,
  },
});

export default FilterScreen;
