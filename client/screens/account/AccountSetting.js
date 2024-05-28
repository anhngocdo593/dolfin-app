import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../../components/Footer";
import { useNavigation } from "@react-navigation/native";
const AccountSetting = (props) => {
  const navigation = useNavigation();
  return (
    <View className="container flex-1 ">
      <View className="container flex-auto items-center content-between ">
        <View className="container bg-[#7DB6DF] w-full h-1/3 border rounded-3xl items-center justify-center">
          <Image
            className="w-[100] h-[100] mt-10 rounded-full"
            source={require("../../assets/pf.png")}
          />
          <Text className="mt-2 w-full text-center text-black-400 text-base">
            Sy{props.firstName} {props.lastName}Huynh
          </Text>
        </View>
        <View className=" container w-full items-end -mt-16 mr-6">
          <TouchableOpacity onPress={() => navigation.navigate("AccountEdit")}>
            <View className="w-[60] h-[60] rounded-full mt-10 bg-[#519DD5] justify-center items-center">
              <Image
                className="w-[24] h-[24] "
                source={require("../../assets/image.png")}
              />
            </View>
          </TouchableOpacity>
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
            <Text className="text-gray-800">10000000</Text>
          </View>
        </View>

        <TouchableOpacity
          className="w-24 h-12 bg-blue-100 rounded-lg justify-center items-center mt-10"
          onPressIn={() => {
            navigation.navigate("Splash");
          }}
        >
          <Text className="text-blue-600 text-lg">Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default AccountSetting;
