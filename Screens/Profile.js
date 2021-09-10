import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const Profile = () => {
	return (
		<SafeAreaView style={tw`bg-black flex-1`}>
			<Text style={tw`text-white`}>This is a profile Screen</Text>
		</SafeAreaView>
	)
}

export default Profile
