import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import homeJson from "../../assets/dolfinjs.json";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    navigation.navigate("O1");
  };

  return (
    <ImageBackground source={require("../../assets/bg-fish.png")}>
      <View className="w-screen h-full flex justify-center align-items items-center">
        <View className="w-4/5 mb-2 pt-20 mt-20">
          <TextInput
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 text-left py-2 pl-3"
            placeholder="Nhập địa chỉ Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            required
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View className="w-4/5">
          <TextInput
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block text-left py-2 pl-3"
            placeholder="Nhập mật khẩu"
            secureTextEntry={!passwordVisible}
            autoCapitalize="none"
            autoCorrect={false}
            required
            value={password}
            onChangeText={setPassword}
          ></TextInput>
        </View>
        <TouchableOpacity
          className="w-4/5 p-2"
          onPress={() => navigation.navigate("ResetPass")}
        >
          <Text className="text-right text-[#519DD5]">Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3 px-8 mt-6 bg-[#519DD5] rounded-md w-[280] flex items-center"
          onPress={handleLogin}
        >
          <Text className="text-xl text-white">Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="pt-2">
            Bạn chưa có tài khoản ?{" "}
            <Text className="text-[#519DD5]">Đăng ký</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
