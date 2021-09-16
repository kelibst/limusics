import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles';


const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[globalStyles.itemStyle]}>
      <Text style={globalStyles.title}>{item.filename}</Text>
    </TouchableOpacity>
  );


export default Item
