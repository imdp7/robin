import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    FlatList,
    RefreshControl,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import DailyMovers from '../Components/DailyMovers'
import TrendingTicker from '../Components/TrendingTicker'
import { wait } from '../Components/Articles'
const data = [
    {
        market: 'USA',
        name: 'US',
        id: '1',
    },
    {
        market: 'Europe',
        name: 'EU',
        id: '2',
    },
    {
        market: 'Asia',
        name: 'ASIA',
        id: '3',
    },
]
const Search = () => {
    const [market, setMarket] = useState(data[0].name)
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(2500).then(() => setRefreshing(false))
    }, [refreshing])

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="green"
                        colors={['red']}
                    />
                }
            >
                <View style={tw`pt-5`}>
                    <Text style={tw`text-black text-2xl pl-4 mt-4 pb-5`}>
                        Market
                    </Text>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        extraData={market}
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => (
                            <View style={[tw`bg-gray-500`]} />
                        )}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setMarket(item.name)}
                                style={[
                                    tw`flex flex-row m-2 rounded border-b border-gray-100 border-opacity-25 items-center`,
                                    item.name === market && tw`bg-black`,
                                ]}
                            >
                                <View style={tw`flex-1`}>
                                    <View
                                        style={tw`flex flex-row justify-between text-center items-center`}
                                    >
                                        <View
                                            style={tw`flex flex-col text-left w-24`}
                                        >
                                            <Text
                                                style={[
                                                    tw`pl-2 pr-2 pt-1 pb-1 text-base text-center font-bold`,
                                                    item.name === market &&
                                                        tw`text-white`,
                                                ]}
                                            >
                                                {item.market}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <TrendingTicker market={market} />
                <DailyMovers market={market} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search
