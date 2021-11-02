import React,{useState,useEffect}  from 'react'
import { View,SafeAreaView,FlatList,TouchableOpacity,Text} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Articles from '../Components/Articles'

const data = [
	{
		market:'US',
		name:'US',
		id:'1'
	},
	{
		market:'Canada',
		name:'CA',
		id:'2'
	},
	{
		market:'Britain',
		name:'BR',
		id:'3'
	},
	{
		market:'Hong Kong',
		name:'HK',
		id:'4'
	},
	{
		market:'India',
		name:'IN',
		id:'5'
	},
	{
		market:'France',
		name:'FR',
		id:'6'
	},
]
const News = () => {
	const [market,setMarket] = useState(null);

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
		<View style={tw`pt-5`}>
		<Text style={tw`text-black text-2xl pl-4 mt-4 pb-5`}>Top News</Text>
		<FlatList
		keyExtractor={(item,index) => index}
		extraData={market}
		data={data}
		horizontal
		showsHorizontalScrollIndicator={false}
		ItemSeparatorComponent={() => <View style={[tw`bg-black `]}/>}
		renderItem={({item:{id,market,name},item}) => (
		<TouchableOpacity
		onPress={() => setMarket(name)}
		style={tw`flex flex-row pl-2 rounded border-b border-gray-100 border-opacity-25 items-center ${name === item.name && 'text-red-600'}`}>
		<View style={tw`flex-1`}>
		<View style={tw`flex flex-row justify-between p-2 text-center items-center`}>
        	<View style={tw`flex flex-col text-left w-24`}>
		<Text style={tw`pt-2 pr-2 text-base text-black font-bold text-center `}>{market}</Text>
        	</View>
		</View>
		</View>
		</TouchableOpacity>
		)}
		/>
		</View>
			<Articles limit={'25'} region={market} category={'generalnews'}/>

		</SafeAreaView>
	)
}

export default News
