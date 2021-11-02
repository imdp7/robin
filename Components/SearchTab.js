import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';

const SearchTab = () => {

	const [search, setSearch] = useState(null)

	return (
		<View>
			<SearchBar
        	placeholder="Type Here..."
        	onChangeText={this.updateSearch}
        	value={search}
      			/>
		</View>
	)
}

export default SearchTab
