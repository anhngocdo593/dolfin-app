import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import homeJson from "../../assets/dolfinjs.json";
export default function Splash() {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log("Button pressed");
    navigation.navigate("Login");
  };
  const handlePress2 = () => {
    console.log("Button pressed");
    navigation.navigate("Register");
  };
  return (
    <View className="flex-1 items-center py-20 bg-white">
      <LottieView
        className="mt-20"
        source={homeJson}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
      <Text className="font-bold text-6xl m-10 text-yellow-500">DOLFIN</Text>
      {/* <Image className="w-[400] h-[500] mb-20" source={require('../../assets/fish.png')} /> */}
      <Text className="text-xl text-center text-blue-700 font-medium mb-5">
        Thu chi thông minh - Ví tiền rủng rỉnh
      </Text>
      <View className="container items-center justify-center">
        <TouchableOpacity
          onPress={handlePress}
          className="py-4 px-8  bg-[#519DD5] rounded-3xl w-[200]  flex items-center"
        >
          <Text className="text-xl text-white">Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress2}
          className="py-4 px-8 m-4 bg-[#519DD5] rounded-3xl w-[200] flex items-center"
        >
          <Text className="text-xl text-white">Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
