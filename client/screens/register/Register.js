import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../authSlice"; // Adjust the import path accordingly

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { loading, user, error } = useSelector((state) => state.auth);

  const handlePress = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(register({ username, email, password }));
  };

  // Show success message when user is registered successfully
  if (user) {
    Alert.alert("Success", "Registration successful!", [
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);
  }

  return (
    <View className="flex-1 items-center pb-10 pt-5 bg-white">
      <Image
        className="w-[400] h-[300] mt-10"
        source={require("../../assets/rg.png")}
      />
      <Text className="font-bold text-3xl text-sky-400 m-8">
        Đăng ký tài khoản của bạn
      </Text>

      <View className="mb-2">
        <TextInput
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left"
          placeholder="Nhập tên người dùng"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View className="mb-2">
        <TextInput
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left"
          placeholder="Nhập địa chỉ Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="mb-2">
        <TextInput
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left"
          placeholder="Nhập mật khẩu"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <TextInput
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left"
          placeholder="Xác nhận lại mật khẩu"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View className="w-[280] h-[80]">
        <TouchableOpacity
          className="py-3 px-8 mt-6 bg-[#519DD5] rounded-md flex-1 items-center"
          onPress={handlePress}
        >
          <Text className="text-xl text-white">Đăng ký</Text>
        </TouchableOpacity>
      </View>

      <View className="pt-2 flex-row justify-center">
        <Text> Bạn đã có tài khoản ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-[#519DD5]">Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
}
