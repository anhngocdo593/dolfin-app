import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../components/ReturnButton";
import TextBox from "../../components/TextBox";
export default function AddScreen() {
  const [notes, setNotes] = useState("");
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <ImageBackground source={require("../../assets/bg.png")}>
      <View style={styles.ReturnContent}>
        <ReturnButton onPress={handlePress} />
      </View>
      <View style={styles.content}>
        <TextBox value={notes} onChangeText={setNotes} />
        <Text style={styles.text}>Your Notes:</Text>
        <Text style={styles.notesText}>{notes}</Text>
      </View>
      <View className="w-screen h-full flex align-items items-left"></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ReturnContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 20,
  },
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  notesText: {
    fontSize: 18,
    color: "#333",
  },
});
