import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import useGlobalStyles from "../../styles/globalStyles";
import ThemeContext from "../../components/Theme/ThemeContext";


const ChatTab = () => {
  const [chat, setChat] = useState([
    { id: 1, sender: "bot", message: "Hi! How can I help you today?" },
  ]);

  const [options, setOptions] = useState([
    { id: 1, text: "Track my order" },
    { id: 2, text: "Report an issue" },
    { id: 3, text: "Talk to a representative" },
  ]);

  const theme = useContext(ThemeContext);
  const globalStyles = useGlobalStyles();

  const handleOptionPress = (option) => {
    // Add user message to chat
    const userMessage = { id: chat.length + 1, sender: "user", message: option };
    setChat((prevChat) => [...prevChat, userMessage]);

    // Determine bot response
    let botResponse = "";
    switch (option) {
      case "Track my order":
        botResponse = "Sure! Please provide your order ID.";
        break;
      case "Report an issue":
        botResponse = "Can you describe the issue you're facing?";
        break;
      case "Talk to a representative":
        botResponse = "Please wait while I connect you to a representative.";
        break;
      default:
        botResponse = "I didn't understand that.";
    }

    // Add bot response to chat
    const botMessage = { id: chat.length + 2, sender: "bot", message: botResponse };
    setChat((prevChat) => [...prevChat, botMessage]);
  };

  return (
    <View  style={{
      gap: 15,
      width: "90%",
      marginVertical: "7%",
      marginBottom: "30%",
    }}>
      <ScrollView style={{ flex: 1, marginVertical: 10 }}>
        {chat.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              msg.sender === "bot" ? styles.botMessage : styles.userMessage,
            ]}
          >
            <Text style={{ color: "white" }}>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionButton}
            onPress={() => handleOptionPress(option.text)}
          >
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChatTab;

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  botMessage: {
    backgroundColor: "#4CAF50",
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: "#0084FF",
    alignSelf: "flex-end",
  },
  optionsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
  },
  optionButton: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  optionText: {
    color: "#000",
    fontWeight: "600",
  },
});