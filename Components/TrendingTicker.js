import React, {useState,useEffect} from 'react'
import { FlatList, Text, SafeAreaView,View,TouchableOpacity } from 'react-native'
import {TRENDING_URL,key,host,KEY_URL} from '../api'
import axios from "axios";
import Card from './Card'
import tw from 'tailwind-react-native-classnames'
// const API_KEY = '683db0b5femsh2290bf5f1849a53p100381jsn72ce2edb9354';
// const host = 'apidojo-yahoo-finance-v1.p.rapidapi.com';
// const API_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?'
// const KEY_URL = `region=US&rapidapi-key=${API_KEY}&x-rapidapi-host=${host}`;
const TrendingTicker = ({props}) => {

	const [trending, setTrending] = useState([])

	useEffect(() => {
		const getTrending = async () => {
			let res = await axios.get(`${TRENDING_URL}${KEY_URL}${key}${host}`);
    			let data = res.data.finance.result[0].quotes;
    			setTrending(data);
		}

		getTrending();
	},[])

	return (
		<View style={tw`pt-5`}>
		<Card trending={trending} heading={'Trending Tickers'}/>
		</View>
		
	)
}

export default TrendingTicker
