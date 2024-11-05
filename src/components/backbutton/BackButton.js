import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import useGlobalStyles from "../../styles/globalStyles";
import ThemeContext from "../Theme/ThemeContext";

const BackButton = ({ level, onPress, color }) => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const theme = useContext(ThemeContext);

  const handleOnPress = () => {
    console.log("level", level);
    if (level === "1") {
      navigation.navigate("notifcations"); // Navigate to notifications screen
    } else {
      navigation.goBack(); // Go back for other levels
    }
  };

  const svgXml = `
    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M25 9.99978C25 10.7581 24.4076 11.3791 23.6842 11.3791H4.474L10.4271 17.6548C10.954 18.2072 10.954 19.0693 10.4271 19.62C10.1971 19.8628 9.86817 20 9.50567 20C9.17671 20 8.81585 19.8628 8.58591 19.5865L0.394003 10.9657C-0.131334 10.4132 -0.131334 9.55115 0.394003 9.0339L8.58591 0.413026C9.11125 -0.137675 9.93363 -0.137675 10.4606 0.413026C10.986 0.965452 10.986 1.82754 10.4606 2.37824L4.474 8.62044H23.6842C24.4076 8.62044 25 9.24149 25 9.99978Z" fill="${color ? color : theme.whiteOrBlack}"/>
    </svg>
  `;

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View>
        <SvgXml xml={svgXml} width="25" height="20" />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
