import React from 'react'
import { Button, View } from 'react-native'

export default function CategoryBreadScreen({ navigation }) {
  return (
    <View>
        <Button title='Go to bread detail' onPress={() => navigation.navigate('BreadDetail')}></Button>
    </View>
  )
}
