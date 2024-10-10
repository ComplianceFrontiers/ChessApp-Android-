import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { messageData } from "../../utils/mockData";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";

const ChatTab = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);

  return (
    <View
      style={{
        gap: 15,
        width: "90%",
        marginVertical: "7%",
        marginBottom: "30%",
      }}
    >
      {messageData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.mentors}
          onPress={() =>
            navigation.navigate("personalmessage", {
              data: { name: item.title, image: item.image },
            })
          }
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                justifyContent: "space-between",
              }}
            >
              <Image source={item.image} style={styles.image} />
              <View>
                <Text style={globalStyles.headingFive}>{item.title}</Text>
                <Text style={{ color: theme.color }}>{item.message}</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", gap: 15 }}>
              {item.unread ? (
                <Text
                  style={[
                    styles.unreadMSG,
                    { backgroundColor: theme.roseOrBlue },
                  ]}
                >
                  {item.unread}
                </Text>
              ) : (
                ""
              )}

              <Text style={{ fontSize: 10, color: theme.color }}>
                {item.time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChatTab;

const styles = StyleSheet.create({
  mentors: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "space-between",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingVertical: "3%",
  },
  image: {
    width: 50,
    height: 50,
  },
  unreadMSG: {
    color: "white",
    padding: "1%",
    borderRadius: 50,
  },
});
