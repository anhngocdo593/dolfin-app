import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FooterS from "../../components/FooterS";

const AccountEdit = (props) => {
  const navigation = useNavigation();
  const [lastName, setLastName] = useState(props.lastName);
  const [dob, setDob] = useState(props.dob);
  const [job, setJob] = useState(props.job);
  const [salary, setSalary] = useState(props.salary);

  return (
    <View className="flex-1">
      <View className="flex-auto items-center bg-gray-100">
        <View className="bg-[#7DB6DF] w-full h-1/3 border rounded-3xl items-center justify-center">
          <Image
            className="w-[100px] h-[100px] mt-10 rounded-full"
            source={require("../../assets/pf.png")}
          />
          <Text className="mt-2 w-full text-center text-black-400 text-base">
            Sy{props.firstName} {props.lastName}Huynh
          </Text>
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
            <Text className="text-gray-800">{props.lastName}Sy</Text>
          </View>

          <View className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
            <FontAwesome
              name="calendar"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">Năm sinh</Text>
            <Text className="text-gray-800">{props.DOB} 2003</Text>
          </View>

          <View className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
            <FontAwesome
              name="briefcase"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">Nghề nghiệp</Text>
            <Text className="text-gray-800">Sinh viên</Text>
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
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("AccountSetting")}
          className="w-24 h-12 bg-blue-100 rounded-lg justify-center items-center mt-10"
        >
          <Text className="text-blue-600 text-lg">Lưu</Text>
        </TouchableOpacity>
      </View>
      <FooterS />
    </View>
  );
};

export default AccountEdit;
