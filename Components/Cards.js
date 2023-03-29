import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Plot from './Plot'

const Cards = ({ heading, symbol }) => {
    return (
        <SafeAreaView>
            <View>
                <Card>
                    <Card.Title>{heading}</Card.Title>
                    <Button>{symbol}</Button>
                    <Card.Divider />
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default Cards
