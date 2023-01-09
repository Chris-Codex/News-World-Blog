import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { topfeeds } from '../assets'
import Category from './Category';
import Post from './Post';
import { useNavigation } from '@react-navigation/native';


const DisplayPost = ({ open }) => {

    const navigation = useNavigation()

    return (
        <View className={!open ? "mt-5 mb-[90px]" : "absolute mt-52"}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View className="px-3">
                        <Image source={topfeeds} className="w-[362px] h-[200px] rounded-lg" alt="name" />
                    </View>
                    <View className="absolute inset-0 bg-gray-900 opacity-50 w-[363px] ml-3 rounded-lg"></View>
                    <View className="absolute flex-row justify-between items-center px-8 top-36 w-full">
                        <View>
                            <Text className="font-bold text-[16px] text-[#fff]">Latest news for you</Text>
                            <Text className="text-[12px] top-1 text-[#fff]">The News . 2 hours  ago</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("SinglePost")} className="w-[90px] h-[30px] bg-slate-100 items-center justify-center  rounded-lg">
                            <Text className="text-[#2f72a6]">Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* CATEGORY */}
                <Category />

                {/* POST */}
                <Post />
            </ScrollView>
        </View>

    )
}

export default DisplayPost