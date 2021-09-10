import React from 'react';
import { KeyboardAvoidingView,Platform,Image} from 'react-native';
import {Provider} from 'react-redux'
import {store} from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen';
import Search from './Screens/Search';
import Profile from './Screens/Profile'
import News from './Screens/News';
import {Icon} from 'react-native-elements'

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();


  return (
    <Provider store={store}>
  <NavigationContainer>
    <SafeAreaProvider>
    <KeyboardAvoidingView 
      style={{flex: 1}}
      behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS ==='ios' ? -64 :0}
      >
      
    <Tab.Navigator
      initialRouteName='Home'
      
      barStyle={{ backgroundColor: '#000000',paddingBottom: 48,position: 'absolute' }}
        >
      <Tab.Screen 
        name='Home'
        component={HomeScreen}
        options={{headerShown:false,lazyLoad: true,
          tabBarIcon: () => {
              return (
                <Icon name='home-outline' type='ionicon' color='black' size={20}/>
              );
            },
        }}
        
      />
      
     <Tab.Screen 
        name='News'
        component={News}
        options={{headerShown:false,
          tabBarIcon: () => {
              return (
                <Icon name='newspaper-outline' type='ionicon' color='black' size={20}/>
              );
            },
        }}
        />
      <Tab.Screen 
        name='Search'
        component={Search}
        options={{headerShown:false,
          tabBarIcon: () => {
              return (
                <Icon name='search-outline' type='ionicon' color='black' size={20}/>
              );
            },
        }}
        />
        <Tab.Screen 
        name='Profile'
        component={Profile}
        options={{headerShown:false,
          tabBarIcon: () => {
              return (
                <Icon name='person-outline' type='ionicon' color='black' size={20}/>
              );
            },
        }}
        />
    </Tab.Navigator>

    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}
