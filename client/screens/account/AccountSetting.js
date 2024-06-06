import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FooterS from "../../components/FooterS";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../userSlice";

const AccountSetting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);
  const userError = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUser());
    console.log(user.data);
  }, [dispatch]);

  if (userStatus === "loading") {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (userStatus === "failed") {
    return <Text>Error: {userError.message}</Text>;
  }

  return (
    <View className="container flex-1 ">
      <View className="container flex-auto items-center content-between ">
        <View className="container bg-[#7DB6DF] w-full h-1/3 rounded-3xl items-center justify-center">
          <Image
            className="w-[100] h-[100] mt-10 rounded-full"
            source={{ uri: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' }}
          />
          <Text className="mt-2 w-full text-center text-white font-bold text-2xl">
            {user.name}
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
            <Text className="text-gray-800">{user.name}</Text>
          </View>

          <View className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
            <FontAwesome
              name="calendar"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">Năm sinh</Text>
            <Text className="text-gray-800">{user.year} </Text>
          </View>

          <View className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
            <FontAwesome
              name="briefcase"
              size={24}
              color="#007bff"
              className="mr-2"
            />
            <Text className="flex-1 text-gray-600 ml-1">Nghề nghiệp</Text>
            <Text className="text-gray-800">{user.job}</Text>
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
            <Text className="text-gray-800">{user.income}</Text>
          </View>
        </View>

        <TouchableOpacity
          className="w-24 h-12 bg-blue-100 rounded-lg justify-center items-center mt-10"
          onPressIn={() => {
            navigation.navigate("Splash");
          }}
        >
          <Text className="text-red-600 text-lg">Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <FooterS selectedPage="AccountSetting" />
    </View>
  );
};

export default AccountSetting;
