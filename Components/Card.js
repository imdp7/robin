import React from 'react'
import { FlatList, Text,View,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
const Card = ({active,losers,gainers,trending,heading,recommend,desc}) => {
	const navigation = useNavigation()

	return (
		<View>
			<View style={tw`pt-5`}>
		<Text style={tw`text-black font-semibold text-2xl pl-2`}>{active?.title || losers?.title || gainers?.title || heading}</Text>
		<Text style={tw`text-black text-base pl-4 pb-3`}>{active?.description || losers?.description || gainers?.description || desc}</Text>
		</View>
		<FlatList
		keyExtractor={(item, index) => index.toString()}
		key={trending?.symbol }
		data={active?.quotes || losers?.quotes || trending || gainers?.quotes || recommend}
		horizontal
		showsHorizontalScrollIndicator={false}
		ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]}/>}
		renderItem={({item}) => (
		<TouchableOpacity
		//disabled={!origin}
		onPress={() => navigation.navigate('Stock',{symbol: item.symbol})}
		style={tw`flex-row m-2 pl-2 rounded-xl border border-gray-400 border-opacity-25 `}>
			<View style={tw`flex justify-between`}>
				<View style={tw`w-40`}>
				<Text style={tw`mt-2 p-2 text-sm text-black font-semibold`}>{item?.shortName}</Text>
				</View>

				<View style={tw`flex`}>
				<Text style={tw`m-2 text-xl font-semibold text-green-600`}>{item?.symbol}</Text>
				{item.regularMarketPrice ?

				<Text style={tw`pl-2 pt-1 text-black font-semibold text-base`}>${(Math.round(item.regularMarketPrice * 100) / 100).toFixed(2)}</Text>
				: null}
				
				{item?.regularMarketChangePercent ?
					<Text style={tw`text-base text-green-700 font-semibold pl-2 pb-2`}>
					{(Math.round(item?.regularMarketChangePercent * 100) / 100).toFixed(2)}%
				</Text>
					: null}
				</View>
			</View>
		</TouchableOpacity>
		)}
		/>
		</View>
	)
}

export default Card
