import React, {useState,useEffect} from 'react'
import { View } from 'react-native'
import {TRENDING_URL,key,host,KEY_URL,Region} from '../api'
import axios from "axios";
import Card from './Card'
import tw from 'tailwind-react-native-classnames'

const TrendingTicker = (props) => {
	const [trending, setTrending] = useState([])

	useEffect(() => {
		const getTrending = async () => {
			let res = await axios.get(`${TRENDING_URL}${Region}${props?.market}${KEY_URL}${key}${host}`);
    			let data = res.data.finance.result[0].quotes;
    			setTrending(data);
		}

		getTrending();
	},[props.market])

	return (
		<View style={tw`pt-5`}>
		<Card trending={trending} heading={'Trending Tickers'} desc={'Stocks making biggest moves'}/>
		</View>
		
	)
}

export default TrendingTicker
