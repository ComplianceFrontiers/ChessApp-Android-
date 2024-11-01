import { useContext } from "react";
import { StyleSheet } from "react-native";
import ThemeContext from "../components/Theme/ThemeContext";

const useGlobalStyles = () => {
  const theme = useContext(ThemeContext);

  const generateStyles = () => {
    return StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "20%",
        backgroundColor: theme.background,
      },
      contents: {
        paddingTop: "10%",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
      },
      colorBG: {
        backgroundColor: theme.background,
      },
      absoluteBTN: {
        position: "absolute",
        bottom: 20,
        width: "95%",
        alignSelf: "center",
      },
      mainLogo: {
        flexDirection: "row",
        alignItems: "flex-end",
      },
      scrollView: {
        flex: 1,
        // alignItems: "center",
        backgroundColor: theme.background,
      },
      miniButton: {
        backgroundColor: "#FC4F72",
        color: "white",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 10,
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 10,
      },
      headingOne: {
        fontSize: 26,
        fontWeight: "700",
        color: theme.color,
      },
      headingFour: {
        fontSize: 20,
        lineHeight: 34,
        fontWeight: "700",
        color: theme.color,
      },
      headingFive: {
        fontSize: 16,
        lineHeight: 34,
        fontWeight: "700",
        color: theme.color,
      },
      paragraph: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 25,
        marginBottom:30,
        width: "100%",
        color: theme.color,
      },
      absoluteContents: {
        position: "absolute",
        bottom: 0,
      },
      yellowText: {
        color: "#FBBB00",
        fontWeight: "500",
      },
      yellowTextWithUnderline: {
        color: "#FBBB00",
        textDecorationLine: "underline",
      },
      violetText: {
        color: "#46007C",
        fontWeight: "600",
        fontSize: 16,
      },
      violetTextWithUnderline: {
        color: "#46007C",
        textDecorationLine: "underline",
      },
      redText: {
        color: "#FC4F72",
      },
      redTextwithWeight: {
        color: "#FC4F72",
        fontWeight: "600",
      },
      input: {
        // width:"100%",
        borderWidth: 0.5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: "grey",
        // marginBottom: "5%",
        backgroundColor: "white",
      },
    });
  };

  return generateStyles();
};

export default useGlobalStyles;
