import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import DisplayPost from '../components/DisplayPost';


const HomeScreen = () => {
    const navigation = useNavigation()
    const [open, setOpen] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    const handleSearchclosure = () => {
        setOpen(!open)
    }

    return (
        <SafeAreaView className="relative flex-1">
            <View className="mt-4 w-full">
                <View className="flex-row justify-between items-center px-3">
                    <Entypo name="menu" size={24} color="black" />
                    <Text className="font-bold">RUMOUR <Text className="text-[#2f72a6] text-[16px] font-bold">Feeds</Text></Text>
                    <TouchableOpacity onPress={handleSearchclosure}>
                        {open ? <EvilIcons name="close" size={24} color="black" /> : <AntDesign name="search1" size={24} color="black" />
                        }
                    </TouchableOpacity>
                </View>
                <View className="px-3 mt-4">
                    <Text className="font-bold text-[14px]">Lets feed you with live News!</Text>
                </View>
                {open ? (
                    <View className="absolute top-14 flex-row bg-[#fffdfd] mx-4 h-[50px] w-[330px] mt-3 rounded-lg justify-between space-x-2 items-center">
                        <TextInput className="h-[50px] w-[330px] px-2 text-[#8f8c8c]" />
                        <MaterialCommunityIcons name="text-search" size={24} color="black" />
                    </View>) : null}
            </View>

            <DisplayPost open={open} />
        </SafeAreaView>
    )
}

export default HomeScreen