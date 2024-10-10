import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";

const TermsNConditions = () => {
  const globalStyles = useGlobalStyles();
  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Terms & Conditions" />
        <View style={globalStyles.contents}>
          <Text style={[globalStyles.headingFive, { alignSelf: "flex-start" }]}>
            Condition & Attending
          </Text>
          <Text style={[globalStyles.paragraph, { marginVertical: "5%" }]}>
            At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe,
            stare movere, quadratum rotundum. At certe gravius. Nullus est
            igitur cuiusquam dies natalis. Paulum, cum regem Persem captum
            adduceret, eodem flumine invectio?
          </Text>
          <Text style={globalStyles.paragraph}>
            Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.
            {"\n"}
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum
            etiam praepotentem, ut M. Est autem officium, quod ita factum est,
            ut eius facti probabilis ratio reddi possit.
          </Text>
          <Text
            style={[
              globalStyles.headingFive,
              { alignSelf: "flex-start", marginTop: "8%" },
            ]}
          >
            Condition & Attending
          </Text>
          <Text style={[globalStyles.paragraph, { marginVertical: "5%" }]}>
            Ut proverbia non nulla veriora sint quam vestra dogmata. Tamen
            aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si
            ista mala sunt, placet. Omnes enim iucundum motum, quo sensus
            hilaretur. Cum id fugiunt, re eadem defendunt, quae Peripatetici,
            verba. Quibusnam praeteritis? Portenta haec ess
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsNConditions;

const styles = StyleSheet.create({});
