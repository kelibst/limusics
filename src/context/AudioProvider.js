import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library';
import { createContext } from 'react/cjs/react.production.min';


export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            audioFiles: []
        }
    }

    perAlert = () => {
        Alert.alert("Permission Required!", "We need to read your audio files.", [{
            text: "Okay",
            onPress: () => this.getPermission()
        }, {
            text: 'cancel',
            onPress: () => console.log("Cancelled")
        }])
    }

    getAudioFiles = async () => {
        const media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        })

        this.setState({
            ...this.state,
            audioFiles: media.assets
        })
    }

    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        const { status , canAskAgain, granted } = permission;

        permission.granted && this.getAudioFiles()
        if (!permission.granted && permission.canAskAgain ) {
           const { status , canAskAgain } =  await MediaLibrary.requestPermissionsAsync()
           if(status === 'denied' && canAskAgain) {
            this.perAlert()
           }
        }

        status === "granted" && this.getAudioFiles()
    }
    componentDidMount(){
        this.getPermission()
    }
    render() {
        return (
            <AudioContext.Provider value={{audioFiles: this.state.audioFiles}}>
               {this.props.children}
            </AudioContext.Provider>
        )
    }
}
 
export default AudioProvider
