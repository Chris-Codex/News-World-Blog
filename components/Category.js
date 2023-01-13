import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { category } from './navigations';


const Category = () => {
    return (
        <View className="px-3 mt-5">
            <Text className="text-[16px] font-bold">Category News</Text>
            <ScrollView horizontal={true} className="mt-4" showsHorizontalScrollIndicator={false}>
                <View className="flex-row justify-around space-x-2">
                    {category.map((cat, index) => {
                        const { icon, size, color, title } = cat
                        return (
                            <TouchableOpacity className="w-[80px] h-[70px] bg-[#e2e1e1af] rounded-lg justify-center px-3" key={index}>
                                <MaterialIcons name={icon} size={size} color={color} />
                                <Text className="text-[#5d5e5e] top-1">{title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default Category