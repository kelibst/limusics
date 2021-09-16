import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles';
import { FontAwesome } from '@expo/vector-icons';

const getThumbNail = filename => {
  let res =  (/[a-zA-Z]/).test(filename[0]) ?  filename[0] : "U"
  return res
} 
const autoGenHex = () => {
  const hexNum = Math.floor(Math.random()*16777215).toString(16);
  return {backgroundColor: "#" + hexNum}
}

const convertMinsToHrsMins = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return `${h}:${m}`;
}

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[globalStyles.itemStyle]}>
      <View  style={[globalStyles.thumb, autoGenHex()]}><Text style={globalStyles.thumbnail}>{getThumbNail(item.filename)}</Text></View>
      <View style={globalStyles.itemCont}>
        <Text numberOfLines={1}  style={globalStyles.title}>{item.filename}</Text>
        <Text style={globalStyles.mins}>{convertMinsToHrsMins(item?.duration)}</Text>
      </View>
      
      
      <FontAwesome name="play-circle-o" size={34} color="black" style={globalStyles.playIcon}/>
    </TouchableOpacity>
  );


export default Item
