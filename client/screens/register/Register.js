import React, { useState, useEffect} from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import homeJson from "../../assets/dolfinjs.json";

export default function Register ()  {
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePress = () => {
    console.log("Button pressed");
    navigation.navigate('Login');
  };


  
  return (
      <View className='flex-1 items-center pb-10 pt-5 bg-white'>
        <Image className="w-[400] h-[300] mt-10" source={require('../../assets/rg.png')} />
        {/* <LottieView 
          className="mt-20"
          source={homeJson}
          autoPlay
          loop
          style={{width: 250, height: 250}}
        />     */}
        <Text className='font-bold text-3xl text-sky-400 m-8'>Đăng ký tài khoản của bạn</Text>
      
        <View className='mb-2'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5  py-3 text-left'
          placeholder="Nhập tên người dùng"
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View className='mb-2'>
         <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left'
          placeholder="Nhập địa chỉ Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View className='mb-2'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left'
          placeholder="Nhập mật khẩu"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5  py-3 text-left'
          placeholder="Xác nhận lại mật khẩu"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        

        <View className = 'w-[280] h-[80]'>
            <TouchableOpacity className='py-3 px-8 mt-6 bg-[#519DD5] rounded-md  flex-1 items-center' onPress={handlePress}>
                <Text className='text-xl text-white'>Đăng ký</Text>
            </TouchableOpacity>
        </View>

        <View className="pt-2 flex-row justify-center">
          <Text> Bạn đã có tài khoản ? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}> 
            <Text className=' text-[#519DD5]' >Đăng nhập</Text> 
          </TouchableOpacity>
        </View>
      </View>
  );
};