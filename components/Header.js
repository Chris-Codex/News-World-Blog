import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import React from 'react'

const Header = ({ open, handleHmaburger, handleSearchclosure, hamburgerSwitch }) => {
    return (
        <View className="flex-row justify-between items-center px-3">
            <TouchableOpacity onPress={handleHmaburger}>
                {!hamburgerSwitch ? <Entypo name="menu" size={24} color="black" /> : <EvilIcons name="close" size={24} color="black" />}
            </TouchableOpacity>
            <Text className="font-bold">RUMOUR <Text className="text-[#3471ab] text-[16px] font-bold">Feeds</Text></Text>
            <TouchableOpacity onPress={handleSearchclosure}>
                {open ? <EvilIcons name="close" size={24} color="black" /> : <AntDesign name="search1" size={24} color="black" />
                }
            </TouchableOpacity>
        </View>
    )
}

export default Header