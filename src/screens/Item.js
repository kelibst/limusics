import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles';
import { FontAwesome } from '@expo/vector-icons';
import { autoGenHex, convertMinsToHrsMins, getThumbNail } from '../funtionalities/funtionalities';

const Item = ({ item, onPress, sel, isPlaying }) => { 
  return (
    <TouchableOpacity onPress={onPress} style={[globalStyles.itemStyle, sel && {borderWidth: 1, borderColor: "blue"}]}>
      <View  style={[globalStyles.thumb, autoGenHex()]}><Text style={globalStyles.thumbnail}>{getThumbNail(item.filename)}</Text></View>
      <View style={globalStyles.itemCont}>
        <Text numberOfLines={1}  style={globalStyles.title}>{item.filename}</Text>
        <Text style={globalStyles.mins}>{convertMinsToHrsMins(item?.duration)}</Text>
      </View>
      
      
      <FontAwesome name={isPlaying && sel ? "pause-circle" : "play-circle-o"} size={34} color={sel ? "blue" : "black"} style={globalStyles.playIcon}/>
    </TouchableOpacity>
  )};


const areEqual = (prevProps, nextProps) => {

  
  const { sel } = nextProps;
  const { sel: prevIsSelected } = prevProps;
  
  /*if the props are equal, it won't update*/
  const isSelectedEqual = sel === prevIsSelected;  
  return isSelectedEqual;
};

export default React.memo(Item, areEqual)
