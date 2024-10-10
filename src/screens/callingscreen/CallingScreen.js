import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import MicIcon from "../../assets/svg/micIcon.svg";
import CallIcon from "../../assets/svg/redCallIcon.svg";
import VideoCallIcon from "../../assets/svg/videoCallIcon.svg";

const CallingScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  const { data } = route.params;

  const icons = [
    { id: 1, icon: <MicIcon /> },
    { id: 2, icon: <CallIcon />, action: "goBack" },
    { id: 3, icon: <VideoCallIcon /> },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={globalStyles.container}>
        <Header label="" />
        <View style={{ marginVertical: "15%", alignItems: "center" }}>
          <Image source={data.image} style={styles.image} />
          <Text style={[globalStyles.headingOne, { marginVertical: "5%" }]}>
            {data.name}
          </Text>
          <Text style={globalStyles.paragraph}>Calling...</Text>
        </View>
      </View>
      <View
        style={{
          ...globalStyles.absoluteBTN,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          bottom: 100,
          gap: 25,
        }}
      >
        {icons.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={item.action === "goBack" ? handleGoBack : null}
          >
            {item.icon}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
