import React from 'react'
import { Text, SafeAreaView,View,TouchableOpacity,ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'


const HomeScreen = () => {
	return (
		<SafeAreaView style={tw`bg-black flex-1`}>
		<ScrollView>
			<Text style={tw`text-center py-5 text-xl text-white`}>Good Morning, Darshan</Text>
			
			
		</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
