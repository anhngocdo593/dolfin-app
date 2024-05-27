import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const AccountEdit = (props) => {
  const navigation = useNavigation();
  const [lastName, setLastName] = useState(props.lastName);
  const [dob, setDob] = useState(props.dob);
  const [job, setJob] = useState(props.job);
  const [salary, setSalary] = useState(props.salary);

  return (
    <StyledView className="flex-auto items-center bg-gray-100">
      <StyledView className="bg-[#7DB6DF] w-full h-1/3 border rounded-3xl items-center justify-center">
        <StyledImage
          className="w-[100px] h-[100px] mt-10 rounded-full"
          source={require("../../assets/pf.png")}
        />
        <StyledText className="mt-2 w-full text-center text-black-400 text-base">
          {props.firstName} {props.lastName}
        </StyledText>
      </StyledView>

      <StyledView className="w-full bg-white rounded-lg shadow-lg p-4 mb-6 mt-8">
        <StyledView className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
          <FontAwesome name="user" size={24} color="#007bff" className="mr-2" />
          <StyledText className="flex-1 text-gray-600 ml-1">Tên</StyledText>
          <StyledTextInput
            className="flex-1 text-gray-800"
            placeholder="Sy"
            value={lastName}
            onChangeText={setLastName}
          />
        </StyledView>

        <StyledView className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
          <FontAwesome
            name="calendar"
            size={24}
            color="#007bff"
            className="mr-2"
          />
          <StyledText className="flex-1 text-gray-600 ml-1">
            Năm sinh
          </StyledText>
          <StyledTextInput
            className="flex-1 text-gray-800"
            placeholder="Nhập năm sinh"
            value={dob}
            onChangeText={setDob}
          />
        </StyledView>

        <StyledView className="flex-row items-center border-b border-gray-200 pb-2 mb-2">
          <FontAwesome
            name="briefcase"
            size={24}
            color="#007bff"
            className="mr-2"
          />
          <StyledText className="flex-1 text-gray-600 ml-1">
            Nghề nghiệp
          </StyledText>
          <StyledTextInput
            className="flex-1 text-gray-800"
            placeholder="Nhập nghề nghiệp"
            value={job}
            onChangeText={setJob}
          />
        </StyledView>

        <StyledView className="flex-row items-center pb-2">
          <FontAwesome
            name="money"
            size={24}
            color="#007bff"
            className="mr-2"
          />
          <StyledText className="flex-1 text-gray-600 ml-1">
            Thu nhập hàng tháng
          </StyledText>
          <StyledTextInput
            className="flex-1 text-gray-800"
            placeholder="Nhập thu nhập hàng tháng"
            value={salary}
            onChangeText={setSalary}
            keyboardType="numeric"
          />
        </StyledView>
      </StyledView>

      <StyledTouchableOpacity
        onPress={() => navigation.navigate("AccountSetting")}
        className="w-24 h-12 bg-blue-100 rounded-lg justify-center items-center mt-10"
      >
        <StyledText className="text-blue-600 text-lg">Lưu</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default AccountEdit;
