import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchbar/SearchBar";
import { homeTabCategories } from "../../utils/mockData";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] =
    useState(homeTabCategories);

  const globalStyles = useGlobalStyles();

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = homeTabCategories.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <View style={globalStyles.container}>
      <Header label="Categories" />
      <View style={globalStyles.contents}>
        <SearchBar onChangeText={handleSearch} value={searchQuery} />
        <View style={styles.categories}>
          {filteredCategories.map((item) => (
            <TouchableOpacity key={item.id}>
              <Image source={item.image} style={styles.image} />
              <Text style={[globalStyles.headingFive, { textAlign: "center" }]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 35,
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: "5%",
  },
  image: {
    width: 65,
    height: 75,
    borderRadius: 10,
  },
});

export default Categories;
