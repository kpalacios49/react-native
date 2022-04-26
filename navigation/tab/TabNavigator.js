import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigation from '../cart/CartNavigator'
import ShopNavigator from '../shop/ShopNavigator'
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';

const BottomTabs = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator initialRouteName="Shop" screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
        <BottomTabs.Screen
          name="Shop"
          component={ShopNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBar}>
                <AiOutlineShop></AiOutlineShop>
                <Text>Negocio</Text>
              </View>
            )
          }}
        />
        <BottomTabs.Screen
          name="Cart"
          component={CartNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBar}>
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <Text>Carrito</Text>
              </View>
            )
          }} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})