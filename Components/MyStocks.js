import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const MyStocks = ({item}) => {
	
	const info = item?.data;
	const reg = item?.info?.price?.regularMarketChange?.fmt
	const pre = item?.info?.price.regularMarketChange?.fmt
	const post = item?.info?.price.regularMarketChange?.fmt
	const today = ((pre + reg + post)/(item?.info?.price?.preMarketPrice?.fmt || item?.info?.price?.regularMarketPrice?.fmt || item?.info?.price?.postMarketPrice?.fmt))*100;
	const todayReturn = ((item?.info?.price?.regularMarketChange?.fmt ) - ( item?.info?.price.preMarketChange?.fmt || item?.info?.price.postMarketChange?.fmt))*(info?.shares);
	const totalReturn = ((item?.info?.price?.preMarketPrice?.fmt || item?.info?.price?.postMarketPrice?.fmt || item?.info?.price?.regularMarketPrice?.fmt) - (info.buyPrice))*(info?.shares);
	const totalValue = (info.buyPrice) * (info.shares);
	const marketValue = (totalValue) + (totalReturn);

	return (
		<View style={tw`p-2 border border-gray-200 shadow-lg`}>
		<View style={tw`pr-5 pt-2`}>
		<Text style={tw`text-black font-semibold text-2xl`}>Holdings</Text>
		<View style={tw`p-3 flex flex-row justify-between`}>
		<View style={tw`flex flex-col items-center`}>
		<Text style={tw`text-black text-opacity-50`}>
        	Shares
      		</Text>
		      <Text style={tw`text-black text-lg`}>
		      {info?.shares}
		     </Text>
		</View>

		<View style={tw`flex flex-col items-center`}>
		<Text style={tw`text-black text-opacity-50`}>
			Market Value
	     	 </Text>
	     	 <Text style={tw`text-black text-lg`}>
		      {item?.info?.price?.currencySymbol}{(Math.round(marketValue * 100) / 100).toFixed(2)}
	     	</Text>
		</View>
		</View>
		<View style={tw`p-3 flex flex-row justify-between`}>
		<View style={tw`flex flex-col items-center`}>
		<Text style={tw`text-black text-opacity-50`}>
        	Avg Cost
      		</Text>
		      <Text style={tw`text-black text-lg`}>
		      {info?.buyPrice}
		     </Text>
		</View>

		<View style={tw`flex flex-col items-center`}>
		<Text style={tw`text-black text-opacity-50`}>
			Portfolio Diversity
	     	 </Text>
	     	 <Text style={tw`text-black text-lg`}>
		      29%
	     	</Text>
		</View>
		</View>
		</View>
		<View style={tw`p-2 flex flex-row justify-between border-b border-black border-opacity-25`}>
		<Text style={tw`text-black text-opacity-50 text-base`}>
			Today's Return
		</Text>
		<View style={tw`flex flex-row`}>
		<Text style={tw`text-black text-lg`}>
		{item?.info?.price?.currencySymbol}{(Math.round(todayReturn * 100) / 100).toFixed(2)}
		</Text>
		<Text style={tw`pl-2 text-black text-opacity-50 text-base`}>
		({(Math.round(today).toFixed(2))}%)
		</Text>
		</View>
		</View>
		<View style={tw`p-2 flex flex-row justify-between border-b border-black border-opacity-25`}>
		<Text style={tw`text-black text-opacity-50 text-base`}>
			Total Return
		</Text>
		<View style={tw`flex flex-row`}>
		<Text style={tw`text-black text-lg`}>
		{item?.info?.price?.currencySymbol}{(Math.round(totalReturn * 100) / 100).toFixed(2)}
		</Text>
		<Text style={tw`pl-2 text-black text-opacity-50 text-base`}>
		({(Math.round(marketValue * 100) / totalValue).toFixed(2)}%)
		</Text>
		</View>
		</View>
    </View>
	)
}

export default MyStocks
