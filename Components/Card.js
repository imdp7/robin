import React from 'react'
import { FlatList, Text,View,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const Card = ({active,losers,gainers,trending,heading}) => {
	return (
		<View>
			<View style={tw`pt-5`}>
		<Text style={tw`text-white text-2xl pl-2 `}>{heading}</Text>
		<Text style={tw`text-white text-base pl-3 pb-3`}>Stocks making biggest moves today.</Text>
		</View>
		<FlatList
		keyExtractor={(item) => item.id}
		key={trending?.symbol}
		data={active|| losers || trending || gainers}
		horizontal
		ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]}/>}
		renderItem={({item}) => (
		<TouchableOpacity
		//disabled={!origin}
		onPress={() => navigation.navigate(item.screen)}
		style={tw`flex-row m-2 pl-2 rounded border border-gray-200 border-opacity-25`}>
			<View style={tw`flex justify-between`}>
				<View style={tw`w-40`}>
				<Text style={tw`mt-2 p-2 text-sm text-white font-semibold`}>{item?.shortName}</Text>
				</View>

				<View style={tw`flex`}>
				<Text style={tw`m-2 text-xl font-semibold text-green-600`}>{item?.symbol}</Text>
				{item.regularMarketPrice &&(

				<Text style={tw`pl-2 pt-1 text-white font-semibold text-base`}>${(Math.round(item.regularMarketPrice * 100) / 100).toFixed(2)}</Text>
				)}
				
				{item?.regularMarketChangePercent && (
					<Text style={tw`text-base text-green-700 font-semibold pl-2 pb-2`}>
					{(Math.round(item?.regularMarketChangePercent * 100) / 100).toFixed(2)}%
				</Text>
					)}
				</View>
			</View>
		</TouchableOpacity>
		)}
		/>
		</View>
	)
}

export default Card
