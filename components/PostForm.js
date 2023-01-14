import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "../firebase";
import { catData } from "./catData";
import { useSelector, useDispatch } from "react-redux";
import { post, toggleForm } from "../features/postSlice/postSlice";
import { selectLoginUser } from "../features/authSlice.js/authSlice";


let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
const currentDate = month + '/' + day + '/' + year

const PostForm = () => {
    const dispatch = useDispatch()
    const getUser = useSelector(selectLoginUser)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = () => {
        if (title && category && description) {
            setTimeout(() => {
                Alert.alert("Post was successful")
                dispatch(post({ id: getUser.id, author: getUser.fullname, title, category, description, date: currentDate }))
                setTitle("")
                setCategory("")
                setDescription("")
            })
        } else {
            Alert.alert("All fields are required")
        }
    }

    return (
        <SafeAreaView className="relative">
            <View className="px-3 mt-6">
                <View className="px-3 justify-center items-center">
                    <Text className="text-center font-bold text-[24px]">
                        {getUser ? (
                            <Text>
                                Add <Text className="text-[#3471ab]">Contents</Text>
                            </Text>
                        ) : (
                            <Text>
                                Update <Text className="text-[#3471ab]">Contents</Text>
                            </Text>
                        )}
                    </Text>
                    <View className="border-b-2 border-[#3471ab] w-[80px]"></View>
                </View>
            </View>

            {getUser ? (<View className="bg-[#fff] w-full h-auto mt-6 rounded-3xl shadow-lg">
                <View className="w-[350px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center mx-4">
                    <TextInput
                        className="w-full h-[70px] px-2"
                        placeholder="Enter Title"
                        name="title"
                        value={title}
                        onChangeText={title => setTitle(title)}
                    />
                </View>

                <View className="w-[350px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center mx-4">
                    <View className="mr-56">
                        <RNPickerSelect
                            placeholder={{ label: "Select Category", value: null }}
                            onValueChange={(category) => setCategory(category)}
                            items={catData}
                            name="category"
                            value={category}
                        />
                    </View>
                </View>

                <View className="w-[350px] h-auto bg-[#cde0e63b] mt-4 mx-4">
                    <TextInput
                        className="w-full h-[170px] px-2 py-4"
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Enter blog contents"
                        name="description"
                        value={description}
                        onChangeText={description => setDescription(description)}
                    />
                </View>

                <TouchableOpacity onPress={handleSubmit} className="mt-4 mx-4 mb-4 bg-[#3471ab] w-[350px] h-[50px] items-center justify-center">
                    <Text className="text-[#fff] font-bold text-[20px]">Post</Text>
                </TouchableOpacity>
            </View>
            ) : (
                <View className="bg-[#fff] w-full h-auto mt-6 rounded-3xl shadow-lg">
                    <Text>Edit</Text>
                    <View className="w-[350px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center mx-4">
                        <TextInput
                            className="w-full h-[70px] px-2"
                            placeholder="Enter Title"
                        />
                    </View>

                    <View className="w-[350px] h-[50px] bg-[#cde0e63b] mt-6 items-center justify-center mx-4">
                        <View className="mr-56">
                            <RNPickerSelect
                                placeholder={{ label: "Select Category", value: null }}
                                onValueChange={(value) => console.log(value)}
                                items={catData}
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
            )}

        </SafeAreaView>
    );
};

export default PostForm;
