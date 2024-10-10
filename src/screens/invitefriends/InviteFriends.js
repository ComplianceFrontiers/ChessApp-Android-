import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/header/Header";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { inviteData } from "../../utils/mockData";
import ThemeContext from "../../components/Theme/ThemeContext";

const InviteFriends = () => {
  const [invited, setInvited] = useState({});

  const handleInvite = (title) => {
    setInvited((prevInvited) => ({
      ...prevInvited,
      [title]: !prevInvited[title],
    }));
  };

  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Invite Friends" />
        <View style={[globalStyles.contents, { width: "100%", gap: 30 }]}>
          {inviteData.map((item) => (
            <View key={item.id} style={styles.inviteContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image source={item.image} style={styles.image} />
                <View>
                  <Text style={globalStyles.headingFive}>{item.title}</Text>
                  <Text style={{ color: theme.color }}>{item.number}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleInvite(item.title)}>
                <Text
                  style={[
                    styles.invite,
                    invited[item.title] ? styles.invited : null,
                  ]}
                >
                  {invited[item.title] ? "Invited" : "Invite"}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default InviteFriends;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  inviteContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  invite: {
    backgroundColor: "#FC4F72",
    color: "white",
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 20,
  },
  invited: {
    backgroundColor: "white",
    color: "#FC4F72",
    borderColor: "#FC4F72",
    borderWidth: 1,
  },
});
