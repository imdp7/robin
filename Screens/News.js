import React, { useState, useEffect } from 'react'
import {
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Text,
    RefreshControl,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Articles from '../Components/Articles'
import { wait } from '../Components/Articles'

const data = [
    {
        market: 'USA',
        name: 'US',
        id: '1',
    },
    {
        market: 'Canada',
        name: 'CA',
        id: '2',
    },
    {
        market: 'Britain',
        name: 'BR',
        id: '3',
    },
    {
        market: 'Hong Kong',
        name: 'HK',
        id: '4',
    },
    {
        market: 'India',
        name: 'IN',
        id: '5',
    },
    {
        market: 'France',
        name: 'FR',
        id: '6',
    },
]
const News = () => {
    const [market, setMarket] = useState(data[0])
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(1500).then(() => setRefreshing(false))
    }, [refreshing])

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View style={tw`pt-5`}>
                <Text style={tw`text-black text-3xl pl-4 mt-4 pb-5`}>
                    Top {market.market} News
                </Text>
                <FlatList
                    keyExtractor={(item) => item.name}
                    extraData={market}
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setMarket(item)}
                            style={[
                                tw`flex flex-row m-2 rounded border-b border-gray-100 border-opacity-25 items-center`,
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
                                                item.name === market.name &&
                                                    tw`text-purple-600 border-solid border-purple-600 rounded-2xl`,
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
                <Articles
                    limit={'25'}
                    region={market}
                    category={'generalnews'}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default News
