import { Audio } from 'expo-av';
const handleMusic = async (item, setMusic, music) => {
    const { soundObj, playbackObj, currentAudio } = music

    if(soundObj === null ){
        const playBackObj = new Audio.Sound()
        const status = await playBackObj.loadAsync({uri: item.uri}, {shouldPlay: true})
    
       return  setMusic({
            ...music,
            soundObj: status,
            playbackObj: playBackObj,
            currentAudio: item
        })

    }

    if (soundObj.isLoaded && soundObj.isPlaying){
        const status = await playbackObj.setStatusAsync({
            shouldPlay: false
        })
        return  setMusic({
            ...music,
            soundObj: status,
        }) 
    }else if(soundObj.isLoaded && !soundObj.isPlaying && currentAudio.id === item.id) {
       const status =  playbackObj.playAsync();
       return  setMusic({
        soundObj: status
    })
    }
}

export { handleMusic }