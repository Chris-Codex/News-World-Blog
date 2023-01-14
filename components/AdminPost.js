import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const AdminPost = ({ open }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} className={open ? "mt-[80px] mb-[90px] px-4 flex-1" : "mt-[20px] mb-[90px] px-4 flex-1"}>
            <View className="w-[360px] h-auto bg-[#e9ecf3] mb-3 rounded-lg shadow-md">
                <View className="flex-row justify-between px-2 py-4">
                    <Text className="text-[#999] text-[16px]">Entertainment</Text>
                    <View className="flex-row space-x-4">
                        <Text className="text-[#999] text-[13px]">Date: 1/14/2022</Text>
                        <Entypo name="dots-three-vertical" size={13} color="#999" />
                    </View>
                </View>
                <Text className="px-2 text-[18px] text-[#797575] font-bold">God is coming to deliver his word to me</Text>
                <View className="mt-2 mb-4 px-3">
                    <Text className="text-[14px] text-[#5d5b5b]">
                        A retired solicitor plans to take a local council to court after allegedly being told he would not be allowed to be buried beside his wife of 53 years.

                        John Hayes has seen generations of his family interred in the same plot at Mungret Cemetery in Co. Limerick.
                    </Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default AdminPost