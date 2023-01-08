import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { topfeeds } from '../assets'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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
                    <Text className="text-[#2f72a6]">Read More</Text>
                </TouchableOpacity>
            </View>

            <View className="px-3 mt-5">
                <Text>Category News</Text>
                <ScrollView horizontal={true} className="mt-4" showsHorizontalScrollIndicator={false}>
                    <View className="flex-row justify-around space-x-2">
                        <TouchableOpacity className="w-[80px] h-[70px] bg-[#e2e1e1af] rounded-lg justify-center px-3">
                            <FontAwesome5 name="hand-holding-medical" size={24} color="#2f72a6" />
                            <Text className="text-[#5d5e5e] top-1">Health</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="w-[80px] h-[70px] bg-[#e2e1e1af] rounded-lg justify-center px-3">
                            <MaterialIcons name="food-bank" size={24} color="#2f72a6" />
                            <Text className="text-[#5d5e5e] top-1">Food</Text>
                        </TouchableOpacity>
                        <View className="w-[80px] h-[70px] bg-[#e2e1e1af] rounded-lg justify-center px-3">
                            <Fontisto name="money-symbol" size={24} color="#2f72a6" />
                            <Text className="text-[#5d5e5e] top-1">Money</Text>
                        </View>
                        <View className="w-[80px] h-[70px] bg-[#e2e1e1af] rounded-lg justify-center px-3">
                            <MaterialIcons name="computer" size={24} color="#2f72a6" />
                            <Text className="text-[#5d5e5e] top-1">Tech</Text>
                        </View>
                        <View className="w-[80px] h-[70px] bg-[#e2e1e1af] rounded-lg justify-center px-3">
                            <Entypo name="folder-music" size={24} color="#2f72a6" />
                            <Text className="text-[#5d5e5e] top-1">Entertaiment</Text>
                        </View>
                        <View className="w-[80px] h-[70px] bg-[#e2e1e1af] rounded-lg justify-center px-3">
                            <MaterialCommunityIcons name="book-education" size={24} color="#2f72a6" />
                            <Text className="text-[#5d5e5e] top-1">Education</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default DisplayPost