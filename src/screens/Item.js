import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles';
import { FontAwesome } from '@expo/vector-icons';
import { autoGenHex, convertMinsToHrsMins, getThumbNail } from '../funtionalities/funtionalities';

const Item = ({ item, onPress, sel }) => (
    <TouchableOpacity onPress={onPress} style={[globalStyles.itemStyle, sel && {borderWidth: 1, borderColor: "blue"}]}>
      <View  style={[globalStyles.thumb, autoGenHex()]}><Text style={globalStyles.thumbnail}>{getThumbNail(item.filename)}</Text></View>
      <View style={globalStyles.itemCont}>
        <Text numberOfLines={1}  style={globalStyles.title}>{item.filename}</Text>
        <Text style={globalStyles.mins}>{convertMinsToHrsMins(item?.duration)}</Text>
      </View>
      
      
      <FontAwesome name="play-circle-o" size={34} color={sel ? "blue" : "black"} style={globalStyles.playIcon}/>
    </TouchableOpacity>
  );


export default Item
