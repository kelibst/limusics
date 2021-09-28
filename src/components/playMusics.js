import { Audio } from 'expo-av';


const handleMusic = async (item, updateState, currentState) => {
    
    // play the audio for the first time
    const { soundObj, playbackObj, currentAudio } = currentState
    
    console.log("handlemusic",soundObj?.isPlaying)
    if(soundObj === null && Object.keys(currentAudio).length === 0){
        const playBackObj = new Audio.Sound()
        const status = await playBackObj.loadAsync({uri: item.uri}, {shouldPlay: true})
    // console.log(status, "status")
       return  updateState(currentState,{
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
        return  updateState(currentState,{
            soundObj: status,
            playing: false,
        }) 
    }
     if(soundObj.isLoaded && !soundObj.isPlaying && currentAudio.id === item.id) {
        // resume the audio when necessary
       const status = await  playbackObj.playAsync();
       return  updateState(currentState, {
        soundObj: status,
        currentAudio: item,
        playing: true,
        playingModal: true
    })
    }
     if(soundObj.isLoaded  && currentAudio.id !== item.id) {
         await  playbackObj.stopAsync();
         await playbackObj.unloadAsync()
         const status = await playbackObj.loadAsync({uri: item.uri}, {shouldPlay: true})
         return  updateState(currentState,{
            soundObj: status,
            currentAudio: item,
            playing: true,
            playingModal: true
        })
    }
}

export { handleMusic }