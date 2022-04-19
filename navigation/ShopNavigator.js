import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import CategoryScreen from '../screens/CategoryScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'


const Stack = createNativeStackNavigator();

export default function ShopNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Category'>
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="CategoryBread" component={CategoryBreadScreen} />
            <Stack.Screen name="BreadDetail" component={BreadDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
