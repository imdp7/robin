import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import Timeline from './Timeline'
import { db } from '../firebase'

const Investing = () => {
    const [account, setAccount] = useState(null)

    useEffect(() => {
        fetchAccount()
    }, [])

    const fetchAccount = async () => {
        const response = db.collection(
            `users/V15HmhTXvZMSRGwWsrPWGsBv8zs1/account`
        )
        const data = await response.get()
        data.docs.forEach((item) => {
            setAccount(item.data())
        })
    }

    const balance = (money) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(money)

    return (
        <View style={tw`p-2`}>
            <View style={tw`flex flex-row justify-between m-2`}>
                <Text style={tw`font-bold text-black text-3xl`}>
                    Investing
                </Text>
                <TouchableOpacity>
                    <View
                        style={tw`flex flex-row border border-green-700 rounded-2xl border-opacity-50 bg-green-100 p-1`}
                    >
                        <Icon
                            name="gift-sharp"
                            type="ionicon"
                            color="green"
                            style={tw`py-2 px-1`}
                        />
                        <Text
                            style={tw`font-bold text-green-600 text-sm px-1.5 py-1.5 items-baseline`}
                        >
                            Rewards
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={tw`text-3xl  font-semibold text-black pt-3 pl-2`}>
                {balance(account?.balance)}
            </Text>
            <View style={tw`flex flex-row items-center pt-2`}>
                <Text style={tw`text-base text-green-700 font-semibold pl-3`}>
                    $12,345.18
                </Text>
                <Text
                    style={tw`text-base text-green-700 font-semibold pl-3 pr-3`}
                >
                    (+2.34%)
                </Text>
                <Text style={tw`text-black text-base`}>Today Hours</Text>
            </View>
            <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-base text-green-700 font-semibold pl-3`}>
                    $2,345.18
                </Text>
                <Text
                    style={tw`text-base text-green-700 font-semibold pl-3 pr-3`}
                >
                    (+0.34%)
                </Text>
                <Text style={tw`text-black text-base`}>After Hours</Text>
            </View>
            <View>
                <Image
                    style={{
                        height: 200,
                        width: 'auto',
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: 'https://www.freeiconspng.com/uploads/blue-line-png-1.png',
                    }}
                />
                <Timeline />
                <View style={tw`border-b border-gray-400 p-2`}>
                    <View style={tw`flex flex-row p-2 justify-between`}>
                        <View>
                            <Text style={tw`text-black font-normal text-base`}>
                                Buying Power
                            </Text>
                        </View>
                        <View style={tw`flex flex-row justify-around`}>
                            <Text style={tw`text-black font-normal text-base`}>
                                {balance(account?.cash)}
                            </Text>
                            <Icon name="chevron-right" type="fontawesome" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Investing
