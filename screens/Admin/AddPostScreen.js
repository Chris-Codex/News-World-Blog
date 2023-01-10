import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const AddPostScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })
  return (
    <SafeAreaView>
      <View className="relative mt-6">
        <Header />
        <Text>AddPost</Text>
      </View>
    </SafeAreaView>
  )
}

export default AddPostScreen