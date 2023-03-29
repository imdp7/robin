import React from 'react'
import { View, Text } from 'react-native'
import Cards from './Cards'
import tw from 'tailwind-react-native-classnames'
import Earning from './Earning'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Statistics from './Statistics';
import Plot from './Plot'

const Insight = ({symbol,title}) => {
	const navigation = useNavigation()
	return (
		<View style={tw`mt-3 p-2 `}>

		<Text style={tw`text-black text-2xl font-semibold`}>{title}</Text>
		<View style={tw`flex flex-row flex-wrap`}>
		<TouchableOpacity 
		onPress={() => navigation.navigate('Cards',{symbol: item.symbol})}>
			<Cards heading={'Earnings'} symbol={symbol}/>
		</TouchableOpacity>
		
		</View>
		</View>
	)
}

export default Insight
