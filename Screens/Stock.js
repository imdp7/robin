import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
    View,
    SafeAreaView,
    Text,
    ScrollView,
    Image,
    RefreshControl,
    LogBox,
} from 'react-native'
import { TRENDING_URL, key, host, KEY_URL, Region } from '../api'
import axios from 'axios'
import { useRoute, useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import Articles from '../Components/Articles'
import KeyStats from '../Components/KeyStats'
import Insight from '../Components/Insight'
import Recommendation from '../Components/Recommendation'
import Graph from '../Components/Graph'
import MaterialTabs from 'react-native-material-tabs'
import Timeline from '../Components/Timeline'
import MyStocks from '../Components/MyStocks'
import Trade from '../Components/Trade'
import Plot from '../Components/Plot'

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

const Stock = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { symbol } = route.params
    const [data, setData] = useState([])
    const [selectedTab, setSelectedTab] = useState(0)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(1500).then(() => {
            setRefreshing(false)
        })
    }, [refreshing])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: symbol,
        })
    }, [symbol])

    const BASE_URL = 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary?'
    useEffect(() => {
        const getSummary = async () => {
            let res = await axios.get(
                `${BASE_URL}${Region}US${KEY_URL}${key}${host}&symbol=${symbol}`
            )
            let data = res.data
            setData(data)
        }

        getSummary()
    }, [symbol])

    const {
        name = data?.quoteType?.longName,
        preMarketPrice = data?.price?.preMarketPrice,
        postMarketPrice = data?.price?.postMarketPrice,
        regularMarketPrice = data?.price?.regularMarketPrice,
        preMarketChange = data?.price?.preMarketChange,
        postMarketChange = data?.price?.postMarketChange,
        regularMarketChange = data?.price?.regularMarketChange,
        regularMarketChangePercent = data?.price?.regularMarketChangePercent,
        postMarketChangePercent = data?.price?.postMarketChangePercent,
        preMarketChangePercent = data?.price?.preMarketChangePercent,
        currencySymbol = data?.price?.currencySymbol,
        longName = data?.quoteType?.longName,
        ticker = data.symbol,
        type = data?.quoteType?.quoteType,
    } = data

    return (
        <SafeAreaView style={[tw`flex-1 bg-white`]}>
            <ScrollView
                style={tw`flex-1`}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="green"
                        colors={['red']}
                    />
                }
            >
                <View style={tw`flex flex-row justify-between`}>
                    <View style={tw`flex flex-col justify-between ml-2 pl-4`}>
                        <Text
                            style={tw`font-semibold text-black text-base pt-3`}
                        >
                            {name || longName}
                        </Text>

                        <Text style={tw`text-3xl font-semibold text-black`}>
                            {symbol}
                        </Text>
                        <View style={tw`flex flex-row pt-1`}>
                            <Text style={tw`text-3xl font-semibold text-black`}>
                                {currencySymbol}
                                {postMarketPrice?.fmt ||
                                regularMarketPrice?.fmt ||
                                preMarketPrice?.fmt
                                    ? preMarketPrice?.fmt ||
                                      postMarketPrice?.fmt ||
                                      regularMarketPrice?.fmt
                                    : '-'}
                            </Text>
                        </View>
                    </View>
                    <View style={tw`flex pt-4 pr-4 mr-2`}>
                        <Text>{type}</Text>
                    </View>
                </View>
                {regularMarketChangePercent?.fmt && (
                    <View style={tw`flex flex-row items-center pl-4 ml-2 pt-2`}>
                        <Text
                            style={tw`text-base text-green-700 font-semibold`}
                        >
                            {currencySymbol}
                            {regularMarketChange?.fmt}
                        </Text>
                        <Text
                            style={tw`text-base text-green-700 font-semibold pl-3 pr-2`}
                        >
                            ({regularMarketChangePercent?.fmt})
                        </Text>
                        <Text style={tw`text-black text-base`}>
                            Today Hours
                        </Text>
                    </View>
                )}
                {postMarketChangePercent?.fmt && (
                    <View style={tw`flex flex-row items-center`}>
                        <Text
                            style={tw`text-base text-green-700 font-semibold pl-4 ml-2`}
                        >
                            {currencySymbol}
                            {preMarketChange?.fmt || postMarketChange?.fmt}
                        </Text>
                        <Text
                            style={tw`text-base text-green-700 font-semibold pl-3 pr-2`}
                        >
                            (
                            {preMarketChangePercent?.fmt ||
                                postMarketChangePercent?.fmt}
                            )
                        </Text>
                        <Text style={tw`text-black text-base`}>
                            After Hours
                        </Text>
                    </View>
                )}
                <View style={tw`p-3`}>
                    <Image
                        style={{
                            height: 225,
                            width: 'auto',
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: 'https://www.freeiconspng.com/uploads/blue-line-png-1.png',
                        }}
                    />
                    {/* <Graph item={item} height={400}/> */}
                    <Timeline />
                </View>
                {data?.ticker ? (
                    <View style={tw`pb-2`}>
                        <MyStocks item={data} />
                    </View>
                ) : null}
                <MaterialTabs
                    items={['Summary', 'Analysis', 'Financials']}
                    selectedIndex={selectedTab}
                    onChange={setSelectedTab}
                    barColor="rgb(127,31,255)"
                    indicatorColor="#f0f0f0f0"
                    activeTextColor="white"
                    indicatorHeight="4"
                    barHeight="40"
                    textStyle={tw`text-sm text-center tracking-wide`}
                />
                {selectedTab == 0 ? (
                    <View>
                        <KeyStats item={data} />
                        <Articles
                            category={symbol}
                            heading={'News'}
                            region={'US'}
                            limit={'5'}
                        />
                        <Recommendation symbol={symbol} />
                    </View>
                ) : null}
                {selectedTab == 1 ? (
                    <View>
                        <Insight title={'Insights'} symbol={symbol} />
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    )
}

Stock.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
})
export default Stock
