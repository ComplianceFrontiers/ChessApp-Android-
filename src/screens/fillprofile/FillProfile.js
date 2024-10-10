import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import ProfilIMG from "../../assets/svg/profileIMG.svg";
import EditProfile from "../../assets/svg/editProfileIcon.svg";
import { fillProfileData } from "../../utils/mockData";
import { TextInput } from "react-native-paper";
import CustomDropdown from "../../components/customdropdown/CustomDropdown";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const FillProfile = () => {
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const globalStyles = useGlobalStyles();

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(false);
    setDateOfBirth(currentDate);
  };

  const handleInputFocus = (fieldId) => {
    if (fieldId === 2) {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Header label="Fill Your Profile" />
      <View style={styles.contents}>
        <View style={styles.profileContainer}>
          <ProfilIMG />
          <TouchableOpacity style={styles.editProfile}>
            <EditProfile />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputFields}>
        {fillProfileData.map((item) => (
          <View key={item.id}>
            <TextInput
              placeholder={item.placeholder}
              style={globalStyles.input}
              left={<TextInput.Icon icon={item.icon} />}
              underlineColor="transparent"
              theme={{
                colors: {
                  primary: "transparent",
                  underlineColor: "transparent",
                },
              }}
              onFocus={() => handleInputFocus(item.id)}
              value={item.id === 2 ? dateOfBirth.toDateString() : ""}
            />
            {showDatePicker && item.id === 2 && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateOfBirth}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
        ))}
        <CustomDropdown />
        <View style={styles.button}>
          <CommonButton
            label="Continue"
            onPress={() => navigation.navigate("createpin")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    paddingTop: "10%",
  },
  editProfile: {
    position: "absolute",
    bottom: 0,
    right: 10,
  },
  inputFields: {
    width: "90%",
    gap: 20,
    marginTop: "10%",
  },
  button: {
    marginTop: "10%",
  },
});

export default FillProfile;
