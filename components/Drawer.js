import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, selectLoginUser } from '../features/authSlice.js/authSlice';


const Drawer = ({ hamburgerSwitch }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const getCurrentUserID = useSelector(selectLoginUser)

    const logout = () => {
        if (logoutUser) {
            dispatch(logoutUser())
            navigation.navigate("Auth")
        }
    }


    return (
        <>
            {hamburgerSwitch ? (
                <View className="absolute w-[350px] top-[120px] px-4">
                    <View className="px-4 h-[300px] bg-white rounded-lg">
                        <Text className="font-bold mt-4">RUMOUR <Text className="text-[#3471ab] text-[16px] font-bold">Feeds</Text></Text>
                        <View className="mt-2">
                            <View className="flex-row mt-4 space-x-3 items-center">
                                <MaterialIcons name="home" size={24} color="#000" />
                                <View className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"></View>
                                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                    <Text className="relative font-bold text-[#000]">Home</Text>
                                </TouchableOpacity>
                            </View>
                            {getCurrentUserID.emailText === "chris@gmail.com" ? (<View className="flex-row mt-4 space-x-3 items-center">
                                <MaterialIcons name="post-add" size={24} color="#000" />
                                <View className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"></View>
                                <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
                                    <Text className="relative font-bold text-[#000]">Add Post</Text>
                                </TouchableOpacity>
                            </View>
                            ) : null
                            }
                            {getCurrentUserID.emailText === "chris@gmail.com" ? (
                                <View className="flex-row mt-4 space-x-3 items-center">
                                    <MaterialIcons name="preview" size={24} color="#000" />
                                    <View className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"></View>
                                    <TouchableOpacity onPress={() => navigation.navigate("DisplayPost")}>
                                        <Text className="relative font-bold text-[#000]">All Post</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null
                            }
                            <View className="flex-row mt-4 space-x-3 items-center">
                                <MaterialIcons name="calendar-view-day" size={24} color="#000" />
                                <View className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"></View>
                                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                    <Text className="relative font-bold text-[#000]">Profile</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="flex-row mt-4 space-x-3 items-center">
                                <MaterialIcons name="logout" size={24} color="#000" />
                                <View className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"></View>
                                <TouchableOpacity onPress={logout}>
                                    <Text className="relative font-bold text-[#000]">Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ) : null}
        </>
    )
}

export default Drawer