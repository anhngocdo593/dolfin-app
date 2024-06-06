import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FooterS from "../../components/FooterS";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../userSlice"; // Import the updateUser thunk

const AccountEdit = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");

  const handleSave = () => {
    const userData = {
      name: lastName,
      job: job,
      income: salary,
      year: dob,
    };
    dispatch(updateUser(userData))
      .unwrap()
      .then(() => {
        Alert.alert("Success", "User information updated successfully");

        navigation.navigate("AccountSetting");
      })
      .catch((error) => {
        Alert.alert(
          "Error",
          error.message || "Failed to update user information"
        );
      });
  };

  return (
    <View className="flex-1">
      <View className="flex-auto items-center bg-gray-100">
        <View className="bg-[#7DB6DF] w-full h-1/3 border rounded-3xl items-center justify-center">
          <Image
            className="w-[100px] h-[100px] mt-10 rounded-full"
            source={{
              uri: "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png",
            }}
          />
          <Text className="mt-2 w-full text-center text-white font-bold text-2xl"></Text>
        </View>

        <View className="w-full bg-white rounded-lg shadow-lg p-4 mb-6 mt-8">
          <View className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
            <FontAwesome
              name="user"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">Tên</Text>
            <TextInput
              className="flex-1 text-gray-800"
              placeholder="Nhập tên"
              value={lastName}
              onChangeText={setLastName}
              returnKeyType="done"
            />
          </View>

          <View className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
            <FontAwesome
              name="calendar"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">Năm sinh</Text>
            <TextInput
              className="flex-1 text-gray-800"
              placeholder="Nhập năm sinh"
              value={dob}
              onChangeText={setDob}
              returnKeyType="done"
            />
          </View>

          <View className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
            <FontAwesome
              name="briefcase"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">Nghề nghiệp</Text>
            <TextInput
              className="flex-1 text-gray-800"
              placeholder="Nhập nghề nghiệp"
              value={job}
              onChangeText={setJob}
              returnKeyType="done"
            />
          </View>

          <View className="flex-row items-center pb-2">
            <FontAwesome
              name="money"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">
              Thu nhập hàng tháng
            </Text>
            <TextInput
              className="flex-1 text-gray-800"
              placeholder="Nhập thu nhập hàng tháng"
              value={salary}
              onChangeText={setSalary}
              keyboardType="numeric"
              returnKeyType="done"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSave}
          className="w-24 h-12 bg-blue-100 rounded-lg justify-center items-center mt-10"
        >
          <Text className="text-green-600 text-lg">Lưu</Text>
        </TouchableOpacity>
      </View>
      <FooterS selectedPage="AccountSetting" />
    </View>
  );
};

export default AccountEdit;
