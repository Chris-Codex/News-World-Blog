import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import RNPickerSelect from "react-native-picker-select";




const PostForm = () => {

    return (
        <SafeAreaView className="relative">
            <View className="px-3 mt-6">
                <View className="px-3 justify-center items-center">
                    <Text className="text-center font-bold text-[24px]">Add <Text className="text-[#3471ab]">Contents</Text></Text>
                    <View className="border-b-2 border-[#3471ab] w-[80px]"></View>
                </View>
            </View>

            <View className="bg-[#fff] w-full h-auto mt-6 rounded-3xl shadow-lg">
                <View className="w-[350px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center mx-4">
                    <TextInput className="w-full h-[70px] px-2" placeholder='Enter Title' />
                </View>

                <View className="w-[350px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center mx-4">
                    <View className="mr-56">
                        <RNPickerSelect
                            placeholder={{ label: "Select Category", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: "JavaScript", value: "JavaScript" },
                                { label: "TypeScript", value: "TypeScript" },
                                { label: "Python", value: "Python" },
                                { label: "Java", value: "Java" },
                                { label: "C++", value: "C++" },
                                { label: "C", value: "C" },
                            ]}
                        />
                    </View>
                </View>

                <View className="w-[350px] h-auto bg-[#cde0e63b] mt-4 mx-4">
                    <TextInput
                        className="w-full h-[170px] px-2 py-4"
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Enter blog contents"
                    />
                </View>

                <TouchableOpacity className="mt-4 mx-4 mb-4 bg-[#3471ab] w-[350px] h-[50px] items-center justify-center">
                    <Text className="text-[#fff] font-bold text-[20px]">Post</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PostForm





