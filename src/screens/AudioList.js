import React, { useContext, useState} from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { AudioContext } from '../context/AudioProvider'
import { globalStyles } from '../styles/globalStyles'
import Item from './Item'

export default function AudioList() {
    const audioFiles = useContext(AudioContext)
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        let sel = item.id === selectedId ?  true : false;
        return <Item item={item} onPress={() => setSelectedId(item.id)} sel={sel} />;
      };
    return (
        <SafeAreaView style={globalStyles.container}>
        <FlatList 
            data={audioFiles.audioFiles}
            initialNumToRender={5}
            renderItem = {renderItem}
            keyExtractor={item =>  item.id}
            extraData={selectedId}
            />
        </SafeAreaView>
    )
}
