import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Onboarding3() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Splash");
  };
  return (
    <ImageBackground source={require("../../assets/bg.png")}>
      <View className="w-screen h-full flex justify-center align-items items-center">
        <Image
          className="w-[312] h-[250] mb-20"
          source={require("../../assets/chart.png")}
        />
        <Text className="w-full px-10 text-2xl font-bold text-[#519DD5]">
          Theo dõi chi tiêu hàng ngày
        </Text>
        <Text className="w-full px-10 text-xl py-2 text-[#519DD5] mb-5">
          Xem dữ liệu phân tích {"\n"}và thống kê chi tiêu{" "}
        </Text>
        <View className="flex flex-row w-screen justify-between px-10 pt-10 mb-0">
          <View className=" flex-row flex justify-center align-items items-center">
            <View className="w-[5] h-[5] bg-blue-300 mx-1"></View>

            <View className="w-[5] h-[5] bg-blue-300 mx-1"></View>
            <View className="w-[10] h-[5] bg-blue-900 mx-1"></View>
          </View>
          <TouchableOpacity onPress={handlePress}>
            <View className="bg-[#519DD5] rounded-2xl">
              <Text className="p-4 text-white text-xl">Bắt đầu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
