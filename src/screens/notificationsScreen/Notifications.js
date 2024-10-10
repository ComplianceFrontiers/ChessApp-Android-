import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import {
  notificationDataToday,
  notificationDataYesterday1,
  notificationDataYesterday2,
} from "../../utils/mockData";
import ThemeContext from "../../components/Theme/ThemeContext";

const Notifications = () => {
  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);
  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Notifications" />
        <View style={globalStyles.contents}>
          <Text
            style={[
              globalStyles.headingFive,
              { alignSelf: "flex-start", marginBottom: "5%" },
            ]}
          >
            Today
          </Text>
          {notificationDataToday.map((item) => (
            <TouchableOpacity key={item.id} style={styles.notifications}>
              {item.icon}
              <View>
                <Text
                  style={[globalStyles.headingFive, { color: theme.black }]}
                >
                  {item.title}
                </Text>
                <Text>{item.para}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <Text
            style={[
              globalStyles.headingFive,
              { alignSelf: "flex-start", marginBottom: "5%" },
            ]}
          >
            Yesterday
          </Text>
          {notificationDataYesterday1.map((item) => (
            <TouchableOpacity key={item.id} style={styles.notifications}>
              {item.icon}
              <View>
                <Text
                  style={[globalStyles.headingFive, { color: theme.black }]}
                >
                  {item.title}
                </Text>
                <Text>{item.para}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <Text
            style={[
              globalStyles.headingFive,
              { alignSelf: "flex-start", marginBottom: "5%" },
            ]}
          >
            Yesterday
          </Text>
          {notificationDataYesterday2.map((item) => (
            <TouchableOpacity key={item.id} style={styles.notifications}>
              {item.icon}
              <View>
                <Text
                  style={[globalStyles.headingFive, { color: theme.black }]}
                >
                  {item.title}
                </Text>
                <Text>{item.para}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  notifications: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#f1f1f1",
    marginBottom: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    borderRadius: 15,
    width: "100%",
  },
});
