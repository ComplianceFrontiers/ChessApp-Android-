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
import { callsData } from "../../utils/mockData";
import OutgoingIcon from "../../assets/svg/outgoingIcon.svg";
import MissedIcon from "../../assets/svg/missedIcon.svg";
import CallIcon from "../../assets/svg/callIcon.svg";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";
import IncomingIcon from "../../components/incomingIcon/IcomingIcon";

const CallScreen = () => {
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  const renderCallHistory = (callHistory) => {
    switch (callHistory) {
      case "Incoming":
        return (
          <View style={styles.renderData}>
            <IncomingIcon />
            <Text style={{ color: theme.color }}>Incoming</Text>
            <Text style={{ color: theme.color }}>|</Text>
            <Text style={{ color: theme.color }}>Dec 05, 2023</Text>
          </View>
        );
      case "Outgoing":
        return (
          <View style={styles.renderData}>
            <OutgoingIcon />
            <Text style={{ color: theme.color }}>Outgoing</Text>
            <Text style={{ color: theme.color }}>|</Text>
            <Text style={{ color: theme.color }}>Dec 04, 2023</Text>
          </View>
        );
      case "Missed":
        return (
          <View style={styles.renderData}>
            <MissedIcon />
            <Text style={{ color: theme.color }}>Missed</Text>
            <Text style={{ color: theme.color }}>|</Text>
            <Text style={{ color: theme.color }}>Dec 03, 2023</Text>
          </View>
        );
      default:
        return null;
    }
  };

  const navigation = useNavigation();

  return (
    <View
      style={{
        gap: 15,
        width: "90%",
        marginVertical: "7%",
        marginBottom: "30%",
      }}
    >
      {callsData.map((item) => (
        <TouchableOpacity key={item.id} style={styles.callList}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={globalStyles.headingFive}>{item.title}</Text>
              {renderCallHistory(item.callHistory)}
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("callingscreen", {
                data: { name: item.title, image: item.image },
              })
            }
          >
            <CallIcon />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  callList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingVertical: "3%",
  },
  renderData: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
