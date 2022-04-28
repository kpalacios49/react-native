import React, { useEffect} from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Bread from '../components/Breads';
import { filterBread, selectBread } from '../store/actions/bread.action';

export default function CategoryBreadScreen({ navigation }) {

  const categorySelected = useSelector(state => state.categories.selected)
  const filteredBread = useSelector(state => state.breads.filteredBread)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterBread(categorySelected.id))
  }, [categorySelected])

  const handleCLick = (id) => {
    dispatch(selectBread(id))
    navigation.navigate('BreadDetail')
  }

  return (
    <View>
        <Text>{categorySelected.name}</Text>
        { filteredBread.map( data => (
          <Bread data={data} handleCLick={handleCLick}></Bread>
        ))}
    </View>
  )
}
