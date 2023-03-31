import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const ItemState = ({ trend, title }) => {
    if (trend === 'UP') {
        return (
            <View style={tw`flex flex-col justify-center text-center p-2 m-2`}>
                <Text style={tw`text-lg`}>{title}</Text>
                <Text style={tw`text-lg text-green-600 m-2`}>
                    UP <Icon name="arrow-up-sharp" type="ionicon" />
                </Text>
            </View>
        )
    } else if (trend === 'DOWN') {
        return (
            <View style={tw`flex flex-col justify-center text-center p-2 m-2`}>
                <Text style={tw`text-lg`}>{title}</Text>
                <Text style={tw`text-lg text-red-600 m-2`}>
                    DOWN <Icon name="arrow-down-sharp" type="ionicon" />
                </Text>
            </View>
        )
    }
}
export default function PageViews({ data }) {
    const {
        shortTerm = data?.pageViews?.shortTermTrend,
        midTerm = data?.pageViews?.midTermTrend,
        longTerm = data?.pageViews?.longTermTrend,
    } = data
    return (
        <View style={tw`flex`}>
        {shortTerm || midTerm || longTerm ? (
            <>
            <Text style={tw`text-black font-bold text-2xl mt-4 pl-2`}>
                Trends
            </Text>
            <View style={tw`flex flex-row justify-around pl-2 m-2`}>
                <ItemState trend={shortTerm} title={'Short Term'} />
                <ItemState trend={midTerm} title={'Mid Term'} />
                <ItemState trend={longTerm} title={'Long Term'} />
            </View>
            </>
            ): null}
        </View>
    )
}
