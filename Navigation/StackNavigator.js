import React, { useState, useLayoutEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, TouchableOpacity, Share } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import Stock from '../Screens/Stock'
import BottomNavigation from './BottomNavigation'
import Cards from '../Components/Cards'
import { useNavigation } from '@react-navigation/native'
import Search from '../Screens/Search'

const StackNavigator = () => {
    const navigation = useNavigation()
    const Stack = createStackNavigator()
    const onShare = async () => {
        const result = await Share.share({
            message: 'Share',
        })
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Stock"
                component={Stock}
                options={{
                    headerTintColor: '#000000',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={tw`left-5 z-50 rounded-full`}
                            onPress={() => navigation.goBack('HomeScreen')}
                        >
                            <Icon
                                name="chevron-left"
                                color="green"
                                type="fontawesome"
                                brand="true"
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={tw`right-5 z-50 rounded-full`}
                            onPress={onShare}
                        >
                            <Icon
                                name="share"
                                color="green"
                                type="fontawesome"
                                brand="true"
                            />
                        </TouchableOpacity>
                    ),
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerTintColor: '#000000',
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name="Cards"
                component={Cards}
                style={{ width: '10%' }}
                options={{
                    headerMode: 'screen',
                    headerShown: false,
                    cardShadowEnabled: true,
                    cardOverlayEnabled: true,
                    animationEnabled: true,
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    )
}
export default StackNavigator
