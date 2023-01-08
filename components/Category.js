import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Category = () => {
    return (
        <View className="px-3 mt-5">
            <Text className="text-[16px] font-bold">Category News</Text>
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
    )
}

export default Category