import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from '@react-pdf/renderer'

const imgUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/330px-Indian_Institute_of_Technology%2C_Patna.svg.png"

const Header = () => {
    return (
        <View className="m-auto">
            <View className="flex justify-between flex-col items-center">
                <View className="flex gap-12 justify-between items-center">
                    <img
                        src={imgUrl}
                        alt='IIT Patna Logo'
                        className='w-28 h-28 float-left'
                    />
                    <View className="flex flex-col items-center">
                        <Text className="font-medium text-2xl">Indian Institue of Tecehnology Patna</Text>
                        <Text className="font-normal text text-gray-600">An Institute of National Importance</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header

