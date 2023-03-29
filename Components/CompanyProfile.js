import { View, Text, Linking } from 'react-native'
import React from 'react'
import { TRENDING_URL, key, host, KEY_URL, Region } from '../api'
import axios from 'axios'
import { useRoute, useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'

function separateComma(val) {
    // remove sign if negative
    var sign = 1
    if (val < 0) {
        sign = -1
        val = -val
    }
    // trim the number decimal point if it exists
    let num = val.toString().includes('.')
        ? val.toString().split('.')[0]
        : val.toString()
    let len = num.toString().length
    let result = ''
    let count = 1

    for (let i = len - 1; i >= 0; i--) {
        result = num.toString()[i] + result
        if (count % 3 === 0 && count !== 0 && i !== 0) {
            result = ',' + result
        }
        count++
    }

    // add number after decimal point
    if (val.toString().includes('.')) {
        result = result + '.' + val.toString().split('.')[1]
    }
    // return result with - sign if negative
    return sign < 0 ? '-' + result : result
}

export default function CompanyProfile(props) {
    const {
        longName = props.data?.quoteType?.longName,
        address1 = props.data?.summaryProfile?.address1,
        address2 = props.data?.summaryProfile?.address2,
        city = props.data?.summaryProfile?.city,
        country = props.data?.summaryProfile?.country,
        phone = props.data?.summaryProfile?.phone,
        website = props.data?.summaryProfile?.website,
        sector = props.data?.summaryProfile?.sector,
        industry = props.data?.summaryProfile?.industry,
        employees = props.data?.summaryProfile?.fullTimeEmployees,
        summary = props.data?.summaryProfile?.longBusinessSummary,
    } = props.data
    return (
        <View>
            <Text style={tw`text-black font-semibold text-2xl mt-4 pl-2 pb-3`}>
                Company Profile
            </Text>
            <View style={tw`flex`}>
                <Text style={tw`text-black font-semibold text-xl pl-2 pb-3`}>
                    {longName}
                </Text>
                <Text style={tw`text-black font-normal text-base pl-2`}>
                    {address1}
                </Text>
                {address2 && (
                    <Text style={tw`text-black font-normal text-base pl-2`}>
                        {address2}
                    </Text>
                )}
                <Text style={tw`text-black font-normal text-base pl-2`}>
                    {city}
                    {', '}
                    {country}
                </Text>
                <Text style={tw`text-black font-normal text-base pl-2`}>
                    {phone}
                </Text>
                <Text style={tw`text-black font-normal text-base pl-2`}>
                    {website}
                </Text>
                <Text style={tw`text-black font-normal text-base pl-2`}>
                    Sector(s): {sector}
                </Text>
                <Text style={tw`text-black font-normal text-base pl-2`}>
                    Industry: {industry}
                </Text>
                <Text style={tw`text-black font-normal text-base pl-2 pb-3`}>
                    Full time employee: {separateComma(employees)}
                </Text>
                <Text style={tw`text-black font-normal text-base pl-2 pb-3`}>
                    {summary}
                </Text>
            </View>
        </View>
    )
}
