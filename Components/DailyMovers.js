import React, {useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import Card from './Card'
import axios from "axios";
import {KEY_URL,host,key,Region} from '../api'


const API_URL = 'https://yh-finance.p.rapidapi.com/market/v2/get-movers?'


const DailyMovers = (props) => {
	const [gainers, setGainers] = useState([])
	const [losers, setLosers] = useState([])
	const [active, setActive] = useState([])

	useEffect(() => {
		const getMovers = async () => {
			let res = await axios.get(`${API_URL}${Region}${props?.market}${KEY_URL}${key}${host}`);
    			let gain = res.data.finance.result[0];
			let lose = res.data.finance.result[1];
			let actve = res.data.finance.result[2]; 
    			setGainers(gain);
			setLosers(lose);
			setActive(actve);

		}
		getMovers();
	},[props.market])
	return (
		<View>
		<Card active={active}/>
		<Card gainers={gainers}/>
		<Card losers={losers}/>
		</View>
	)
}

export default DailyMovers
