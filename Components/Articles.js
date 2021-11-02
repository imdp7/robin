import React,{useState,useEffect} from 'react'
import { FlatList, Text,View,TouchableOpacity,Image,SafeAreaView, ActivityIndicator,Linking,RefreshControl } from 'react-native'
import {NEWS_URL,news_host,news_key,KEY_URL,Region} from '../api'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import axios from "axios";
import { ScrollView } from 'react-native-gesture-handler'
export const wait = (timeout) => {
	return new Promise(resolve => setTimeout(resolve, timeout));
      }

const Articles = ({heading,category,region,limit}) => {
	const navigation = useNavigation();

	const [article, setArticle] = useState([])
	const [refreshing, setRefreshing] = useState(false);

	  const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2500).then(() => setRefreshing(false));
	      }, []);

	useEffect(() => {
		
		const getArticle = async () => {
			let res = await axios.get(`${NEWS_URL}${Region}${region}${KEY_URL}${news_key}${news_host}&category=${category}`);
    			let data =  res?.data?.items?.result;
			let news = data.slice(0,`${limit}`);
    			setArticle(news);
		}
		getArticle();
		},[region,category,refreshing]);

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<View>
		{heading &&(<Text style={tw`text-black font-semibold text-2xl mt-4 pl-2 pb-3`}>{heading}</Text>)}
	
		</View>
		<ScrollView
		refreshControl={
          	<RefreshControl
            	refreshing={refreshing}
            	onRefresh={onRefresh}
		    tintColor='green'
		    colors={['red']} />
       		 }
			>
		<FlatList
		keyExtractor={(item, index) => index.toString()}
		key={article.id}
		data={article}
		vertical
		showsVerticalScrollIndicator={false}
		ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]}/>}
		renderItem={({item}) => (
		<TouchableOpacity
		//disabled={!origin}
		onPress={() => Linking.openURL(item?.link)}
		style={tw`flex flex-row m-1 pl-2 rounded border-t-2 border-gray-200 border-opacity-25 shadow-2xl`}>
			<View style={tw`flex-1`}>
			<View style={tw`flex flex-row justify-between pt-2`}>
				{/* <Text style={tw`m-2 text-xl font-semibold text-green-600`}>{item?.summary}</Text> */}
				{item.publisher ?

				<Text style={tw`pl-2 pt-1 text-black font-medium text-sm text-opacity-70`}>{item?.publisher}</Text>
				:null}
			{/* {item.published_at ?

				<Text style={tw`pl-2 pt-1 text-black font-medium text-sm text-opacity-70`}>{item?.published_at}</Text>
				:null}	 */}
				
				{item.author ?
					<Text style={tw`text-sm text-green-700 font-medium pl-2 pt-1 pr-2 text-opacity-80`}>
					{item?.author}
				</Text>
					:null}
				</View>
				<View style={tw`flex pt-2`}>
				<Text style={tw`mt-2 mb-2 p-2 text-lg text-black font-semibold`}>{item?.title}</Text>
				
				<Image
				source={{uri :item.main_image?.original_url}}
				style={{width:null,height:250,flex:1,paddingLeft:40,paddingRight:40}}
				/>

				<FlatList data={item?.entities}
				horizontal
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={[tw`bg-gray-500`]}/>}
				key={item?.entities?.label}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item}) => (
				<TouchableOpacity 
				onPress={() => navigation.navigate('Stock',{item})}
				style={tw`flex-row m-1 rounded border border-gray-400 border-opacity-25 shadow-2xl`}>
					<View style={tw`flex flex-col items-center p-1`}>
						<Text style={tw`text-black text-base text-green-500`}>{item?.label}</Text>
					</View>
				</TouchableOpacity>
				)}
				/>
				</View>
				
			</View>
		</TouchableOpacity>
		)}
		/>
		</ScrollView>
		</SafeAreaView>
	)
}

export default Articles
