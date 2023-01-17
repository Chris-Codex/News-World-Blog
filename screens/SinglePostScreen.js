import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { topfeeds } from "../assets";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import BottomTab from "../components/BottomTab";


const SinglePostScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    });
    return (
        <View className="relative mb-[30px]">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={topfeeds} className="w-full h-[300px]" />
                    <View className="absolute bg-gray-900 inset-0 opacity-50"></View>
                    <View className="absolute top-44 px-3">
                        <Text className="font-bold text-[#fff] text-[17px]">
                            Tottemham News: Antonio Conte praised Tottenham’s character after
                            they bounced back from their demoralising defeat to Aston Villa.
                        </Text>
                        <View className="mt-2">
                            <Text className="text-[#fff]">The News . 2 hours ago</Text>
                        </View>
                    </View>
                    <View className="absolute flex-1 top-16 px-4">
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-white w-[30px] h-[30px] rounded-full items-center justify-center">
                            <AntDesign name="arrowleft" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="bg-[#e6e4e4b7] w-[362px] h-[50px] mt-4 mx-4 rounded-lg flex-row justify-between">
                    <View className="justify-center px-3">
                        <Text className="text-[#939292]">Share this post:</Text>
                    </View>
                    <View className="flex-row px-3 justify-center items-center space-x-3">
                        <TouchableOpacity>
                            <FontAwesome name="whatsapp" size={20} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="twitter" size={20} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="instagram" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="mx-4 mt-5">
                    <Text className="text-[#7d7b7b]">
                        Antonio Conte praised Tottenham’s character after they bounced back
                        from their demoralising defeat to Aston Villa by reviving their
                        top-four challenge with a 4-0 win over Crystal Palace. Spurs were
                        without several key players at Selhurst Park but moved two points
                        behind fourth-placed Manchester United thanks to a superb second-half
                        display. The outstanding Harry Kane scored twice and created a goal
                        for Son Heung-min, and the performance delighted Conte, whose recent
                        negative demeanour has suggested he will need to think long and hard
                        before deciding to extend his contract before it expires at the end of
                        the season.

                        Antonio Conte praised Tottenham’s character after they bounced back
                        from their demoralising defeat to Aston Villa by reviving their
                        top-four challenge with a 4-0 win over Crystal Palace. Spurs were
                        without several key players at Selhurst Park but moved two points
                        behind fourth-placed Manchester United thanks to a superb second-half
                        display. The outstanding Harry Kane scored twice and created a goal
                        for Son Heung-min, and the performance delighted Conte, whose recent
                        negative demeanour has suggested he will need to think long and hard
                        before deciding to extend his contract before it expires at the end of
                        the season.

                        Antonio Conte praised Tottenham’s character after they bounced back
                        from their demoralising defeat to Aston Villa by reviving their
                        top-four challenge with a 4-0 win over Crystal Palace. Spurs were
                        without several key players at Selhurst Park but moved two points
                        behind fourth-placed Manchester United thanks to a superb second-half
                        display. The outstanding Harry Kane scored twice and created a goal
                        for Son Heung-min, and the performance delighted Conte, whose recent
                        negative demeanour has suggested he will need to think long and hard
                        before deciding to extend his contract before it expires at the end of
                        the season.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default SinglePostScreen;
