import { View, Text, Image, SafeAreaView, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import userIcon from "../assets/user.jpeg"
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <SafeAreaView className="flex-1">
            <View className="relatives">
                <View className="flex-row justify-between items-center px-3">
                    <Entypo name="menu" size={24} color="black" />
                    <Image source={userIcon} className="h-[50px] w-[50px] rounded-full" alt="name" />
                </View>
                <View className="px-3">
                    <Text className="font-bold text-[16px]">Welcome back Chris!</Text>
                </View>
                <View className="flex-row bg-[#fffdfd] mx-4 h-[50px] w-[330px] mt-3 rounded-lg justify-between space-x-2 items-center">
                    <TextInput className="h-[50px] w-[330px] px-2 text-[#8f8c8c]" />
                    <MaterialCommunityIcons name="text-search" size={24} color="black" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen