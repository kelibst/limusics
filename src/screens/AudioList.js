import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import PlayerModel from "../components/PlayerModal";
import { handleMusic } from "../components/playMusics";
import { AudioContext } from "../context/AudioProvider";
import { globalStyles } from "../styles/globalStyles";
import Item from "./Item";

const AudioList = () => {
  const cont = useContext(AudioContext);
  const [selectedId, setSelectedId] = useState(null);
    const { updateState, currentState } = cont;
  const onPlayBackStatusUpdate = playbackStatus => {
      playbackStatus?.isLoaded && playbackStatus.isPlaying && updateState(currentState, {
       timers:{
            playbackPosition: playbackStatus?.positionMillis,
            playbackDuration: playbackStatus?.durationMillis,
       }
      })
  }

  const onCloseModal = () => {
    currentState?.playingModal && updateState(cont.currentState,{
      playingModal: false,
    });
  };

  const renderItem = ({ item }) => {
    let sel = item.id === selectedId ? true : false;
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          handleMusic(item, updateState, cont.currentState);
        }}
        sel={sel}
        isPlaying={cont.currentState.playing}
      />
    );
  };
  
  useEffect(() => {
   console.log(currentState.currentAudio, currentState?.currentAudio.length === 0 )
    !currentState?.soundObj?.isPlaying &&
      cont.currentState.playing &&
      updateState(cont.currentState, {
        playing: false,
      });
      // console.log(currentState?.soundObj?.isPlaying)
      Object.keys(currentState?.currentAudio).length === 0 && currentState.playingModal && updateState(currentState, {
        currentAudio: currentState?.audioFiles[0]
      })
   currentState?.soundObj?.isPlaying &&  currentState.playbackObj.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate)
  }, [currentState.soundObj, currentState.playbackObj, currentState?.currentAudio]);
 
  
  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={currentState.audioFiles}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <PlayerModel
        visible={cont.currentState.playingModal}
        closeModal={onCloseModal}
        propss={cont}
      />
    </SafeAreaView>
  );
}

export default (AudioList)