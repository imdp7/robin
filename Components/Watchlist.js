import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Chip } from '@rneui/themed'
import { TRENDING_URL, key, host, Region } from '../api'
import axios from 'axios'

const BASE_URL =
    'https://yh-finance.p.rapidapi.com/market/get-popular-watchlists?'
const KEY_URL = `region=US&rapidapi-key=${key}${host}`

export default function Watchlist() {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        const getPopular = async () => {
            let response = await axios.request(`${BASE_URL}${KEY_URL}`)
            let data = response.data.finance.result[0]
            setPopular(data)
        }
        getPopular()
    }, [])
    return (
        <View style={tw`p-2`}>
            {popular && (
                <>
                    <View style={tw`flex flex-row justify-between m-2`}>
                        <Text style={tw`font-bold text-black text-2xl`}>
                            {popular.name}
                        </Text>
                    </View>
                    <FlatList
                        horizontal
                        style={[styles.container, tw`flex`]}
                        data={popular?.portfolios}
                        keyExtractor={(item) => item?.slug}
                        renderItem={({ item }) => (
                            <Chip
                                style={[styles.chip, tw`p-2 m-2 flex`]}
                                title={item?.name}
                                key={item?.slug}
                                icon={{
                                    name: 'albums-outline',
                                    type: 'ionicon',
                                    size: 20,
                                }}
                                onPress={() => console.log(p.name)}
                                type="outline"
                            />
                        )}
                    ></FlatList>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({

    chip: {
       width:150,
       alignItems:'center',
        alignContent:'center',
       marginHorizontal: 5,
    },
})
