import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useGlobalStyles, { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import AttachIcon from "../../assets/svg/attachIcon.svg";
import BackButton from "../../components/backbutton/BackButton";
import PhoneIcon from "../../components/phoneIcon/PhoneIcon";

const PersonalMessageScreen = () => {
  const route = useRoute();
  const { data } = route.params;
  const globalStyles = useGlobalStyles();

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollViewRef = useRef(null);

  const randomResponses = [
    "Hello! How can I help you?",
    "That's interesting!",
    "Can you tell me more?",
    "I'm here to assist you.",
    "Great to hear from you!",
  ];

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessages = [...messages, { text: inputMessage, sender: "user" }];
      setMessages(newMessages);
      setInputMessage("");

      const randomResponse =
        randomResponses[Math.floor(Math.random() * randomResponses.length)];
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: randomResponse, sender: "bot" },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const navigation = useNavigation();

  return (
    <View
      style={[
        globalStyles.colorBG,
        { flex: 1, paddingTop: "15%", paddingBottom: "5%" },
      ]}
    >
      <View style={styles.header}>
        <BackButton />
        <Text style={globalStyles.headingOne}>{data.name}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("callingscreen", {
              data: { image: data.image, name: data.name },
            })
          }
        >
          <PhoneIcon />
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.messagesContainer}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.sender === "user"
                ? styles.userMessage
                : styles.botMessage,
            ]}
          >
            <Text
              style={
                message.sender === "user"
                  ? styles.userMessage
                  : styles.messageText
              }
            >
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity>
          <AttachIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalMessageScreen;

const styles = StyleSheet.create({
  messagesContainer: {
    flexGrow: 1,
    padding: 10,
    justifyContent: "flex-end",
  },
  messageBubble: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: "75%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#f1f1f1",
    color: "black",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#FC4F72",
  },
  messageText: {
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    borderRadius: 20,
    alignSelf: "center",
    gap: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 30,
  },
  sendButton: {
    backgroundColor: "#FC4F72",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "600",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
});
