import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames'

export default function PageViews({data}) {
	const {
		shortTerm = data?.pageViews?.shortTermTrend,
		midTerm = data?.pageViews?.midTermTrend,
		longTerm = data?.pageViews?.longTermTrend,

	} = data
  return (
	<View style={tw`flex`}>
	<Text style={tw`text-black font-semibold text-2xl mt-4 pl-2 pb-3`}>
	    Trends
	</Text>
	<View style={tw`flex flex-row justify-around pl-2 m-2`}>
		<Text style={tw`text-base`}>{shortTerm}</Text>
		<Text style={tw`text-base`}>{midTerm}</Text>
		<Text style={tw`text-base`}>{longTerm}</Text>
	</View>
     </View>
  );
}
