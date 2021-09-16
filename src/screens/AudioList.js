import React, { useContext, useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { AudioContext } from '../context/AudioProvider'
import { globalStyles } from '../styles/globalStyles'
import Item from './Item'

export default function AudioList() {
    const audioFiles = useContext(AudioContext)
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.albumId === selectedId ? '#6e3b6e' : '#f9c2ff';
    
        return <Item item={item} onPress={() => setSelectedId(item.albumId)} style={{ backgroundColor }} />;
      };
    return (
        <SafeAreaView style={globalStyles.container}>
        <FlatList 
            data={audioFiles.audioFiles}
            renderItem = {renderItem}
            keyExtractor={item =>  item.id}
            extraData={selectedId}
            />
        </SafeAreaView>
    )
}
