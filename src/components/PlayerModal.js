import React from "react";
import { View, Text, Modal, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 

const PlayerModel = ({ visible }) => {
    
  return (
    <SafeAreaView>
      <Modal transparent={true} visible={visible}>
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
                name={"play-circle-o"}
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
  }
});
