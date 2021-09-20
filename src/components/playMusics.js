import { Audio } from 'expo-av';
const handleMusic = async (item, updateState, music) => {
    // play the audio for the first time
    const { soundObj, playbackObj, currentAudio } = music
    if(soundObj === null ){
        const playBackObj = new Audio.Sound()
        const status = await playBackObj.loadAsync({uri: item.uri}, {shouldPlay: true})
    
       return  updateState({
            ...music,
            soundObj: status,
            playing: true,
            playbackObj: playBackObj,
            currentAudio: item,
            playingModal: true
        })
    }

    if (soundObj.isLoaded && soundObj.isPlaying && currentAudio.id === item.id){
        // pause the audio if it is already playing and the user clicks on the same audio
        const status = await playbackObj.setStatusAsync({
            shouldPlay: false
        })  
        return  updateState({
            ...music,
            soundObj: status,
            playing: false,
        }) 
    }
     if(soundObj.isLoaded && !soundObj.isPlaying && currentAudio.id === item.id) {
        // resume the audio when necessary
       const status = await  playbackObj.playAsync();
       return  updateState({
           ...music,
        soundObj: status,
        currentAudio: item,
        playing: true,
        playingModal: true
    })
    }
     if(soundObj.isLoaded && currentAudio.id !== item.id) {
         await  playbackObj.stopAsync();
         await playbackObj.unloadAsync()
         const status = await playbackObj.loadAsync({uri: item.uri}, {shouldPlay: true})
         return  updateState({
            ...music,
            soundObj: status,
            currentAudio: item,
            playing: true,
            playingModal: true
        })
    }
}

export { handleMusic }