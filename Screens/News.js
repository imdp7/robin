import React from 'react'
import { View, Text,SafeAreaView,ScrollView} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Articles from '../Components/Articles'

const News = () => {
	return (
		<SafeAreaView style={tw`bg-black flex-1`}>
		<ScrollView>
			<Articles heading={'Top News'}/>
		</ScrollView>
		</SafeAreaView>
	)
}

export default News
