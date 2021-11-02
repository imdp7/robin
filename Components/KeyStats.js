import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { ListItem } from 'react-native-elements'

const styles = {
	color: 'black',
  fontSize: 15
}
const KeyStats = ({item}) => {
	return (
		<View style={tw`flex flex-col p-2 mt-3`}>
		<View>

			<Text style={tw`text-black text-2xl font-semibold`}>Key Statistics</Text>
		</View>
		<View>
  
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>Previous Close</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.summaryDetail?.previousClose?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>Open</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.price?.regularMarketOpen?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>Volume</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.price?.regularMarketVolume?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>High</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.summaryDetail?.dayHigh?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>Low</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.summaryDetail?.dayLow?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>52 Week High</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.summaryDetail?.fiftyTwoWeekHigh?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>52 Week Low</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.summaryDetail?.fiftyTwoWeekLow?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>52 Day Avg</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.summaryDetail?.fiftyDayAverage?.fmt}</ListItem.Title>
      </ListItem>
      <ListItem bottomDivider containerStyle={{backgroundColor:"white"}} titleStyle={{backgroundColor:"white"}}>
        <ListItem.Content>
          <ListItem.Title style={styles}>52 Day Avg</ListItem.Title>
        </ListItem.Content>
        <ListItem.Title style={styles}>{item?.info?.summaryDetail?.fiftyDayAverage?.fmt}</ListItem.Title>
      </ListItem>
</View>
			
		</View>
	)
}

export default KeyStats
