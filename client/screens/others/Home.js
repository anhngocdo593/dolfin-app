import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Add");
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-700">Styling just works!</Text>
      <View className="flex flex-row w-screen justify-between px-10 pt-10 mb-0">
        <View className="flex flex-row  justify-center align-items items-center">
          <View className="w-[10] h-[5] bg-blue-900 mx-1"></View>
          <View className="w-[5] h-[5] bg-blue-300 mx-1"></View>
          <View className="w-[5] h-[5] bg-blue-300 mx-1"></View>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <View className="bg-[#519DD5] rounded-2xl">
            <Text className="p-4 text-white text-xl">Thêm</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
