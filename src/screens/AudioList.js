import React, { useContext, useState} from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import PlayerModel from '../components/PlayerModal'
import { handleMusic } from '../components/playMusics'
import { AudioContext } from '../context/AudioProvider'
import { globalStyles } from '../styles/globalStyles'
import Item from './Item'

export default function AudioList() {
    const cont = useContext(AudioContext)
    const [selectedId, setSelectedId] = useState(null);
    // console.log(cont.currentState.playingModal)
    const onCloseModal = () => {
        updateState({
            ...cont.currentState,
            playingModal: false
        })
    }
    const { updateState } = cont
    const renderItem = ({ item }) => {
        let sel = item.id === selectedId ?  true : false;
        return <Item item={item} onPress={() => {
            setSelectedId(item.id)
            handleMusic(item, updateState, cont.currentState)
        }} sel={sel} isPlaying={cont.currentState.playing}/>;
      };
    return (
        <SafeAreaView style={globalStyles.container}>
        <FlatList 
            data={cont.currentState.audioFiles}
            initialNumToRender={5}
            renderItem = {renderItem}
            keyExtractor={item =>  item.id}
            extraData={selectedId}
            />
            <PlayerModel visible={cont.currentState.playingModal} closeModal={onCloseModal} propss={cont} />
        </SafeAreaView>
    )
}
