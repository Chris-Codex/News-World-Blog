import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import BottomTab from '../components/BottomTab';
import Login from '../components/Login';


const LoginScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <Login />
        </SafeAreaView>
    )
}

export default LoginScreen