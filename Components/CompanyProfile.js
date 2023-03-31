import { View, Text, Linking } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

function separateComma(val) {
    // remove sign if negative
    var sign = 1
    if (val < 0) {
        sign = -1
        val = -val
    }
    // trim the number decimal point if it exists
    let num = val?.toString().includes('.')
        ? val?.toString().split('.')[0]
        : val?.toString()
    let len = num?.toString().length
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
    if (val?.toString().includes('.')) {
        result = result + '.' + val?.toString().split('.')[1]
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
        <View style={tw`mb-12`}>
            {summary ? (
                <View style={tw`flex`}>
                    <Text
                        style={tw`text-black font-bold text-2xl mt-4 pl-3 pb-2`}
                    >
                        Company Profile
                    </Text>
                    {longName ? (
                        <View>
                            <Text
                                style={tw`text-black font-semibold text-xl pl-3 pb-3 pb-1`}
                            >
                                {longName}
                            </Text>
                        </View>
                    ) : null}
                    {address1 ? (
                        <View>
                            <Text
                                style={tw`text-black font-normal text-base pl-3 pb-1`}
                            >
                                {address1}
                            </Text>
                        </View>
                    ) : null}
                    {address2 ? (
                        <View>
                            <Text
                                style={tw`text-black font-normal text-base pl-3 pr-2 pb-1`}
                            >
                                {address2}
                            </Text>
                        </View>
                    ) : null}
                    {city && country ? (
                        <View>
                            <Text
                                style={tw`text-black font-normal text-base pl-3 pr-2 pb-1`}
                            >
                                {city}, {country}
                            </Text>
                        </View>
                    ) : null}
                    {phone ? (
                        <Text
                            style={tw`text-black font-normal text-base pl-3 pr-2 pb-1`}
                        >
                            {phone}
                        </Text>
                    ) : null}
                    {website ? (
                        <Text
                            style={tw`text-black font-normal text-base pl-3 pr-2 pb-1`}
                        >
                            {website}
                        </Text>
                    ) : null}
                    {sector ? (
                        <Text
                            style={tw`text-black font-normal text-base pl-3 pr-2 pb-1`}
                        >
                            Sector(s):{' '}
                            <Text style={tw`font-bold`}>{sector}</Text>
                        </Text>
                    ) : null}
                    {industry ? (
                        <Text
                            style={tw`text-black font-normal text-base pl-3 pr-2 pb-1`}
                        >
                            Industry:{' '}
                            <Text style={tw`font-bold`}>{industry}</Text>
                        </Text>
                    ) : null}
                    {employees ? (
                        <Text
                            style={tw`text-black font-normal text-base pl-3 pb-3 pr-2`}
                        >
                            Full time employee:{' '}
                            <Text style={tw`font-bold`}>
                                {separateComma(employees)}
                            </Text>
                        </Text>
                    ) : null}
                    {summary ? (
                        <Text
                            style={tw`text-black font-normal text-base pl-3 pb-3 pr-2`}
                        >
                            {summary}
                        </Text>
                    ) : null}
                </View>
            ) : null}
        </View>
    )
}
