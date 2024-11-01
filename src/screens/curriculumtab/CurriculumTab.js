import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useGlobalStyles from "../../styles/globalStyles";
import { curriculumData } from "../../utils/mockData";
import PlayBTN from "../../assets/svg/playButton.svg";
import ThemeContext from "../../components/Theme/ThemeContext";

const CurriculumTab = () => {
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleNavigation = (url) => {
    navigation.navigate(url); // Use the URL directly
  };

  return (
    <View style={{ marginBottom: "10%" }}>
      <View style={styles.intro}>
        <Text style={globalStyles.headingFive}>
          Section 01 - <Text style={globalStyles.redTextwithWeight}>Introduction</Text>
        </Text>
        <Text style={globalStyles.redText}>25 Mins</Text>
      </View>
      <View style={{ gap: 20, paddingVertical: "5%" }}>
        {curriculumData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleNavigation(item.url)} // Pass URL to handleNavigation
            style={styles.videoContainer}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
              <Text style={[styles.id, globalStyles.headingFive]}>
                {item.id}
              </Text>
              <View>
                <Text style={globalStyles.headingFive}>{item.title}</Text>
                <Text style={{ color: theme.color }}>{item.duration} Mins</Text>
              </View>
            </View>
            <PlayBTN />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  id: {
    backgroundColor: "#FFC8D3",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    borderRadius: 30,
  },
  videoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default CurriculumTab;
