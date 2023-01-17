import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Drawer from '../../components/Drawer';
import Header from '../../components/Header';
import { selectLoginUser } from '../../features/authSlice.js/authSlice';
import AdminPost from '../../components/AdminPost';



const DisplayPostScreen = () => {
    const navigation = useNavigation()
    const user = useSelector(selectLoginUser)
    const [open, setOpen] = useState(false)
    const [hamburgerSwitch, setHamburgerSwitch] = useState(false)

    console.log("LOGIN", user)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    const handleSearchclosure = () => {
        setOpen(!open)
    }

    const handleHmaburger = () => {
        setHamburgerSwitch(!hamburgerSwitch)
    }

    return (
        <SafeAreaView className="relative">
            <View className="relative mt-6 w-full">
                <Header open={open} handleHmaburger={handleHmaburger} hamburgerSwitch={hamburgerSwitch} handleSearchclosure={handleSearchclosure} />
                <View className="px-3 mt-4">
                    <Text className="font-bold text-[14px]">Welcome back, <Text className="text-red-600">{user?.fullname}</Text></Text>
                </View>
                {open ? (
                    <View className="absolute top-14 flex-row bg-[#fffdfd] mx-4 h-[50px] w-[330px] mt-3 rounded-lg justify-between space-x-2 items-center">
                        <TextInput className="h-[50px] w-[330px] px-2 text-[#8f8c8c]" />
                        <MaterialCommunityIcons name="text-search" size={24} color="black" />
                    </View>) :
                    null
                }
            </View>

            <Drawer hamburgerSwitch={hamburgerSwitch} />

            <AdminPost open={open} />
        </SafeAreaView>
    )
}


export default DisplayPostScreen