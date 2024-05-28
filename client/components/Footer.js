import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Footer = () => {
  const navigation = useNavigation();

  return (
    <StyledView className="w-full h-fit bg-white  flex-row justify-between items-center border-t rounded-full border-gray-200">
      <StyledTouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={24} color="gray" />
      </StyledTouchableOpacity>
      <StyledTouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigation.navigate("Notifications")}
      >
        <FontAwesome name="bell" size={24} color="gray" />
      </StyledTouchableOpacity>
      <StyledTouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigation.navigate("Add")}
      >
        <StyledView className="w-12 h-12 bg-blue-500 rounded-full justify-center items-center mt-[-24px]">
          <FontAwesome5 name="plus" size={24} color="white" />
        </StyledView>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigation.navigate("History")}
      >
        <FontAwesome name="history" size={24} color="gray" />
      </StyledTouchableOpacity>
      <StyledTouchableOpacity
        className="flex-1 items-center"
        onPress={() => navigation.navigate("Profile")}
      >
        <FontAwesome name="user" size={24} color="blue" />
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default Footer;
