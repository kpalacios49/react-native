import React from 'react'
import { Button, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Category from '../components/Category'
import { selectCategory } from '../store/actions/category.action';

export default function CategoryScreen({ navigation }) {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories.categories)

  const handleCLick = (id) => {
    dispatch(selectCategory(id))
    navigation.navigate('CategoryBread')
  }

  return (
    <View>
        { categories.map( data => (
          <Category data={data} handleCLick={handleCLick}></Category>
        ))}
    </View>
  )
}
