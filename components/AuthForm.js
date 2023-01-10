import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { news } from '../assets';

const AuthForm = () => {
    const navigation = useNavigation()
    const [switchForm, setSwitchForm] = useState(false)

    const handleFormSwitch = () => {
        setSwitchForm(!switchForm)
    }

    return (
        <View className="flex-1 justify-center px-4 py-6">
            <View className="items-center">
                <View className="w-[120px] h-[120px] rounded-full bg-[#c7e7e0fe] items-center justify-center border-8">
                    <Image source={news} className='w-[115px] h-[115px] rounded-full' />
                </View>
                <Text className="mt-4 font-bold text-[20px]">{switchForm ? "Sign In" : "Create Account"}</Text>
            </View>

            {switchForm ? (
                <View className="px-4 mt-8">
                    <View className="w-full h-[50px] bg-[#f4f2f2]">
                        <TextInput placeholder='Enter your email' className='w-full h-[50px] px-2' />
                    </View>
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput placeholder='Password' className='w-full h-[50px] px-2' />
                    </View>
                    <TouchableOpacity className="left-52 mt-2">
                        <Text className="text-red-500 font-bold">Forgot Password?</Text>
                    </TouchableOpacity >
                    <TouchableOpacity className="w-full h-[50px] bg-[#3471ab] mt-3 items-center justify-center">
                        <Text className="text-[#fff] font-bold text-[16px]">Sign In</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={handleFormSwitch} className="flex-row items-center justify-center mt-3">
                        <Text>Don't have an account yet? <Text className="text-[#3471ab] font-bold">Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View className="px-4 mt-8">
                    <View className="w-full h-[50px] bg-[#f4f2f2]">
                        <TextInput placeholder='Enter your fullname' className='w-full h-[50px] px-2' />
                    </View>
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput placeholder='Enter your email' className='w-full h-[50px] px-2' />
                    </View>
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput placeholder='Password' className='w-full h-[50px] px-2' />
                    </View>
                    <TouchableOpacity className="w-full h-[50px] bg-[#3471ab] mt-3 items-center justify-center">
                        <Text className="text-[#fff] font-bold text-[16px]">Sign Up</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={handleFormSwitch} className="flex-row items-center justify-center mt-3">
                        <Text>Are you a Registered User? <Text className="text-[#3471ab] font-bold">Sign In</Text></Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default AuthForm