import React, {useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import Card from './Card'
import axios from "axios";

const API_KEY = '2e483bfda5mshdb59dafdf59818fp1f6fb5jsndce66f23746a';
const host = 'apidojo-yahoo-finance-v1.p.rapidapi.com';
const API_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-movers?'
const KEY_URL = `region=US&rapidapi-key=${API_KEY}&x-rapidapi-host=${host}`

const DailyMovers = () => {
	const [gainers, setGainers] = useState([])
	const [losers, setLosers] = useState([])
	const [active, setActive] = useState([])

	useEffect(() => {
		const getMovers = async () => {
			let res = await axios.get(`${API_URL}${KEY_URL}`);
    			let gain = res.data.finance.result[0].quotes;
			let lose = res.data.finance.result[1].quotes;
			let actve = res.data.finance.result[2].quotes; 
    			setGainers(gain);
			setLosers(lose);
			setActive(actve);
		}

		getMovers();
	},[])
	return (
		<View>
		<Card active={active} heading={'Most Actives'}/>
		<Card gainers={gainers} heading={'Top Gainers'}/>
		<Card losers={losers} heading={'Top Losers'}/>
		</View>
	)
}

export default DailyMovers
