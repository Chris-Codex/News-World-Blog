import { View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { news } from '../assets';
import { useDispatch, useSelector } from "react-redux"
import { registerUser, selectRegisteredUsered } from '../features/authSlice.js/authSlice';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { Toast } from "react-native-toast-message"


const AuthForm = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const users = useSelector(selectRegisteredUsered)
    const [switchForm, setSwitchForm] = useState(false)
    const [hidePassword, setHidePassword] = useState(true)

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullnameError, setFullnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!fullname) {
            setFullnameError("Name field can't be empty")
        } else if (!email) {
            setEmailError("Email field can't be empty")
        } else if (!password) {
            setPasswordError("Password field can't be empty")
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((usersCredentials) => {
                    const user = usersCredentials.user
                    if (user) {
                        updateProfile(user, { displayName: `${fullname}` })
                    }
                    setTimeout(() => {
                        Alert.alert("Registration was Successful")
                        setFullname("")
                        setEmail("")
                        setPassword("")
                    }, 2000)

                })
            // dispatch(registerUser({ fullname, email, password }))
        }
    }

    const handleError = () => {
        if (email = "") {
            setError({ error: "email field cannot not be empty" })
        }
    }

    const handleFormSwitch = () => {
        setSwitchForm(!switchForm)
    }

    console.log("USERS", users)

    return (
        <View className="flex-1 justify-center px-4 py-6">
            <View className="items-center">
                <View className="w-[120px] h-[120px] rounded-full bg-[#c7e7e0fe] items-center justify-center border-8">
                    <Image source={news} className='w-[115px] h-[115px] rounded-full' />
                </View>
                <Text className="mt-4 font-bold text-[20px]">{switchForm ? "Sign In to continue" : "Create Account"}</Text>
            </View>

            {switchForm ? (
                <View className="px-4 mt-8">
                    <View className="w-full h-[50px] bg-[#f4f2f2]">
                        <TextInput placeholder='Enter your email' className='w-full h-[50px] px-2' />
                    </View>
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput placeholder='Password' className='w-full h-[50px] px-2' />
                    </View>
                    <TouchableOpacity className="left-52 mt-2">
                        <Text className="text-red-500 font-bold">Forgot Password?</Text>
                    </TouchableOpacity >
                    <TouchableOpacity className="w-full h-[50px] bg-[#3471ab] mt-3 items-center justify-center">
                        <Text className="text-[#fff] font-bold text-[16px]">Sign In</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={handleFormSwitch} className="flex-row items-center justify-center mt-3">
                        <Text>Don't have an account yet? <Text className="text-[#3471ab] font-bold">Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View className="px-4 mt-8">
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput placeholder='Enter fullname' name="fullname" onChangeText={fullname => setFullname(fullname)} className='w-full h-[50px] px-2' />
                    </View>
                    {fullnameError && <Text className="text-red-600 text-[11px] mt-1">{fullnameError}</Text>}
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput placeholder='Enter your email' name="email" onChangeText={email => setEmail(email)} className='w-full h-[50px] px-2' />
                    </View>
                    {emailError && <Text className="text-red-600 text-[11px] mt-1">{emailError}</Text>}
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput secureTextEntry={hidePassword} textContentType='password' placeholder='Password' name="password" onChangeText={cfmpassword => setPassword(cfmpassword)} className='w-full h-[50px] px-2' />
                    </View>
                    {passwordError && <Text className="text-red-600 text-[11px] mt-1">{passwordError}</Text>}
                    <TouchableOpacity onPress={handleSubmit} className="w-full h-[50px] bg-[#3471ab] mt-3 items-center justify-center">
                        <Text className="text-[#fff] font-bold text-[16px]">Sign Up</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={handleFormSwitch} className="flex-row items-center justify-center mt-3">
                        <Text>Are you a Registered User? <Text className="text-[#3471ab] font-bold">Sign In</Text></Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default AuthForm