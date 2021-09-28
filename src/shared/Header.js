import React, {useContext} from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getHeaderTitle } from '@react-navigation/elements';
import { FontAwesome } from '@expo/vector-icons'; 
import { AudioContext } from "../context/AudioProvider";

const Header = ({route, options,}) => {
    const title = getHeaderTitle(options, route.name);
    const cont = useContext(AudioContext);

  const pressHandler = () => {
    console.log("press handleer reached")
    cont.updateState(cont.currentState, {
        playingModal: true,
    })
  };
  return (
    <SafeAreaView>
        <StatusBar />
      <View style={styles.header}>
        
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <TouchableOpacity onPress={pressHandler}>
        <FontAwesome name="play-circle" size={34} style={styles.icon} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginVertical: 15,
    paddingLeft: 20,
  },
  icon: {
   alignSelf: "center",
   paddingRight: 20
  },
});
