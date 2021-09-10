import React,{useState,useEffect} from 'react'
import { FlatList, Text,View,TouchableOpacity,Image,SafeAreaView } from 'react-native'
import {NEWS_URL,key,host,KEY_URL} from '../api'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import axios from "axios";

const Articles = ({props,heading}) => {
	const navigation = useNavigation();
	const [article, setArticle] = useState([])

	useEffect(() => {
		const getArticles = async () => {
			let res = await axios.get(`${NEWS_URL}${KEY_URL}${key}${host}&uuid=generalnews`);
    			let data = res.data.items.result;

    			setArticle(data);
		}

		getArticles();
	},[])

	return (
		<SafeAreaView style={tw`bg-black flex-1`}>
			<View style={tw`pt-5`}>
		<Text style={tw`text-white text-2xl pl-2 mt-4 pb-5`}>{heading}</Text>
		
		</View>
		<FlatList
		keyExtractor={(item) => item.id}
		key={article}
		data={article}
		vertical
		ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]}/>}
		renderItem={({item}) => (
		<TouchableOpacity
		//disabled={!origin}
		onPress={() => navigation.navigate(item.screen)}
		style={tw`flex flex-row m-2 pl-2 rounded border-t-2 border-gray-200 border-opacity-25`}>
			<View style={tw`flex-1`}>
			<View style={tw`flex flex-row justify-between pt-2`}>
				{/* <Text style={tw`m-2 text-xl font-semibold text-green-600`}>{item?.summary}</Text> */}
				{item.publisher ?

				<Text style={tw`pl-2 pt-1 text-white font-medium text-sm text-opacity-70`}>{item?.publisher}</Text>
				:null}
			{item.published_at ?

				<Text style={tw`pl-2 pt-1 text-white font-medium text-sm text-opacity-70`}>{item?.published_at}</Text>
				:null}	
				
				{item.author ?
					<Text style={tw`text-sm text-green-700 font-medium pl-2 pt-1 pr-2 text-opacity-80`}>
					{item?.author}
				</Text>
					:null}
				</View>
				<View style={tw`flex pt-2`}>
				<Text style={tw`mt-2 mb-2 p-2 text-lg text-white font-semibold`}>{item?.title}</Text>
				
				<Image
				source={{uri :item.main_image?.original_url}}
				style={{width:null,height:250,flex:1,paddingLeft:40,paddingRight:40}}
				/>

				<FlatList data={item.entities}
				horizontal
				ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]}/>}
				key={article}
				renderItem={({item}) => (
				<TouchableOpacity 
				style={tw`flex-row m-2 pl-2 rounded border border-gray-200 border-opacity-25`}>
					<View style={tw`flex flex-col items-center p-1`}>
						<Text style={tw`text-white text-base text-green-500`}>{item.label}</Text>
					</View>
				</TouchableOpacity>
				)}
				/>
				</View>
				
			</View>
		</TouchableOpacity>
		)}
		/>
		</SafeAreaView>
	)
}

export default Articles
