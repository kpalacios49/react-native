import React from 'react'
import { Button, View } from 'react-native'

export default function CategoryScreen({ navigation }) {
  return (
    <View>
        <Button title='ir a productos' onPress={() => navigation.navigate('CategoryBread')}></Button>
    </View>
  )
}
