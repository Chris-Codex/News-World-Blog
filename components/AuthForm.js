import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { news } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import {
    loading,
    loginUser,
    registerUser,
    selectLoading,
    selectRegisteredUsered,
} from "../features/authSlice.js/authSlice";
import axios from "axios";
import Loading from './Loading';


const AuthForm = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const users = useSelector(selectRegisteredUsered);
    const toggleLoading = useSelector(selectLoading)
    const [switchForm, setSwitchForm] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginRequest = async (type = "login") => {
        try {
            const res = await axios.post(`http://localhost:4000/${type}`, {
                fullname, email, password
            }).catch((error) => {
                console.log(error)
            })

            const data = await res.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!switchForm) {
            if (email && password) {
                try {
                    setTimeout(() => {
                        loginRequest().then(data => dispatch(loginUser(data)))
                            .then(data => {
                                const { email, password } = data.payload
                                if (email !== email && password !== password) {
                                    Alert.alert("Login credentials are not validdddddd")
                                } else if (email === email && password === password) {
                                    navigation.navigate("Home")
                                    setEmail("")
                                    setPassword("")
                                }
                            }).catch(err => console.log("ERROR", err))
                    }, 2000)
                } catch (error) {
                    return res.status(400).json({ message: "Failed" })
                }
            } else {
                Alert.alert("All fields are required")
            }
        } else {
            if (fullname && email && password) {
                setTimeout(() => {
                    loginRequest("register").then(data => console.log(data))
                    Alert.alert("Registration was succesfull")
                    setFullname("")
                    setEmail("")
                    setPassword("")
                }, 2000)
            }
        }


    };

    const handleFormSwitch = () => {
        setSwitchForm(!switchForm);
    };

    return (
        <View className="flex-1 justify-center px-4 py-6">
            <View className="items-center">
                <View className="w-[120px] h-[120px] rounded-full bg-[#c7e7e0fe] items-center justify-center border-8">
                    <Image source={news} className="w-[115px] h-[115px] rounded-full" />
                </View>
                <Text className="mt-4 font-bold text-[20px]">
                    {switchForm ? "User Sign Up" : "Create Account"}
                </Text>
            </View>

            {!switchForm ? (
                <>
                    {toggleLoading && <Loading />}
                    <View className="px-4 mt-8">
                        <View className="w-full h-[50px] bg-[#f4f2f2]">
                            <TextInput
                                placeholder="Enter your email"
                                className="w-full h-[50px] px-2"
                                value={email}
                                onChangeText={email => setEmail(email)}
                            />
                        </View>
                        <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                            <TextInput
                                placeholder="Password"
                                className="w-full h-[50px] px-2"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={password => setPassword(password)}
                            />
                        </View>
                        <TouchableOpacity className="left-52 mt-2">
                            <Text className="text-red-500 font-bold">Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSubmit} className="w-full h-[50px] bg-[#3471ab] mt-3 items-center justify-center">
                            <Text className="text-[#fff] font-bold text-[16px]">Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleFormSwitch}
                            className="flex-row items-center justify-center mt-3"
                        >
                            <Text>
                                Don't have an account yet?{" "}
                                <Text className="text-[#3471ab] font-bold">Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <View className="px-4 mt-8">
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput
                            placeholder="Enter fullname"
                            name="fullname"
                            value={fullname}
                            onChangeText={(fullname) => setFullname(fullname)}
                            className="w-full h-[50px] px-2"
                        />
                    </View>
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            className="w-full h-[50px] px-2"
                        />
                    </View>
                    <View className="w-full h-[50px] bg-[#f4f2f2] mt-3">
                        <TextInput
                            secureTextEntry={hidePassword}
                            textContentType="password"
                            value={password}
                            placeholder="Password"
                            name="password"
                            onChangeText={(cfmpassword) => setPassword(cfmpassword)}
                            className="w-full h-[50px] px-2"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        className="w-full h-[50px] bg-[#3471ab] mt-3 items-center justify-center"
                    >
                        <Text className="text-[#fff] font-bold text-[16px]">Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleFormSwitch}
                        className="flex-row items-center justify-center mt-3"
                    >
                        <Text>
                            Are you a Registered User?{" "}
                            <Text className="text-[#3471ab] font-bold">Sign In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default AuthForm;
