import React from 'react';
import { KeyboardAvoidingView,Platform,Image} from 'react-native';
import {Provider} from 'react-redux'
import {store} from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator';
import BottomNavigation from './Navigation/BottomNavigation';

export default function App() {

  return (
    <Provider store={store}>
  <NavigationContainer>
    <SafeAreaProvider>
    <KeyboardAvoidingView 
      style={{flex: 1}}
      behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS ==='ios' ? -64 :0}
      >
      
      <StackNavigator initialRouteName="BottomNavigation"/>
    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}
