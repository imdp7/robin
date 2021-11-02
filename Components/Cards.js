import React from 'react'
import { View, Text, Image,SafeAreaView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Plot from './Plot'

const Cards = ({heading,route}) => {
	return (
		<SafeAreaView>
		<View>
			<Card containerStyle={{backgroundColor:'black',flexWrap:'wrap'}}>
  	<Card.Title>{heading}</Card.Title>
  	<Card.Divider/>

	</Card>
		</View>
		</SafeAreaView>
	)
}

export default Cards
