import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { toggleActionBtn } from "../features/postSlice/postSlice";

const AdminPost = ({ open }) => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const getPost = useSelector((state) => state.post.postData)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <>
            {getPost.length > 0 ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className={
                        open
                            ? "mt-[80px] mb-[90px] px-4 flex-1"
                            : "mt-[20px] mb-[90px] px-4 flex-1"
                    }
                >
                    {getPost.map((post) => {
                        return (
                            <View className="w-[360px] h-auto bg-[#e9ecf3] mb-3 rounded-lg shadow-md">
                                <View className="flex-row justify-between px-2 py-4">
                                    <Text className="text-[#999] text-[16px]">{post.category}</Text>
                                    <View className="flex-row space-x-4 items-center">
                                        <Text className="text-[#999] text-[13px]">Date: {post.date}</Text>
                                        <TouchableOpacity onPress={handleToggleIcon}>
                                            {toggleIcon ? (
                                                <Entypo name="dots-three-vertical" size={13} color="#999" />
                                            ) : (
                                                <Ionicons name="close-circle" size={20} color="#999" />
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text className="px-2 text-[18px] text-[#797575] font-bold">
                                    {post.title}
                                </Text>
                                <View className="mt-2 mb-4 px-3">
                                    <Text className="text-[14px] text-[#5d5b5b]">{post.description}</Text>
                                    <Text className="mt-3 text-[#999] text-[12px]">Author: {post.author}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            ) : (
                <View className="flex items-center justify-center mt-[310px]">
                    <View className="absolute flex items-center justify-center">
                        <Text>Opps...No Post Available</Text>
                    </View>
                </View>
            )}
        </>
    );
};

export default AdminPost;
