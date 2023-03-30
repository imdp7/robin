import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { SpeedDial } from 'react-native-elements'

const Trade = ({ data, ticker }) => {
    const [open, setOpen] = useState(true)

    return (
        <View
            style={tw`p-1 flex flex-row justify-between items-center p-2 m-2`}
        >
            <View>
                <Text style={tw`pl-2 pt-2 text-black text-center`}>
                    Today's Volume
                </Text>
                <Text style={tw`pl-2 text-black text-center`}>
                    {data?.price?.regularMarketVolume?.fmt}
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    {ticker ? (
                        <View
                            style={tw`border bg-purple-600 border-purple-300 rounded-lg border-opacity-50`}
                        >
                            <Text
                                style={tw`pt-2 p-3 w-48 text-white text-center font-bold`}
                            >
                                Trade
                            </Text>
                        </View>
                    ) : (
                        <View
                            style={tw`border bg-purple-600 border-purple-300 rounded-lg border-opacity-50`}
                        >
                            <Text
                                style={tw`pt-2 p-3 w-48 text-white text-center font-bold`}
                            >
                                Buy
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Trade
