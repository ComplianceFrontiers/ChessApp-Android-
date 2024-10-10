import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { profileData } from "../../utils/mockData";
import DetailIcon from "../../assets/svg/detailIcon.svg";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";

const Profile = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  const handleNavigate = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else {
      console.log("No respective screen available");
    }
  };

  const theme = useContext(ThemeContext);

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Profile" />
        <View style={[globalStyles.contents, { paddingTop: 0 }]}>
          <View style={styles.mainContain}>
            <View style={styles.absoluteHead}>
              <View style={styles.round}>
                <Image
                  source={require("../../assets/images/profileAvatar.png")}
                  style={styles.profile}
                />
              </View>
              <View style={styles.details}>
                <Text style={[globalStyles.headingOne, { color: theme.black }]}>
                  Johnny Cage
                </Text>
                <Text>tim.jennings@example.com</Text>
              </View>
            </View>

            <View style={styles.tabsContainer}>
              {profileData.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.individualTab}
                  onPress={() => handleNavigate(item)}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    {item.icon}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "85%",
                      }}
                    >
                      <Text
                        style={[
                          globalStyles.headingFive,
                          { color: theme.black },
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={[globalStyles.violetText, { fontWeight: "400" }]}
                      >
                        {item.lang}
                      </Text>
                    </View>
                  </View>

                  <DetailIcon />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    width: 80,
    height: 80,
  },
  round: {
    borderWidth: 2,
    borderColor: "#FC4F72",
    borderRadius: 100,
  },
  details: {
    alignItems: "center",
    marginVertical: "3%",
    gap: 10,
  },
  tabsContainer: {
    alignItems: "center",
    width: "100%",
    gap: 20,
    marginVertical: "5%",
  },
  individualTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  mainContain: {
    alignItems: "center",
    borderRadius: 16,
    paddingTop: "30%",
    paddingBottom: "3%",
    width: "100%",
    backgroundColor: "#FFDCE3",
    marginTop: "20%",
  },
  absoluteHead: {
    alignItems: "center",
    position: "absolute",
    top: -50,
  },
});
