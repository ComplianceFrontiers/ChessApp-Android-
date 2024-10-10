import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import CommonButton from "../../components/commonbutton/CommonButton";

const CertificateDownload = () => {
  const globalStyles = useGlobalStyles();
  return (
    <>
      <View style={globalStyles.container}>
        <Header label="Certificate" />
        <View style={globalStyles.contents}>
          <Image
            source={require("../../assets/images/mainCertificateIMG.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={globalStyles.absoluteBTN}>
        <CommonButton label="Download Certificate" />
      </View>
    </>
  );
};

export default CertificateDownload;

const styles = StyleSheet.create({
  image: {
    width: 353,
    height: 549.11,
  },
});
