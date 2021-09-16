import React from 'react'
import { Text } from 'react-native'


const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[ style]}>
      <Text style={styles.title}>{item.filename}</Text>
      <Text>Sometext</Text>
    </TouchableOpacity>
  );


export default Item
