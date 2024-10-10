import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import { signInData } from "../../utils/mockData";
import CommonButton from "../../components/commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";
import Logo from "../../components/logo/Logo";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  const theme = useContext(ThemeContext);

  return (
    <View style={globalStyles.container}>
      <View style={styles.contents}>
        <Logo />
        <View style={styles.childContents}>
          <Text style={globalStyles.headingOne}>Let's Get In</Text>
          <View style={{ paddingVertical: "8%", gap: 20 }}>
            {signInData.map((item) => (
              <TouchableOpacity style={styles.signinBTNS} key={item.id}>
                {item.icon}
                <Text style={{ color: theme.color }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={[
              globalStyles.headingFour,
              { textAlign: "center", marginBottom: "10%" },
            ]}
          >
            (Or)
          </Text>
          <CommonButton
            label="Sign In with Your Account"
            onPress={() => navigation.navigate("signin")}
          />
          <View style={[styles.register, globalStyles.absoluteContents]}>
            <Text style={{ textAlign: "center", color: theme.color }}>
              Don’t have an Account?{" "}
            </Text>
            <TouchableOpacity>
              <Text style={[globalStyles.yellowText, { fontWeight: "500" }]}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
  },
  childContents: {
    paddingTop: "20%",
    height: "80%",
  },
  signinBTNS: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "lightgrey",
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "100%",
  },
  register: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default SignUpScreen;
