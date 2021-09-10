import React from 'react'
import { SafeAreaView,ScrollView, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import DailyMovers from '../Components/DailyMovers'
import TrendingTicker from '../Components/TrendingTicker'
const Search = () => {
	return (
		<SafeAreaView style={tw`bg-black flex-1`}>
		<ScrollView>
			<TrendingTicker/>
			<DailyMovers/>
		</ScrollView>
		</SafeAreaView>
	)
}

export default Search
