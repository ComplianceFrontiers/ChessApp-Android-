import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { mentorsData } from "../../utils/mockData";
import ThemeContext from "../../components/Theme/ThemeContext";

const TopMentors = () => {
  const [mentors, setMentors] = useState(mentorsData);
  const globalStyles = useGlobalStyles();

  const handleFollow = (id) => {
    setMentors((prevMentors) =>
      prevMentors.map((mentor) =>
        mentor.id === id ? { ...mentor, following: !mentor.following } : mentor
      )
    );
  };

  const theme = useContext(ThemeContext);
  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Top Mentors" searchIcon={true} />
        <View style={globalStyles.contents}>
          <View style={{ gap: 30, width: "100%" }}>
            {mentors.map((item) => (
              <TouchableOpacity key={item.id} style={styles.mentors}>
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
                    <Text style={{ color: theme.color }}>
                      {item.designation}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleFollow(item.id)}>
                  <Text
                    style={item.following ? styles.following : styles.follow}
                  >
                    {item.following ? "Following" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mentors: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
  },
  follow: {
    backgroundColor: "#FC4F72",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  following: {
    backgroundColor: "white",
    color: "#FC4F72",
    borderWidth: 0.5,
    borderColor: "#FC4F72",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default TopMentors;
