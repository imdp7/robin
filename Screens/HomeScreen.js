import React from 'react'
import { Text, SafeAreaView,View,TouchableOpacity,ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StockRow from '../Components/StockRow'
import Investing from '../Components/Investing'
import Watchlist from '../Components/Watchlist'

const HomeScreen = () => {
	return (
		<SafeAreaView style={[tw`flex-1 bg-white`]}>
		<ScrollView>
			<Text style={tw`text-center py-5 text-2xl text-black`}>Good Morning, Darshan</Text>
			<Investing/>
			<Watchlist/>
			<StockRow/>
			
		</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
