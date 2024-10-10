import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { curriculumData } from "../../utils/mockData";
import PlayBTN from "../../assets/svg/playButton.svg";
import theme from "../../components/Theme/Theme";
import ThemeContext from "../../components/Theme/ThemeContext";

const CurriculumTab = () => {
  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);
  return (
    <View style={{ marginBottom: "10%" }}>
      <View style={styles.intro}>
        <Text style={globalStyles.headingFive}>
          Section 01 -{" "}
          <Text style={globalStyles.redTextwithWeight}>Introduction</Text>
        </Text>
        <Text style={globalStyles.redText}>25 Mins</Text>
      </View>
      <View style={{ gap: 20, paddingVertical: "5%" }}>
        {curriculumData.map((item) => (
          <View key={item.id} style={styles.videoContainer}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Text style={[styles.id, globalStyles.headingFive]}>
                {item.id}
              </Text>
              <View>
                <Text style={globalStyles.headingFive}>{item.title}</Text>
                <Text style={{ color: theme.color }}>{item.duration}</Text>
              </View>
            </View>
            <PlayBTN />
          </View>
        ))}
      </View>
      <View style={[styles.intro, { marginTop: "5%" }]}>
        <Text style={globalStyles.headingFive}>
          Section 02 -{" "}
          <Text style={globalStyles.redTextwithWeight}>Graphic Design</Text>
        </Text>
        <Text style={globalStyles.redText}>55 Mins</Text>
      </View>
      <View style={{ gap: 20, paddingVertical: "5%" }}>
        {curriculumData.map((item) => (
          <View key={item.id} style={styles.videoContainer}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Text style={[styles.id, globalStyles.headingFive]}>
                {item.id}
              </Text>
              <View>
                <Text style={globalStyles.headingFive}>{item.title}</Text>
                <Text style={{ color: theme.color }}>{item.duration}</Text>
              </View>
            </View>
            <PlayBTN />
          </View>
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
    alignItems: "center",
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
