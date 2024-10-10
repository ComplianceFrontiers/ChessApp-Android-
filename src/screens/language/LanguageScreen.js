import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { allLanguages, profileLanguageData } from "../../utils/mockData";
import { Checkbox, Provider as PaperProvider } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
import ThemeContext from "../../components/Theme/ThemeContext";

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const toggleLanguage = (language) => {
    setSelectedLanguages((prev) => {
      if (prev.includes(language)) {
        return prev.filter((item) => item !== language);
      } else {
        return [...prev, language];
      }
    });
  };

  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);
  return (
    <>
      <ScrollView style={globalStyles.colorBG}>
        <View style={globalStyles.container}>
          <Header label="Language" />
          <View style={globalStyles.contents}>
            <Text
              style={[globalStyles.headingFive, { alignSelf: "flex-start" }]}
            >
              SubCategories:
            </Text>
            <View style={styles.containItems}>
              {profileLanguageData.map((item) => (
                <View style={styles.checkText} key={item.id}>
                  <Text style={{ color: theme.color }}>{item.language}</Text>
                  <Checkbox
                    value={item.language}
                    status={
                      selectedLanguage === item.language
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => setSelectedLanguage(item.language)}
                    color="#FC4F72"
                    uncheckedColor="#FC4F72"
                  />
                </View>
              ))}
            </View>
            <Text
              style={[globalStyles.headingFive, { alignSelf: "flex-start" }]}
            >
              All Language
            </Text>
            <View style={styles.containItems}>
              {allLanguages.map((item) => (
                <View style={styles.checkText} key={item.id}>
                  <Text style={{ color: theme.color }}>{item.language}</Text>
                  <Checkbox
                    status={
                      selectedLanguages.includes(item.language)
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => toggleLanguage(item.language)}
                    color="#FC4F72"
                    uncheckedColor="#FC4F72"
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={globalStyles.absoluteBTN}>
        <CommonButton label="Apply" />
      </View>
    </>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  containItems: {
    width: "100%",
    marginLeft: "15%",
    marginVertical: "3%",
    gap: 15,
    justifyContent: "flex-start",
  },
  checkText: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
  },
});
