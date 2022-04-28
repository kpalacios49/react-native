import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function BreadDetailScreen() {

  const selectedBread = useSelector(state => state.breads.selected)

  return (
    <View>
      <Text>{selectedBread.name}</Text>
      <Text>{selectedBread.description}</Text>
    </View>
  )
}
