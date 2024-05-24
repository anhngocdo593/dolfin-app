import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Onboarding1()
{
    const navigation = useNavigation();
    const handlePress = () =>
    {
        navigation.navigate('O2');
    }
    return(
        <ImageBackground
            source={require('../../assets/bg.png')}
        >
        <View className="w-screen h-full flex justify-center align-items items-center">
            <Image className="w-[200] h-[250] mb-20" source={require('../../assets/fish.png')} />
            <Text className="w-full px-10 text-2xl font-bold text-[#519DD5]">Thu chi thông minh,{'\n'}ví tiền rủng rỉnh</Text>
            <Text className="w-full px-10 text-xl py-2 text-[#519DD5] mb-5">Thiết lập mục tiêu tiết kiệm,{'\n'}quản lý các khoản vay</Text>
            <View className="flex flex-row w-screen justify-between px-10 pt-10 mb-0">
                <View className="flex flex-row flex justify-center align-items items-center">
                    <View className="w-[10] h-[5] bg-blue-900 mx-1"></View>
                    <View className="w-[5] h-[5] bg-blue-300 mx-1"></View>
                    <View className="w-[5] h-[5] bg-blue-300 mx-1"></View>
                </View>
                <TouchableOpacity onPress={handlePress}><View className="bg-[#519DD5] rounded-2xl"><Text className="p-4 text-white text-xl">Tiếp theo</Text></View></TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    );
}