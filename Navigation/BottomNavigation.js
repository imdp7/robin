import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile'
import News from '../Screens/News';
import {Icon} from 'react-native-elements'

const BottomNavigation = () => {

	const Tab = createMaterialBottomTabNavigator();

	return (
		<Tab.Navigator
      initialRouteName={'Home'}

      activeColor="#000000"
      inactiveColor="#808080"
      barStyle={{ backgroundColor: '#ffffff' }}
        >
      <Tab.Screen 
        name='Home'
        component={HomeScreen}
        options={{headerShown:false,lazyLoad: true,
          tabBarIcon: ({color}) => {
              return (
                <Icon name='home-outline' type='ionicon' color={color} size={20}/>
              );
            },
        }}
        
      />
     <Tab.Screen 
        name='News'
        component={News}
        options={{headerShown:false,
          tabBarIcon: ({color}) => {
              return (
                <Icon name='newspaper-outline' type='ionicon' color={color} size={20}/>
              );
            },
        }}
        />
      <Tab.Screen 
        name='Search'
        component={Search}
        options={{headerShown:false,
          tabBarIcon: ({color}) => {
              return (
                <Icon name='search-outline' type='ionicon' color={color} size={20}/>
              );
            },
        }}
        />
        <Tab.Screen 
        name='Profile'
        component={Profile}
        options={{headerShown:false,
          tabBarIcon: ({color}) => {
              return (
                <Icon name='person-outline' type='ionicon' color={color} size={20}/>
              );
            },
        }}
        />
    </Tab.Navigator>
	)
}

export default BottomNavigation
