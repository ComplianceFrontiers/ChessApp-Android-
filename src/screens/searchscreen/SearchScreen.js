import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useGlobalStyles from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchbar/SearchBar";
import {
  mentorsData,
  popularCoursesDetail,
  searchTabs,
} from "../../utils/mockData";
import SaveIcon from "../../assets/svg/saveIcon.svg";
import RatingIcon from "../../assets/svg/ratingIcon.svg";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../components/Theme/ThemeContext";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeTab, setActiveTab] = useState("Courses");

  const theme = useContext(ThemeContext);

  const [mentors, setMentors] = useState(mentorsData);

  const activeArray = activeTab === "Courses" ? popularCoursesDetail : mentors;

  const filterItems = (query) => {
    const filtered = activeArray.filter((item) => {
      if (item && (activeTab === "Courses" ? item.title : item.designation)) {
        return (activeTab === "Courses" ? item.title : item.designation)
          .toLowerCase()
          .includes(query.toLowerCase());
      }
      return false;
    });
    console.log("Filtered items:", filtered);
    setFilteredItems(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterItems(query);
  };

  const handleTab = (title) => {
    setActiveTab(title);
    setSearchQuery("");
    setFilteredItems([]);
  };

  const handleFollow = (id) => {
    setMentors((prevMentors) =>
      prevMentors.map((mentor) =>
        mentor.id === id ? { ...mentor, following: !mentor.following } : mentor
      )
    );
    console.log("follow", mentors.following);
  };
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();
  // JSX elements for courses tab
  const renderCoursesTab = (item) => (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("coursedetails", {
            data: {
              title: item.title,
              category: item.category,
              price: item.price,
              rating: item.rating,
            },
          })
        }
      >
        <View
          style={[
            styles.courses,
            { flexDirection: "row", alignItems: "center", gap: 10 },
          ]}
        >
          <Image source={item.image} style={styles.image} />
          <View style={{ gap: 10 }}>
            <Text style={globalStyles.redTextwithWeight}>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>{item.std}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "75%",
              }}
            >
              <Text style={globalStyles.violetText}>${item.price}/-</Text>
              <View style={styles.absoluteRating}>
                <RatingIcon />
                <Text>{item.rating}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.saveicon}>
              <SaveIcon />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

  // JSX elements for mentors tab
  const renderMentorsTab = (item) => (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "98%",
          marginBottom: 25,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Image source={item.image} style={styles.mentorImage} />

          <View style={{ gap: 10 }}>
            <Text style={globalStyles.headingFive}>{item.title}</Text>
            <Text style={{ color: theme.color }}>{item.designation}</Text>
          </View>
        </View>

        <View style={styles.mentors}>
          <TouchableOpacity onPress={() => handleFollow(item.id)}>
            <Text style={item.following ? styles.following : styles.follow}>
              {item.following ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  return (
    <ScrollView style={globalStyles.colorBG}>
      <View style={globalStyles.container}>
        <Header label="Search" filterIcon={true} />
        <View style={globalStyles.contents}>
          <SearchBar onChangeText={handleSearch} value={searchQuery} />
          <View style={styles.tabContainer}>
            {searchTabs.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleTab(item.title)}
              >
                <Text
                  style={
                    activeTab === item.title
                      ? styles.activeTab
                      : styles.inactiveTab
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.resultsContainer}>
            {filteredItems.length === 0 ? (
              <Text style={globalStyles.paragraph}>No items found</Text>
            ) : (
              filteredItems.map((item) => (
                <TouchableOpacity key={item.id}>
                  <View style={{ gap: 10 }}>
                    {activeTab === "Courses"
                      ? renderCoursesTab(item)
                      : renderMentorsTab(item)}
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 133,
  },
  courses: {
    elevation: 3,
    backgroundColor: "white",
    width: "100%",
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    gap: 20,
  },
  saveicon: {
    position: "absolute",
    right: 80,
    top: 5,
  },
  absoluteRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  resultsContainer: {
    width: "100%",
    marginVertical: "8%",
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: "5%",
  },
  activeTab: {
    backgroundColor: "#FC4F72",
    color: "white",
    paddingVertical: "4%",
    paddingHorizontal: "18%",
    borderRadius: 25,
  },
  inactiveTab: {
    backgroundColor: "#f1f1f1",
    color: "black",
    paddingVertical: "4%",
    paddingHorizontal: "18%",
    borderRadius: 25,
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
  mentorImage: {
    width: 80,
    height: 80,
  },
});

export default SearchScreen;
