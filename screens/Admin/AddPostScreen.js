import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { newspaper } from '../../assets';
import { AntDesign } from '@expo/vector-icons';
import PostForm from '../../components/PostForm';


const AddPostScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="relative mt-6">
          <View className="justify-between px-3">
            <View className="w-[350px] h-[300px]">
              <Image source={newspaper} className="w-[350px] h-[300px]" alt="name" />
            </View>
          </View>

          <View className="absolute justify-between top-4 px-6">
            <TouchableOpacity onPress={() => navigation.navigate("Home")} className="w-[40px] h-[40px] bg-[#dbdada51] rounded-full items-center justify-center">
              <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <PostForm />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddPostScreen