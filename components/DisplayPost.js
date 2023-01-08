import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { topfeeds } from '../assets'

const DisplayPost = ({ open }) => {
    return (
        <ScrollView className={!open ? "absolute top-36" : "absolute top-52"}>
            <View className="relative px-3">
                <Image source={topfeeds} className="w-[362px] h-[200px] rounded-lg" alt="name" />
            </View>
            <View className="absolute flex-row justify-between items-center px-8 top-36 w-full">
                <View>
                    <Text className="font-bold text-[16px] text-[#fff]">Latest news for you</Text>
                    <Text className="text-[12px] top-1 text-[#fff]">The News . 2 hours  ago</Text>
                </View>
                <TouchableOpacity className="w-[90px] h-[30px] bg-slate-100 items-center justify-center  rounded-lg">
                    <Text className="text-[#999]">Read More</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DisplayPost