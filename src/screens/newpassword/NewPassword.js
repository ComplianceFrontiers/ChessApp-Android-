import React, { useState } from "react";
import { View, Text } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { TextInput } from "react-native-paper";
import { newPasswordData } from "../../utils/mockData";
import CommonButton from "../../components/commonbutton/CommonButton";
import PasswordUpdatedPopup from "../passwordupdated/PasswordUpdatedPopup";
import { useNavigation } from "@react-navigation/native";

const NewPassword = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleContinuePress = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
      navigation.navigate("tabscreens");
    }, 2000); // Adjust the timeout duration as needed
  };

  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Header label="Create New Password" />
      <View style={globalStyles.contents}>
        <Text style={globalStyles.paragraph}>
          Set the new password for your account so you can login and access all
          the features.
        </Text>
        <View style={{ width: "100%", marginTop: "15%", gap: 30 }}>
          {newPasswordData.map((item) => (
            <TextInput
              placeholder={item.placeholder}
              key={item.id}
              style={globalStyles.input}
              underlineColor="transparent"
              theme={{
                colors: {
                  primary: "transparent",
                  underlineColor: "transparent",
                },
              }}
              secureTextEntry={item.secure}
            />
          ))}
        </View>
      </View>
      <View
        style={[globalStyles.absoluteContents, { width: "90%", bottom: 30 }]}
      >
        <CommonButton label="Continue" onPress={handleContinuePress} />
      </View>
      <PasswordUpdatedPopup
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
};

export default NewPassword;
