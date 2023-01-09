import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()

    return (
        <View className="flex-1 justify-center px-4">
            <View>
                <Text className="font-bold text-[25px]">Publish your</Text>
                <Text className="font-bold text-[25px]">Passion in your Own Way</Text>
                <Text className="font-bold text-[25px]">It's Free</Text>
            </View>

            <View className="mt-8 flex-row space-x-4">
                <TouchableOpacity onPress={() => navigation.navigate("Register")} className="w-[100px] h-[40px] bg-[#3471ab] rounded-full items-center justify-center">
                    <Text className="text-[#fff]">Register</Text>
                </TouchableOpacity>
                <View className="w-[100px] h-[40px] bg-[#fff] rounded-full items-center justify-center border-gray-700 border">
                    <Text className="text-[#000]">Login</Text>
                </View>
            </View>
        </View>
    )
}

export default Login