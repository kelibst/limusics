import React from "react";
import { View, Text, Modal, SafeAreaView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 

const PlayerModel = ({ visible, propss, closeModal }) => { 
 
  return (
    <SafeAreaView>
      <Modal transparent={true}  animationType="slide" visible={visible}> 
      <TouchableWithoutFeedback  onPress={closeModal}>
        <View style={styles.modalContainer}>
        <View style={styles.playerContent}>
         
          <Text style={styles.albArt}>playing add shaffle</Text>
          
          <View style={styles.musiCtrls}>
          <TouchableOpacity>
              <AntDesign
                name={"banckward"}
                size={40}
                color={"black"}
                style={styles.playIcon}
              />
            </TouchableOpacity>

         
            <TouchableOpacity>
              <AntDesign
                name={"leftcircle"}
                size={40}
                color={"black"}
                style={styles.playIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome
                name={propss?.playing ? "play-circle-o" : "pause-circle"}
                size={80}
                color={"blue"}
                style={styles.playIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name={"rightcircle"}
                size={40}
                color={"black"}
                style={styles.playIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign
                name={"forward"}
                size={40}
                color={"black"}
                style={styles.playIcon}
              />
            </TouchableOpacity>

          </View>
         </View>
        </View>
        
        </TouchableWithoutFeedback>
      </Modal>
       
    </SafeAreaView>
  );
};

export default PlayerModel;

const styles = StyleSheet.create({
  playerContent: {
    position: "absolute",
    bottom: 1,
    backgroundColor: "#eee",
    padding: 20,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2
  },
  albArt: {
    backgroundColor: "#333",
    padding: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
    alignContent: "center",
    alignSelf: "center",
  },
  musiCtrls: {
      justifyContent: "space-around",
      flexDirection: "row",
      marginVertical: 20,
      paddingVertical: 10,
      borderWidth: 1,
      borderRadius: 5,
      alignItems: "center"
  },
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  }
});
