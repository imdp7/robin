import React,{useState,useEffect} from 'react'
import { View, SafeAreaView, Text, ScrollView,Image,RefreshControl,LogBox } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Articles from '../Components/Articles';
import KeyStats from '../Components/KeyStats';
import Insight from '../Components/Insight'
import Recommendation from '../Components/Recommendation';
import Graph from '../Components/Graph';
import MaterialTabs from 'react-native-material-tabs';
import Timeline from '../Components/Timeline';
import MyStocks from '../Components/MyStocks';
import Trade from '../Components/Trade';
import Plot from '../Components/Plot';

const wait = (timeout) => {
	return new Promise(resolve => setTimeout(resolve, timeout));
      }
      
      const Stock = ({route}) => {
	      const { item } = route.params;
	      
	      const [selectedTab, setSelectedTab] = useState(0)
	      const [refreshing, setRefreshing] = useState(false);

	      const {
		name = item?.name,
		preMarketPrice = item?.info?.price?.preMarketPrice,
		postMarketPrice = item?.info?.price?.postMarketPrice,
		regularMarketPrice = item?.info?.price?.regularMarketPrice,
		preMarketChange = item?.info?.price?.preMarketChange,
		postMarketChange = item?.info?.price?.postMarketChange,
		regularMarketChange = item?.info?.price?.regularMarketChange,
		regularMarketChangePercent = item?.info?.price?.regularMarketChangePercent,
		postMarketChangePercent = item?.info?.price?.postMarketChangePercent,
		preMarketChangePercent = item?.info?.price?.preMarketChangePercent,
		currencySymbol = item?.info?.price?.currencySymbol,
		longName = item?.info?.quoteType?.longName,
		symbol = item?.info?.quoteType?.symbol,
	      } = item;

	      
	      useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	    }, [])

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => {
			setRefreshing(false)
			
		});
	      }, [refreshing]);

	return (
		<SafeAreaView style={[tw`flex-1 bg-white`]}>
		<ScrollView
		style={tw`flex-1`}
		refreshControl={
          	<RefreshControl
            	refreshing={refreshing}
            	onRefresh={onRefresh}
		    tintColor='green'
		    colors={['red']} />
       		 }
		>
		<View style={tw`p-2`}>
		<View style={tw`flex flex-col justify-between pl-4`}>
		<Text style={tw`font-semibold text-black text-base pt-3`}>{name}</Text>	
		<Text style={tw`text-3xl  font-semibold text-black`}>{longName || symbol}</Text>
		</View>
		<View style={tw`flex flex-row pl-3 pt-2`}>
		<Text style={tw`text-3xl font-semibold text-black`}>{currencySymbol}{ postMarketPrice?.fmt || regularMarketPrice?.fmt || preMarketPrice?.fmt  ? preMarketPrice?.fmt || postMarketPrice?.fmt  || regularMarketPrice?.fmt  : '-' }</Text>
		</View>
		{regularMarketChangePercent?.fmt && (
		<View style={tw`flex flex-row items-center`}>
		<Text style={tw`text-base text-green-700 font-semibold pl-3`}>{currencySymbol}{regularMarketChange?.fmt}</Text>
		<Text style={tw`text-base text-green-700 font-semibold pl-3 pr-3`}>
			({regularMarketChangePercent?.fmt})
		</Text>
			<Text style={tw`text-black text-base`}>Today Hours</Text>
		</View>
		)}
		{postMarketChangePercent?.fmt && (
		<View style={tw`flex flex-row items-center`}>
		<Text style={tw`text-base text-green-700 font-semibold pl-3`}>{currencySymbol}{preMarketChange?.fmt || postMarketChange?.fmt}</Text>
		<Text style={tw`text-base text-green-700 font-semibold pl-3 pr-2`}>
			({preMarketChangePercent?.fmt || postMarketChangePercent?.fmt})
		</Text>
		<Text style={tw`text-black text-base`}>After Hours</Text>
		</View>
		)}
		
		<View style={tw`p-3`}>
		<Image style={{height:225,width:'auto',resizeMode: 'contain'}} source={{
          	uri: 'https://www.freeiconspng.com/uploads/blue-line-png-1.png',
        	}} />
		{/* <Graph item={item} height={400}/> */}
		<Timeline/>
		</View>
		{item?.data?.ticker ?
		<View style={tw`pb-2`}>
			<MyStocks item={item}/>
		</View>
		: null }
		<MaterialTabs
        	items={['Summary', 'Details']}
        	selectedIndex={selectedTab}
        	onChange={setSelectedTab}
        	barColor="rgb(6,120,86)"
        	indicatorColor="#f0f0f0f0"
        	activeTextColor="white"
		indicatorHeight='4'
		barHeight='40'
		textStyle={tw`text-sm text-center tracking-wide`}
      		/>
		{selectedTab == 0 ?
		<View>
		<KeyStats item={item}/>
		{/* <Plot item={item}/> */}
		<Insight title={'Insights'} item={item}/>
		<Articles category={item.info?.symbol} heading={'News'} region={'US'} limit={'4'}/>
		<Recommendation item={item}/>
		</View>
		:null}
		{selectedTab == 1 ?
		<View>
		
		</View>
		:null}
		</View>
		</ScrollView>
		<Trade item={item}/>
		</SafeAreaView>
	)
}

export default Stock
