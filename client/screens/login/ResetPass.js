import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 columns-1 items-center bg-white px-6">
      <View className="container mt-40">
        <Text className="text-4xl font-bold text-[#293477] mb-4 text-left">
          Forgot password?
        </Text>
        <Text className=" text-[#2685CA] text-2x1 mb-6 text-left ">
          Đừng lo lắng về việc đó xảy ra! Vui lòng nhập email liên kết với tài
          khoản của bạn.
        </Text>
      </View>
      <TextInput
        className="w-full h-12 border rounded-full border-gray-300  px-4 mb-4"
        placeholder="Enter your email"
      />
      <TouchableOpacity className="w-full h-12 bg-blue-600 rounded-lg justify-center items-center mb-6">
        <Text className="text-white text-lg">Gửi mã</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-4/5 p-2 items-center"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-gray-500 text-left">
          Nhớ mật khẩu?{" "}
          <Text className="text-blue-600 underline">Đăng nhập</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
