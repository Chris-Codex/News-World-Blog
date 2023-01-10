import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { navList } from './navigations';
import { useNavigation } from '@react-navigation/native';


const Drawer = ({ hamburgerSwitch }) => {
    const navigation = useNavigation();

    return (
        <>
            {hamburgerSwitch ? (
                <View className="absolute w-[350px] top-[120px] px-4">
                    <View className="px-4 h-[300px] bg-white rounded-lg">
                        <Text className="font-bold mt-4">RUMOUR <Text className="text-[#3471ab] text-[16px] font-bold">Feeds</Text></Text>
                        <View className="mt-2">
                            {navList.map((list, index) => {
                                return (
                                    <View className="flex-row mt-4 space-x-3 items-center" key={index}>
                                        <MaterialIcons name={list.iconName} size={list.size} color={list.color} />
                                        <View className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"></View>
                                        <TouchableOpacity onPress={() => navigation.navigate(`${list.name}`)}>
                                            <Text className="relative font-bold text-[#000]">{list.ttile}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
            ) : null}
        </>
    )
}

export default Drawer