import React,{useState} from 'react'
import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const data = [
	{
		frame:'1D',
		id:'1'
	},
	{
		frame:'1W',
		id:'2'
	},
	{
		frame:'1M',
		id:'3'
	},
	{
		frame:'3M',
		id:'4'
	},
	{
		frame:'1Y',
		id:'5'
	},
	{
		frame:'ALL',
		id:'6'
	}
]
const Timeline = () => {

	const [selected, setSelected] = useState(data[0]);
	  

	return (
		<View style={tw`items-center`}>
		<FlatList
		data={data}
		horizontal
		keyExtractor={(item) => item.id}
		renderItem={({item:{frame,id},item}) => (
			<TouchableOpacity style={tw`flex flex-row justify-between pb-2 pr-3`} onPress={() => {setSelected(item)}}>
			<View style={tw`p-2 ${selected?.id === id  && 'bg-green-600 rounded-lg'} `}>
			<Text style={tw`font-bold text-black ${selected?.id ===id  && 'text-white'}`}>{frame}</Text>
			</View>
			</TouchableOpacity>
		)}
		/>
		
			
		</View>
	)
}

export default Timeline
